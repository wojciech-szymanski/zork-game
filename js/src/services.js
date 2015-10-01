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