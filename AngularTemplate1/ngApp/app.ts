namespace AngularTemplate1 {

    angular.module("AngularTemplate1", ['ngRoute'])
        .config(function($routeProvider) {
            //$routeProvider.when('/', {
            // templateUrl: '/path/to/view',
            // controller: AngularTemplate1.Controllers.ControllerClass,
            // controllerAs: 'views variable name for controller'
            //});
            $routeProvider.when('/', { template: 'Hello World!' });
        });
}