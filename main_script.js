// CALLS ----------------------------------------------------------------------------------------------
var loadedOnMobile = 1;
var mobileSIZE = 0;
var diffSize = 0; //0pc 1tablet 2mobile

var navshowandhide = 0;
var firstload = 1;
var iswindowmoving = 0;

var navID = 1;
var navItems = 1;
var rotateNav = 0;
var currentnav = 0;
var oldnav = 0;

var charpopup = Cookies.get('charpopup'); // => 'value'

var sexypopup1 = Cookies.get('sexypopup1'); // => 'value'
var sexypopup2 = Cookies.get('sexypopup2'); // => 'value'

var startJourney = 0;
var allowHoverEvent = 1;

var allownotfisound = 0;

var waitForFinalEvent = (function () {
var timers = {};
return function (callback, ms, uniqueId) {
    if (!uniqueId) {
    uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
    clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
};
})();



// IF LOADED ON MOBILE ---------AND RESIZE EVENTS -------------------------------------------------------------------------

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     loadedOnMobile = 0;
}


$(document).ready(function() {
    if ($(window).width() < 1530) {
        mobileSIZE = 1;
        diffSize = 1;
    }
    else if ($(window).width() < 770 || $(window).height() < 590) {
        mobileSIZE = 1;
        diffSize = 2; 
    }
    else {
        mobileSIZE = 0;
        diffSize = 0;   
    }
    hideNAVFUNCTION();
    mobileTEST();
});

var resizetimer = 0;

$( window ).on( "resize", function() {
    window.location.reload() //add this at the last minute because the site keeps breaking when people resize. I thought it was fine ffs.
    if (resizetimer==0) {
        resizetimer = 1;
        waitForFinalEvent(function() { 
            if ($(window).width() < 1530) {
                mobileSIZE = 1;
                diffSize = 1;  
            }
            else if ($(window).width() < 770 || $(window).height() < 590) {
                mobileSIZE = 1;
                diffSize = 2;
            }
            else {
                mobileSIZE = 0;
                diffSize = 0;  
            }
            
            iswindowmoving = 1;
            hideNAVFUNCTION();
            mobileTEST();
            journeyHideMobile();
            resizetimer = 0;
        }, 500,);
    }
});

//This will call to hide the nav so it can reset whenever someone resizes their screen ----------------------

function mobileTEST() {
    if (mobileSIZE == 1) {
            rotateNav = 0;
            rotNAV();
            hideMENUwhenMobile();
            
            gsap.to(".rotate-nav-container", { delay:0, opacity: 1, x: -700, duration: 1.5,  ease: "power4.inOut",});
            gsap.to(".nav-in-container", { display:"block" ,  ease: "power4.inOut",});
            gsap.to(".nav-mobile-container", { marginTop: "20px",display:"block" ,  ease: "power4.inOut",});
            gsap.to(".nav .navlink", { height:"50px" ,  ease: "power4.inOut",});
            gsap.to(".nav-icon-container", { margin:"auto" , display: "block", ease: "power4.inOut",});
            return;
        }
        if (mobileSIZE == 0) {
            rotateNav = 1;
            rotNAV();
            hideMENUwhenMobile();

            gsap.to(".rotate-nav-container", { delay:0, opacity: 1, x: 0, duration: 1.5,  ease: "power4.inOut",});
            gsap.to(".nav-in-container", { display:"flex" ,  ease: "power4.inOut",});
            gsap.to(".nav-mobile-container", { marginTop: "0px", display:"flex" ,  ease: "power4.inOut",});
            gsap.to(".nav .navlink", { height:"90px" ,  ease: "power4.inOut",});
            gsap.to(".nav-icon-container", { margin:"0px 25px" , display: "inline-block", ease: "power4.inOut",});
            return;
        }
}

//Hidden when on mobile -------------------------------------------------------------------------------------------------------------
function hideMENUwhenMobile() {
    gsap.to(".nav", {  delay:0, opacity:0 , y:"-100vh" ,  ease: "power4.inOut",});
    gsap.to(".nav", {  delay:1, opacity:1 , y:"0" ,  ease: "power4.inOut",});
}


        
//Everythign to do with the nav -----------------------------------------------------------------------------------------------------

$('.nav-icon-container').click(function(){
    hideNAVFUNCTION();

});

$('.nav-icon-hanburger-container').click(function(){
    hideNAVFUNCTION();

});

