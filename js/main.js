// Navigation fixed height uchun
function setupFixedNavigation() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    if (nav && header) {
        // Fixed height o'rnatish
        nav.style.height = '48px';
        header.style.maxHeight = '140px';
        
        // Scroll event'ni optimallashtirish
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Faqat active class o'zgartirish
                    const sections = document.querySelectorAll('section');
                    const navLinks = document.querySelectorAll('.nav-links a');
                    const headerHeight = header.offsetHeight;
                    
                    let current = '';
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        if (window.scrollY >= (sectionTop - headerHeight - 50)) {
                            current = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${current}`) {
                            link.classList.add('active');
                        }
                    });

                    // Bosh sahifa uchun
                    if (window.scrollY < 100) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        const homeLink = document.querySelector('.nav-links a[href="#"]');
                        if (homeLink) homeLink.classList.add('active');
                    }
                    
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}

// Appni ishga tushirish
function initApp() {
    // Mahsulotlarni chiqarish
    displayProducts();
    
    // Event listener'larni sozlash
    setupEventListeners();
    
    // Fixed navigation sozlash
    setupFixedNavigation();
    
    // Mobile optimization
    setupMobileFeatures();
}

// Mobile features
function setupMobileFeatures() {
    // Search input uchun touch optimization
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            // Mobile keyboard ochilganda viewport'ni to'g'rilash
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 300);
        });
    }
    
    // Touch devices uchun hover effektlarni optimallashtirish
    if ('ontouchstart' in window) {
        document.querySelectorAll('.btn, .action-btn').forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            btn.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
}

// CSS ga touch-active class qo'shish uchun
const style = document.createElement('style');
style.textContent = `
    .touch-active {
        opacity: 0.8;
        transform: scale(0.98) !important;
    }
    
    /* Mobile uchun scroll improvement */
    body {
        -webkit-overflow-scrolling: touch;
    }
    
    /* Header uchun fixed scroll improvement */
    .header {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
`;
document.head.appendChild(style);

// Appni ishga tushirish
window.initApp = initApp;
