var main_data = {
    "ROOM_1": {
        "name": "Castle hall",
        "actions": {
            "look": {
                "room": {
                    "answer": "It looks like there is some large wardrobe in the corner.",
                },
                "myself": {
                    "answer": "Looking good!"
                }
            },
            "say": {
                "answer": "%s"
            },
            "open": {
                "wardrobe": {
                    "answer": "Entering Narnia...",
                    "next": "ROOM_2"
                }
            }
        }
    },
    "ROOM_2": {
        "name": "Wardrobe",
        "actions": {
            "run": {
                "answer": "Probably a good idea",
                "next": "ROOM_1"
            }
        }
    }
};
/* Controllers */
var zorkGame = angular.module('zorkGame', []);

zorkGame
    .controller('mainCtrl', ['$scope', 'DataSource',
        function($scope, DataSource) {
            $scope.commands = [];
            $scope.command = '';
        }
    ]);
zorkGame
    .directive('runCmd', ['DataSource', function(DataSource) {
        return {
            link: function(scope, elem, attrs) {
                elem.bind('keypress', function(e) {
                    if (e.which === 13 && scope.command) {
                        scope.commands.push({
                            'command': scope.command,
                            'answer': DataSource.getAnswer(scope.command)
                        });
                        scope.command = '';
                    }
                })
            }
        }
    }])
    .directive('printCmdAnswer', function() {
        return {
            template: '<p>&gt;&nbsp;{{cmd.command}}</p><p>{{cmd.answer}}</p>'
        }
    });
zorkGame
    .factory('DataSource', ['$http', function($http) {
        return {
            default_answer: 'I am sorry, I do not understand!',
            current_room: "ROOM_1",
            //TODO: replace the main_data with HTTP request when server side ready
            data: main_data,
            getAnswer: function(command) {
                var actions = this.data[this.current_room].actions,
                    i = 0;

                command = command.split(' ');
                action = command.shift();

                if (actions.hasOwnProperty(action)) {
                    for (var i = 0; i < command.length; i++) {
                        if (actions[action].hasOwnProperty(command[i])) {
                            actions = actions[action][command[i]];
                        }
                    }
                }

                if (actions.hasOwnProperty('next')) {
                    this.current_room = actions.next;
                }

                if (actions.hasOwnProperty('answer')) {
                    return actions.answer.replace(/%s/, command.splice(1).join(' '));
                }

                return this.default_answer;
            }
        }
    }]);