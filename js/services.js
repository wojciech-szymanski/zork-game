zorkGame.factory('DataSource', function() {
    return {
        default_answer: 'I am sorry, I do not understand!',
        data: {
            "room_id": 12345,
            "name": "Castle foreyard",
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

            if (actions.hasOwnProperty('answer')) {
                return actions.answer.replace(/%s/, command.splice(1).join(' '));
            }

            return this.default_answer;
        }
    }
});