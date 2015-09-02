zorkGame
    .factory('DataSource', ['$http', function($http) {
        return {
            default_answer: 'I am sorry, I do not understand!',
            current_room: "ROOM_1",
            data: {
                "ROOM_1": {
                    "name": "Castle hall",
                    "actions": {
                        "look": {
                            "at": {
                                "room": {
                                    "answer": "It looks like there is some large wardrobe in the corner.",
                                },
                                "myself": {
                                    "answer": "Looking good today!"
                                }
                            },
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
            },
            getAnswer: function(command) {
                var actions = this.data[this.current_room].actions,
                    i = 0;

                command = command.split(' ');
                while (actions.hasOwnProperty(command[i])) {
                    actions = actions[command[i]];
                    i++;
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