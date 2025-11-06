

// copiwali 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    if (question) {
        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Pehle saare items band karo
            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");
            });

            // Agar ye item pehle se active nahi tha, toh isko activate karo
            if (!isActive) {
                item.classList.add("active");
            }
        });
    }
});
       

    
// Search functionality with VALIDATION
const searchBtn = document.querySelector(".search-btn");
const domainSearchInput = document.querySelector(".domain-search");

// Validation function
function validateSearch(query) {
    if (!query || query.trim() === "") {
        alert("Please enter a domain name to search");
        return false;
    }
    if (query.length < 4) {
        alert("Please enter at least 4 characters");
        return false;
    }
    return true;
}

// Loading functions
function showLoading(element) {
    element.style.opacity = "0.5";
    element.style.pointerEvents = "none";
    element.disabled = true;
}

function hideLoading(element) {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
    element.disabled = false;
}

if (searchBtn && domainSearchInput) {
    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const searchQuery = domainSearchInput.value.trim();

        // Validation use karo
        if (validateSearch(searchQuery)) {
            // Loading state show karo
            showLoading(searchBtn);
            console.log("Searching for:", searchQuery);

            // Simulate search delay (real mein API call hoga)
            setTimeout(() => {
                alert(`Searching for: ${searchQuery}`);
                hideLoading(searchBtn);
            }, 1000);
        }
    });

    // Enter key press
    domainSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchBtn.click();
        }
    });
}

// Domain suggestion tags click
const domainSuggestions = document.querySelectorAll(".domain-suggestions span");

domainSuggestions.forEach((tag) => {
    tag.addEventListener("click", () => {
        const tagText = tag.textContent.trim();
        if (domainSearchInput) {
            domainSearchInput.value = tagText;
            domainSearchInput.style.color = 'black';
            // domainSuggestions.style.boxShadow
            domainSuggestions.body.style.backgroundColor = "blue";
            domainSuggestions.querySelectorAll(".domain-suggestions span").style.boxShadow = "10px 20px 30px blue";
            domainSearchInput.focus();
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const plusImg = item.querySelector(".plus_img");

    const toggleFAQ = (e) => {
      e.stopPropagation();
      const isActive = item.classList.contains("active");

      // Close all other FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          const otherPlusImg = otherItem.querySelector(".plus_img img");
          if (otherAnswer) otherAnswer.style.display = "none";
          if (otherPlusImg) otherPlusImg.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current
      const answer = item.querySelector(".faq-answer");
      const img = item.querySelector(".plus_img img");

      if (isActive) {
        item.classList.remove("active");
        if (answer) answer.style.display = "none";
        if (img) img.style.transform = "rotate(0deg)";
      } else {
        item.classList.add("active");
        if (answer) answer.style.display = "block";
        if (img) img.style.transform = "rotate(45deg)";
        // if (img) img.style.color = "black";

      }
    };

    if (question) question.addEventListener("click", toggleFAQ);
    if (plusImg) plusImg.addEventListener("click", toggleFAQ);
  });

  // Open the first FAQ by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    firstItem.classList.add("active");
    const firstAnswer = firstItem.querySelector(".faq-answer");
    const firstImg = firstItem.querySelector(".plus_img img");
    if (firstAnswer) firstAnswer.style.display = "block";
    if (firstImg) firstImg.style.transform = "rotate(45deg)";
  }
});

// Scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, observerOptions);

const sections = document.querySelectorAll(
    ".premium-domains, .how-it-works, .customers-section, .collection-section, .testimonials-section_container, .faq"
);

sections.forEach((section) => {
    observer.observe(section);
});

// Login/Signup buttons
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".login-btn_signUp");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        alert("Login page - Coming soon!");
    });
}

if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        alert("Sign up page - Coming soon!");
    });
}

// View all buttons
const viewAllBtns = document.querySelectorAll(
    ".view-all-btn, .view_all_categories"
);

viewAllBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        showLoading(btn);
        setTimeout(() => {
            alert("Loading full catalog...");
            hideLoading(btn);
        }, 800);
    });
});


const searchBtnFooter = document.querySelector(".search-btn-footer");
const domainSearchInputFooter = document.querySelector(".domain-search-footer");

