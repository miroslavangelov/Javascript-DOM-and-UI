$.fn.gallery = function (columns) {
	$("#gallery").addClass("gallery");
	$("#root").addClass("clearfix");
	if (columns === 4) {
		$(".image-container").css("width", "200px");
	}
	if (columns === 5) {
		$(".image-container").css("width", "300px");
	}
	$(".selected").css("display", "none");
	var len = $(".image-container").length;
	var arrSrc = [];
	for (var i = 0; i < len; i++) {
		var currentImg = $(".image-container").children().eq(i).attr("src");
		arrSrc.push(currentImg);
	}
	showImage();
	$("#current-image").click(function() {
			$(".selected").css("display", "none");
			$(".gallery-list").removeClass("disabled-background blurred");
			showImage();
	});
	
	$("#previous-image").click(function() {
		var	currentPrevSrc = $("#previous-image").attr("src");
		console.log(currentPrevSrc)
		for (var k = 0, len2 = arrSrc.length; k < len2; k++) {
				if (currentPrevSrc === arrSrc[k]) {
					$("#previous-image").attr("src", arrSrc[k-1]);
					if (currentPrevSrc === arrSrc[0]) {
						$("#previous-image").attr("src", arrSrc[arrSrc.length-1]);
					}
					if (currentPrevSrc === arrSrc[arrSrc.length - 1]) {
						$("#next-image").attr("src", arrSrc[0])
					}
					$("#current-image").attr("src", arrSrc[k]);
					$("#next-image").attr("src", arrSrc[k+1]);
				}
			}
	});
	
	$("#next-image").click(function() {
		var	currentNextSrc = $("#next-image").attr("src");
		for (var m = 0, len3 = arrSrc.length; m < len3; m++) {
			if (currentNextSrc === arrSrc[m]) {
				$("#next-image").attr("src", arrSrc[m+1]);

				if (currentNextSrc === arrSrc[0]) {
					$("#previous-image").attr("src", arrSrc[arrSrc.length-1]);
				}
				if (currentNextSrc === arrSrc[arrSrc.length - 1]) {
					$("#next-image").attr("src", arrSrc[0])
				}
				$("#current-image").attr("src", arrSrc[m]);
				$("#previous-image").attr("src", arrSrc[m-1]);
			}
		}
	});
	function showImage() {
		$(".image-container").click(function() {
			var that = $(this),
				currentSrc = that.children().attr("src");
			$(".selected").css("display", "block");
			$(".gallery-list").addClass("disabled-background blurred");
			$("#current-image").attr("src", currentSrc);
			for (var j = 0, len1 = arrSrc.length; j < len1; j++) {
				if (currentSrc === arrSrc[j]) {
					if (currentSrc === arrSrc[0]) {
						$("#previous-image").attr("src", arrSrc[arrSrc.length-1]);
					}
					else {
						$("#previous-image").attr("src", arrSrc[j-1]);
					}
					if (currentSrc === arrSrc[arrSrc.length-1]) {
						$("#next-image").attr("src", arrSrc[0]);
					}
					else {
						$("#next-image").attr("src", arrSrc[j+1]);
					}
				}
			}
			$(".image-container").off();
		});
	}
};