function hideNAVFUNCTION(){
    if (firstload==1) {
        if (mobileSIZE==1) {
            navID =1;
            
        }
        if (mobileSIZE==0) {
            
            return;
        }
    }
    if (iswindowmoving == 1){

        if (mobileSIZE == 1) {
            navID =1;
        }
        else {
            navID =0;
        }
        iswindowmoving = 0;
    }

    if (navID == 1) {
        gsap.to(".navlink1", { pointerEvents: "none", delay:0.0, opacity: 0, y: -500, duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".navlink2", { pointerEvents: "none", delay:0.1, opacity: 0, y: -500, duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".navlink3", { pointerEvents: "none", delay:0.2, opacity: 0, y: -500, duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".navlink4", { pointerEvents: "none", delay:0.3, opacity: 0, y: -500, duration: 0.5,  ease: "power4.inOut", });

        $(".nav-iconA").addClass("iconHide");


        if (mobileSIZE == 1) {
            gsap.to(".m1-container", { delay:0.3, marginTop:"0px", duration: 0.5,  ease: "power4.inOut",  });
            gsap.to(".m2-container", { delay:0.3, marginTop:"0px", duration: 0.5,  ease: "power4.inOut",  });
            gsap.to(".about-container", { delay:0.3, marginTop:"0px", duration: 0.5,  ease: "power4.inOut",  });
            gsap.to(".nav-in-container", { delay:0.3, background:"rgba(0,0,0,0.0)", duration: 0.5,  ease: "power4.inOut",  });
            gsap.to(".nav-mobile-container", { delay:0.0, pointerEvents:'none'  });
            
            
            
        }

        gsap.to(".nav-icon-hanburger", { delay:0, transform:"translate(-6px, 5px) rotate(45deg)"  , ease: "power4.inOut",});
        gsap.to(".nav-icon-hanburger2", { delay:0, transform:"translate(6px, 0px) rotate(-45deg)", ease: "power4.inOut",});

        navID = 0;
        return;
    }
    if (navID == 0) {
        gsap.to(".navlink1", { pointerEvents: "all", delay:0.0, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".navlink2", { pointerEvents: "all", delay:0.1, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".navlink3", { pointerEvents: "all", delay:0.2, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".navlink4", { pointerEvents: "all", delay:0.3, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });

        $(".nav-iconA").removeClass("iconHide");

        if (mobileSIZE == 1) {
            //gsap.to(".m1-container", { marginTop:"330px", duration: 0.1,  });
            //gsap.to(".about-container", { marginTop:"330px", duration: 0.1,  });
            gsap.to(".nav-in-container", { delay:0.3, height:"100vh", background:"rgba(0,0,0,0.5)", duration: 0.5,  ease: "power4.inOut",  });
            gsap.to(".nav-mobile-container", { delay:0.0, pointerEvents:'all'  });
                
        }
        else {
            gsap.to(".nav-in-container", { delay:0.3, height:"max-content", background:"rgba(0,0,0,0.0)", duration: 0.5,  ease: "power4.inOut",  });
        }
        gsap.to(".nav-icon-hanburger", { delay:0, transform:"translate(6px, 5px) rotate(45deg)"  , ease: "power4.inOut",});
        gsap.to(".nav-icon-hanburger2", { delay:0, transform:"translate(-6px, 0px) rotate(-45deg)", ease: "power4.inOut",});

        navID = 1;
        return;
    }
} 




$('.nav-mobile-container').click(function(){
    if (mobileSIZE == 1) {
    hideNAVFUNCTION();
    }
});	

$('.navlink1_o').click(function(){
    navItems = 1;
    CALLNAV();
});	

$('.navlink2_o').click(function(){
    navItems = 2;
    CALLNAV();
});	

$('.navlink3_o').click(function(){
    navItems = 3;
    CALLNAV();
});	

$('.navlink4_o').click(function(){
    navItems = 4;
    CALLNAV();
});	


$('.rotate-nav').click(function(){
    rotNAV();
    $('.stoptouchingme2').css('pointer-events', 'all');
    setTimeout(allowTouchNavMove, 2000);
});

function allowTouchNavMove(){
    $('.stoptouchingme2').css('pointer-events', 'none');
}

function navMOVE(){
    
    firstload = 0;
    if (navshowandhide==0){
        navSHOW();
        navshowandhide = 1;
        return;
    }
    if (navshowandhide==1){
        navHIDE();
        navshowandhide = 0;
        return;
    }		

}
function rotNAV() {
    if (rotateNav == 0) {
        if (mobileSIZE == 1) {
            gsap.to(".nav-in-container", { delay:1, paddingLeft:"0px" ,  ease: "power4.inOut",});
            

        }
        else {
            gsap.to(".nav-in-container", { delay:1, paddingLeft:"50px" ,  ease: "power4.inOut",});
        }

        gsap.to(".nav-rot-container", { delay:1, transform: "rotate(0deg)", });
        gsap.to(".nav-icon-container canvas", { delay:1,transform: "rotate(90deg)", });
        gsap.to(".nav-rot-container", { delay:1, width: "100vw", });
        if (firstload == 0){
            navMOVE();
        }

        setTimeout(navMOVE, 1000);
        rotateNav = 1;
        return;
    }
    else {
        if (mobileSIZE == 1) {
            gsap.to(".nav-in-container", { delay:1, paddingLeft:"0px" ,  ease: "power4.inOut",});
            
        }
        else {
            gsap.to(".nav-in-container", { delay:1, paddingLeft:"0px" ,  ease: "power4.inOut",});
        }
        gsap.to(".nav-rot-container", { delay:1, transform: "rotate(90deg)", });
        gsap.to(".nav-icon-container canvas", { delay:1, transform: "rotate(0deg)", });
        gsap.to(".nav-rot-container", { delay:1, width: "100vh", });

        if (firstload == 0){
            navMOVE();
        }
        setTimeout(navMOVE, 1000);
        rotateNav = 0;
        return;
    }

}


function navSHOW() { //this is for whenever the nav is moved from top to side 


    gsap.to(".nav-icon-container", { opacity: 1, x: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".nav-icon-hanburger-container", { opacity: 1, x: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink1", { delay:0.1, opacity: 1, x: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink2", { delay:0.2, opacity: 1, x: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink3", { delay:0.3, opacity: 1, x: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink4", { delay:0.4, opacity: 1, x: 0, duration: 1,  ease: "power4.inOut", });
}
function navHIDE() {

    gsap.to(".nav-icon-container", { delay:0.1, opacity: 0, x: -1100, duration: 1,  ease: "power4.inOut", });
    gsap.to(".nav-icon-hanburger-container", { delay:0.3, opacity: 0, x: -1100, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink1", { delay:0.4, opacity: 0, x: 1100, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink2", { delay:0.3, opacity: 0, x: 1100, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink3", { delay:0.2, opacity: 0, x: 1100, duration: 1,  ease: "power4.inOut", });
    gsap.to(".navlink4", { delay:0.1, opacity: 0, x: 1100, duration: 1,  ease: "power4.inOut", });
}


CALLNAV();
function DontTouchMeFunction(){
    $('.stoptouchingme').css('pointer-events', 'none');
}
function CALLNAV(){
    
    $('.stoptouchingme').css('pointer-events', 'all');
    setTimeout(DontTouchMeFunction, 500);
    
    if (navItems == 1) {
        gsap.to("#journey .home-button-tag", { pointerEvents: "all", });
        gsap.to("#journey .home-button", { pointerEvents: "all", });
        currentnav = 1;
       
        gsap.to("#ABOUTMAIN ", { pointerEvents: "none", delay:0.1, opacity: 0, y: 0, duration: 0.5,  ease: "power4.inOut", });
        gsap.to("#press-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
        gsap.to("#character-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".character-pop-up", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (navItems == 2) {
        if (currentnav != 2) {
            gsap.to("#ABOUTMAIN ", { pointerEvents: "all", delay:0.1, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });
            currentnav = 2;
        }     
        else {
            gsap.to("#ABOUTMAIN ", { pointerEvents: "none", delay:0.1, opacity: 0, y: 0, duration: 0.5,  ease: "power4.inOut", });
            currentnav = 1;
        }

        gsap.to("#press-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
        gsap.to("#character-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".character-pop-up", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (navItems == 3) {
        if (currentnav != 3) {
            gsap.to("#press-sheet ", { pointerEvents: "all", delay:0.1, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });
            gsap.to("#press-sheet .home-button-tag", { pointerEvents: "all", });
            gsap.to("#press-sheet  .home-button", { pointerEvents: "all", });
            currentnav = 3;
        }     
        else {
            gsap.to("#press-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
            gsap.to("#press-sheet .home-button-tag", { pointerEvents: "none", });
            gsap.to("#press-sheet  .home-button", { pointerEvents: "none", });
            currentnav = 1;
        }

        gsap.to("#ABOUTMAIN ", { pointerEvents: "none", delay:0.1, opacity: 0, y: 0, duration: 0.5,  ease: "power4.inOut", });
        gsap.to("#character-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
        gsap.to(".character-pop-up", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (navItems == 4) {
        if (currentnav != 4) {
            gsap.to("#character-sheet ", { pointerEvents: "all", delay:0.1, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });
            currentnav = 4;
            if (charpopup != "" && charpopup != "1") {
                setTimeout(charpopupFUN, 3000);
            } 
        }     
        else {
            gsap.to("#character-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
            gsap.to(".character-pop-up", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
            currentnav = 1;
        }
        
        gsap.to("#ABOUTMAIN ", { pointerEvents: "none", delay:0.1, opacity: 0, y: 0, duration: 0.5,  ease: "power4.inOut", });
        gsap.to("#press-sheet ", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
    }

    if (navItems != 1) {
        
        gsap.to("#journey .home-button-tag", { pointerEvents: "none", });
        gsap.to("#journey .home-button", { pointerEvents: "none", });
    }


}
function charpopupFUN() {
    gsap.to(".character-pop-up ", { pointerEvents: "all", delay:0.1, opacity: 1, y: 0, duration: 0.5,  ease: "power4.inOut", });
}

    
    

    // This is all placed here because we must call if we are loaded on mobile first

var siteIcon = new hoverEffect({
    parent: document.querySelector('.nav-icon-container'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle1: Math.PI / 1,
    angle2: Math.PI / 3,
    image1: '/images/clear.png',
    image2: '/images/scalie-bloke-avatar-2022.png',
    displacementImage: '/scripts/heightMap.png',
    speedIn: 1,
    speedOut: 1,
});

var titleImage = new hoverEffect({
    parent: document.querySelector('.item1'),
    intensity1: 0.2,
    intensity2: 0.2,
    angle1: Math.PI / 1,
    angle2: Math.PI / 3,
    image1: '/images/mascot-photo.webp',
    image2: '/images/clear.png',
    displacementImage: '/scripts/heightMap.png',
    hover: false,
    speedIn: 1,
    speedOut: 1,
});

var titleForeL = new hoverEffect({
    parent: document.querySelector('.j-fore-l-in'),
    intensity1: 0.6,
    intensity2: 0.6,
    angle1: Math.PI / 3,
    angle2: Math.PI / 3,
    
    image1: '/images/buildings/buildings-fore-l.webp',
    image2: '/images/clear.png',
    displacementImage: '/scripts/heightMap.png',
    hover: false,
    speedIn: 1,
    speedOut: 1,
});

var titleForeR = new hoverEffect({
    parent: document.querySelector('.j-fore-r-in'),
    intensity1: 0.6,
    intensity2: 0.6,
    angle1: Math.PI / 0.9,
    angle2: Math.PI / 0.9,
    
    image1: '/images/buildings/buildings-fore-r.webp',
    image2: '/images/clear.png',
    displacementImage: '/scripts/heightMap.png',
    hover: false,
    speedIn: 1,
    speedOut: 1,
});

if (loadedOnMobile == 1){
    var titleFore1 = new hoverEffect({
        parent: document.querySelector('.j-fore-1-in'),
        intensity1: 0.1,
        intensity2: 0.1,
        angle1: Math.PI / 4,
        angle2: Math.PI / 4,
        
        image1: '/images/buildings/buildings-fore-1.webp',
        image2: '/images/clear.png',
        displacementImage: '/scripts/heightMap.png',
        hover: false,
        speedIn: 1,
        speedOut: 1,
    });

    var titleFore2 = new hoverEffect({
        parent: document.querySelector('.j-fore-2-in'),
        intensity1: 0.6,
        intensity2: 0.6,
        angle1: Math.PI / 0.9,
        angle2: Math.PI / 0.9,
        
        image1: '/images/buildings/buildings-fore-2.webp',
        image2: '/images/clear.png',
        displacementImage: '/scripts/heightMap.png',
        hover: false,
        speedIn: 1,
        speedOut: 1,
    });

}	
if (loadedOnMobile == 0) {
    var titleBackground = new hoverEffect({
        parent: document.querySelector('.j-back-m'),
        intensity1: 1.1,
        intensity2: 1.1,
        angle1: Math.PI / 1,
        angle2: Math.PI / 3,
        image2: '/images/clear.png',
        image1: '/images/buildings/buildings-back-mobile.webp',
        displacementImage: '/scripts/heightMap.png',
        hover: false,
        speedIn: 1,
        speedOut: 1,
    });
}

if (loadedOnMobile == 1){

    var titleBackground = new hoverEffect({
        parent: document.querySelector('.j-back-m'),
        intensity1: 1.1,
        intensity2: 1.1,
        angle1: Math.PI / 1,
        angle2: Math.PI / 3,
        image2: '/images/clear.png',
        image1: '/images/buildings/buildings-back-back.webp',
        displacementImage: '/scripts/heightMap.png',
        hover: false,
        speedIn: 1,
        speedOut: 1,
    });

    var titleBackground2 = new hoverEffect({
        parent: document.querySelector('.j-back-m'),
        intensity1: 1.1,
        intensity2: 1.1,
        angle1: Math.PI / 1,
        angle2: Math.PI / 3,
        image2: '/images/clear.png',
        image1: '/images/buildings/buildings-back-top.webp',
        displacementImage: '/scripts/heightMap.png',
        hover: false,
        speedIn: 1,
        speedOut: 1,
    });

    var titleBackgroundBuild1 = new hoverEffect({
        parent: document.querySelector('.j-back-mn'),
        intensity1: 1.1,
        intensity2: 1.1,
        angle1: Math.PI / 10,
        angle2: Math.PI / 10,
        image2: '/images/clear.png',
        image1: '/images/buildings/buildings-bg-top.webp',
        displacementImage: '/scripts/heightMap.png',
        hover: false,
        speedIn: 1,
        speedOut: 1,
    });

    var titleBackgroundBuild2 = new hoverEffect({
        parent: document.querySelector('.j-back-mno'),
        intensity1: 1.1,
        intensity2: 1.1,
        angle1: Math.PI / 5,
        angle2: Math.PI / 5,
        image2: '/images/clear.png',
        image1: '/images/buildings/buildings-bg-shadow.webp',
        displacementImage: '/scripts/heightMap.png',
        hover: false,
        speedIn: 1,
        speedOut: 1,
    });
}	

var titleForeBlue = new hoverEffect({
    parent: document.querySelector('.j-fore-blue'),
    intensity1: 1.1,
    intensity2: 1.1,
    angle1: Math.PI / 5,
    angle2: Math.PI / 5,
    image2: '/images/clear.png',
    image1: '/images/buildings/buildings-graid.webp',
    displacementImage: '/scripts/heightMap.png',
    hover: false,
    speedIn: 1,
    speedOut: 1,
});


// JOURNEY START ------------------------------------------------------------------------------------------------------------------------

var warningtempcookie = Cookies.get('warningtempcookie'); // => 'value'

if (warningtempcookie == "1") {
    warningtempcover();
}


function JourneyHoverOn(){
    
    
    if (startJourney == 1) {

    }
    else {

        if (allowHoverEvent==1) {
            gsap.to(".hidentext2024 ", { delay:0.0, opacity: 1, duration: 0.1,  ease: "power4.inOut", });
            titleImage.next();
            titleBackground.next();
            if (loadedOnMobile == 1){
                titleBackground2.next();
            
                titleForeL.next();
                titleForeR.next();
                titleBackgroundBuild1.next();
                titleBackgroundBuild2.next();
                titleFore1.next();
                titleFore2.next();
            }
                titleForeBlue.next();
            
                
            
                
        }
        
    gsap.to(".j-fore-socials ", { y:'100%',  delay:0.0, opacity: 0, duration: 0.1,  ease: "power4.inOut", });
        
    gsap.to(".j-fore-blue ", {   delay:0.0, opacity: 0, duration: 0.1,  ease: "power4.inOut", });

    gsap.to(".j-fore-m ", {   delay:0.0, opacity: 0, duration: 1,  ease: "power4.inOut", });
    //gsap.to(".j-fore-r ", {  x: "-100vw", delay:0.2, opacity: 0, duration: 1,  ease: "power4.inOut", });
    //gsap.to(".j-fore-l", {  x: "100vw", delay:0.2, opacity: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".j-fore-r ", { delay:0.0, opacity: 1, duration: 1,  ease: "power4.inOut", });
    gsap.to(".j-fore-l", {  delay:0.0, opacity: 1, duration: 1,  ease: "power4.inOut", });


    gsap.to(".j-back-m  ", { z:"-3vh", x: "0", delay:0.0, opacity: 0, duration: 1,  ease: "power4.inOut", });


    }
}

function JourneyHoverOff(){
    
    if (startJourney == 1) {

    }
    else {
        
    gsap.to(".hidentext2024 ", { delay:0.0, opacity: 0, duration: 0.1,  ease: "power4.inOut", });
    titleImage.previous();
    titleBackground.previous();
    if (loadedOnMobile == 1){
        titleBackground2.previous();

        titleForeL.previous();
        titleForeR.previous();
        titleBackgroundBuild1.previous();
        titleBackgroundBuild2.previous();
        titleFore1.previous();
        titleFore2.previous();
    }
        titleForeBlue.previous();


        


    gsap.to(".j-fore-socials ", { y:'50%',  delay:0.0, opacity: 1, duration: 0.1,  ease: "power4.inOut", });

    gsap.to(".j-fore-blue ", {   delay:0.0, opacity: 1, duration: 0.1,  ease: "power4.inOut", });

    gsap.to(".j-fore-m ", {   delay:0.0, opacity: 1,  duration: 1,  ease: "power4.inOut", });
    //gsap.to(".j-fore-r ", {  x: "-40vw", delay:0.4, opacity: 1, duration: 1,  ease: "power4.inOut", });
    //gsap.to(".j-fore-l ", {  x: "40vw", delay:0.4, opacity: 1, duration: 1,  ease: "power4.inOut", });
    gsap.to(".j-fore-r ", { delay:0.0, opacity: 1, duration: 1,  ease: "power4.inOut", });
    gsap.to(".j-fore-l", {  delay:0.0, opacity: 1, duration: 1,  ease: "power4.inOut", });


    gsap.to(".j-back-m  ", { z:"-3vh", x: "0", delay:0.0, opacity: 1, duration: 1,  ease: "power4.inOut", });

    }
    
}


function startJourneyFun(){
    
    gsap.to("#journey2-container ", {   delay:1.1, display: 'flex',opacity: 1, duration: 1,  ease: "power4.inOut", });
    gsap.to(".item1-container ", {   delay:0.0, display: 'none',opacity: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".item2-container ", {   delay:0.0, display: 'none',opacity: 0, duration: 1,  ease: "power4.inOut", });

    gsap.to(".j-fore-blue ", {   delay:0.0, opacity: 0, duration: 0.1,  ease: "power4.inOut", });
    gsap.to(".j-fore-m ", {   delay:0.0, opacity: 0,  duration: 1,  ease: "power4.inOut", });
    gsap.to(".j-fore-r ", { delay:0.0, opacity: 0, duration: 1,  ease: "power4.inOut", });
    gsap.to(".j-fore-l", {  delay:0.0, opacity: 0, duration: 1,  ease: "power4.inOut", });	
    gsap.to(".j-back-m  ", { z:"-3vh", x: "0", delay:0.0, opacity: 0, duration: 1,  ease: "power4.inOut", });
}

$("#journeyHover").hover(function(){
    warningtempcover(); //added 2024 to hide shit so I can upload the website
    JourneyHoverOn();

}, function(){
    JourneyHoverOff();
});

$("#journeyHover").click(function(){
    //startJourneyFun();
    //startJourney=1;
    JourneyHoverOff();
});
function journeyHideMobile(){
    if (diffSize == 1){

    }
    else if (diffSize == 2) {

    }
    else {

    }
}


//Added 2024 to hide shit
function warningtempcover() {
    JourneyHoverOff();
    Cookies.set('warningtempcookie', '1', { expires: 7 });
    warningtempcookie = "1";
    gsap.to(".warning-home-button-cover", {  delay:0.5, width:300, duration: 0.5,  ease: "power4.inOut", });
    gsap.to(".warning-home-button-cover2", {  delay:0.3, width:300, duration: 0.5,  ease: "power4.inOut", });
    gsap.to(".warning-home-button-cover3", {  delay:0.1, width:300, duration: 0.5,  ease: "power4.inOut", });
    gsap.to(".warning-home-button-cover-bg", {  delay:0.0, width:300, duration: 0.5,  ease: "power4.inOut", });
}



// start of image hover -------------FOR CHARACTER SHEET------------------------------------------------------------------------------------
var image_screen_show = 0;
var image_screen_ID = "";


let image_screen_array = [
    { id:'0', id2:'0', main_url: '/images/ref-images/broken-image.webp', dis_url: '/images/ref-images/broken-image.webp', artist_name:'lol it broken', artist_url:'brokenlink' },
    { id:'#c1_img_1', id2:'c1_img_1', main_url: '/images/ref-images/emufur-scaliebloke-full.png', dis_url: '/images/ref-images/emufur-scaliebloke.webp', artist_name:'EmuFur', artist_url:'https://www.furaffinity.net/user/emufur/' },
    { id:'#c1_img_2', id2:'c1_img_2', main_url: '/images/ref-images/carnival-scalie-bloke-full.png', dis_url: '/images/ref-images/carnival-scalie-bloke.webp', artist_name:'Carnival Illustrations', artist_url:'https://www.furaffinity.net/user/carnival/'},
    { id:'#c1_img_3', id2:'c1_img_3', main_url: '/images/ref-images/opthedragon-scalie-bloke-full.png', dis_url: '/images/ref-images/opthedragon-scalie-bloke.webp', artist_name:'OpTheDragon', artist_url:'https://www.instagram.com/opthedragon/'},
    { id:'#c1_img_4', id2:'c1_img_4', main_url: '/images/ref-images/heathcliff-scalie-bloke.webp', dis_url: '/images/ref-images/heathcliff-scalie-bloke.webp', artist_name:'Heathcliff', artist_url:'https://www.furaffinity.net/user/kruzoer/' },
    { id:'#c1_img_5', id2:'c1_img_5', main_url: '/images/ref-images/imdabes-scalie-bloke-full.png', dis_url: '/images/ref-images/imdabes-scalie-bloke.webp', artist_name:'DoodleCatCreations  ', artist_url:'https://www.instagram.com/doodlecatcreations/'},
    { id:'#c1_img_6', id2:'c1_img_6', main_url: '/images/ref-images/arinaca-scalie-bloke-full.png', dis_url: '/images/ref-images/arinaca-scalie-bloke.webp', artist_name:'Arinaca', artist_url:'https://twitter.com/Arinaca11'}
];

var image_screen_array_length = image_screen_array.length;

DISPLAY_IMAGES();

function DISPLAY_IMAGES(){
    for(i=0; i<image_screen_array_length; i++) { 
        $(image_screen_array[i].id + '.col-c .col-c-c .col-c-c-in').css('background-image', 'url('+image_screen_array[i].dis_url+')');
        //$(image_screen_array[i].id + '.col-c .col-c-c .col-c-c-in').append('<a target="_blank" href="'+image_screen_array[i].artist_url+'" class="col-c-c-in-details">'+image_screen_array[i].artist_name+'</a>');

        $(image_screen_array[i].id + '.col-c .col-c-c .col-c-c-in .col-c-c-in-details').text(''+image_screen_array[i].artist_name+'');
        $(image_screen_array[i].id + '.col-c .col-c-c .col-c-c-in .col-c-c-in-details').attr("href", image_screen_array[i].artist_url);
        $(image_screen_array[i].id + '.col-c .col-c-text .col-c-text-in').text(''+image_screen_array[i].artist_name+'');
    }
}

$(".col-c").click(function(){
    image_screen_show = 1;
    image_screen_ID = $(this).attr('id');
    //console.log(image_screen_ID);

    IMAGESHOWwithID();
    IMAGEHOVER();

});

$(".image_screem_bg ").click(function(){
    image_screen_show = 0;
    IMAGEHOVER();
});


function IMAGEHOVER(){
    if (image_screen_show == 1) {
        gsap.to("#image_screen", {  delay:0.0, opacity: 1, duration: 0.5, pointerEvents:'all',  ease: "power4.inOut", });
    }
    if (image_screen_show ==0) {
        gsap.to("#image_screen", {  delay:0.0, opacity: 0, duration: 0.5, pointerEvents:'none',  ease: "power4.inOut", });
    }
}


function IMAGESHOWwithID(){

    let obj = image_screen_array.find(o => o.id2 === image_screen_ID);

    if (!obj){
        $('.image_screen_con-in').css('background-image', 'url('+image_screen_array[0].main_url+')');
        $('.image_screen_link').attr("href", image_screen_array[0].main_url);
        $('.image_screen_artist_name').text(''+image_screen_array[0].artist_name+'');
        $('.image_screen_artist_name').attr("href", image_screen_array[0].artist_url);

    return;
    }
    else{
        $('.image_screen_con-in').css('background-image', 'url('+obj.main_url+')');
        $('.image_screen_link').attr("href", obj.main_url);
        $('.image_screen_artist_name').text(''+obj.artist_name+'');
        $('.image_screen_artist_name').attr("href", obj.artist_url);
    }
}


//end of image hover  -------------------------------------------------------------------------------------------------



// Extra Stuff ----------------- Character Sheet -------------------------------------------------

var dragonhover01 = 0;

$("#dragon-char").click(function(){
    if (dragonhover01 == 0) {
    dragonhover01 = 1;
    dragonHover();
    }
});

function dragonHover(){
    var text_type = "WOW! A typical Red and Yellow Dragon? How Original, I know right...";
    var chars_type = text_type.split('');
    var container_type = document.getElementById("typewriter_parent");
    container_type.innerHTML = "";
    var i_type = 0;
    var dragontextbox = setInterval(function dragontextboxFUN() {
        container_type.innerHTML = container_type.innerHTML.replace("Red", "<span class='typered'>Red</span>");
        container_type.innerHTML = container_type.innerHTML.replace("Yellow", "<span class='typeyellow'>Yellow</span>"); 
        if (i_type < chars_type.length) {
            container_type.innerHTML += chars_type[i_type++];
        } 
        else { //Add this to repeat
            //i_type = 0;
            //container_type.innerHTML = "";
            clearInterval(dragontextbox);
        }
        
        
        
        
    }, 70);
}


// HIDE POPUP FUNCTIONS HERE ------------------------------------------------------------------------------------------------------------
//idea randomise the popup classes for funny ad block fun.
$(".character-pop-up-close ").click(function(){
    Cookies.set('charpopup', '1', { expires: 1 });
    gsap.to(".character-pop-up", { pointerEvents: "none", delay:0.1, opacity: 0, y: '100vh', duration: 0.5,  ease: "power4.inOut", });
});


function sexypopup1TRIGGER(){
    if (sexypopup1 == "1") {
        $('.sexypopup1 .sexypopup-message').text('Big Sexy Dragons in your area?');
    }
    if (sexypopup1 == "2") {
        $('.sexypopup1 .sexypopup-message').text('Do you not like big dragons?');
    }
    else if (sexypopup1 == "3") {
        $('.sexypopup1 .sexypopup-message').text("You can't stop me you know?");
    }
    else if (sexypopup1 == "4") {
        $('.sexypopup1 .sexypopup-message').text("I will keep poping up!");
    }
    else if (sexypopup1 == "5") {
        $('.sexypopup1 .sexypopup-message').text("This resets every day!");
    }
    else if (sexypopup1 == "6") {
        $('.sexypopup1 .sexypopup-message').text("You WILL Click The LINK!");
    }
    else if (sexypopup1 == "7") {
        $('.sexypopup1 .sexypopup-message').text("If you do I will stop!");
    }
    else if (sexypopup1 == "8") {
        $('.sexypopup1 .sexypopup-message').text("Come on!");
    }
    else if (sexypopup1 == "9") {
        $('.sexypopup1 .sexypopup-message').text("Ill be back! Everytime you refresh!");
    }
    else if (sexypopup1 == "10") {
        $('.sexypopup1 .sexypopup-message').text("CLICK! THE! LINK!");
    }
    else if (sexypopup1 == "11") {
        $('.sexypopup1 .sexypopup-message').text("CLICK! THE! LINK! NOW!");
    }
    else if (sexypopup1 == "12") {
        $('.sexypopup1 .sexypopup-message').text("Thank you for clicking the link! (:");
    }
    else if (sexypopup1 == "13") {
        $('.sexypopup1 .sexypopup-message').text("If you see this, you're a hacker!");
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 0, x: '100vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else {
        $('.sexypopup1 .sexypopup-message').text('Big dragons in your area?');
    }
    
    
    setTimeout(sexypopup1FUNCTION, 3000);
}
if (allownotfisound == 1) {
    $('#notfi').get(0).play();
} //for some reason this loops when in a function that has a timeout

function sexypopup1FUNCTION(){
    
    if (sexypopup1 != "" && sexypopup1 != "1") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "2") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "3") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "4") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "5") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "6") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "7") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "8") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "9") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "10") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "11") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "12") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 1, x: '0vh', duration: 0.5,  ease: "power4.inOut", });
    }
    else if (sexypopup1 != "" && sexypopup1 != "13") {
        gsap.to(".sexypopup1", {  delay:0.1, opacity: 0, x: '100vh', duration: 0.5,  ease: "power4.inOut", });
    }
    sexypopup1TRIGGER();
   
}

$(".sexypopup1 .sexypopup-more").click(function(){
    sexypopup1 = '12';
});

$(".sexypopup1 .sexypopup-close").click(function(){
    if (sexypopup1 =="1"){
        Cookies.set('sexypopup1', '2', { expires: 1 });
        sexypopup1 = "2";
    }
    else if (sexypopup1 =="2"){
        Cookies.set('sexypopup1', '3', { expires: 1 });
        sexypopup1 = "3";
    }
    else if (sexypopup1 =="3"){
        Cookies.set('sexypopup1', '4', { expires: 1 });
        sexypopup1 = "4";
    }
    else if (sexypopup1 =="4"){
        Cookies.set('sexypopup1', '5', { expires: 1 });
        sexypopup1 = "5"; 
    }
    else if (sexypopup1 =="5"){
        Cookies.set('sexypopup1', '6', { expires: 1 });
        sexypopup1 = "6";
    }
    else if (sexypopup1 =="6"){
        Cookies.set('sexypopup1', '7', { expires: 1 }); 
        sexypopup1 = "7";
    }
    else if (sexypopup1 =="7"){
        Cookies.set('sexypopup1', '8', { expires: 1 }); 
        sexypopup1 = "8";
    }
    else if (sexypopup1 =="8"){
        Cookies.set('sexypopup1', '9', { expires: 1 }); 
        sexypopup1 = "9";
    }
    else if (sexypopup1 =="9"){
        Cookies.set('sexypopup1', '10', { expires: 1 }); 
        sexypopup1 = "10";
    }
    else if (sexypopup1 =="10"){
        Cookies.set('sexypopup1', '11', { expires: 1 }); 
        sexypopup1 = "11";
    }
    else if (sexypopup1 =="11"){
        Cookies.set('sexypopup1', '11', { expires: 1 }); 
        sexypopup1 = "11";
    }
    else if (sexypopup1 =="12"){
        Cookies.set('sexypopup1', '13', { expires: 365 }); 
        sexypopup1 = "13";
    }
    else if (sexypopup1 =="13"){
        Cookies.set('sexypopup1', '13', { expires: 365 }); 
        sexypopup1 = "13";
    }
    else {
        Cookies.set('sexypopup1', '1', { expires: 1 }); 
        sexypopup1 = "1"; 
    }
    gsap.to(".sexypopup1", { delay:0.1, opacity: 0, x: '100vw', duration: 0.5,  ease: "power4.inOut", });
    
    allownotfisound=1;
        
    
    
});

sexypopup1TRIGGER();

//This will Animate when First loaded onto the website -------------------------------------------------------------------------------------------------------
    
function firstloadAnimations() {
    gsap.to("#journey", { delay:0.0, opacity: 1, y: 0, duration: 1,  ease: "power4.inOut", });
    gsap.from(".item1-container", { delay:0.7, opacity: 0, y: 700, duration: 1.5,  ease: "power4.inOut",});
    gsap.from(".item2-container", { delay:2, opacity: 0, y: 700, duration: 1.5,  ease: "power4.inOut",});
    gsap.from(".j-fore-socials", { delay:1, opacity: 0, y: 700, duration: 1.5,  ease: "power4.inOut",});
    gsap.from(".j-fore-blue ", { delay:0.4, opacity: 0, y: 2700, duration: 1.5,  ease: "power4.inOut",});

    gsap.from(".j-background ", { delay:0.0, opacity: 0, y: 0, duration: 1.5,  ease: "power4.inOut",});
    gsap.from(".j-back-mn", { delay:0.1, opacity: 0, y: 2700, duration: 1.5,  ease: "power4.inOut",});
    gsap.from(".j-back-mno ", { delay:0.2, opacity: 0, y: 2700, duration: 1.5,  ease: "power4.inOut",});
    gsap.from(".j-fore-mb ", { delay:0.3, opacity: 0, y: 2700, duration: 1.5,  ease: "power4.inOut",});

    gsap.from(".j-fore-t1 ", { delay:0.4, opacity: 1, y: 2700, duration: 1.5,  ease: "power4.inOut",});
    gsap.from(".j-fore-t2 ", { delay:0.5, opacity: 1, y: 2700, duration: 1.5,  ease: "power4.inOut",});
            
    gsap.from(".j-fore-ff", { delay:0.5, opacity: 0, duration: 1.5,  ease: "power4.inOut",});		

}