// Validation function
function validateSearch(query) {
    if (!query || query.trim() === "") {
        alert("Please enter a domain name to search");
        return false;
    }
    if (query.length < 4) {
        alert("Please enter at least 4 characters");
        return false;
    }
    return true;
}

// Loading functions
function showLoading(element) {
    element.style.opacity = "0.5";
    element.style.pointerEvents = "none";
    element.disabled = true;
}

function hideLoading(element) {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
    element.disabled = false;
}

if (searchBtnFooter && domainSearchInputFooter) {
    searchBtnFooter.addEventListener("click", (e) => {
        e.preventDefault();
        const searchQueryF = domainSearchInputFooter.value.trim();

        // Validation use karo
        if (validateSearch(searchQueryF)) {
            // Loading state show karo
            showLoading(searchBtnFooter);
            console.log("Searching for:", searchQueryF);

            // Simulate search delay (real mein API call hoga)
            setTimeout(() => {
                alert(`Searching for: ${searchQueryF}`);
                hideLoading(searchBtnFooter);
            }, 1000);
        }
    });

    // Enter key press
    domainSearchInputFooter.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchBtnFooter.click();
        }
    });
}

// Domains click
const domainSuggestionsFooter = document.querySelectorAll(
    ".domain-suggestions_footer span"
);

domainSuggestionsFooter.forEach((tag) => {
    tag.addEventListener("click", () => {
        const tagText = tag.textContent.trim();
        if (domainSearchInputFooter) {
            domainSearchInputFooter.value = tagText;
            domainSearchInputFooter.focus();
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.ri-menu-3-line');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    const html = document.documentElement;

    // IMPORTANT: Ensure menu is closed on page load
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
    html.classList.remove('menu-open');

    if (hamburger && navMenu) {
        // Hamburger click handler
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle menu
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
            html.classList.toggle('menu-open');  // Lock HTML too
            
            // Change icon
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('ri-menu-3-line');
                hamburger.classList.add('ri-close-line');
            } else {
                hamburger.classList.add('ri-menu-3-line');
                hamburger.classList.remove('ri-close-line');
            }
        });

        // Close on overlay click
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        // Close on link click
        const menuLinks = document.querySelectorAll('.nav-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Close menu function
        function closeMenu() {
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            html.classList.remove('menu-open');
            hamburger.classList.add('ri-menu-3-line');
            hamburger.classList.remove('ri-close-line');
        }
    }
});



   // Logo clone inside hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav-menu');
    const logo = document.querySelector('.nav-brand .logo');
    
    // Check if mobile view (below 425px)
    function addLogoToMenu() {
        if (window.innerWidth <= 424 && navMenu && logo) {
            // Check if logo already added (to avoid duplicates)
            if (!navMenu.querySelector('.menu-logo-clone')) {
                // Clone the logo
                const logoClone = logo.cloneNode(true);
                logoClone.classList.add('menu-logo-clone'); // Unique class
                
                // Insert at the top of nav-menu (before first li)
                navMenu.insertBefore(logoClone, navMenu.firstChild);
            }
        }
    }
    
    // Run on load
    addLogoToMenu();
    
    // Run on resize (if user rotates device)
    window.addEventListener('resize', addLogoToMenu);
});

const  registerImg = document.querySelector('.register-img')

if(registerImg){
    registerImg.addEventListener('click',function(){
        alert("RegiserPage - Coming soon!")
    });
}


// // shi wali hai niche wali 
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');
// const mainImg = document.querySelector('.main-card-img');

// // LEFT arrow - Right se img aaye
// leftArrow.addEventListener('click', function() {
  
//   // Step 1: Image ko LEFT side bhejo (bahar)
//   mainImg.style.transform = 'translateX(-100%)';
  
//   // Step 2: Jab puri bahar ho jaye (600ms baad)
//   setTimeout(function() {
    
//     // Step 3: Instantly image ko RIGHT side pe rakh do
//     mainImg.style.transition = 'none';
//     mainImg.style.transform = 'translateX(100%)';
    
//     // Step 4: Thoda wait karo
//     setTimeout(function() {
      
