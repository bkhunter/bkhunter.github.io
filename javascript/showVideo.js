// Get the modal
var modal = document.getElementById('myModal');


var modalVid = document.getElementById("vid");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var textContainer = document.getElementById("txt");

function showVideo(id){
    textContainer.style.visibility = "hidden";

    var vid = document.getElementById(id);

    modalVid.width = .7*window.innerWidth.toString();
    modalVid.height = .7*window.innerHeight.toString();

    modalImg.height = "0";
    modalImg.width = "0";

    modal.style.display = "block";
    captionText.style.display="none";
    modalVid.src = vid.title;
}
