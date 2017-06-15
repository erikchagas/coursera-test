(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchList = '';
    $scope.lunchMsg = '';
    $scope.color = 'black';

    $scope.checkLunch = function () {
      var totalItems = calculateList($scope.lunchList);
      if (totalItems === 0){
        $scope.color = 'red';
        $scope.lunchMsg = 'Please enter data first';
      } else {
        $scope.color = 'green';
        if (totalItems > 0 && totalItems <= 3){
          $scope.lunchMsg = 'Enjoy!';    
        } else {
          $scope.lunchMsg = 'Too much!';
        } 
      }
    };

    function calculateList(str) {
      var arr = str.split(',');
      var retArr = [];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i].trim().length > 0)
          retArr.push(arr[i]);
      }

      return retArr.length;
    }
  }
})();
