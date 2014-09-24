'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:PayGroupsCtrl
 * @description
 * # PayGroupsCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp').controller('PayGroupsCtrl', ['$scope', 'alertService', 'payGroupService', 'sessionStore',
    function($scope, alertService, payGroupService, sessionStore) {

    var companyId = sessionStore.getCurrentUser().company.id;
    $scope.groups = payGroupService.findAllByCompanyId(companyId);

}]);
