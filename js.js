let slideIndex = 0;

function showSlide(n){
    const slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length){
        slideIndex = 0;
    }

    if(n <0){
        slideIndex = slides.length -1;
    }

    for (var i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block"
}

function moveSlide(n){
    showSlide(slideIndex += n);
}

showSlide(slideIndex);
var acc = document.getElementsByClassName("accordeon");

for( var i=0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("accordeon-active");

        var acc_panel = this.nextElementSibling;

        if(acc_panel.style.maxHeight){
            acc_panel.style.maxHeight = null;
        }
        else{
            acc_panel.style.maxHeight = acc_panel.scrollHeight +"px";
        }
        // if(acc_panel.style.display === "block" ){
        //     acc_panel.style.display = "none";
        // }
        // else{
        //     acc_panel.style.display = "block";
        // }
    });
}