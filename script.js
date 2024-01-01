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


function setupCanvas(){
    canvas.height =window.innerHeight;
    canvas.height =window.innerWidth;
    
}

setupCanvas();
window.onresize =setupCanvas;

const pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
}


function updatePointerPosition(e){
    pointer.x = e.clientX;
    pointer.y = e.clientY;
}

window.onclick=updatePointerPosition;
window.onmousemove=updatePointerPosition;

const ctx = canvas.getContext("2d");

const params ={
    spring:0.6,
    pointCount:50
}


const trail =new Array(params.pointCount);

for(let i=0;i< trail.length;i++){
    trail[i]={
        x:pointer.x,
        y:pointer.y,
        dy:0,
        dx:0
    }
}


function draw(){
    ctx.clearRect( 0, 0, canvas.width,canvas.height);

    trail.forEach((p,idx) =>{
        const prev =idx === 0 ? pointer : trail[idx - 1];
        const spring =idx === 0 ? 0.4 * params.spring : params.spring;
    
        p.dx= ( prev.x - p.x) * spring;
        p.dy= ( prev.y - p.y) * spring;

        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x,p.y,10,0,Math.PI *2 );
        ctx.fill(); 
    
    })

    requestAnimationFrame(draw);

}

draw();








