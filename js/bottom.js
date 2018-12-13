	//	底部划过变色
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