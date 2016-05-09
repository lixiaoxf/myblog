myBlog.service("navSelect",[function(){
    var curSelect = ""
    return {
        setSelect : function(select){
            this.curSelect = select.replace(/\//g,"")
        },
        getSelect : function(){
            return this.curSelect
        }
    }
}])

