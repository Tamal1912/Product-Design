
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let timeout;
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

function circleMouseSkew(){
    let xscale=1,yscale=1;
    let xprev=0,yprev=0;
    window.addEventListener("mousemove",function(dets){
    let xdiff=dets.clientX - xprev;
    xprev=dets.clientX;
    let ydiff=dets.clientY;
    yprev=dets.clientY;
    xscale= gsap.utils.clamp(.8,1.2,xdiff);
    yscale=gsap.utils.clamp(.8,1.2,ydiff);
   
    circleMouseFollower(xscale,yscale);
    timeout=setTimeout(()=>{
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale)`;
    },500)
    })
}

function firstPageAnime(){
let tl=gsap.timeline();
tl.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1.4,
    ease:Expo.easeInOut
})
.to(".bound-elem",{
    y:0,
    ease:Expo.easeInOut,
    duration:2,
    delay:-1,
    stagger:.2
})
.from("#headfooter",{
    y:-10,
    ease:Expo.easeInOut,
    duration:1.5,
    delay:-1,
    opacity:0 
})
}




circleMouseFollower();
circleMouseSkew()
firstPageAnime()

document.querySelectorAll(".elem1").forEach((elem)=>{
    elem.addEventListener("mousemove",(dets)=>{
        let diff=dets.clientY-elem.getBoundingClientRect().top;
       console.log("hello");
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1,
            top:diff,
            left:dets.clientX
        })
    })
})



