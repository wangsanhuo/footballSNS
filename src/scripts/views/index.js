//引入模板
var indexTpl=require("../tpls/index.string");
 
SPA.defineView("index",{
	html:indexTpl,    //渲染html数据
	plugins:["delegated"],
	modules:[{//配置子视图
        name:"content",    //对子视图的引用
        views:["guide","home","search","my"],  //所有的视图名称
        defaultTag:"home",   //默认视图
        container:".m-wrapper"    //渲染到主视图的容器
	}], 
	bindEvents:{
		beforeShow:function(){//视图加载前触发的回调
            //console.log("before");
		}, 
		show:function(){//视图加载后触发的回调
       
		}
	},
	bindActions:{
        "switch.tabs":function(e,data){
        	var view=data.tag;
        	//装载子视图
        	this.modules.content.launch(view);
        }
	}
})

