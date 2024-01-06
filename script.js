let menubar = document.querySelector(".menubar");
let menubar_li1 = document.querySelector(".menubar-li1")
let menubar_li2 = document.querySelector(".menubar-li2")
let menubar_li3 = document.querySelector(".menubar-li3")
let menubar_li4 = document.querySelector(".menubar-li4")
let menubar_li5 = document.querySelector(".menubar-li5")

let menu = document.querySelector(".ul1");
let nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
    if (menu.classList.contains("no")) {
        menubar.classList.remove("menubar-animation-second");
        menu.classList.remove("ul1-second")
        menubar.classList.add("menubar-animation-first");
        menu.classList.add("ul1-first")
        menu.classList.toggle("no")
        menubar_li1.classList.toggle("hide")
        menubar_li2.classList.toggle("hide")
        menubar_li3.classList.toggle("hide")
        menubar_li4.classList.toggle("hide")
        menubar_li5.classList.toggle("hide")
        menubar.classList.toggle("menubar-no")
    }
    else {
        menubar.classList.add("menubar-animation-second");
        menu.classList.add("ul1-second")
        menu.classList.toggle("no")
        menubar.classList.remove("menubar-animation-first");
        menu.classList.remove("ul1-first")

        menubar_li1.classList.toggle("hide")
        menubar_li2.classList.toggle("hide")
        menubar_li3.classList.toggle("hide")
        menubar_li4.classList.toggle("hide")
        menubar_li5.classList.toggle("hide")
        menubar.classList.toggle("menubar-no")
    }

})

gsap.registerPlugin(ScrollTrigger);

let header=document.querySelector("header");
let scroll_nav=document.querySelector(".scroll-nav");
let style =window.getComputedStyle(scroll_nav)


// let myMediaQuery = window.matchMedia('(min-width: 600px)');
// widthChangeCallback(myMediaQuery);
// function widthChangeCallback(myMediaQuery) {
//     if(myMediaQuery.matches){
gsap.to(".scroll-nav",{
    scrollTrigger:{
        trigger:".scroll-trigger",
        // markers:true,
        start:"top top",
        end:"top bottom ",
        toggleActions:"restart none reset none"

    },  

    duration:2,   
    scale:1,
    opacity:1,

})

gsap.to("header",{
    scrollTrigger:{
        trigger:".scroll-trigger",
        // markers:true,
        start:"top top",
        end:"top bottom ",
        toggleActions:"restart none reverse none"

    },  
    scale:0,
    duration:.5
})

// }
// }


// myMediaQuery.addEventListener('change', ()=>{
//     widthChangeCallback(myMediaQuery);
// });



// var c=window.getComputedStyle(document.querySelector('.li-1'), ':before').getPropertyValue('content');
// c.addEventListener("mouseover",()=>{
//     x()
// }
// )
// function x (){
    
//     gsap.to(c,{
//         x:-100,
//         background:"red"
//     })
// }

