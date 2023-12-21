(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";

    //Return message based on number of items
    $scope.checkItems = function() {
      var items = $scope.items;
      if (items.length == 0) {
        $scope.message = "Please enter data first";
      } 
      else {
        var numItems = items.split(',').length;
        if (numItems <= 3) {
          $scope.message = "Enjoy!";
        } 
        else {
          $scope.message = "Too much!";
        }
      }
    }
  }
})();