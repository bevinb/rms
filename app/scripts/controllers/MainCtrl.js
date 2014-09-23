'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp').controller('MainCtrl', ['$scope', 'sessionStore',
    function($scope, sessionStore) {

    $scope.user = sessionStore.getCurrentUser();

}]);
