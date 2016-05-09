
myBlog
    .controller('mainController',['$scope','$rootScope','navSelect',function($scope,$rootScope,navSelect){
        $scope.navlist = BlogConfig["nav"]
        $scope.select = navSelect.getSelect();
    }])
    .controller('indexController',["$scope","$window","$interval",function($scope,$window,$interval){
        //$window.location.href = "https://github.com/lixiaoxf"
        $scope.time = 5;
        $scope.cue = $scope.time+"秒后进入我的github";
        var timer = $interval(function(){
            if($scope.time <=0){
                $interval.cancel(timer);
                $window.location.href = "https://github.com/lixiaoxf";
                $scope.cue = "跳转中..."
                return;
            }
            $scope.time--;
            $scope.cue = $scope.time+"秒后进入我的github"
        },1000)
        $scope.$on("$destroy",function(){
            $interval.cancel(timer);
        })
    }])
    .controller('profileController',["$scope","API",function($scope,API){
        API.getMyProfiles().success(function(data){
            if(data["code"] == 0){
                $scope.me = data["data"];
            }
        })
        API.getMyProjects().success(function(data){
            if(data["code"]==0){
                $scope.myProjects = data["data"]
            }
        })
        API.getMyOpus().success(function(data){
            if(data["code"]==0){
                $scope.myOpuses = data["data"]
            }
        })
    }])
    .controller('searchController',[function(){

    }])

