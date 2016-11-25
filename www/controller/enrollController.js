app.controller('enrollController',['$scope','$interval',function($scope,$interval){
   $scope.radicAct={show:false};
   $scope.showIndex = 0;
   // 定义一个对象
   $scope.vm = {
      data:'获取验证码',
      kedian:false,
      time:60
   };
   $scope.change = function(){
      $scope.vm.kedian = true;
      $interval(function(){
         $scope.vm.data = '已发送,'+$scope.vm.time+'秒后重发';
         $scope.vm.time--;
         if($scope.vm.time == 0){
            $scope.vm.kedian = false;
            $scope.vm.data='重新获取';
            $scope.vm.time = 60;
         }
      },1000,$scope.vm.time);
   };
   $scope.toggleBd=function(index){
      $scope.radicAct.show=!$scope.radicAct.show;
      $scope.showIndex = index;
   };

}]);