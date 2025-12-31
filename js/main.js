// Asosiy JavaScript fayli

// Global o'zgaruvchilar
let currentCategory = 'all';
let currentSearch = '';

// Saytni ishga tushirish
function initApp() {
    // Mahsulotlarni chiqarish
    displayProducts();
    
    // Event listener'larni sozlash
    setupEventListeners();
    
    // Navigation active state
    setupNavigation();
    
    // Mobile optimization
    setupMobileFeatures();
}

// Mahsulotlarni chiqarish
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    let filteredProducts = currentCategory === 'all' 
        ? productsData 
        : productsData.filter(product => product.category === currentCategory);
    
    // Qidiruv bo'yicha filtrlash
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            product.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
            product.features.some(feature => feature.toLowerCase().includes(currentSearch.toLowerCase()))
        );
    }
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
                <i class="fas fa-search" style="font-size: 40px; color: #ddd; margin-bottom: 15px;"></i>
                <h3 style="color: #666; margin-bottom: 10px; font-size: 18px;">Parda topilmadi</h3>
                <p style="color: #888; font-size: 14px;">Boshqa kategoriya yoki qidiruv so'zini sinab ko'ring</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <div class="product-img-slider" id="slider-${product.id}">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="${product.name}" class="product-img" 
                             style="display: ${index === 0 ? 'block' : 'none'};">
                    `).join('')}
                    
                    <button class="img-nav img-prev" aria-label="Oldingi rasm">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="img-nav img-next" aria-label="Keyingi rasm">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} so'm</span>` : ''}
                    ${product.price.toLocaleString()} so'm
                </div>
                <p class="product-description">${product.description}</p>
                
                <div class="product-features">
                    ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                
                <div class="product-actions">
                    <button class="action-btn action-call" onclick="callProduct('${product.name.replace(/'/g, "\\'")}')">
                        <i class="fas fa-phone"></i> Qo'ng'iroq
                    </button>
                    <button class="action-btn action-whatsapp" onclick="whatsappProduct('${product.name.replace(/'/g, "\\'")}')">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Rasm sliderlarini sozlash
    setupImageSliders();
}

// Rasm sliderlarini sozlash
function setupImageSliders() {
    document.querySelectorAll('.product-img-slider').forEach(slider => {
        const images = slider.querySelectorAll('.product-img');
        if (images.length === 0) return;
        
        let currentIndex = 0;
        
        // Mobile touch events
        let startX = 0;
        let endX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextImage();
                } else {
                    prevImage();
                }
            }
        }
        
        function nextImage() {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = 'block';
        }
        
        function prevImage() {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].style.display = 'block';
        }
        
        // Button listeners
        const prevBtn = slider.querySelector('.img-prev');
        const nextBtn = slider.querySelector('.img-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevImage();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextImage();
            });
        }
    });
}

// Event listener'larni sozlash
function setupEventListeners() {
    // Kategoriya filterlari
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            displayProducts();
        });
    });

    // Qidiruv funksiyasi
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            currentSearch = searchInput.value;
            displayProducts();
        });
    }

    // Smooth scroll
    setupSmoothScroll();
}

// Navigation active state
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - headerHeight - 100)) {
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
    });
}

// Smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile features
function setupMobileFeatures() {
    // Mobile menu toggle (kelajakda qo'shilishi mumkin)
    // ...
}

// Global funksiyalar
window.callProduct = function(productName) {
    const phoneNumber = "+9989504577730";
    if (confirm(`${productName} pardasini sotib olish uchun qo'ng'iroq qilamizmi?\n\nTelefon: ${phoneNumber}`)) {
        window.location.href = `tel:${phoneNumber}`;
    }
};

window.whatsappProduct = function(productName) {
    const phoneNumber = "9989504577730";
    const message = `Salom! Men "Mohina Pardalari" dan "${productName}" pardasini sotib olmoqchiman. Narx va batafsil ma'lumot bering, iltimos.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};

// Appni ishga tushirish
window.initApp = initApp;