//       // Step 5: RIGHT se CENTER pe smoothly aaye
//       mainImg.style.transition = 'transform 0.6s ease-in-out';
//       mainImg.style.transform = 'translateX(0)';
      
//     }, 50);
    
//   }, 300);
  
// });

// // RIGHT arrow - Left se img aaye
// rightArrow.addEventListener('click', function() {
  
//   // Step 1: Image ko RIGHT side bhejo (bahar)
//   mainImg.style.transform = 'translateX(100%)';
  
//   // Step 2: Jab puri bahar ho jaye
//   setTimeout(function() {
    
//     // Step 3: Instantly image ko LEFT side pe rakh do
//     mainImg.style.transition = 'none';
//     mainImg.style.transform = 'translateX(-100%)';
    
//     // Step 4: Thoda wait karo
//     setTimeout(function() {
      
//       // Step 5: LEFT se CENTER pe smoothly aaye
//       mainImg.style.transition = 'transform 0.6s ease-in-out';
//       mainImg.style.transform = 'translateX(0)';
      
//     }, 50);
    
//   }, 300);
  
// });

// claude bhai op

const rightSideContent = document.querySelector('.right-side-content');
const leftArrowFirst = document.querySelector('.left-arrow');
const rightArrowFirst = document.querySelector('.right-arrow');
const arrowButtonsFirst = document.querySelector('.arrow-buttons');

// Card images array
const cardImagesFirst = [
    '/sellDomain-images/image 1.png',
    '/sellDomain-images/image 1.png',
    '/sellDomain-images/image 1.png'
];

let currentIndexFirst = 0;
let isAnimatingFirst = false;

