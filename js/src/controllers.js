/* Controllers */
var zorkGame = angular.module('zorkGame', []);

zorkGame
    .controller('mainCtrl', ['$scope', 'DataSource',
        function($scope, DataSource) {
            $scope.commands = [];
            $scope.command = '';
        }
    ]);