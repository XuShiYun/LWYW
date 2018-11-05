//------------------------------返回顶部--------------------------------------
var oFlex = document.querySelector(".flex");
		var height = 0;
		window.onscroll=function(){
			height = document.documentElement.scrollTop | document.bodyscrolltop;
			if (height >= 150) {
					oFlex.style.opacity = "1";
					oFlex.style.transition="0.8s";
					
				}
				else{
					oFlex.style.opacity = "0";
					oFlex.style.transition = "0.8s";
				}
		}


//--------------------------------跳转图片-------------------------------------------------
		$(function(){
			var index = 0;
		})
		$(".xiao").mouseenter(function(){
			index=$(this).index();
			changeImg()
		})
		function changeImg(){
			$(".imgBox").eq(index).css({
				"opacity":"1"
			}).siblings().css({
				"opacity":"0"
			})
			$(".xiao").eq(index).addClass("border").siblings().removeClass("border");
		}

// -----------------------评价-------------------------------------
		$(function(){
			$(window).scroll(function(){
				var height = document.documentElement.scrollTop ||
				document.bodyscrolltop;
				if (height>=882) {
					$(".detail").css({
						"position":"fixed",
						"top":"0",
						"background":"#fff"
					})
					$(".xs").css({
						"display":"block"
					})
				}
				else{
					$(".detail").css({
						"position":"",
						"top":"549px"
					})
				}
				
			})
		})