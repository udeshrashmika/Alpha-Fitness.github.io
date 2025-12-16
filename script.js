document.addEventListener("DOMContentLoaded", function () {
    
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");


    function handleScroll() {
        let current = "";
        let scrollPosition = window.scrollY;


        if (scrollPosition > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }


        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= (sectionTop - 200)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            
            if (current && link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    }
    
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(this.getAttribute('href').indexOf('#'));
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                   
                    top: targetSection.offsetTop - 100, 
                    behavior: 'smooth'
                });
                
               
                const navbarCollapse = document.querySelector(".navbar-collapse");
                if (navbarCollapse.classList.contains("show")) {
                    navbarCollapse.classList.remove("show");
                }
            }
        });
    });

    console.log("FiTusion Scripts Loaded & Optimized ⚡");
});