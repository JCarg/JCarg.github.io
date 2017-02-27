$(function () {
    $('.col').matchHeight();
});
var modal = document.getElementById('Modal');
var span = document.getElementsByClassName("close")[0];
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('portpic');
var modalImg = document.getElementById("carousel1");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
span.onclick = function () {
    modal.style.display = "none";
}
}
var span2 = document.getElementsByClassName("close2")[0];
var modal2 = document.getElementById('Modal2');
var img = document.getElementById('portpic2');
var modalImg2 = document.getElementById("carousel2");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
span2.onclick = function () {
    modal2.style.display = "none";
}
}

var span3 = document.getElementsByClassName("close3")[0];
var modal3 = document.getElementById('Modal3');
var img = document.getElementById('portpic3');
var modalImg3 = document.getElementById("carousel3");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
    span3.onclick = function () {
        modal3.style.display = "none";
    }
}

$(document).ready(function () {

    $(".col .p1,.p2,.p3").hide();
    $(".p4").hide();
    $(".codebutton a").hide();
    $(".row1 .paragraph").hover(function(){
        $(".col p.p1").fadeIn("slow");
    })
    $(".row2 .paragraph").hover(function () {
        $(".col p.p2").fadeIn("slow");
    })
    $(".row3 .paragraph").hover(function () {
        $(".col p.p3").fadeIn("slow");
    })
    $(".row1 .codebutton").hover(function () {
        $(".codebutton .a1").fadeIn("slow");
    })
    $(".row2 .codebutton").hover(function () {
        $(".a2").fadeIn("slow");
    })
    $(".row3 .codebutton").hover(function () {
        $(".codebutton .a3").fadeIn("slow");
    })
    $(".row.aboutme").hover(function(){
        $(".p4").fadeIn("slow");
    })
    })


// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal

