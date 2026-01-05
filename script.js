// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Projects data - Add your projects here
const projectsData = [
    {
        title: "Enhancing Rail Madad with AI-Powered Complaint Management",
        description: "Developed a complaint management system using MongoDB and AI-powered prioritization. Implemented a chatbot for instant feedback and classification of issues by severity. Improved response time and automated complaint tracking through an intuitive admin dashboard.",
        image: "projects/rail-madad.jpg",
        liveLink: "https://railmadad-deploy.vercel.app/",
        githubLink: "#",
        tags: ["Python", "MongoDB", "AI", "Chatbot", "Machine Learning"]
    },
    {
        title: "AI-powered Tongue Disease Detection using CNNs",
        description: "Designed a CNN-based deep learning model to detect oral diseases using tongue images. Enhanced diagnostic accuracy through data augmentation and transfer learning. Supports early detection of oral infections, deficiencies, and cancer indicators.",
        image: "projects/tongue-disease.jpg",
        liveLink: "https://tongue-disease-5.onrender.com/",
        githubLink: "#",
        tags: ["Python", "CNN", "Deep Learning", "TensorFlow", "Medical AI"]
    },
    {
        title: "Portfolio Website",
        description: "A comprehensive personal portfolio showcasing skills, projects, and certifications. Built with responsive HTML, CSS, and JavaScript featuring smooth animations and an interactive design.",
        image: "images/portfolio-preview.jpg",
        liveLink: "https://portfolio-shashank-liard.vercel.app/",
        githubLink: "#",
        tags: ["HTML", "CSS", "JavaScript", "Vercel"]
    },
    {
        title: "End-to-End Data Engineering Pipeline – FMCG Retail Data Consolidation",
        description: `Built an end-to-end ETL pipeline on Databricks to consolidate data from two retail companies post-acquisition using
Bronze–Silver–Gold(Medallion) architecture.
● Processed and transformed large - scale FMCG transactional data using PySpark and Spark SQL, implementing data
cleansing, deduplication, and schema alignment.
● Delivered analytics - ready Gold tables and an interactive BI dashboard to enable business insights and decision - m`,
        image: "images/portfolio-preview.jpg",
        liveLink: "#",
        githubLink: "#",
        tags: ["PySpark", "Spark SQL", "Databricks", "Medallion Architecture"]
    }
    // Add more projects here following the same structure
];

// Generate placeholder images for projects if they don't exist
function generateProjectPlaceholder(title) {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

// Load projects dynamically
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');

    if (!projectsGrid) return;

    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        const placeholderBg = generateProjectPlaceholder(project.title);
        const shortTitle = project.title.split(' ').slice(0, 3).join(' ');

        projectCard.innerHTML = `
            <div class="project-image" style="background: ${placeholderBg};">
                <img src="${project.image}" alt="${project.title}" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML+='<div style=\'position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:white; font-size:2rem; font-weight:bold; text-align:center; padding:1rem;\'>${shortTitle}</div>';">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-links-footer">
                    ${project.liveLink ? `<a href="${project.liveLink}" class="btn-small btn-primary" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                    ${project.githubLink ? `<a href="${project.githubLink}" class="btn-small btn-secondary-dark" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Contact form handling with Formspree
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Formspree will handle the submission
        // The form will submit normally and Formspree will process it
        // User will be redirected based on the _next hidden field

        // Reset button text after a delay (in case of error)
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 5000);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        observer.observe(section);
    });

    // Load projects
    loadProjects();
});

// Typing effect for hero section (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Portfolio website loaded successfully!');
});

