/* ===========================================
   ZRX LAUNCHER
   SCRIPT.JS
   PART 1
===========================================*/

/* ---------- Loading ---------- */

window.addEventListener("load",()=>{

const loading=document.getElementById("loading");

setTimeout(()=>{

loading.style.opacity="0";

loading.style.visibility="hidden";

loading.style.pointerEvents="none";

},1200);

});

/* ---------- Particles ---------- */

if(typeof particlesJS!=="undefined"){

particlesJS("particles-js",{

particles:{

number:{
value:80,
density:{
enable:true,
value_area:900
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

line_linked:{
enable:true,
distance:140,
color:"#00ffff",
opacity:.3,
width:1
},

move:{
enable:true,
speed:2
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
},

resize:true

},

modes:{

grab:{
distance:180
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});

}

/* ---------- Cursor ---------- */

const cursor=document.getElementById("cursor");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

}

/* ---------- Scroll Progress ---------- */

const progress=document.getElementById("bar");

window.addEventListener("scroll",()=>{

if(!progress)return;

const winScroll=

document.documentElement.scrollTop||

document.body.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const percent=(winScroll/height)*100;

progress.style.width=percent+"%";

});

/* ---------- Console ---------- */

console.log("ZRX Launcher Loaded");
/* ===========================================
   ZRX LAUNCHER
   SCRIPT.JS
   PART 2
===========================================*/

/* ---------- Sidebar ---------- */

const menuBtn=document.getElementById("menuBtn");
const sidebar=document.getElementById("sidebar");
const overlay=document.getElementById("overlay");

if(menuBtn && sidebar && overlay){

menuBtn.addEventListener("click",()=>{

sidebar.classList.add("active");

overlay.classList.add("active");

document.body.style.overflow="hidden";

});

overlay.addEventListener("click",closeSidebar);

function closeSidebar(){

sidebar.classList.remove("active");

overlay.classList.remove("active");

document.body.style.overflow="auto";

}

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeSidebar();

}

});

}

/* ---------- Theme ---------- */

const themeBtn=document.getElementById("theme");

function applyTheme(theme){

if(theme==="light"){

document.body.classList.add("light");

themeBtn.textContent="☀️";

}else{

document.body.classList.remove("light");

themeBtn.textContent="🌙";

}

}

const savedTheme=localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);

if(themeBtn){

themeBtn.addEventListener("click",()=>{

const newTheme=document.body.classList.contains("light")

? "dark"

: "light";

applyTheme(newTheme);

localStorage.setItem("theme",newTheme);

});

}

/* ---------- Toast ---------- */

const toast=document.getElementById("toast");

function showToast(text){

if(!toast)return;

toast.textContent=text;

toast.classList.add("show");

clearTimeout(window.toastTimer);

window.toastTimer=setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

/* ---------- Download Button ---------- */

const downloadBtn=document.getElementById("downloadBtn");

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

showToast("📥 دانلود آغاز شد...");

});

}

/* ---------- Language ---------- */

const languageBtn=document.getElementById("language");

const lang=localStorage.getItem("language") || "fa";

if(languageBtn){

languageBtn.textContent=lang.toUpperCase();

languageBtn.addEventListener("click",()=>{

const current=

localStorage.getItem("language") || "fa";

const next=current==="fa"

? "en"

: "fa";

localStorage.setItem("language",next);

languageBtn.textContent=next.toUpperCase();

showToast(

next==="fa"

? "زبان فارسی فعال شد"

: "English Enabled"

);

});

}
/* ===========================================
   ZRX LAUNCHER
   SCRIPT.JS
   PART 3
   Cards + Ripple + Slider + 3D
===========================================*/

/* ---------- Card Animation ---------- */

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
entry.target.style.transition=".8s";

}else{

entry.target.style.opacity=".3";

}

});

},{threshold:.25});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(80px)";

observer.observe(card);

});

/* ---------- 3D Hover ---------- */

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((rect.height/2-y)/rect.height)*18;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

/* ---------- Ripple Effect ---------- */

