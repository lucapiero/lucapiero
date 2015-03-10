"use strict";

angular.module('Lucapiero.models.products', [

])
  .service('products', function ProductsService($http, $q) {
    var URLS = {
        FETCH: 'js/data/products.json'
      },
      products,
      productsModel = this;

    function extract(result) {
      return result.data;
    }

    function cacheProducts(result) {
      products = extract(result);
      return products;
    }

    productsModel.getProducts = function () {
      return (products) ? $q.when(products) : $http.get(URLS.FETCH).then(cacheProducts);
    };

    function findProduct(broductId) {
      return _.find(products, function (product) {
        return product.id === parseInt(productId, 10);
      })
    }

    productsModel.getproductById = function (productId) {
      var deferred = $q.defer();
      if (products) {
        deferred.resolve(findProduct(productId))
      } else {
        productsModel.getProducts().then(function () {
          deferred.resolve(findProduct(productId))
        })
      }
      return deferred.promise;
    };

    productsModel.createProduct = function (product) {
      product.id = products.length;
      products.push(product);
    };

    productsModel.updateProduct = function (product) {
      var index = _.findIndex(products, function (b) {
        return b.id == product.id
      });
      products[index] = product;
    };

    productsModel.deleteProduct = function (product) {
      _.remove(products, function (b) {
        return b.id == product.id;
      });
    };

    productsModel.getProductsForCategory = function (category) {
      _.filter(products, function (b) {
        return b.category == category;
      });
    };
  })
;