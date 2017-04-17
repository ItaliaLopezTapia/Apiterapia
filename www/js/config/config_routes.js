"use strict";

(function() {
this.app.config(function($stateProvider, $urlRouterProvider, $httpProvider,$ionicConfigProvider) {
$stateProvider
.state("/", {
			cache: false,
			url: "/",
			templateUrl: "templates/bienvenido.html",
			controller: "bienvenidoController"
		})
    $urlRouterProvider.otherwise("/");
});
}).call(this);
