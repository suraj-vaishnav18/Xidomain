



// Domain Slider Navigation – Mobile & Desktop Fix
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const domainGrid = document.querySelector(".domain-grid");
const cards = document.querySelectorAll(".domain-card");

if (leftArrow && rightArrow && domainGrid && cards.length > 0) {
  
  // Function to get current card width + gap
  function getCardWidth() {
    const isMobile = window.innerWidth <= 424;
    if (isMobile) {
      // Mobile: Card width 280px + gap 16px (1rem) = 296px
      // CHANGE HERE: Agar card ka actual width alag ho to yaha change karo
      return 236 + 16; // = 296px per card scroll
    } else {
      // Desktop: Card width 169px + gap 24px (1.5rem) = 193px
      // CHANGE HERE: Desktop scroll distance adjust karne ke liye
      return 172 + 24; // = 193px per card scroll
    }
  }

  // Function to get max scroll
  function getMaxScroll() {
    return domainGrid.scrollWidth - domainGrid.clientWidth;
  }

  // Update button states based on scroll position
  function updateButtons() {
    const currentScroll = domainGrid.scrollLeft;
    const maxScroll = getMaxScroll();

    // Left button: Disabled at start
    if (currentScroll <= 0) {
      leftArrow.style.opacity = '0.5';
      leftArrow.disabled = true;
    } else {
      leftArrow.style.opacity = '1';
      leftArrow.disabled = false;
    }

    // Right button: Disabled at end (with 10px buffer for precision)
    if (currentScroll >= maxScroll - 10) {
      rightArrow.style.opacity = '0.5';
      rightArrow.disabled = true;
    } else {
      rightArrow.style.opacity = '1';
      rightArrow.disabled = false;
    }
  }

  // Scroll function - ONE card at a time
  function scrollCarousel(direction) {
    const scrollAmount = getCardWidth(); // Mobile: 296px, Desktop: 193px
    const currentScroll = domainGrid.scrollLeft;
    const maxScroll = getMaxScroll();
    
    let newScroll;
    if (direction === 'left') {
      newScroll = currentScroll - scrollAmount;
      if (newScroll < 0) newScroll = 0; // Don't go below 0
    } else {
      newScroll = currentScroll + scrollAmount;
      if (newScroll > maxScroll) newScroll = maxScroll; // Don't exceed max
    }

    domainGrid.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    // Update buttons after scroll completes (300ms = animation duration)
    setTimeout(updateButtons, 300);
  }

  // Left arrow click
  leftArrow.addEventListener("click", () => {
    if (!leftArrow.disabled) {
      scrollCarousel('left');
    }
  });

  // Right arrow click
  rightArrow.addEventListener("click", () => {
    if (!rightArrow.disabled) {
      scrollCarousel('right');
    }
  });

  // On window resize, recalculate and reset
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      domainGrid.scrollLeft = 0; // Reset to start
      updateButtons();
    }, 250);
  });

  // On scroll (user manually scrolls), update buttons
  domainGrid.addEventListener('scroll', () => {
    updateButtons();
  });

  // Initial button state on load
  updateButtons();
}



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

// Domain cards click
const domainCards = document.querySelectorAll(".domain-card");

domainCards.forEach((card) => {
    card.addEventListener("click", () => {
        const domainName = card.querySelector(".domain-name").textContent;
        alert(
            `Domain details for: ${domainName}\nPrice: ${card.querySelector(".domain-price").textContent
            }`
        );
    });
});

// Collection images click
const collectionImages = document.querySelectorAll(".collection_images img");

collectionImages.forEach((img) => {
    img.addEventListener("click", () => {
        alert("Viewing this category...");
    });
});

// Collection domain cards click
const collectionDomainCards = document.querySelectorAll(
    ".popular_domain_container, .small_domain_card"
);

