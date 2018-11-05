//渲染
		$(function(){
			$.ajax({
				url:"../json/date.json",
				type:"get",
				success:function(res){
					var val = res.market[0].sorts;
					var html = "";
					for (var i = 0; i < val.length; i++) {
						html+=`<li class="list-tup1"><a href=""><img src="${val[i].img}"></a><p class="list-tup1-1"><a href="">${val[i].title}</a></p><p class="list-tup1-2">${val[i].price}</p><p class="list-tup2"><a href="" class="list-tup2-1">${val[i].dinzhi}</a><span class="fr">${val[i].pj}</span></p></li>`;
					}
					$(".list-tup").append(html)
				}
			})
		})

	//flex
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