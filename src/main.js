// lenis 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Shery
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageMasker(".mask-target", {
    
    mouseFollower: true,
    text: "Naren Roy",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });




//   Gsap
gsap.from(".scaler",{
        scale:0,
        opacity:0,
        scrollTrigger:{
                trigger:".scaler",
                scroller:"body",
                scrub:1,
                start: "top 80%",
                end:"top 20%"
        }
    })

    gsap.from(".home",{
        y:-100,
        opacity:0,
        duration:1.2
    })

    gsap.from("nav",{
        y:-100,
        opacity:0,
        duration:1.2
    })











    



    