/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills-card, .project-card, .contact__input, .stats_card, .contact_tag',{interval: 200}); 




document.getElementById('resume-button-1').addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1yMEhl-WY8m58GrdB7ew8mipzYb05OA8X/view?usp=sharing", "_blank");
    setTimeout(() => {
        const a = document.createElement("a");
        a.href = "https://drive.google.com/uc?export=download&id=1yMEhl-WY8m58GrdB7ew8mipzYb05OA8X";
        a.download = "Resume.pdf"; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }, 500); 
});


document.getElementById('resume-button-2').addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1yMEhl-WY8m58GrdB7ew8mipzYb05OA8X/view?usp=sharing", "_blank");
    setTimeout(() => {
        const a = document.createElement("a");
        a.href = "https://drive.google.com/uc?export=download&id=1yMEhl-WY8m58GrdB7ew8mipzYb05OA8X";
        a.download = "Resume.pdf"; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }, 500); 
});

