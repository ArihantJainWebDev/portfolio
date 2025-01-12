function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Frontend Developer", "React Developer"],
    loop: true,
    typeSpeed: 100,
    bckspeed: 80,
    backDelay: 2000
})

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social-icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })
sr.reveal('.project-box', { interval: 200 })
sr.reveal('.top-header', {})
sr.reveal('.project-card', { interval: 300 })

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            if (link) {
                link.classList.add('active-link');
            }
        } else {
            const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            if (link) {
                link.classList.remove('active-link');
            }
        }
    })
}

function openOverlay(projectId) {
    const overlay = document.getElementById(`overlay-${projectId}`);
    if (overlay) {
        overlay.style.display = 'flex';
    }
}

function closeOverlay(projectId) {
    const overlay = document.getElementById(`overlay-${projectId}`);
    if (overlay) {
        overlay.style.display = 'none';
    }
}

window.addEventListener('scroll', scrollActive);

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to send the message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    }
});
