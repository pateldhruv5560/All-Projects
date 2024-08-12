
// locomotive js

const scroll = new LocomotiveScroll({
    el: document.querySelector('.Container'),
    smooth: true
});


// menubar animation

let navabar = document.querySelector(".navabar");
let span = document.querySelector("span");

function menu_none() {
    navabar.style.display = "none";
}
menu_none()


function menu_block() {
    navabar.style.display = "block";
    navabar.style.display = "flex";
    span.style.display = "none";

}



// click and photo animation

elem_container = document.querySelector(".elem-container");

fix_image=document.querySelector(".fix-image");




elem_container.addEventListener("mouseenter",function(){
    
          fix_image.style.display="block"

})


elem_container.addEventListener("mouseleave",function(){
    
    fix_image.style.display="none"
 

})


// let elem1=document.querySelector("#elem1")


//  for only elem1

// elem1.addEventListener("mouseenter",function(){
//     let image = elem1.getAttribute("data-image")
//     fix_image.style.backgroundImage=`url(${image})`
   
// })


// cover all elem

 let elems = document.querySelectorAll(".elem");

 elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
    let image = e.getAttribute("data-image")
    fix_image.style.backgroundImage=`url(${image})`

    })
    
 })

 
//   slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });











// cloud animation   

// function cloud() {
    
// }
// cloud()