collectionDomainCards.forEach((card) => {
    card.addEventListener("click", () => {
        const domainType = card.querySelector("p").textContent;

        alert(`Searching for: ${domainType}`);
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




// Testimonial scrolling - UNIFIED FIX for Desktop + Mobile
const testimonialLeftArrow = document.querySelector(".testimonial-left-arrow-img");
const testimonialRightArrow = document.querySelector(".testimonial-right-arrow-img");
const testimonialContainer = document.querySelector(".testimonials-container");

// Wrapper divs (for desktop - 4 cards)
const wrapperDivs = document.querySelectorAll(
    ".flex_one_card, .flex_second_and_third_card, .flex_fourth_card"
);

// Individual cards (for mobile - 1 card at a time)
const allTestimonialCards = document.querySelectorAll(".testimonial-card");

let currentTestimonialIndex = 0;

// Check if mobile/tablet (up to 766px)
function isMobileOrTablet() {
    return window.innerWidth <= 766;
}

// Initial setup
function initializeTestimonials() {
    showTestimonials();
}

// Main function - handles both desktop and mobile
function showTestimonials() {
    if (isMobileOrTablet()) {
        // MOBILE MODE - Show 1 individual card at a time
        showMobileView();
    } else {
        // DESKTOP MODE - Show all 4 cards (wrapper divs)
        showDesktopView();
    }
}

// Desktop view - Show all wrapper divs (4 cards visible)
function showDesktopView() {
    // Show all wrapper divs
    wrapperDivs.forEach(div => {
        div.style.display = "flex"; // or "block" depending on your layout
    });
    
    // Show all individual cards
    allTestimonialCards.forEach(card => {
        card.style.display = "block";
    });
    
    // console.log("Desktop mode: Showing all 4 cards");
}

// Mobile view - Show only 1 card at current index
function showMobileView() {
    // Hide all individual cards first
    allTestimonialCards.forEach(card => {
        card.style.display = "none";
    });
    
    // Show only current card
    const cardIndex = currentTestimonialIndex % allTestimonialCards.length;
    allTestimonialCards[cardIndex].style.display = "block";
    // allTestimonialCards[cardIndex].style.animation = "fadeInUp 0.5s ease forwards";
    
    // console.log(`Mobile mode: Showing card ${cardIndex + 1}/${allTestimonialCards.length}`);
}

// Left arrow click - Previous testimonial (mobile only)
if (testimonialLeftArrow) {
    testimonialLeftArrow.addEventListener("click", () => {
        if (!isMobileOrTablet()) {
            console.log("Desktop mode - arrows disabled");
            return; // Desktop pe arrows kaam nahi karenge
        }
        
        console.log("Left arrow clicked");

        // Click animation
        testimonialLeftArrow.style.transform = "scale(0.9)";
        setTimeout(() => {
            testimonialLeftArrow.style.transform = "scale(1)";
        }, 150);

        // Slide animation
        testimonialContainer.style.animation = "slideOutRight 0.4s ease";

        setTimeout(() => {
            // Previous card
            currentTestimonialIndex = (currentTestimonialIndex - 1 + allTestimonialCards.length) % allTestimonialCards.length;
            showTestimonials();
            testimonialContainer.style.animation = "slideInLeft 0.4s ease";
        }, 400);
    });
}

// Right arrow click - Next testimonial (mobile only)
if (testimonialRightArrow) {
    testimonialRightArrow.addEventListener("click", () => {
        if (!isMobileOrTablet()) {
            console.log("Desktop mode - arrows disabled");
            return; // Desktop pe arrows kaam nahi karenge
        }
        
        // console.log("Right arrow clicked");

        // Click animation
        testimonialRightArrow.style.transform = "scale(0.9)";
        setTimeout(() => {
            testimonialRightArrow.style.transform = "scale(1)";
        }, 150);

        // Slide animation
        testimonialContainer.style.animation = "slideOutLeft 0.4s ease";

        setTimeout(() => {
            // Next card
            currentTestimonialIndex = (currentTestimonialIndex + 1) % allTestimonialCards.length;
            showTestimonials();
            testimonialContainer.style.animation = "slideInRight 0.4s ease";
        }, 400);
    });
}

// Individual testimonial card click - Show full review
allTestimonialCards.forEach((card) => {
    card.addEventListener("click", () => {
        const customerName = card.querySelector(".customer-name").textContent;
        const quote = card.querySelector(".quote").textContent;
        const rating = card.querySelectorAll(".star").length;

        alert(`
Customer: ${customerName}
Rating: ${rating}/5 stars

Review:
${quote}

Click OK to close.
        `);
    });
});

// Window resize handler - switch between mobile/desktop
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        currentTestimonialIndex = 0; // Reset to first
        showTestimonials();
    }, 250);
});

// Initialize on page load
initializeTestimonials();



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






document.addEventListener('DOMContentLoaded', function() {
  

  const words = ['website', 'Service', 'Book', 'Business', 'Apps','Sports'];
  

  const typingSpeed = 150;    
  const deletingSpeed = 100;  
  const pauseAfterWord = 2000;
  const pauseAfterDelete = 500; 

  const heroHeading = document.querySelector('.hero h1');
  
  if (!heroHeading) {
    console.error('Hero heading not found!');
    return;
  }


  
  heroHeading.innerHTML = `
    XiDomains: the smartest, fastest<br>
    way to name a <span class="dynamic-word" style="border-right: 2px solid white; padding-right: 4px; display: inline-block;"></span>
  `;
  
  const dynamicWord = heroHeading.querySelector('.dynamic-word');
  
  let wordIndex = 0;        // Current word
  let charIndex = 0;        // Current character
  let isDeleting = false;   // Delete mode?
  
  // Main typing function
  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // BACKSPACE MODE: Characters delete karo
      charIndex--;
      dynamicWord.textContent = currentWord.substring(0, charIndex);
      
      // Agar sab delete ho gaya
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Next word
        setTimeout(typeEffect, pauseAfterDelete);
        return;
      }
      
      setTimeout(typeEffect, deletingSpeed);
      
    } else {
      // TYPING MODE: Characters add karo
      charIndex++;
      dynamicWord.textContent = currentWord.substring(0, charIndex);
      
      // Agar pura word type ho gaya
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseAfterWord);
        return;
      }
      
      setTimeout(typeEffect, typingSpeed);
    }
  }
  
  // Animation start (500ms delay)
  setTimeout(typeEffect, 500);
  
  // Cursor blink effect
  setInterval(() => {
    if (dynamicWord) {
      dynamicWord.style.borderRightColor = 
        dynamicWord.style.borderRightColor === 'transparent' ? 'white' : 'transparent';
    }
  }, 530);
  
});



