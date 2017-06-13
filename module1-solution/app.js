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
        $scope.lunchMsg = 'Please enter data first';
        setRed();
      } else if (totalItems > 0 && totalItems <= 3){
        $scope.lunchMsg = 'Enjoy!';
        setGreen();     
      } else {
        $scope.lunchMsg = 'Too much!';
        setGreen();
      }
    };

    function calculateList(str) {
      var arr = str.split(',');

      for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 0)
          arr.splice(i, 1);
      }

      return arr.length;
    }

    function setRed(){
      $scope.color = 'red';    
    }

    function setGreen(){
      $scope.color = 'green';     
    }  
  }
})();
