// Get the modal
var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");
var modalVid = document.getElementById("vid");
var captionText = document.getElementById("caption");
var textContainer = document.getElementById("txt");

function showImg(id){
    textContainer.style.visibility = "hidden";

    var img = document.getElementById(id);


    if (window.innerWidth >= 1200) {
	//lg
	if (window.innerHeight <= 400) {
	    modalImg.width = .4*window.innerWidth.toString();
	    modalImg.height = .7*window.innerHeight.toString();
	} else {
	    modalImg.width = 0.9*window.innerWidth.toString();
	    modalImg.height = .7*window.innerHeight.toString();
	}
    } else if (window.innerWidth  >= 992) {
	//md
	if (window.innerHeight <= 400) {
	    modalImg.width = .4*window.innerWidth.toString();
	    modalImg.height = .7*window.innerHeight.toString();
	} else {
	    modalImg.width = .7*window.innerWidth.toString();
	    modalImg.height = .6*window.innerHeight.toString();
	}
    } else if (window.innerWidth >= 768) {
	//sm
	if (window.innerHeight <= 400) {
	    modalImg.width = .4*window.innerWidth.toString();
	    modalImg.height = .7*window.innerHeight.toString();
	} else {
	    modalImg.width = .9*window.innerWidth.toString();
	    modalImg.height = .5*window.innerHeight.toString();
	}
    } else {
	//xs
	if (window.innerHeight <= 400) {
	    modalImg.width = .6*window.innerWidth.toString();
	    modalImg.height = .7*window.innerHeight.toString();
	} else {
	    modalImg.width = .9*window.innerWidth.toString();
	    modalImg.height = .4*window.innerHeight.toString();
	}
    }
    

    modalVid.height = "0";
    modalVid.width = "0";

    modal.style.display = "block";
    modalImg.src = img.src
    captionText.style.display = "block";
    captionText.innerHTML = img.alt;
}
