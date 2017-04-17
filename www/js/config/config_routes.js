"use strict";

(function() {
this.app.config(function($stateProvider, $urlRouterProvider, $httpProvider,$ionicConfigProvider) {
$stateProvider
.state("/", {
			cache: false,
			url: "/",
			templateUrl: "templates/bienvenido.html",
			controller: "bienvenido_controller"
		})


.state("login", {
			cache: false,
			url: "/login",
			templateUrl: "templates/login.html",
			controller: "login_controller"
		})

$urlRouterProvider.otherwise("/");

});
}).call(this);
