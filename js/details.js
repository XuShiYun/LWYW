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