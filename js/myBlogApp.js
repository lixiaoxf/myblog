var myBlog = angular.module("myBlog",["ngRoute"]);

myBlog.config(["$httpProvider",function($httpProvider){
    $httpProvider.interceptors.push("httpInterceptor")
}])

//http À¹½ØÆ÷
myBlog.factory("httpInterceptor",["$q","$injector",function($q,$injector){
    var httpInterceptor = {
        "responseError":function(response){
            if(response.status == 401){

            }else if(response.status == 200){
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
}])