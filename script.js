AOS.init({
duration:1000,
once:true
});

window.onscroll=function(){

let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

};


const toggle=document.getElementById("theme-toggle");

// Check for saved theme preference or default to light mode
if(localStorage.getItem("theme")=="dark"){
document.body.classList.add("dark-mode");
toggle.innerHTML='<i class="fas fa-sun"></i>';
}

toggle.onclick=function(){
document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
toggle.innerHTML='<i class="fas fa-sun"></i>';
}else{
localStorage.setItem("theme","light");
toggle.innerHTML='<i class="fas fa-moon"></i>';
}
};


const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");
const c=+counter.innerText;

const increment=target/200;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;
setTimeout(updateCounter,10);

}else{
counter.innerText=target;
}

};

updateCounter();

});


const images=document.querySelectorAll(".project-card3d img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{
lightbox.style.display="none";
});


const cards=document.querySelectorAll(".project-card3d");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

let rect=card.getBoundingClientRect();

let x=e.clientX-rect.left;
let y=e.clientY-rect.top;

let centerX=rect.width/2;
let centerY=rect.height/2;

let rotateX=(y-centerY)/10;
let rotateY=(centerX-x)/10;

card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});