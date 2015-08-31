zorkGame
    .directive('runCmd', ['DataSource', function(DataSource) {
        return {
            link: function(scope, elem, attrs) {
                elem.bind('keypress', function(e) {
                    if (e.which === 13 && scope.command) {
                        scope.commands.push({
                            'command': scope.command,
                            'answer': DataSource.answer(scope.command)
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