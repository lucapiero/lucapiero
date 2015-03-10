"use strict";

angular.module('Lucapiero.models.categories', [

])
  .service('categories', function CategoriesService($http, $q) {
    var URLS = {
        FETCH: 'js/data/categories.json'
      },
      categories,
      currentCategory,
      categoriesModel = this;

    function extract(result) {
      return result.data;
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    categoriesModel.getCategories = function () {
      return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    };

    categoriesModel.getCurrentCategory = function () {
      return currentCategory;
    };

    categoriesModel.getCurrentCategoryName = function () {
      return currentCategory ? currentCategory.name : '';
    };

    categoriesModel.setCurrentCategory = function (category) {
      currentCategory = category;
      return currentCategory;
    };

  })
;
