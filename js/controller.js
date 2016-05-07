
myBlog
    .controller('indexController',["$scope",function($scope){
        $scope.curPos = "index";
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

