myBlog.config(["$routeProvider",function($routeProvider){
    $routeProvider.when('/index',{
            "templateUrl":"view/index.html",
            "controller":"indexController"
        })
        .when('/profile',{
            "templateUrl":"view/profile.html",
            "controller":"profileController"
        })
        .otherwise({
            redirectTo: '/search'
        });
}])