// copiwali domain card ke liye




// Check if iPad Mini screen size
// function isIPadMini() {
//   const width = window.innerWidth;
//   return width >= 425 && width <= 768;
// }

// // iPad Mini specific scroll handler
// if (isIPadMini()) {
//   const leftArrow = document.querySelector(".left-arrow");
//   const rightArrow = document.querySelector(".right-arrow");
//   const domainGrid = document.querySelector(".domain-grid");

//   if (leftArrow && rightArrow && domainGrid) {
    
//     // iPad Mini scroll amount = Card width (156px) + Gap (20px) = 176px
//     const IPAD_SCROLL_AMOUNT = 176;

//     // Get max scrollable distance
//     function getMaxScroll() {
//       return domainGrid.scrollWidth - domainGrid.clientWidth;
//     }

//     // Update arrow states (enable/disable)
//     function updateArrows() {
//       const currentScroll = domainGrid.scrollLeft;
//       const maxScroll = getMaxScroll();

//       // Left arrow
//       if (currentScroll <= 5) {
//         leftArrow.style.opacity = '0.4';
//         leftArrow.style.cursor = 'not-allowed';
//         leftArrow.disabled = true;
//       } else {
//         leftArrow.style.opacity = '1';
//         leftArrow.style.cursor = 'pointer';
//         leftArrow.disabled = false;
//       }

//       // Right arrow
//       if (currentScroll >= maxScroll - 5) {
//         rightArrow.style.opacity = '0.4';
//         rightArrow.style.cursor = 'not-allowed';
//         rightArrow.disabled = true;
//       } else {
//         rightArrow.style.opacity = '1';
//         rightArrow.style.cursor = 'pointer';
//         rightArrow.disabled = false;
//       }
//     }

//     // Scroll exactly ONE card
//     function scrollOneCard(direction) {
//       const currentScroll = domainGrid.scrollLeft;
//       const maxScroll = getMaxScroll();
      
//       let newScrollPosition;
      
//       if (direction === 'left') {
//         // Left scroll - ek card peeche
//         newScrollPosition = Math.max(0, currentScroll - IPAD_SCROLL_AMOUNT);
//       } else {
//         // Right scroll - ek card aage
//         newScrollPosition = Math.min(maxScroll, currentScroll + IPAD_SCROLL_AMOUNT);
//       }

//       // Smooth scroll karo
//       domainGrid.scrollTo({
//         left: newScrollPosition,
//         behavior: 'smooth'
//       });

//       // Arrows update karo (animation ke baad)
//       setTimeout(updateArrows, 350);
//     }

//     // Left arrow click
//     leftArrow.addEventListener('click', (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       if (!leftArrow.disabled) {
//         scrollOneCard('left');
//       }
//     });

//     // Right arrow click
//     rightArrow.addEventListener('click', (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       if (!rightArrow.disabled) {
//         scrollOneCard('right');
//       }
//     });

//     // Manual scroll pe arrows update
//     domainGrid.addEventListener('scroll', () => {
//       clearTimeout(domainGrid.scrollTimeout);
//       domainGrid.scrollTimeout = setTimeout(updateArrows, 50);
//     });

//     // Window resize pe reset
//     let resizeTimeout;
//     window.addEventListener('resize', () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(() => {
//         if (isIPadMini()) {
//           domainGrid.scrollLeft = 0;
//           updateArrows();
//         }
//       }, 300);
//     });

//     // Initial state
//     updateArrows();
    
//     // Page load ke baad bhi check karo
//     window.addEventListener('load', () => {
//       setTimeout(updateArrows, 100);
//     });

//     console.log('✅ iPad Mini domain slider initialized - 176px per scroll');
//   }
// }


// 2nd js


// ========================================
// IPAD MINI DOMAIN SLIDER - EXACT 1 CARD SCROLL
// ========================================

