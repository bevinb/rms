'use strict';

angular.module('rmsApp').factory('alertService', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
    var alertService = {};
    var timer = null;

    $rootScope.alerts = [];

    alertService.add = function(obj) {
      $rootScope.alerts.push({
    	  'type': obj.type, 
    	  'msg': obj.msg,
    	  'close': function(){
    		  alertService.closeAlert(this);
    	  }
       });
      timer = $timeout(function() {
    	  $rootScope.alerts.splice(0, 1);
	  }, 5000);
    };

    alertService.closeAlert = function(o) {
      $rootScope.alerts.splice($rootScope.alerts.indexOf(o), 1);
      if(timer){
    	  $timeout.cancel(timer);
      }
    };

    return alertService;
}]);

