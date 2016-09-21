(function(){
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){


  $scope.check = function(){
      if($scope.lunch){
        var aux = $scope.lunch.split(',');
        $scope.stateOfBeing = "green";
        $scope.message = message(aux.length);
      }else{
        $scope.stateOfBeing = "red";
        $scope.message = "Please enter data first";
      }
  };

  function message(piecesOfLunch){
    if(piecesOfLunch <= 3) return "Enjoy!";
    else if(piecesOfLunch > 3)return "Too much!";
  };
};

})();
