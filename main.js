

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Front-End" ,"Back-End"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})  

sr.reveal('.about h2',{delay: 100})
/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

sr.reveal('.container h1',{delay: 100})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
    })


/* -- HOME -- */
srLeft.reveal('.featured-text-card',{})
srLeft.reveal('.featured-name',{delay: 100})
srLeft.reveal('.featured-text-info',{delay: 200})
srLeft.reveal('.btn',{delay: 200})
srLeft.reveal('.social_icons',{delay: 200})
srLeft.reveal('.featured-image',{delay: 300})
srLeft.reveal('.about .intro',{delay: 200})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
    })

/*------ IMAGE -------*/

srRight.reveal('.img-box',{delay: 300})

  
/* -- ABOUT ME -- */
srRight.reveal('.about .col',{delay: 300})


/* -- CONTACT ME -- */
sr.reveal('form',{delay: 200})
sr.reveal('#submit',{delay: 200})

/* -- FOOTER -- */


// Smooth scroll to section when clicking on navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Function to remove the "active" class from all navigation links
    function deactivateLinks() {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
    }

    // Function to add the "active" class to the clicked navigation link
    function activateLink(link) {
      link.classList.add("active");
    }

    // Function to check which section is currently in view
    function checkSectionInView() {
      sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          deactivateLinks();
          const sectionId = section.getAttribute("id");
          const correspondingLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
          activateLink(correspondingLink);
        }
      });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Check which section is in view when the page loads and on scroll
    checkSectionInView();
    window.addEventListener("scroll", checkSectionInView);
  });