
var APICONSTANT = {
    "myProfiles":"db/my_profiles.json",
    "myProjects":"db/my_projects.json",
    "myOpus":"db/my_opus.json"
}

myBlog.factory("API",["$http",function($http){
    return {
        "getMyProfiles":function(){
            return $http({
                "url":APICONSTANT["myProfiles"],
                "method":"GET"
            })
        },
        "getMyProjects":function(){
            return $http({
                "url":APICONSTANT["myProjects"],
                "method":"GET"
            })
        },
        "getMyOpus":function(){
            return $http({
                "url":APICONSTANT["myOpus"],
                "method":"GET"
            })
        }
    }
}])
