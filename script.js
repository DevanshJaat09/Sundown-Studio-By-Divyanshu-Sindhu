const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let box1 = document.querySelector("#first-box")
let container = document.querySelector(".box-container")
let img = document.querySelector(".image")

container.addEventListener("mouseenter", function(e){
    img.style.display = "block"  
})

container.addEventListener("mouseleave", function(e){
    img.style.display = "none"
})

let boxes = document.querySelectorAll(".box")

boxes.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("image")
        img.style.backgroundImage = `url(${image})`
    })
})
    
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

let bg = document.querySelector(".loader")

setTimeout(function(){
    bg.style.top = "-100%"
},4000)