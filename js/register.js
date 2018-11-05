
		var oPhone = document.querySelector(".register-input2-text1");
		var oMima = document.querySelector(".mima");
		var oMima1 = document.querySelector(".mima1");
		var oPk = document.querySelectorAll(".qk");
		oPhone.onblur = function(){
			var val = oPhone.value;
			// console.log( val )
			var regPhone = /^1[3-9]\d{9}$/g;
			if (regPhone.test(val)) {
				oPk[0].style.display = "block";
				oPk[0].innerHTML = "手机号合法";
			}
			else{
				oPk[0].style.display = "block";
				oPk[0].innerHTML = "请输入正确的手机号";
			}
		}
		oMima.onblur = function(){
			var val = oMima.value;
			var regMima = /^[A-Za-z0-9_-]{6,18}$/g;
			if (regMima.test(val)) {
				oPk[1].style.display = "block";
				oPk[1].innerHTML = "";
			}
			else{
				oPk[1].style.display = "block";
				oPk[1].innerHTML = "密码错误 请重新输入";
			}
		}
		oMima1.onblur = function(){
			var val = oMima1.value;
			var regMima1 = /^[A-Za-z0-9_-]{6,18}$/g;
			if (regMima1.test(val)) {
				oPk[2].style.display = "block";
				oPk[2].innerHTML = "";
			}
			else{
				oPk[2].style.display = "block";
				oPk[2].innerHTML = "两次密码不一致";
			}
		}