document.querySelectorAll("button").forEach(btn=>{

btn.style.position="relative";
btn.style.overflow="hidden";

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const size=Math.max(btn.clientWidth,btn.clientHeight);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.left=e.offsetX-size/2+"px";
ripple.style.top=e.offsetY-size/2+"px";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.35)";

ripple.style.pointerEvents="none";

ripple.style.animation="ripple .6s linear";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ---------- Slider ---------- */

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(index){

if(slides.length===0)return;

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

showSlide(currentSlide);

const nextBtn=document.getElementById("nextSlide");
const prevBtn=document.getElementById("prevSlide");

if(nextBtn){

nextBtn.onclick=()=>{

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

};

}

if(prevBtn){

prevBtn.onclick=()=>{

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

};

}

/* ---------- Auto Play ---------- */

setInterval(()=>{

if(slides.length===0)return;

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

},5000);

/* ---------- Touch Support ---------- */

let startX=0;

const slider=document.querySelector(".slider");

if(slider){

slider.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(endX<startX-50){

nextBtn?.click();

}

if(endX>startX+50){

prevBtn?.click();

}

});

}
/* ===========================================
   ZRX LAUNCHER
   SCRIPT.JS
   PART 4
   Music + Settings + Download Counter
===========================================*/

/* ---------- Music Player ---------- */

const music=document.getElementById("music");

if(music){

music.volume=.6;

const savedVolume=localStorage.getItem("musicVolume");

if(savedVolume){

music.volume=parseFloat(savedVolume);

}

music.addEventListener("volumechange",()=>{

localStorage.setItem(

"musicVolume",

music.volume

);

});

}

/* ---------- Settings ---------- */

const settingsModal=document.getElementById("settingsModal");

const saveSettings=document.getElementById("saveSettings");

const languageSelect=document.getElementById("langSelect");

const themeSelect=document.getElementById("themeSelect");

if(saveSettings){

const savedLang=

localStorage.getItem("language")||"fa";

const savedTheme=

localStorage.getItem("theme")||"dark";

languageSelect.value=savedLang;

themeSelect.value=savedTheme;

saveSettings.addEventListener("click",()=>{

localStorage.setItem(

"language",

languageSelect.value

);

localStorage.setItem(

"theme",

themeSelect.value

);

applyTheme(themeSelect.value);

settingsModal.style.display="none";

showToast("✅ تنظیمات ذخیره شد");

});

}

/* ---------- Download Counter ---------- */

const downloadCount=

document.getElementById("downloadCount");

async function loadDownloads(){

try{

const response=

await fetch("downloads.json");

const data=

await response.json();

if(downloadCount){

downloadCount.textContent=

data.downloads.toLocaleString();

}

}catch(error){

console.log(error);

}

}

loadDownloads();

/* ---------- Language System ---------- */

const dictionary={

fa:{

welcome:"به Zrx Launcher خوش آمدید",

download:"دانلود آغاز شد..."

},

en:{

welcome:"Welcome To Zrx Launcher",

download:"Download Started..."

}

};

function getLanguage(){

return localStorage.getItem("language")||"fa";

}

/* ---------- Download Button ---------- */

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

const lang=getLanguage();

showToast(

dictionary[lang].download

);

});

}

/* ---------- Close Settings ---------- */

window.addEventListener("click",(e)=>{

if(e.target===settingsModal){

settingsModal.style.display="none";

}

});

/* ---------- Keyboard Shortcut ---------- */

document.addEventListener("keydown",(e)=>{

if(e.ctrlKey&&e.key==="m"){

if(music){

music.paused

? music.play()

: music.pause();

}

}

});

/* ---------- Welcome ---------- */

console.log(

"🚀 ZRX Launcher Ready"

);
/* ===========================================
   ZRX LAUNCHER
   SCRIPT.JS
   PART 5
   PWA + Online/Offline + Notifications
===========================================*/

/* ---------- Service Worker ---------- */

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker
.register("sw.js")
.then(()=>{

console.log("✅ Service Worker Registered");

})
.catch((err)=>{

console.error(err);

});

});

}

/* ---------- Install PWA ---------- */

let deferredPrompt=null;

window.addEventListener(

"beforeinstallprompt",

(e)=>{

e.preventDefault();

deferredPrompt=e;

showToast("📱 برنامه قابل نصب است");

});

async function installApp(){

if(!deferredPrompt){

return;

}

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt=null;

}

/* ---------- Online ---------- */

window.addEventListener("online",()=>{

showToast("🌐 اینترنت وصل شد");

});

/* ---------- Offline ---------- */

window.addEventListener("offline",()=>{

showToast("📡 حالت آفلاین فعال شد");

});

/* ---------- Network Status ---------- */

function updateNetworkStatus(){

if(navigator.onLine){

console.log("ONLINE");

}else{

console.log("OFFLINE");

}

}

updateNetworkStatus();

/* ---------- Visibility ---------- */

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

