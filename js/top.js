$(".category").each(function(i){
		$(this).hover(function(){
			$(this).css({
				"background":"white",
				"color":"#00bbd7"
			});
			let top1 = 42*i;
			$(this).children(".category_Bigbox").css({
				"display":"block",
				"top":-top1+"px",
				"background":"white",
				"width":"775px",
				"height":"378px",
				"left":"200px",
				"position":"absolute"
			});
			//createrUI($(this),top1);
			$("#bigBox").css("display","block");
			
			
			
//			category_Bigbox category_BigboxTop   ul
//			用不了的循环
			let $ul = $(this).children(".category_Bigbox").children(".category_BigboxTop").children("ul");
			console.log($ul);
			$ul.each(function(i){
				let a = 250/$(this).children("li").length;
				if(a>30){
					a=30;
				}
				$(this).children("li").css({
					"line-height":a+"px",
					"height":a+"px"
				})
			})
		},function(){
			$(this).css({
				"background":"",
				"color":"black"
			});
			$(this).children(".category_Bigbox").css("display","none");
			$("#bigBox").css("display","none");
		})
	})

// 动态创建导航
//	function createrUI(that,top1){
//		let divDom = document.createElement("div");
//		divDom.style.cssText = "width:775px;height:380px;background: white;z-index: 2;position: absolute;left: 200px;";
//		divDom.style.top = -top1 +'px';
//		that.append(divDom);
//		createrDivDOM()
//	}
//	

		$(window).scroll( function() {
 			let scrollTops = $(document).scrollTop();
            // 遮罩层的top值
            $("#bigBox").css({
                top: scrollTops + "px"
			})
        } );
//	动态创建值
//		首先传入ul个数UIlength
		function createrDivDOM(){
			//let divOneDom = document.createElement("div");
			
			
			
		}





//	导航栏划过变色
	$(".nav_Right a").slice(1).hover(function(){
		$(this).css("background","#00bbd7")
	},function(){
		$(this).css("background","")
	})
	
	
//	登陆之后
	var username = getCookie("username");
	console.log(username);
	if(username!=null){
		console.log(757);
		$(".login").css("display","none");
		$(".login_son").css("display","block");
		$(".username_s").html(username);
	}else{
		$(".login").css("display","block");
	$(".login_son").css("display","none");
	}
	
	$(".removes").click(function(){
		let xx = confirm("你确定要注销吗");
		if(xx){
			delCookie("username")
			location.href="login.html";
			$(".login").css("display","block");
			$(".login_son").css("display","none");
		}
	})
	
	
	
	
	
	                    

$(".nav_Left").hover(function(){
        $(".sort_father").css("display","block")
    },function(){
        $(".sort_father").css("display","none")

    })