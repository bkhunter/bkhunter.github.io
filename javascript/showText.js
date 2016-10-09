// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalVid = document.getElementById("vid");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var textContainer = document.getElementById("txt");

function showText(textId, hiddenId){
    textContainer.style.visibility = "visible";

    var paragraph = textContainer.children[0];
    var text = document.getElementById(textId);
    var extension = document.getElementById(hiddenId)

    paragraph.innerText = text.innerText.slice(0,-13) +"\n\n" + extension.innerText;

    modal.style.display = "block";
    paragraph.style.height = .65*window.innerHeight.toString() + "px";

    modalVid.height = "0";
    modalVid.width = "0";
    modalImg.height = "0";
    modalImg.width = "0";

    captionText.style.display="none";
    
}
