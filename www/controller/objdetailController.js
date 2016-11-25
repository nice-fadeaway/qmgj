app.controller("objdetailController",['$scope','$http','$stateParams',function($scope,$http,$stateParams){
         $scope.showIndex = 0;
         $scope.myFn = function(index){
            $scope.showIndex = index;
         }

        $http({
         url:'json/objshow'+$stateParams.id+'.json',
         // method:'get'
        }).success(function(res){
         $scope.shows = res.list;
         console.log($scope.shows);
        })
}]);