// Initial setup - 3 cards banao (prev, current, next)
function createCarouselFirst() {
    // Purana img element remove karo
    const oldImg = rightSideContent.querySelector('.main-card-img');
    const imageContainer = rightSideContent.querySelector('.image-container');
    if (oldImg) oldImg.remove();
    if (imageContainer) imageContainer.remove();
    
    // Carousel wrapper banao
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper-first';
    carouselWrapper.style.cssText = `
        position: relative;
        width: 78%;
        margin-right: 55px;
        overflow: hidden;
        border-radius: 12px;
    `;
    
    // Track banao jisme cards honge
    const carouselTrack = document.createElement('div');
    carouselTrack.className = 'carousel-track-first';
    carouselTrack.style.cssText = `
        display: flex;
        transition: transform 0.5s ease;
        height: 100%;
    `;
    
    // 3 cards banao (prev, current, next)
    for (let i = 0; i < 3; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'carousel-card-first';
        cardDiv.style.cssText = `
            min-width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const img = document.createElement('img');
        img.style.cssText = `
            width: 100%;
            height: auto;
            display: block;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        `;
        
        cardDiv.appendChild(img);
        carouselTrack.appendChild(cardDiv);
    }
    
    carouselWrapper.appendChild(carouselTrack);
    
    // Arrows se pehle add karo
    rightSideContent.insertBefore(carouselWrapper, arrowButtonsFirst);
    
    // Initial images set karo
    updateCarouselImagesFirst();
    
    // Current card pe center karo
    carouselTrack.style.transform = 'translateX(-100%)';
}

// Images update karo based on currentIndexFirst
function updateCarouselImagesFirst() {
    const cards = document.querySelectorAll('.carousel-card-first img');
    const prevIndex = (currentIndexFirst - 1 + cardImagesFirst.length) % cardImagesFirst.length;
    const nextIndex = (currentIndexFirst + 1) % cardImagesFirst.length;
    
    cards[0].src = cardImagesFirst[prevIndex];
    cards[1].src = cardImagesFirst[currentIndexFirst];
    cards[2].src = cardImagesFirst[nextIndex];
}

// Slide karo (left ya right)
function slideFirst(direction) {
    if (isAnimatingFirst) return;
    
    isAnimatingFirst = true;
    const track = document.querySelector('.carousel-track-first');
    
    if (direction === 'right') {
        // Right slide - next card dikhao
        currentIndexFirst = (currentIndexFirst + 1) % cardImagesFirst.length;
        
        // Slide left (next card visible)
        track.style.transform = 'translateX(-200%)';
        
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(-100%)';
            updateCarouselImagesFirst();
            
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                isAnimatingFirst = false;
            }, 50);
        }, 500);
        
    } else {
        // Left slide - prev card dikhao
        currentIndexFirst = (currentIndexFirst - 1 + cardImagesFirst.length) % cardImagesFirst.length;
        
        // Slide right (prev card visible)
        track.style.transform = 'translateX(0%)';
        
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(-100%)';
            updateCarouselImagesFirst();
            
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                isAnimatingFirst = false;
            }, 50);
        }, 500);
    }
}

// Event listeners
leftArrowFirst.addEventListener('click', () => slideFirst('left'));
rightArrowFirst.addEventListener('click', () => slideFirst('right'));

// Initialize
createCarouselFirst();






const leftContentSecond = document.querySelector('.left-2nd-content');
const leftArrowSecond = document.querySelector('.left-arrow-second');
const rightArrowSecond = document.querySelector('.right-arrow-second');
const arrowButtonsSecond = document.querySelector('.arrow-buttons-second');

// Card images array (yaha apne images dalo)
const cardImages = [
    '/sellDomain-images/image 2.png',
    '/sellDomain-images/image 2.png',
    '/sellDomain-images/image 2.png',

    // '/sellDomain-images/card2.png',
    // '/sellDomain-images/card3.png'
];

let currentIndex = 0;
let isAnimating = false;

// Initial setup - 3 cards banao (prev, current, next)
function createCarousel() {
    // Purana img element remove karo
    const oldImg = leftContentSecond.querySelector('.second-card-img');
    if (oldImg) oldImg.remove();
    
    // Carousel wrapper banao
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    carouselWrapper.style.cssText = `
        position: relative;
        width: 100%;
        // height: 400px;
        overflow: hidden;
        border-radius: 12px;
        // margin-left: 10rem;
    height: auto;


        
    `;
    
    // Track banao jisme cards honge
    const carouselTrack = document.createElement('div');
    carouselTrack.className = 'carousel-track';
    carouselTrack.style.cssText = `
        display: flex;
        transition: transform 0.5s ease;
        height: 100%;
    `;
    
    // 3 cards banao (prev, current, next)
    for (let i = 0; i < 3; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'carousel-card';
        cardDiv.style.cssText = `
            min-width: 100%;
            //  height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const img = document.createElement('img');
        img.style.cssText = `
            width: 100%;
            // margin-left: 10rem;
            // padding-left:5rem;
            height: auto;
            border-radius: 12px;
        `;
        
        cardDiv.appendChild(img);
        carouselTrack.appendChild(cardDiv);

        // arrowButtonsSecond.style.cssText=`
        // margin-top:-6rem`;
    }
    
    carouselWrapper.appendChild(carouselTrack);
    
    // Arrows se pehle add karo
    leftContentSecond.insertBefore(carouselWrapper, arrowButtonsSecond);
    
    // Initial images set karo
    updateCarouselImages();
    
    // Current card pe center karo
    carouselTrack.style.transform = 'translateX(-100%)';
}

// Images update karo based on currentIndex
function updateCarouselImages() {
    const cards = document.querySelectorAll('.carousel-card img');
    const prevIndex = (currentIndex - 1 + cardImages.length) % cardImages.length;
    const nextIndex = (currentIndex + 1) % cardImages.length;
    
    cards[0].src = cardImages[prevIndex];
    cards[1].src = cardImages[currentIndex];
    cards[2].src = cardImages[nextIndex];
}

// Slide karo (left ya right)
function slide(direction) {
    if (isAnimating) return;
    
    isAnimating = true;
    const track = document.querySelector('.carousel-track');
    
    if (direction === 'right') {
        // Right slide - next card dikhao
        currentIndex = (currentIndex + 1) % cardImages.length;
        
        // Slide left (next card visible)
        track.style.transform = 'translateX(-200%)';
        
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(-100%)';
            updateCarouselImages();
            
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                isAnimating = false;
            }, 50);
        }, 500);
        
    } else {
        // Left slide - prev card dikhao
        currentIndex = (currentIndex - 1 + cardImages.length) % cardImages.length;
        
        // Slide right (prev card visible)
        track.style.transform = 'translateX(0%)';
        
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(-100%)';
            updateCarouselImages();
            
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                isAnimating = false;
            }, 50);
        }, 500);
    }
}

