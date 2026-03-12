AOS.init();


window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.classList.add("scrolled");

}else{

nav.classList.remove("scrolled");

}

});


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

window.scrollTo({

top:target.offsetTop-70,
behavior:"smooth"

});

});

});