'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:PayGroupAttributesCtrl
 * @description
 * # PayGroupAttributesCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp').controller('PayGroupAttributesCtrl', [
    '$scope', '$routeParams', 'payGroupService', 'alertService', 'sessionStore',
    function($scope, $routeParams, payGroupService, alertService, sessionStore) {

    var payGroupId = $routeParams.id;

}]);
