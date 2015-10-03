(function () { 'use strict';

    var lucapiero = angular.module('lucapiero', ['ui.router']);

    lucapiero.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                // abstract: true,
                templateUrl: 'js/views/products.template.html',
                controller: 'RootController',
                controllerAs:"vm"
            });

            $urlRouterProvider.otherwise('/'); 
    }]);



    lucapiero.controller('RootController', RootController);

    RootController.$inject = ['$scope', '$http', '$q'];

    function RootController($scope, $http, $q) {
        var vm = this;

        vm.dat = $http.get('js/data/data.json', {'cache': true});
        vm.cat = $http.get('js/data/categories.json', {'cache': true});

        $q.all([vm.cat, vm.dat]).then(
            function(data){
                var product = {};
                var products = [];

                vm.products = data[1].data;
                vm.categories = data[0].data;
                console.log(vm.products);
                console.log(vm.categories);
            }
        );
    };
})();