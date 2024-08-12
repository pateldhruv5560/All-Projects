
let right = document.querySelector("#left");

let left = document.querySelector("#right");

let slide_A = document.querySelector("#slide_A");
let slide_B = document.querySelector("#slide_B");
let slide_C = document.querySelector("#slide_C");
let slide_D = document.querySelector("#slide_D");
let slide_E = document.querySelector("#slide_E");


      let clickCount = 0;
      const maxClicks = 5; 

      function slideClick() {
          clickCount++;
      
          if (clickCount === 1) {
            slide_A.style.transform = "translateX(0px)";
            slide_A.style.height = "150px";
            slide_A.style.backgroundColor = "yellow";
            slide_A.style.transition = "all 1s";


            slide_B.style.transform = "translateX(0vw)";
            slide_B.style.height = "197px";
            slide_B.style.backgroundColor = "red";
            slide_B.style.transition = "all 1s";

            slide_C.style.transform = "translateX(0px)";
            slide_C.style.height = "230px";
            slide_C.style.backgroundColor = "lightblue";
            slide_C.style.transition = "all 1s";

            
            slide_D.style.transform = "translateX(0px)";
            slide_D.style.height = "192px";
            slide_D.style.backgroundColor = "lightgreen";
            slide_D.style.transition = "all 1s";

            slide_E.style.transform = "translateX(0px)";
            slide_E.style.height = "150px";
            slide_E.style.backgroundColor = "lightpink";
            slide_E.style.transition = "all 1s";
          } 

         else if (clickCount === 2) {
          slide_A.style.transform = "translateX(22.55vw)";
          slide_A.style.height = "182px";
          slide_A.style.backgroundColor = "yellow";
          slide_A.style.transition = "all 1s";

          
          slide_B.style.transform = "translateX(22.55vw)";
          slide_B.style.height = "230px";
          slide_B.style.backgroundColor = "red";
          slide_B.style.transition = "all 1s";
          
          slide_C.style.transform = "translateX(22.55vw)";
          slide_C.style.height = "182px";
          slide_C.style.backgroundColor = "lightblue";
          slide_C.style.transition = "all 1s";


            slide_D.style.transform = "translateX(22.55vw)";
            slide_D.style.height = "150px";
            slide_D.style.backgroundColor = "lightgreen";
            slide_D.style.transition = "all 1s";

            
            slide_E.style.transform = "translateX(-90.55vw)";
            slide_E.style.height = "150px";
            slide_E.style.backgroundColor = "lightpink";
            slide_E.style.transition = "all 1s";
          } 

          else if (clickCount === 3) {
            slide_E.style.transform = "translateX(-68vw)";
            slide_E.style.height = "182px";
            slide_E.style.backgroundColor = "lightpink";
            slide_E.style.transition = "all 1s";

            slide_A.style.transform = "translateX(45.40vw)";
            slide_A.style.height = "230px";
            slide_A.style.backgroundColor = "yellow";
            slide_A.style.transition = "all 1s";


            slide_B.style.transform = "translateX(45.40vw)";
            slide_B.style.height = "182px";
            slide_B.style.backgroundColor = "red";
            slide_B.style.transition = "all 1s";
             
            slide_C.style.transform = "translateX(45.40vw)";
            slide_C.style.height = "150px";
            slide_C.style.backgroundColor = "lightblue";
            slide_C.style.transition = "all 1s";

            slide_D.style.transform = "translateX(-68vw)";
            slide_D.style.height = "150px";
            slide_D.style.backgroundColor = "lightgreen";
            slide_D.style.transition = "all 1s";
          } 
         
          else if (clickCount === 4) {
            slide_A.style.transform = "translateX(68vw)";
            slide_A.style.height = "182px";
            slide_A.style.backgroundColor = "yellow";
            slide_A.style.transition = "all 1s";
        
            slide_B.style.transform = "translateX(68vw)";
            slide_B.style.height = "150px";
            slide_B.style.backgroundColor = "red";
            slide_B.style.transition = "all 1s";
        
            slide_C.style.transform = "translateX(-45.4vw)";
            slide_C.style.height = "150px";
            slide_C.style.backgroundColor = "lightblue";
            slide_C.style.transition = "all 1s";
        
            slide_D.style.transform = "translateX(-45.4vw)";
            slide_D.style.height = "182px";
            slide_D.style.backgroundColor = "lightgreen";
            slide_D.style.transition = "all 1s";
        
            slide_E.style.transform = "translateX(-45.4vw)";
            slide_E.style.height = "230px";
            slide_E.style.backgroundColor = "lightpink";
            slide_E.style.transition = "all 1s";

             
          } 
       
          else if (clickCount === 5) {
            slide_A.style.transform = "translateX(90.55vw)";
    slide_A.style.height = "150px";
    slide_A.style.backgroundColor = "yellow";
    slide_A.style.transition = "all 1s";

    slide_B.style.transform = "translateX(-22.55vw)";
    slide_B.style.height = "150px";
    slide_B.style.backgroundColor = "red";
    slide_B.style.transition = "all 1s";

    slide_C.style.transform = "translateX(-22.55vw)";
    slide_C.style.height = "182px";
    slide_C.style.backgroundColor = "lightblue";
    slide_C.style.transition = "all 1s";

    slide_D.style.transform = "translateX(-22.55vw)";
    slide_D.style.height = "230px";
    slide_D.style.backgroundColor = "lightgreen";
    slide_D.style.transition = "all 1s";

    slide_E.style.transform = "translateX(-22.55vw)";
    slide_E.style.height = "182px";
    slide_E.style.backgroundColor = "lightpink";
    slide_E.style.transition = "all 1s";
             
          } 
       
          if (clickCount >= maxClicks) {
              clickCount = 0;
          }
      }
      
      
  
      right.addEventListener("click",slideClick);

    