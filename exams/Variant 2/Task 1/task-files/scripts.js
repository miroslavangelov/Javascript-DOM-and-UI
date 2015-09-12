function createImagesPreviewer(selector, items) {
	if (selector.indexOf("#") === 0) {
		var splitSelectorById = selector.split("#"),
			selectorId = splitSelectorById[1];
		selector = document.getElementById(selectorId);
	}
	else if (selector.indexOf(".") === 0) {
		var splitSelectorByClass = selector.split("."),
			selectorClass = splitSelectorByClass[1];
		selector = document.getElementsByClassName(selectorClass)[0];
	}
	else {
		selector = document.getElementsByTagName(selector)[0];
	}
	
	var divSelectedPicture = document.createElement("div");
	selector.appendChild(divSelectedPicture);
	divSelectedPicture.id = "selected";
	var getSelected = document.getElementById("selected"),
		h2 = document.createElement("h2"),
		img = document.createElement("img");
	getSelected.appendChild(h2);
	getSelected.appendChild(img);
	divSelectedPicture.style.position = "relative";
	divSelectedPicture.style.width = "500px";
	divSelectedPicture.style.cssFloat = "left";
	h2.innerHTML = animals[0].title;
	h2.style.position = "relative";
	h2.style.left = "220px";
	img.src = animals[0].url;
	img.style.width = "400px";
	img.style.height = "300px";
	img.style.borderRadius = "10px";
	img.style.position = "relative";
	img.style.top = "20px";
	img.style.left = "50px";
	
	var divAside = document.createElement("div");
	divAside.id = "aside";
	selector.appendChild(divAside);
	divAside.style.position = "relative";
	divAside.style.width = "200px";
	divAside.style.overflow = "scroll";
	divAside.style.cssFloat = "left";
	divAside.style.height = "500px";
	divAside.style.overflowX = "hidden";
	var getAside = document.getElementById("aside"),
		form = document.createElement("form");
	getAside.appendChild(form);
	var input = document.createElement("input"),
		p = document.createElement("p");
	p.innerHTML = "Filter";
	input.type = "text";
	form.appendChild(p);
	form.appendChild(input);
	p.style.fontSize = "18px";
	p.style.position = "relative";
	p.style.left = "50px";
	input.style.position = "relative";
	input.id = "input";
	form.style.position = "relative";
	form.style.left = "20px";
	var filterImages = document.createElement("div");
	filterImages.id = "filterImages";
	filterImages.style.position = "relative";
	filterImages.style.top = "20px";
	filterImages.style.left = "20px";
	getAside.appendChild(filterImages);
	var getFilterImages = document.getElementById("filterImages");
	for (var i = 0, len = animals.length; i < len; i++) {
		var asideTitle = document.createElement("h4");
		var asideImage = document.createElement("img");
		var divImage = document.createElement("div");
		divImage.className = "currentImage";
		getFilterImages.appendChild(divImage);
		var getCurrentImage = document.getElementsByClassName("currentImage")[i];
		getCurrentImage.addEventListener("mouseover", function() {
			this.style.backgroundColor = "lightgray";
			
		});
		getCurrentImage.addEventListener("mouseout", function() {
			this.style.backgroundColor = "";
			
		});

		asideTitle.innerHTML = animals[i].title;
		asideImage.src = animals[i].url;
		asideTitle.style.position = "relative";
		asideTitle.style.marginBottom = "2px";
		asideTitle.style.marginTop = "5px";
		asideTitle.style.left = "50px";
		asideImage.style.position = "relative";
		asideImage.style.width = "150px";
		asideImage.style.height = "100px";
		asideImage.style.borderRadius = "10px";

		getCurrentImage.appendChild(asideTitle);
		getCurrentImage.appendChild(asideImage);
		
		getCurrentImage.addEventListener("click", function() {
			var getTitle = getSelected.children[0],
				getImage = getSelected.children[1];
			getTitle.innerHTML = this.children[0].innerHTML;
			getImage.src = this.children[1].src;
		});
		
	}

	var getInput = document.getElementById("input"),
		getCurrentDivFilter = document.getElementsByClassName("currentImage");
		
	getInput.addEventListener("input", function() {
		for (var j = 0, len1 = animals.length; j < len1; j++) {
			var currentName = animals[j].title.toLowerCase(),
				inputValue = getInput.value.toLowerCase();

			if (currentName.indexOf(inputValue) !== -1) {
				getCurrentDivFilter[j].style.display = "block";
			}
			else {
				getCurrentDivFilter[j].style.display = "none";

			}
			
		}
		
	});
}