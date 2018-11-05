//-----------------------------------放大镜--------------------------------
		var oMen=document.querySelector(".men");
		var oLeft = document.querySelectorAll(".img-box");
		var oRight = document.querySelector(".active1-1-center");
		var oPic=document.querySelector(".pic");
		var oGray = document.querySelector(".gray");
		var oRigimg = document.querySelector(".rigImg");
		var oRig=document.querySelector(".rig");
		oMen.onmouseenter = function(){
			oGray.style.display = "block";
			oRig.style.display="block";
		}
		oRight.onmouseout = function(){
			oGray.style.display = "none";
			oRig.style.display="none";
		 }
		// 添加鼠标移动事件
		oMen.onmousemove = function( evt ){
			var e = evt || window.event;
			// 求灰框的坐标
			var x = e.offsetX - (oGray.offsetWidth)/2;
			var y = e.offsetY - (oGray.offsetHeight)/2; 
			// 检测左右边界
			if ( x < 0 ) {
				x = 0;
			}
			else if( x > oMen.offsetWidth - oGray.offsetWidth){
				x = oMen.offsetWidth - oGray.offsetWidth;
			}
			// 检测上下边界
			if ( y < 0 ) {
				y = 0;
			}
			else if( y > oMen.offsetHeight - oGray.offsetHeight){
				y = oMen.offsetHeight - oGray.offsetHeight;
			}
			oGray.style.left = x + "px";
			oGray.style.top = y + "px";


			// 计算移动比例
			var blX = -x / (oMen.offsetWidth - oGray.offsetWidth);
			var blY = -y / (oMen.offsetHeight - oGray.offsetHeight);
			// 求大图坐标
			var bigY = blY * ( oRigimg.offsetHeight - oRig.offsetHeight );
			var bigX = blX * ( oRigimg.offsetWidth - oRig.offsetWidth );
			oRigimg.style.left = bigX + "px";
			oRigimg.style.top = bigY + "px";
		}
			for( let i = 0 ; i < oLeft.length ; i++) {
				oLeft[i].onmouseenter = function(){
					console.log(i);
					var src1 = this.children[0].getAttribute("date-src");
					console.log(src1);
					oPic.setAttribute("src",src1);
					oRigimg.setAttribute("src",src1);
				}
			} 
//-----------------------------返回顶部---------------------------
			$(function(){
			$(window).scroll(function(){
				var height = document.documentElement.scrollTop || document.bodyscrolltop;
				if (height>=822) {
					$(".detail").css({
						"position":"fixed",
						"top":"0",
						"background":"#fff"
					})
					$(".xs").css({
						"display":"block"
					})
				}else{
					$(".detail").css({
						"position":"",
						"top":"549px"
					})
				}
			})
		})