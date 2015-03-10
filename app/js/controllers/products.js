"use strict";

angular.module('products', [
  'Lucapiero.models.categories',
  'Lucapiero.models.products'
])

  .config(function ($stateProvider) {
    $stateProvider
      .state('Lucapiero.categories.products', {
        url: '/',
        views: {
          'products@': {
            controller: 'ProductsCtrl',
            templateUrl: 'js/views/products.tmpl.html'
          }
        }
      })
    ;
  })

  .controller('ProductsCtrl', function ProductsCtrl($scope, $stateParams, products, categories) {
    categories.setCurrentCategory();

    if ($stateParams.category) {
      categories.getCategoryByName($stateParams.category).then(function (category) {
        categories.setCurrentCategory(category);
      })
    }

    products.getproducts()
      .then(function (result) {
        $scope.products = result;
      });

    $scope.getCurrentCategory = categories.getCurrentCategory;
    $scope.getCurrentCategoryName = categories.getCurrentCategoryName;
    $scope.isSelectedBookmark = function (bookmarkId) {
      return $stateParams.bookmarkId == bookmarkId;
    };

    $scope.deleteBookmark = products.deleteBookmark;
  })
;

