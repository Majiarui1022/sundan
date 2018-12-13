function shownav(arr){
		$(".nav_Right").children("a").each(function(i){
			$(this).html(arr[i])
		})
	}

