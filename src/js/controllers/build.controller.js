angular.module('cross')
    .controller('build.controller', ['$scope', 'build.service',
        function($scope, buildService) {

            $scope.pieData = [
                { value: 50, color: "#F7464A" },
                { value: 90, color: "#E2EAE9" },
                { value: 75, color: "#D4CCC5" },
                { value: 30, color: "#949FB1"}
            ];

            buildService.getBuilds(function(builds) {
                $scope.builds = builds;
            })

            $scope.toggleDetail = function (build) {
                build.active = (build.active) ? false : true;
            }



        }])