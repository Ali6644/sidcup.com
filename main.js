
let crsr = document.querySelector(".cursor")
let blur = document.querySelector(".cursor-blur")


document.addEventListener("mousemove", function(dets){

   crsr.style.left = dets.x+"px"
   crsr.style.top =  dets.y+"px"

    blur.style.left = dets.x-250+"px"
   blur.style.top =  dets.y-250+"px"
      
})




gsap.to(".nav",{
     backgroundColor:"black",
     duration:0.5,
     height:"110px",
     scrollTrigger:{
        trigger:".nav",
        scroller:"body",       
        start:"top -10%",
        end:"top -11%",
        scrub:1
     }
})

gsap.to(".main",{
   backgroundColor:"black",
   scrollTrigger:{
    trigger:".main",
    scroller:"body",
    start:"top -25%",
    end:"top -70%",
    scrub:2
   }

})

gsap.from("#clone-1",{
     x:70,
     y:-70,
     scrollTrigger:{
      trigger:".clone1",
      scroller:"body",
      start:"55%",
      end:"45%",
      scrub:4,
     }
     
})
 
 