let landingpage = document.querySelector(".landing-page");
let settingbox = document.querySelector(".setting-box");
let settingicon = document.querySelector(".setting-icon");
let sicon     = document.querySelector(".setting-icon i");
var images = ['url(images/1.jpg)','url(images/2.jpg)', 'url(images/8.png)', 'url(images/4.jpg)','url(images/7.jpeg)','url(images/6.jpg)'];
var colorList = document.querySelectorAll(".colorlist li");
var currentcolor = localStorage.getItem("current-color");
var randombackgroundopt = document.querySelectorAll(".randombackground-box ul li");
var backgroundchange = true;
var getcurrentbackground = localStorage.getItem("currentBackground");
var backgroundInterval;
var backgroundoption = localStorage.getItem("background-option");
var progressV = document.querySelectorAll("progress");
var reset = document.getElementById("reset");
var reference =document.querySelector('.reference')







if(getcurrentbackground !==null){
  landingpage.style.backgroundImage = getcurrentbackground;
}


if(backgroundoption !==null){
  randombackgroundopt.forEach(li =>{
    li.classList.remove('active')
  });
  if(backgroundoption === 'true'){
    backgroundchange = true;
  document.querySelector('.yes').classList.add('active')
  }else{
    backgroundchange= false;
    document.querySelector('.no').classList.add('active')
  }
}

randombackgroundopt.forEach(li =>{
  li.addEventListener('click', (e) => {
    randombackgroundopt.forEach(list =>{
      list.classList.remove("active");
    });
    e.target.classList.add("active");
    if(e.target.dataset.background === "change"){
      backgroundchange = true;
      changingcolor()
      localStorage.setItem("background-option", true);
    }else{
      localStorage.setItem("background-option", false)
      clearInterval(backgroundInterval)

    }

  });

})




if(currentcolor !== null){
  document.documentElement.style.setProperty ("--main-color", currentcolor);
  colorList.forEach(color => {
    color.classList.remove("active");
    if(color.dataset.color === currentcolor){
      color.classList.add("active");
    }})
  }




function changingcolor() {
  if(backgroundchange === true){
    backgroundInterval = setInterval(function(){
       let randomnumber = Math.floor(Math.random()*images.length);
       landingpage.style.backgroundImage = images[randomnumber];
       localStorage.setItem("currentBackground", landingpage.style.backgroundImage)
   },7000)
  }
}



settingicon.addEventListener('click', (e) => {
    settingbox.classList.toggle ("open");
    sicon.classList.toggle("fa-spin")
});

colorList.forEach(function changeColor(color){
  color.addEventListener('click', (e) => {
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    localStorage.setItem ("current-color", e.target.dataset.color);
    var result = e.target.dataset.color

        handledactive(e);
  });
});
changingcolor();

window.onscroll = function (){

    progressV.forEach((bar) => {
      if(window.scrollY < 615){
        bar.setAttribute("value", 0);
    }else{
      bar.setAttribute("value", bar.dataset.value)
    }});
  }

// *************************************
//        popup-display
// *************************************

var popupoverlay = document.querySelector(".popup-overlay");
var popupimage = document.querySelector(".popup-box img");
var galleryimages = document.querySelectorAll(".gallery .gallery-images img");
var pcaption = document.querySelector(".popup-box .popup-info p");

galleryimages.forEach( (image)=>{
  image.onclick = function(){
    popupoverlay.style.display = "block";
    popupimage.setAttribute("src", this.getAttribute("src"));
    pcaption.textContent =  this.getAttribute("alt");

  }
})

var times = document.querySelector(".popup-info i");

times.onclick= function(){
  popupoverlay.style.display = "none";
}

// *************************************
//        bullets Start
// *************************************

    var bullets = document.querySelectorAll(".bullet");
    var secname = document.querySelectorAll(".sec-name");

    bullets.forEach((bullet) => {
      bullet.onmouseover = function(){
        bullet.parentElement.querySelector(".sec-name").style.visibility = "visible";
      };
      bullet.onmouseout = function(){
        bullet.parentElement.querySelector(".sec-name").style.visibility = "hidden";
      }
    });



// var showbullets = document.querySelector(".showbullets .options");
var bulletsoption = document.querySelectorAll(".showbullets .options li");
var bulletopt = localStorage.getItem("bulletsoption");

if(bulletopt !==null){
  bulletsoption.forEach((bulletoption)=>{
    bulletoption.classList.remove("active");
    if(bulletoption.dataset.display===bulletopt){
      bulletoption.classList.add("active");
    }if(bulletopt ==="hide"){
      bullets.forEach((bull)=>{
        bull.style.display ="none"
      })
    }else{
      bullets.forEach((bull)=>{
        bull.style.display ="block"
      })
    }
  });
}



   bulletsoption.forEach((bullet) => {
     bullet.addEventListener('click', (e) => {
       handledactive(e);
       if(e.target.dataset.display==="hide"){
         bullets.forEach((bull)=>{
           bull.style.display ="none"
         })
       }else{
         bullets.forEach((bull)=>{
           bull.style.display ="block";
         })
       };
      localStorage.setItem("bulletsoption", e.target.dataset.display)
   });
});



// *************************************
//        bullets End
// *************************************
function handledactive(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach((item) => {
    item.classList.remove("active")
  });
  ev.target.classList.add("active")
}
//
// *****************************************************
reset.onclick= ()=>{
  localStorage.clear();
  window.location.reload();
}

// *****************************************************
           // ul-toggle-links for small mobiles
// *****************************************************

var ultoggle = document.querySelector(".header-section .ul-toggle-links");
var ulinks = document.querySelector(".landing-page .header-section ul")
ultoggle.onclick = ()=>{
  ultoggle.classList.toggle("active");
  if(ultoggle.classList.contains("active")){
    ulinks.style.left = "0"
    reference.style.display="none";

  }else{
    ulinks.style.left = "100%";

  }
}


window.onscroll= function(){if(window.scrollY > 543){
  document.querySelector('.header-overlay').style.backgroundColor ="rgba(0,0,0,.2)";
}else {
document.querySelector('.header-overlay').style.backgroundColor ="transparent";
}}
