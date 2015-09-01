zorkGame.factory('DataSource', function() {
    return {
        data: {
            "room_id": 12345,
            "name": "Castle foreyard",
            "actions": {
                "look": {
                    "left": {
                        "answer": "It looks like there is an entrance to the stables on the left."
                    },
                    "at": {
                        "myself": {
                            "answer": "Looking good today!"
                        }
                    }
                }
            }
        },
        answer: function(command) {
            var actions = this.data.actions,
                i = 0;

            command = command.split(' ');
            while (actions.hasOwnProperty(command[i])) {
                actions = actions[command[i]];
                i++;
            }

            return actions.hasOwnProperty('answer') ? actions.answer : 'I am sorry, I do not understand!';
        }
    }
});