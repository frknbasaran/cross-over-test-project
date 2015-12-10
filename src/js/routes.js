'use strict';

angular.module('cross')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            // For unmatched routes
            $urlRouterProvider.otherwise('/builds');

            // Application routes
            $stateProvider
                .state('builds', {
                    url: '/builds',
                    views: {
                        "content": {
                            templateUrl: "templates/builds.html",
                            controller: "build.controller"
                        }
                    }
                })

        }
    ]);