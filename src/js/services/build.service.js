angular.module('cross')

    .factory('build.service', [ function() {

        var service = {};

        service.getBuilds = function (callback) {

            callback([
                {"changelist":"432464", "owner":"JTuck", "dateStarted":"4 / 17 / 2014", "timeStarted": "9:42 am", "build":"pending","unitTest":"empty","functionalTest":"empty","status":"pending","statusCode":0},
                {"changelist":"432463", "owner":"Dora",  "dateStarted": "4 / 17 / 2014", "timeStarted": "7:40 am", "build":"running","unitTest":"empty","functionalTest":"empty","status":"running","statusCode":1},
                {"changelist":"432462", "owner":"Samy",  "dateStarted": "4 / 17 / 2014", "timeStarted": "6:42 am", "build":"success","unitTest":"success","functionalTest":"success","status":"passed","statusCode":2},
                {"changelist":"432461", "owner":"JTuck", "dateStarted":"4 / 17 / 2014", "timeStarted": "4:28 am", "build":"failed","unitTest":"empty","functionalTest":"empty","status":"failed","statusCode":3},
                {"changelist":"432460", "owner":"Samy",  "dateStarted": "4 / 17 / 2014", "timeStarted": "3:14 am", "build":"success","unitTest":"success","functionalTest":"success","status":"passed","statusCode":2},
                {"changelist":"432459", "owner":"Dora",  "dateStarted": "4 / 17 / 2014", "timeStarted": "1:14 am", "build":"failed","unitTest":"failed","functionalTest":"empty","status":"failed","statusCode":3}
            ])

        }

        return service;

    }]);