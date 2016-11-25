app.controller('perinfoController',['$scope',function($scope){
  $scope.filmClassName = [
  "微电影","电视","电影","电视剧"
  ];
  $scope.filmClassName2 = [
  "音乐剧","话剧","书画","戏剧"
  ];
  $scope.filmClassName3 = [
  "相声","歌剧"
  ];
  $scope.showIndex = 0;
  $scope.myFn = function(index){
    $scope.showIndex = index;
  }
  // 全部默认设置未选中的状态
  $scope.myshow = [];
  for(var i = 0;i < $scope.filmClassName.length;i++){
    $scope.myshow[i] = false;
  }
  // 点击时取反
  $scope.radioBoxFn = function(index){
    $scope.myshow[index] = !$scope.myshow[index];
  }
  $scope.myshow[0] = true;
  


  //全部默认设置未选中状态
  $scope.myshow2 = [];
  for (var i = 0;i < $scope.filmClassName2.length;i++){
    $scope.myshow2[i] = false;
  }
  $scope.radioBoxFn2 =  function(index){
    $scope.myshow2[index] = !$scope.myshow2[index];
  }

  $scope.myshow3 = [];
  for(var i = 0;i < $scope.filmClassName3.length;i++){
    $scope.myshow3[i] = false;
  }
  $scope.radioBoxFn3 = function(index){
    $scope.myshow3[index] = !$scope.myshow3[index];
  }
  $scope.myshow3[1] = true;
    
}]);