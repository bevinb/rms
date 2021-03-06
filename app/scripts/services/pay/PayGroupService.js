'use strict';

angular.module('rmsApp').service('payGroupService', ['Restangular',
    function(Restangular) {
    var RESOURCE_NAME = 'paygroup';

    var mockdata = [{
        id: 1, name: '总公司', itemsCount: 70, employeeCount: 220
    }, {
        id: 1, name: '上海分公司', itemsCount: 50, employeeCount: 89
    }, {
        name: '北京分公司', itemsCount: 65, employeeCount: 110
    }];

    this.getById = function(id){
        return Restangular.one(RESOURCE_NAME).get();
    };

    this.findAllByCompanyId = function(companyId){
        //for test just return mockdata
        return mockdata;

        return Restangular.all(RESOURCE_NAME).list();
    };

    this.save = function(obj){
        if(obj.id) {
            Restangular.one(RESOURCE_NAME).post(obj);
        } else {
            Restangular.one(RESOURCE_NAME).put(obj);
        }
    };


}]);

