function animation(iconId,toggleId) {
	    
    // animate toggle
    var toggle = document.getElementById(toggleId);  
    if (toggle.className == "fa fa-caret-up dropdown") {
	toggle.className = "fa fa-caret-down dropdown";
    } else {
	toggle.className = "fa fa-caret-up dropdown";
    }
    var icon = document.getElementById(iconId); 

    // animated property is true when info is displayed
    if (icon.animated == null) {
	icon.animated = true;
    } else {
	icon.animated = !icon.animated;
    }
    
    // animate icon only for md and lg sizes
    if (window.outerWidth >= 992) {
	
	if (icon.style.top == "115px") {
	    icon.style.top = "0px";
	} else {
	    icon.style.top = "115px";
	}
    }
}

//format icons on resize
function format() {

    var icons = document.getElementsByClassName('trans');

    if (window.outerWidth >= 992) {

	for (var i = 0; i<icons.length; ++i) {

	    if (icons[i].animated == true) {

		if (icons[i].style.top == "0px" || icons[i].style.top == null) {
		    icons[i].style.top = "115px";
		}

	    } 
	}

    } else {

	for (var i = 0; i<icons.length; ++i) {

	    if (icons[i].animated == true) {

		if (icons[i].style.top == "115px") {
		    icons[i].style.top = "0px";
		}

	    } 
	}

    }
}


