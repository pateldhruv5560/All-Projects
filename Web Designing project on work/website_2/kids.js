
    let img2 = document.querySelector("#img2");
    let img1 = document.querySelector("#img1");
    let product = document.querySelector("#product");

    function block() {
        img1.style.display = "none";
        img2.style.display = "block";
    }

    block()

    function show() {

        if(img1.style.display = "none")
    {

        img1.style.display = "block";
        img2.style.display = "none";
        product.style.position = "relative";
        product.style.bottom = "-82px";
    }

    }

    function out(){
        img1.style.display = "none";
        img2.style.display = "block";
        product.style.position = "relative";
        product.style.bottom = "-21px";
        
    }

    //    click and sticker move

    let stickers = document.querySelectorAll(".sticker");
    let currentSticker = null;
    
    stickers.forEach(sticker => {
        sticker.addEventListener('mouseenter', (sticker) => {
            currentSticker = sticker.target;
            
        });
    });

  
    document.addEventListener('mousemove', (e) => {
        if (currentSticker) {
            currentSticker.style.left = e.clientX + "px";
            currentSticker.style.top = e.clientY + "px";
            currentSticker.style.cursor = "grabbing"; 
            currentSticker.style.position = "absolute";
            currentSticker.style.bottom = "-10px";

        }
    });
    
    document.addEventListener('mouseup', () => {
        currentSticker = null;
    });


    // window animation

    let page=document.querySelectorAll("#page");

    let page_1 = document.querySelector(".page-1");
    let page_2 = document.querySelector(".page-2");
    let page_3 = document.querySelector(".page-3");
    let page_4 = document.querySelector(".page-4");
    let page_5 = document.querySelector(".page-5");



    // Selecting the page elements
let pages = document.querySelectorAll("#page");


function ani_1() {
    pages.forEach((page, index) => {
        
        page.style.transform = "rotateY(70deg)";
        page.style.transition = "transform 2s"; 

      
        setTimeout(() => {
           
            page.style.transform += " translateX(200vw)";
            page.style.transition += ", transform 3s"; 

            
            setTimeout(() => {
                page.style.display = "none";
            }, 2000); 
        }, 2000); 
    });
}


window.onload = ani_1;





