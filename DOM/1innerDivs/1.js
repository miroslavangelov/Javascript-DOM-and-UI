	function showAllDivs() {
		var allDivs = document.getElementsByTagName("div");
		console.log("The number of all divs is: " + allDivs.length);
	}
	function liveNode() {
		var innerDivs = document.getElementsByTagName('div');
		var numberOfInnerDivs = 0;
		for (var i = 0, len = innerDivs.length; i < len; i++) {
			if (innerDivs[i].parentNode.tagName === "DIV") {
				numberOfInnerDivs++;
			}
		}
		console.log("/Live node/ The number of inner divs: " + numberOfInnerDivs);
	}
	
	function staticNode() {
		var innerDivs1 = document.querySelectorAll("div > div"),
			numberOfDivs = 0;
		for (var j = 0, len1 = innerDivs1.length; j < len1; j++) {		
			numberOfDivs++;
		}
		console.log("/Static node/ The number of inner divs is: " + numberOfDivs);
	}
	showAllDivs();
	liveNode();
	staticNode();