// Event listeners
leftArrowSecond.addEventListener('click', () => slide('left'));
rightArrowSecond.addEventListener('click', () => slide('right'));

// Initialize
createCarousel();


const rightContentThird = document.querySelector('.right--3rd-content');
const leftArrowThird = document.querySelector('.left-arrow-third');
const rightArrowThird = document.querySelector('.right-arrow-third');
const arrowButtonsThird = document.querySelector('.arrow-buttons-third');

// Card images array
const cardImagesThird = [
    '/sellDomain-images/image 3.png',
    '/sellDomain-images/image 3.png',
    '/sellDomain-images/image 3.png'
];

let currentIndexThird = 0;
let isAnimatingThird = false;

// Initial setup - 3 cards banao (prev, current, next)
function createCarouselThird() {
    // Purana img element remove karo
    const oldImg = rightContentThird.querySelector('img');
    if (oldImg) oldImg.remove();
    
    // Carousel wrapper banao
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper-third';
    carouselWrapper.style.cssText = `
        position: relative;
        width: 100%;
        // height: 400px;
        overflow: hidden;
        border-radius: 10px;
         max-width: 340px;
        border-radius: 10px;

    `;
    
    // Track banao jisme cards honge
    const carouselTrack = document.createElement('div');
    carouselTrack.className = 'carousel-track-third';
    carouselTrack.style.cssText = `
        display: flex;
        transition: transform 0.5s ease;
        height: 100%;
    `;
    
    // 3 cards banao (prev, current, next)
    for (let i = 0; i < 3; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'carousel-card-third';
        cardDiv.style.cssText = `
            min-width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const img = document.createElement('img');
        img.style.cssText = `
            width: 100%;
            max-width: 340px;
            height: auto;
            border-radius: 10px;
        `;
        
        cardDiv.appendChild(img);
        carouselTrack.appendChild(cardDiv);
    }
    
    carouselWrapper.appendChild(carouselTrack);
    
    // Arrows se pehle add karo
    rightContentThird.insertBefore(carouselWrapper, arrowButtonsThird);
    
    // Initial images set karo
    updateCarouselImagesThird();
    
    // Current card pe center karo
    carouselTrack.style.transform = 'translateX(-100%)';
}

// Images update karo based on currentIndexThird
function updateCarouselImagesThird() {
    const cards = document.querySelectorAll('.carousel-card-third img');
    const prevIndex = (currentIndexThird - 1 + cardImagesThird.length) % cardImagesThird.length;
    const nextIndex = (currentIndexThird + 1) % cardImagesThird.length;
    
    cards[0].src = cardImagesThird[prevIndex];
    cards[1].src = cardImagesThird[currentIndexThird];
    cards[2].src = cardImagesThird[nextIndex];
}

// Slide karo (left ya right)
function slideThird(direction) {
    if (isAnimatingThird) return;
    
    isAnimatingThird = true;
    const track = document.querySelector('.carousel-track-third');
    
    if (direction === 'right') {
        // Right slide - next card dikhao
        currentIndexThird = (currentIndexThird + 1) % cardImagesThird.length;
        
        // Slide left (next card visible)
        track.style.transform = 'translateX(-200%)';
        
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(-100%)';
            updateCarouselImagesThird();
            
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                isAnimatingThird = false;
            }, 50);
        }, 500);
        
    } else {
        // Left slide - prev card dikhao
        currentIndexThird = (currentIndexThird - 1 + cardImagesThird.length) % cardImagesThird.length;
        
        // Slide right (prev card visible)
        track.style.transform = 'translateX(0%)';
        
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(-100%)';
            updateCarouselImagesThird();
            
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                isAnimatingThird = false;
            }, 50);
        }, 500);
    }
}

// Event listeners
leftArrowThird.addEventListener('click', () => slideThird('left'));
rightArrowThird.addEventListener('click', () => slideThird('right'));

// Initialize
createCarouselThird();


const comissionBtn = document.querySelector('.get-started-btn');
if(comissionBtn){
    comissionBtn.addEventListener('click',function(){
        alert("Comission page - Coming soon!")
    });
}