// Check if screen is iPad Mini size
function isIPadMini() {
  const width = window.innerWidth;
  return width >= 425 && width <= 768;
}

// iPad Mini specific scroll handler
if (isIPadMini()) {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const domainGrid = document.querySelector(".domain-grid");

  if (leftArrow && rightArrow && domainGrid) {
    
    // ✅ YAHA SE 4 CARDS HUE - Scroll amount update ki
    // Card width (145px) + Gap (16px) = 161px
    // Arrow click pe exactly 161px scroll hoga = 1 card
    const IPAD_SCROLL_AMOUNT = 207; // Pehle 176px tha (156+20), ab 161px (145+16)

    // Get maximum scrollable distance
    function getMaxScroll() {
      return domainGrid.scrollWidth - domainGrid.clientWidth;
    }

    // Update arrow states (enable/disable based on position)
    function updateArrows() {
      const currentScroll = domainGrid.scrollLeft;
      const maxScroll = getMaxScroll();

      // Left arrow - disable at start
      if (currentScroll <= 5) {
        leftArrow.style.opacity = '0.4';
        leftArrow.style.cursor = 'not-allowed';
        leftArrow.disabled = true;
      } else {
        leftArrow.style.opacity = '1';
        leftArrow.style.cursor = 'pointer';
        leftArrow.disabled = false;
      }

      // Right arrow - disable at end
      if (currentScroll >= maxScroll - 5) {
        rightArrow.style.opacity = '0.4';
        rightArrow.style.cursor = 'not-allowed';
        rightArrow.disabled = true;
      } else {
        rightArrow.style.opacity = '1';
        rightArrow.style.cursor = 'pointer';
        rightArrow.disabled = false;
      }
    }

    // ✅ YAHA ARROW CLICK PE SCROLL HOTA HAI
    // Scroll exactly ONE card (161px)
    function scrollOneCard(direction) {
      const currentScroll = domainGrid.scrollLeft;
      const maxScroll = getMaxScroll();
      
      let newScrollPosition;
      
      if (direction === 'left') {
        // ✅ LEFT ARROW: 161px peeche scroll (1 card left)
        newScrollPosition = Math.max(0, currentScroll - IPAD_SCROLL_AMOUNT);
        // console.log(`⬅️ Scrolling LEFT: ${IPAD_SCROLL_AMOUNT}px (1 card)`);
      } else {
        // ✅ RIGHT ARROW: 161px aage scroll (1 card right)
        newScrollPosition = Math.min(maxScroll, currentScroll + IPAD_SCROLL_AMOUNT);
        // console.log(`➡️ Scrolling RIGHT: ${IPAD_SCROLL_AMOUNT}px (1 card)`);
      }

      // ✅ YAHA ACTUAL SCROLL HOTA HAI - Smooth animation ke saath
      domainGrid.scrollTo({
        left: newScrollPosition, // 161px scroll position
        behavior: 'smooth' // Smooth animation
      });

      // Update arrows after scroll animation completes (350ms delay)
      setTimeout(updateArrows, 350);
    }

    // Left arrow click event
    leftArrow.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!leftArrow.disabled) {
        scrollOneCard('left'); // ✅ Left scroll trigger
      }
    });

    // Right arrow click event
    rightArrow.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!rightArrow.disabled) {
        scrollOneCard('right'); // ✅ Right scroll trigger
      }
    });

    // Update arrows when user manually scrolls (drag/swipe)
    domainGrid.addEventListener('scroll', () => {
      clearTimeout(domainGrid.scrollTimeout);
      domainGrid.scrollTimeout = setTimeout(updateArrows, 50);
    });

    // Reset scroll position on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (isIPadMini()) {
          domainGrid.scrollLeft = 0; // Reset to start
          updateArrows();
        }
      }, 300);
    });

    // Initial arrow state on page load
    updateArrows();
    
    // Double-check after complete page load
    window.addEventListener('load', () => {
      setTimeout(updateArrows, 100);
    });

    // console.log('✅ iPad Mini domain slider initialized');
    // console.log(`📏 Scroll amount per click: ${IPAD_SCROLL_AMOUNT}px (145px card + 16px gap)`);
  }
}


/* ========================================
   📊 SCROLL CALCULATION EXPLAINED:
   
   ✅ 4 CARDS TERE CASE MEIN YAHA SE AAYE:
   
   1. CSS Changes:
      - Card width: 156px → 145px (11px choti ki)
      - Gap: 20px → 16px (4px kam ki)
      - Padding: 70px → 60px (10px kam ki)
   
   2. JS Changes:
      - Scroll amount: 176px → 161px
      - Formula: Card width + Gap = 145 + 16 = 161px
   
   3. Result:
      - Exactly 4 cards fit on screen
      - Arrow click = 161px scroll = 1 card movement
      - No half-cut cards visible
   
   ======================================== */


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

