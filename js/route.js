myBlog.config(["$routeProvider",function($routeProvider){
    $routeProvider.when('/github',{
            "templateUrl":"view/github.html",
            "controller":"githubController"
        })
        .when('/profile',{
            "templateUrl":"view/profile.html",
            "controller":"profileController"
        })
        .otherwise({
            redirectTo: '/profile'
        });
}])
