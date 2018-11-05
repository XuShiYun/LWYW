//-----------------------------返回顶部--------------------------------------
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


// <--------------------------------轮播------------------------------------>
		$(function(){
			var index = 0;
			var imgLength = $(".imgBox img").length;
			console.log(imgLength)

			//给小圆点添加时件
			$(".circles span").mouseenter(function(){
				index=$(this).index();
				changeImg()
			})



			function changeImg(){
				$(".imgBox img").eq(index).css({
					"opacity":"1",
					"transition":"0.5s"
				}).siblings().css({
					"opacity":"0",
					"transition":"0.5s"
				})
				$(".circles span").eq(index).addClass("btn").siblings().
				removeClass("btn");
			}
		})