'use strict';

/**
 * @ngdoc overview
 * @name rmsApp
 * @description
 * # rmsApp
 *
 * Main module of the application.
 */
angular.module('rmsApp', ['ngRoute','restangular','ngResource','ui.bootstrap','placeholderShim']);

angular.module('rmsApp').config(['$routeProvider','RestangularProvider', function($routeProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('/');

    RestangularProvider.setResponseExtractor(function(response, operation, what, url) {

    });

    RestangularProvider.setDefaultHttpFields({cache: false});

    $routeProvider.when('/paygroup', {
        templateUrl: 'views/pay/paygroups.html',
        controller: 'PayGroupsCtrl'
    }).when('/paygroup/:id/items', {
        templateUrl: 'views/pay/paygroup-items.html',
        controller: 'PayGroupItemsCtrl'
    }).when('/paygroup/:id/items/edit', {
        templateUrl: 'views/pay/paygroup-items-edit.html',
        controller: 'PayGroupItemsCtrl'
    }).when('/paygroup/:id/items/months', {
        templateUrl: 'views/pay/paygroup-items-months.html',
        controller: 'PayGroupItemMonthsCtrl'
    }).when('/paygroup/:id/items/formulas', {
        templateUrl: 'views/pay/paygroup-items-formulas.html',
        controller: 'PayGroupItemFormulasCtrl'
    }).when('/paygroup/:id/items/taxtypes', {
        templateUrl: 'views/pay/paygroup-items-taxtypes.html',
        controller: 'PayGroupItemTaxTypesCtrl'
    }).when('/paygroup/:id/employee', {
        templateUrl: 'views/pay/paygroup-employee.html',
        controller: 'PayGroupEmployeeCtrl'
    }).when('/paygroup/:id/employee/edit', {
        templateUrl: 'views/pay/paygroup-employee-edit.html',
        controller: 'PayGroupEmployeeCtrl'
    }).when('/paygroup/:id/attributes', {
        templateUrl: 'views/pay/paygroup-attributes.html',
        controller: 'PayGroupAttributesCtrl'
    }).otherwise({
        redirectTo: '/paygroup'
    });
}]);