console.log("Hidden");

}else{

console.log("Visible");

}

});

/* ---------- Notification ---------- */

async function requestNotification(){

if(!("Notification" in window)){

return;

}

if(Notification.permission==="default"){

await Notification.requestPermission();

}

}

requestNotification();

function sendNotification(title,body){

if(Notification.permission==="granted"){

new Notification(title,{

body:body,

icon:"icon-192.png"

});

}

}

/* ---------- Install Button ---------- */

const installButton=

document.getElementById("installBtn");

if(installButton){

installButton.addEventListener(

"click",

()=>{

installApp();

});

}

/* ---------- Auto Notification ---------- */

setTimeout(()=>{

if(Notification.permission==="granted"){

sendNotification(

"ZRX Launcher",

"به لانچر خوش آمدید 🚀"

);

}

},5000);

/* ---------- Save Version ---------- */

localStorage.setItem(

"launcherVersion",

"1.0"

);

/* ---------- End Of Part 5 ---------- */

console.log("PART 5 Loaded");
/* ===========================================
   ZRX LAUNCHER
   SCRIPT.JS
   PART 6
   FINAL
===========================================*/

/* ---------- Performance ---------- */

function optimizePerformance(){

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.loading="lazy";

img.decoding="async";

});

}

optimizePerformance();

/* ---------- FPS Counter ---------- */

let fps=0;

let lastTime=performance.now();

function updateFPS(){

const now=performance.now();

fps=Math.round(1000/(now-lastTime));

lastTime=now;

requestAnimationFrame(updateFPS);

}

requestAnimationFrame(updateFPS);

/* ---------- Card Glow ---------- */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=

"0 0 50px cyan";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

/* ---------- Keyboard Shortcuts ---------- */

document.addEventListener("keydown",(e)=>{

if(e.key==="F1"){

e.preventDefault();

showToast("⌨️ میانبر فعال شد");

}

if(e.ctrlKey && e.key==="d"){

e.preventDefault();

downloadBtn?.click();

}

});

/* ---------- Welcome Animation ---------- */

setTimeout(()=>{

showToast("🚀 به ZRX Launcher خوش آمدید");

},1500);

/* ---------- Memory Cleaner ---------- */

setInterval(()=>{

if(window.gc){

try{

window.gc();

}catch(e){}

}

},60000);

/* ---------- Console Style ---------- */

console.log(

"%cZRX Launcher",

"color:cyan;font-size:26px;font-weight:bold;"

);

console.log(

"%cCreated with HTML CSS JavaScript",

"color:white;font-size:15px;"

);

/* ---------- Footer Year ---------- */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* ---------- Smooth Scroll ---------- */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ---------- Resize ---------- */

window.addEventListener("resize",()=>{

console.log(

window.innerWidth,

window.innerHeight
   

);

});

/* ---------- End ---------- */

console.log("✅ ZRX Launcher Ready");
consoleLog.scrollTop=consoleLog.scrollHeight;

}

window.addEventListener("load",()=>addLog("success","Launcher Started"));

downloadBtn?.addEventListener("click",()=>addLog("info","Download Started"));

saveSettings?.addEventListener("click",()=>addLog("success","Settings Saved"));

clearConsole?.addEventListener("click",()=>{

consoleLog.innerHTML="";

});
/* ==========================
   Developer Console
========================== */

const consoleLog = document.getElementById("consoleLog");
const clearConsole = document.getElementById("clearConsole");

function addLog(type, text){

if(!consoleLog) return;

const time = new Date().toLocaleTimeString();

const log = document.createElement("div");

log.className = "log " + type;

log.innerHTML = `
<span class="time">${time}</span>
<span class="type">${type.toUpperCase()}</span>
<span class="text">${text}</span>
`;

consoleLog.appendChild(log);

consoleLog.scrollTop = consoleLog.scrollHeight;

}

// هنگام اجرای سایت

window.addEventListener("load",()=>{

addLog("success","Zrx Launcher Started");

});

// دکمه دانلود

const downloadBtn = document.getElementById("downloadBtn");

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

addLog("info","Download Started");

});

}

// دکمه ذخیره تنظیمات

const saveSettings = document.getElementById("saveSettings");

if(saveSettings){

saveSettings.addEventListener("click",()=>{

addLog("success","Settings Saved");

});

}

// پاک کردن کنسول

if(clearConsole){

clearConsole.addEventListener("click",()=>{

consoleLog.innerHTML="";

addLog("warning","Console Cleared");

});

   }
