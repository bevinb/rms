'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:PayGroupItemsCtrl
 * @description
 * # PayGroupItemsCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp').controller('PayGroupItemsCtrl', [
    '$scope', '$routeParams', 'payGroupService', 'alertService', 'sessionStore',
    function($scope, $routeParams, payGroupService, alertService, sessionStore) {

    var payGroupId = $routeParams.id;

}]);
