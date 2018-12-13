

	$("#btn_login").click( function () {
		if($("#word").val()!='' && $("#pass").val()!=''){
			$.ajax({
				type:"post",
				url:"php/register.php",
				async:true,
				data:{
					'username' : $("#word").val(),
					'password' : $("#pass").val()
				},
				success:function(data){
					if(data == 0){
						alert("账号或者密码错误");
					}else if(data == 1){
						alert("登陆成功")
						setCookie("username",$("#word").val(),7);
						location.href="index.html";
					}else if(data == 2){
						alert("账户不存在")
					}else{
						alert("错误")
					}
				},
				error:function(error){
					console.log(error)
				}
			});
		}
		
	});
    // 动态创建导航
    function createrUI(that,top1){
        let divDom = document.createElement("div");
        divDom.style.cssText = "width:775px;height:380px;background: red;z-index: 2;position: absolute;left: 200px;";
        divDom.style.top = -top1 +'px';
        that.append(divDom);
    }


    //	导航栏划过变色
    $(".nav_Right a").hover(function(){
        $(this).css("background","#00bbd7")
    },function(){
        $(this).css("background","")
    })



    //	底部链接划过变色
    $(".fotter_Bottom .fotter_Bottom_Left_One a p").each(function(){
        $(this).hover(function(){
            $(this).css("color","#00bbd7");
        },function(){
            $(this).css("color","#707070");
        })
    })
    $(".fotter_Bottom_Right li").each(function(){
        $(this).hover(function(){
            $(this).css("color","#00bbd7");
        },function(){
            $(this).css("color","#707070");
        })
    })
    //	划过出二维码
    $(".er_father").each(function(){
        $(this).hover(function(){
            $(this).children(".erweima").css("display","block");
            $(this).children(".erweima").stop().animate({
                "top" : -100
            },500)
        },function(){
            $(this).children(".erweima").stop().animate({
                "top" : 42
            },500);
            $(this).children(".erweima").css("display","none");
        })
    })
    
    $(".nav_Left").hover(function(){
        $(".sort_father").css("display","block")
    },function(){
        $(".sort_father").css("display","none")

    })