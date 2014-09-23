'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:PayGroupCtrl
 * @description
 * # PayGroupCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp').controller('PayGroupCtrl', ['$scope', 'alertService', 'payGroup', 'sessionStore',
    function($scope, alertService, payGroup, sessionStore) {

    var companyId = sessionStore.getCurrentUser().company.id;
    $scope.groups = payGroup.findAllByCompanyId(companyId);

}]);
