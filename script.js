/* =====================================
   Toufikul Alam Portfolio
   Main JavaScript
===================================== */



// ================================
// Mobile Navigation Menu
// ================================


const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");


if(menuIcon){

    menuIcon.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}





// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});







// ================================
// Typed.js Animation
// ================================


if(document.querySelector("#typing")){


    new Typed("#typing",{

        strings:[

            "Aspiring Data Analyst",

            "Future Data Scientist",

            "Python Developer",

            "Machine Learning Enthusiast",

            "Technology Explorer"

        ],


        typeSpeed:70,

        backSpeed:40,

        backDelay:1500,

        loop:true


    });


}








// ================================
// Particle Background
// ================================


if(typeof particlesJS !== "undefined"){


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

    value:"#38BDF8"

},



shape:{

    type:"circle"

},



opacity:{

    value:0.5,

},



size:{

    value:3,

    random:true

},



line_linked:{

    enable:true,

    distance:150,

    color:"#3B82F6",

    opacity:0.3,

    width:1

},



move:{


    enable:true,

    speed:2,

    direction:"none",

    random:false,

    straight:false,

    out_mode:"out",

    bounce:false


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

    distance:200,

    line_linked:{

        opacity:0.5

    }

},



push:{

    particles_nb:4

}


}


},




retina_detect:true



});

}








// ================================
// Scroll Reveal Animation
// ================================


if(typeof ScrollReveal !== "undefined"){


const reveal = ScrollReveal({

    distance:"60px",

    duration:1000,

    delay:200,

    reset:false

});



reveal.reveal(".section-title",{

    origin:"top"

});



reveal.reveal(".card",{

    origin:"bottom",

    interval:200

});



reveal.reveal(".hero-content",{

    origin:"bottom"

});


}








// ================================
// Load HTML Sections Dynamically
// ================================


async function loadSection(id,file){


    const element=document.getElementById(id);


    if(element){


        try{


            const response = await fetch(file);


            const data = await response.text();


            element.innerHTML=data;


        }


        catch(error){


            console.log(
                "Error loading:",
                file,
                error
            );


        }


    }


}





loadSection(
    "about-content",
    "sections/about.html"
);



loadSection(
    "experience-content",
    "sections/experience.html"
);



loadSection(
    "skills-content",
    "sections/skills.html"
);



loadSection(
    "learning-content",
    "sections/learning.html"
);



loadSection(
    "contact-content",
    "sections/contact.html"
);








// ================================
// Active Navbar Highlight
// ================================


const sections=document.querySelectorAll("section");


const navItems=document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop=section.offsetTop-150;


if(scrollY>=sectionTop){

    current=section.getAttribute("id");

}


});



navItems.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href")==="#"+current){


    link.classList.add("active");


}



});



});








// ================================
// Smooth Scroll
// ================================


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


e.preventDefault();



document.querySelector(
    this.getAttribute("href")
).scrollIntoView({


behavior:"smooth"


});


});


});







// ================================
// Current Year Auto Update
// ================================


const year=document.querySelector("footer p");


if(year){


year.innerHTML =
`© ${new Date().getFullYear()} Toufikul Alam. All Rights Reserved.`;


}
