'use strict';

/*
=============================================================================
CONTROLLER DEFINITION
=============================================================================
*/
(function() {
  this.app.controller('bienvenido_controller', ["$scope","$state",
  function($scope,$state) {
    $scope.gotologin = function(){
      $state.go("login");
    }
  }]);
}).call(this);
//AL hacer click que vaya a login
