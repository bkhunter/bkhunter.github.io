// Get the modal
var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");
var modalVid = document.getElementById("vid");
var captionText = document.getElementById("caption");
var textContainer = document.getElementById("txt");

function showImg(id){
    textContainer.style.visibility = "hidden";

    var img = document.getElementById(id);



    modalImg.width = .7*window.innerWidth.toString();
    modalImg.height = .7*window.innerHeight.toString();
    

    modalVid.height = "0";
    modalVid.width = "0";

    modal.style.display = "block";
    modalImg.src = img.src
    captionText.style.display = "block";
    captionText.innerHTML = img.alt;
}
