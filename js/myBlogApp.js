var myBlog = angular.module("myBlog",["ngRoute"]);

myBlog.config(["$httpProvider",function($httpProvider){
    $httpProvider.interceptors.push("httpInterceptor")
}]).factory("httpInterceptor",["$q","$injector",function($q,$injector){
    var httpInterceptor = {
        "responseError":function(response){
            if(response.status == 401){

            }else if(response.status == 404){
                alert(404)
            }
            return $q.reject(response)
        },
        "response":function(response){
            return response
        },
        "request":function(config){
            return config
        },
        "requestError":function(config){
            return $q.reject(config)
        }
    }
    return httpInterceptor;
}]).run(["$rootScope","navSelect",function($rootScope,navSelect){
    $rootScope.$on("$routeChangeSuccess",function(ev,next,current){
        navSelect.setSelect(next.$$route.originalPath);
        $rootScope.navselect = navSelect.getSelect();
    })

}])