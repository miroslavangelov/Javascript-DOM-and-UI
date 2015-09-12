$.fn.tabs = function () {
		$('#tabs-container').addClass("tabs-container");
		$(".tab-item").first().addClass("current");
		$(document).ready(function () {
			$(".tab-item-content").first().css("z-index", "5")
			});
		$(".tab-item").click(function () {
			var that = $(this);
			if (that.hasClass("current")) {
				return;
			}
			$(".tab-item").removeClass("current");
			that.addClass("current")
			$(".tab-item").children().css("z-index", "0")
			that.children().css("z-index", "5");
		});
};