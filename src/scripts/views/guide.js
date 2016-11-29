var guideTpl=require("../tpls/guide.string");

SPA.defineView("guide",{ 
	html:guideTpl,
	plugins:["delegated"],//注入delegated插件,用于绑定事件
	bindEvents:{  //视图事件
		show:function(){
			//引导页
			var mySwiper=new Swiper("#module")
		}
	},
	bindActions:{ //绑定的DOM事件
        "go.index":function(){
           // SPA.open("viewName");  切换视图  viewName是视图名称
           SPA.open("index");
        }
	}
})