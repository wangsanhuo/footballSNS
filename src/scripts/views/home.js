 var homeTpl=require("../tpls/home.string");
 var util=require("../utils/commonUtils");
 
 SPA.defineView("home",{
 	html:homeTpl,
 	plugins:["delegated",{
 		name:"avalon",
 		options:function(vm){
 			vm.msg="holle avalon";
 			console.log(vm.msg);
 		}
 	}],
 	bindEvents:{  //视图事件
		show:function(){
			var mainSwiper=new Swiper("#swiper-container",{
				onSlideChangeStart:function(swiper){
					var $li=$("#title li").eq(swiper.activeIndex);
					util.setFocus($li);
				}
			});
			var mainSwiper=new Swiper("#swiper-main",{
				onSlideChangeStart:function(swiper){
					var $li=$("#nav li").eq(swiper.activeIndex);
					util.setFocus($li);
				}
			});
		}
	}
 })