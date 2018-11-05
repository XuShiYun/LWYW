	// 正则
	var oPe = document.querySelector(".login-input1-2-input");
	var oPk = document.querySelectorAll(".qk"); 
	var oMima = document.querySelector(".password")
		oPe.onblur = function(){
			var val = oPe.value;
			var regPe = /^1[3-9]\d{9}$/g;
			if (regPe.test(val)) {
				oPk[0].style.display = "block";
				oPk[0].style.color = "green";
				oPk[0].innerHTML = "手机号合法";
			}
			else{
				oPk[0].style.display = "block";
				oPk[0].innerHTML = "手机号不合法";
			}
		}
		oMima.onblur = function(){
			var val = oMima.value;
			var regoMima =  /^[A-Za-z0-9_-]{6,18}$/g;
			if (regoMima.test(val)) {
				oPk[1].style.display = "block";
				oPk[1].innerHTML = "密码正确";
			}
			else{
				oPk[1].style.display = "block";
				oPk[1].innerHTML = "密码错误，请重新输入";
			}
		}


		
