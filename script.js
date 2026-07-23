/* ==========================
   ZRX Launcher
   script.js
========================== */

// Loading Screen

window.addEventListener("load", () => {

const loading = document.getElementById("loading");

setTimeout(() => {

loading.style.opacity = "0";

loading.style.pointerEvents = "none";

},1500);

});

// ==========================
// Particles
// ==========================

particlesJS("particles-js",{

particles:{

number:{

value:80,

density:{
enable:true,
value_area:800
}

},

color:{
value:"#00ffff"
},

shape:{
type:"circle"
},

opacity:{
value:.5
},

size:{
value:3
},

move:{
enable:true,
speed:2
},

line_linked:{
enable:true,
distance:140,
color:"#00ffff",
opacity:.35,
width:1
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
}

},

modes:{

grab:{
distance:180
},

push:{
particles_nb:4
}

}

}

});

// ==========================
// Cursor
// ==========================

const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// ==========================
// Progress Bar
// ==========================

window.addEventListener("scroll",()=>{

let winScroll=document.body.scrollTop||

document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-

document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("bar").style.width=scrolled+"%";

});

// ==========================
// Theme
// ==========================

const theme=document.getElementById("theme");

theme.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","light");

theme.innerHTML="☀️";

}else{

localStorage.setItem("theme","dark");

theme.innerHTML="🌙";

}

};

if(localStorage.getItem("theme")=="light"){

document.body.classList.add("dark");

theme.innerHTML="☀️";

}

// ==========================
// Button Ripple
// ==========================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const circle=document.createElement("span");

circle.style.position="absolute";

circle.style.width="20px";

circle.style.height="20px";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.5)";

circle.style.left=e.offsetX+"px";

circle.style.top=e.offsetY+"px";

circle.style.transform="translate(-50%,-50%)";

circle.style.animation="ripple .6s linear";

btn.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ==========================
// Card Animation
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

observer.observe(card);

});

// ==========================
// Button Sound
// ==========================

const click=new Audio("click.mp3");

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

click.currentTime=0;

click.play();

});

});

// ==========================
// Header Shadow
// ==========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 0 30px cyan";

}else{

header.style.boxShadow="none";

}

});

// ==========================
// Clock
// ==========================

setInterval(()=>{

let now=new Date();

console.log(now.toLocaleTimeString());

},1000);

const sidebar=document.getElementById("sidebar");

const menuBtn=document.getElementById("menuBtn");

const overlay=document.getElementById("overlay");

menuBtn.onclick=()=>{

sidebar.classList.add("active");

overlay.classList.add("active");

}

overlay.onclick=()=>{

sidebar.classList.remove("active");

overlay.classList.remove("active");

}
// ==========================
// Welcome
// ==========================

console.log("Welcome To Zrx Launcher");

// ==========================
// End
// ==========================
