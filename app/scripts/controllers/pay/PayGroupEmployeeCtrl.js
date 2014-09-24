'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:PayGroupEmployeeCtrl
 * @description
 * # PayGroupEmployeeCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp').controller('PayGroupEmployeeCtrl', [
    '$scope', '$routeParams', 'payGroupService', 'alertService', 'sessionStore',
    function($scope, $routeParams, payGroupService, alertService, sessionStore) {

    var payGroupId = $routeParams.id;

}]);
