'use strict';

/**
 * @ngdoc function
 * @name rmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rmsApp
 */
angular.module('rmsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
