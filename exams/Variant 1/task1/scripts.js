function createCalendar(selector, events) {
	
		var splitSelector = selector.split("#"),
		selector = splitSelector[1],
		days = 30,
		countDays = 0,
		daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		main = document.createElement("div");
		main.setAttribute("id", "main");
		getSelector = document.getElementById(selector);
		getSelector.appendChild(main);
		main.style.width = "930px";
		var eventsArray = [];
		for (var j = 0, len1 = events.length; j < len1; j++) {
			var currentEvent = parseInt(events[j].date);
			eventsArray.push(currentEvent);
		}

		for (var i = 0; i < days; i++) {
			var div = document.createElement("div"),
				h4 = document.createElement("h4"),
				p = document.createElement("p");
			main.appendChild(div);
			div.appendChild(h4);
			div.appendChild(p);
			p.innerHTML += "&nbsp;";
			for (var m = 0, len2 = eventsArray.length; m < len2; m++) {
				if ((i+1) === eventsArray[m]) {
					p.innerHTML += events[m].title + " - " + events[m].hour + " - " + events[m].duration;
					break;
				}	
			}
			if (countDays === 7) {
				countDays = 0;
			}
			h4.innerHTML+= daysArray[countDays] + " " + (i+1) + " Jun 2014" ;
			countDays++;
			div.addEventListener("click", function() {
				var len = this.parentNode.children.length;
				for (var k = 0; k < len; k++) {
					this.parentNode.children[k].className = "";
					this.parentNode.children[k].children[0].style.backgroundColor = "rgb(217, 217, 217)";
					
				}
				this.className = "selected";
					var selected = document.getElementsByClassName("selected")[0];
					selected.children[0].style.backgroundColor = "rgb(255, 255, 255)";
			});
			div.addEventListener("mouseover", function() {
				if (this.className === "selected") {
					this.children[0].style.backgroundColor = "rgb(255, 255, 255)";
				}
				else {
					this.children[0].style.backgroundColor = "rgb(104,104,104)";
				}
			});
			div.addEventListener("mouseout", function () {
				if (this.className === "selected") {
					this.children[0].style.backgroundColor = "rgb(255, 255, 255)";
				}
				else {
				this.children[0].style.backgroundColor = "rgb(217, 217, 217)";
				}
			});
			
			//styles
			div.style.display = "inline-block";
			div.style.width = "130px";
			div.style.height = "130px";
			div.style.border = "1px solid black";
			h4.style.borderBottom = "1px solid black";
			h4.style.height = "25px";
			h4.style.textAlign = "center";
			h4.style.marginTop = "0";
			h4.style.padding = "3px";
			h4.style.fontWeight = "300";
			h4.style.backgroundColor = "rgb(217, 217, 217)";
			p.style.margin = "0";
		}
}