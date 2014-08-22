'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp', ['ui.bootstrap'])
  .controller('MainCtrl', function ($scope, $modal) {

        //$scope.openModal = function(){
            alert(222)
            var modalInstance = $modal.open({
                templateUrl: 'views/testModal.html'
            });
        //}
  });
