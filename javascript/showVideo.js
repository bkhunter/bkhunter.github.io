// Get the modal
var modal = document.getElementById('myModal');


var modalVid = document.getElementById("vid");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var textContainer = document.getElementById("txt");

function showVideo(id){
    textContainer.style.visibility = "hidden";

    var vid = document.getElementById(id);

    if (window.innerHeight <= 500) {

	modalVid.width = "80%";
	modalVid.height = "80%";

    } else { 
	modalVid.width = "80%";
	modalVid.height = "60%";
    }

    modalImg.height = "0";
    modalImg.width = "0";

    modal.style.display = "block";
    captionText.style.display="none";
    modalVid.src = vid.title;
}
