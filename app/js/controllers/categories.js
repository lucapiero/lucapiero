"use strict";

angular.module('categories', [
  'Lucapiero.models.categories'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('Lucapiero.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesCtrl',
            templateUrl: 'js/views/categories.tmpl.html'
          },
          'products@': {
            controller: 'ProductsCtrl',
            templateUrl: 'js/views/products.tmpl.html'
          }
        }
      });
  })

  .controller('CategoriesCtrl', function CategoriesCtrl($scope, categories) {
    $scope.getCurrentCategoryName = categories.getCurrentCategoryName;

    categories.getCategories()
      .then(function (result) {
        $scope.categories = result;
      });

    $scope.isCurrentCategory = function (category) {
      return category.name === $scope.getCurrentCategoryName();
    }
  })
;