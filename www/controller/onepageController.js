app.controller('onepageController',['$http','$scope','$interval',function($http,$scope,$interval){
   $scope.showindex = 0;
   $scope.titindex = 6;
   $scope.myFilterModel = {"status":"6"};

$http({
   url:'json/banner.json'
}).success(function(res){
   $scope.orderArr = res.list;
   $scope.cent = res.one;
   $scope.btn = res.text;
   $scope.titlist = res.rightlist;
});

$scope.checkContent = function(i){
  $scope.myFilterModel.status = [0,1,2,3,4,5,6,7,8,9][i];
  $scope.titindex = i;
}

  var init = $interval(function(){
     if($scope.showindex > 1){
      $scope.showindex = 0;
      return;
     }
     $scope.showindex++;
   },1500);

  $scope.showCurrentFn = function(i){
    $scope.showindex = i;
    $interval.cancel(init);
    init = $interval(function(){
    if($scope.showindex > 1){
      $scope.showindex = 0;
      return;
    }
    $scope.showindex++;
    },1500);
  }

}]);