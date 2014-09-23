'use strict';

angular.module('rmsApp').factory('sessionStore', ['$rootScope',
    function($rootScope) {
    var session = {};

    session.getCurrentUser = function(){
        return {
            id: 1,
            name: 'Admin Lin',
            company: {
                id: 1,
                name: ''
            }
        };
    };

    session.logUser = function(){

    };

    return session;
}]);

