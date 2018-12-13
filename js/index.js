
	
	// 轮播图效果
	function showImg(){
		let count = 0
		setInterval(function(){
			let num = count;
			count++;
			if(count>$(".slider img").length-1){
				count =0;
			}
			$(".slider img").each(function(count,num){
				$(".slider img").css("display","none");
				createrUI_One()
			})
				$(".slider img").eq(num).fadeOut("fast","linear");
				//console.log($(".slider img").eq(num))
				$(".slider img").eq(count).fadeIn("fast","linear");
		},3000)
	}
	
	function createrUI_One(){
	//	let ulDom = document.createElement("ul");
		
	}
	
	
//	划过购物车效果
	$(".recommend_UI li").hover(function(){
		$(this).children(".iphone_Father").children(".presentation_iphone").css("display","none");
		$(this).children(".iphone_Father").children(".presentation_iphoneTwo").css("display","block");
		
	},function(){
		$(this).children(".iphone_Father").children(".presentation_iphone").css("display","block");
		$(this).children(".iphone_Father").children(".presentation_iphoneTwo").css("display","none");
	})
	


	// 滚动条滚动距离锚点变色
	function scrool_show(){
		$(window).scroll( function() {
            let scrollTops = $(document).scrollTop();
            // 遮罩层的top值
            $("#bigBox").css({
                top: scrollTops + "px"
			})
            if(scrollTops<=300){
                $(".tool").css("display","none");
            }else{
                $(".tool").css("display","block");
            }
            // 待修改
			if(scrollTops>=600 && scrollTops<=1424){
				$(".tool").children("ul").children("li").eq(0).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(0).css("background","#626262")
			}
			if(scrollTops>1424 && scrollTops<=1862){
				$(".tool").children("ul").children("li").eq(1).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(1).css("background","#626262")
			}
			if(scrollTops>1862 && scrollTops<=2488){
				$(".tool").children("ul").children("li").eq(2).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(2).css("background","#626262")
			}
			if(scrollTops>2488 && scrollTops<=2927){
				$(".tool").children("ul").children("li").eq(3).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(3).css("background","#626262")
			}
			if(scrollTops>2927 && scrollTops<=3875){
				$(".tool").children("ul").children("li").eq(4).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(4).css("background","#626262")
			}
			if(scrollTops>3875 && scrollTops<=4743){
				$(".tool").children("ul").children("li").eq(5).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(5).css("background","#626262")
			}
			if(scrollTops>4743 && scrollTops<=5866){
				$(".tool").children("ul").children("li").eq(6).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(6).css("background","#626262")
			}
			if(scrollTops>5866 && scrollTops<=6480){
				$(".tool").children("ul").children("li").eq(7).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(7).css("background","#626262")
			}
			if(scrollTops>6480 && scrollTops<=7326){
				$(".tool").children("ul").children("li").eq(8).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(8).css("background","#626262")
			}
			if(scrollTops>7326 && scrollTops<=8000){
				$(".tool").children("ul").children("li").eq(9).css("background","#00bbd7")
			}else{
				$(".tool").children("ul").children("li").eq(9).css("background","#626262")
			}
			 } );
   	 }
   	 // 点击跳转的动画效果
    $(".tool").children("ul").children("li").children("a").each(function(){
        $(this).click(function(){
            var hs_hight = $($(this).attr("href")).offset().top;
            $("html, body").animate({
                scrollTop: hs_hight + "px"
            }, 300);
            return false;
        })
	})
	
	
	
//	动态得导航
	shownav(["首页","Apple专区","新品","全球购","为您推荐","Man","以旧换新","聚划算","寻宝顺电","企业购","积分商城"])
	
	