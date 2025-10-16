// Domain Slider Navigation
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const domainGrid = document.querySelector(".domain-grid");

if (leftArrow && rightArrow && domainGrid) {
    leftArrow.addEventListener("click", () => {
        domainGrid.scrollBy({
            left: -385,
            behavior: "smooth",
        });
    });

    rightArrow.addEventListener("click", () => {
        domainGrid.scrollBy({
            left: 385,
            behavior: "smooth",
        });
    });
}

// faq according...!
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const plusImg = question.querySelector(".plus_img img");

    if (question) {
        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Pehle saare items band karo
            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");
                const otherAnswer = otherItem.querySelector(".faq-answer");
                const otherPlus = otherItem.querySelector(".plus_img img");
                if (otherAnswer) {
                    otherAnswer.style.display = "none";
                }
                if (otherPlus) {
                    otherPlus.style.transform = "rotate(0deg)";
                }
            });

            // Agar ye item pehle se active nahi tha, toh isko activate karo
            if (!isActive) {
                item.classList.add("active");
                const answer = item.querySelector(".faq-answer");
                if (answer) {
                    answer.style.display = "block";
                }
                if (plusImg) {
                    plusImg.style.transform = "rotate(45deg)";
                }
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

// Smooth scroll for navigation - FIXED VERSION
// const navLinks = document.querySelectorAll(".nav-menu a");

// navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         const href = link.getAttribute("href");

//         // Agar # se start hota hai (same page scroll)
//         if (href && href.startsWith("#") && href !== "#") {
//             e.preventDefault();
//             const targetId = href.substring(1); // Remove #
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 targetSection.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });
//             } else {
//                 console.log("Section not found:", targetId);
//             }
//         }
//     });
// });

// faq-perfect
// document.addEventListener("DOMContentLoaded", function () {
//     // console.log("FAQ Script Loaded");

//     //CROSS BUTTON FOR FIRST FAQ ITEM
//     const faqItemOne = document.querySelector(".faq-item-one");
//     const crossBtn = document.querySelector(".cross-btn-faq");

//     // if (crossBtn && faqItemOne) {
//     //     crossBtn.addEventListener("click", function (e) {
//     //         e.stopPropagation();
//     //         // console.log("Cross button clicked");

//     //         faqItemOne.style.transition = "all 0.4s ease";
//     //         faqItemOne.style.opacity = "0";
//     //         faqItemOne.style.transform = "translateY(-20px)";

//     //         setTimeout(() => {
//     //             faqItemOne.style.display = "none";
//     //         }, 400);
//     //     });
//     // }

//     // REGULAR FAQ ACCORDION 
//     const faqItems = document.querySelectorAll(".faq-item");

//     faqItems.forEach((item, index) => {
//         const question = item.querySelector(".faq-question");
//         const plusImg = item.querySelector(".plus_img");

//         // Common click handler function (used by both question & plus icon)
//         const toggleFAQ = (e) => {
//             e.stopPropagation(); // prevent double triggering
//             const isActive = item.classList.contains("active");

//             // Close all other FAQs
//             faqItems.forEach((otherItem) => {
//                 if (otherItem !== item) {
//                     otherItem.classList.remove("active");
//                     const otherAnswer = otherItem.querySelector(".faq-answer");
//                     const otherPlusImg = otherItem.querySelector(".plus_img img");
//                     if (otherAnswer) otherAnswer.style.display = "none";
//                     if (otherPlusImg) otherPlusImg.style.transform = "rotate(0deg)";
//                 }
//             });

//             // Toggle current FAQ
//             const answer = item.querySelector(".faq-answer");
//             const img = item.querySelector(".plus_img img");

//             if (isActive) {
//                 // close current
//                 item.classList.remove("active");
//                 if (answer) answer.style.display = "none";
//                 if (img) img.style.transform = "rotate(0deg)";
//             } else {
//                 // open current
//                 item.classList.add("active");
//                 if (answer) answer.style.display = "block";
//                 if (img) img.style.transform = "rotate(45deg)";
//             }
//         };

//         // Click listener for question
//         if (question) {
//             question.addEventListener("click", toggleFAQ);
//         }

//         // Click listener for plus icon (optional, for direct clicks)
//         if (plusImg) {
//             plusImg.addEventListener("click", toggleFAQ);
//         }
//     });
// });

// all for same

//     document.addEventListener("DOMContentLoaded", function () {
//     const faqItems = document.querySelectorAll(".faq-item");

//     faqItems.forEach((item) => {
//         const question = item.querySelector(".faq-question");
//         const plusImg = item.querySelector(".plus_img");

//         const toggleFAQ = (e) => {
//             e.stopPropagation();
//             const isActive = item.classList.contains("active");

//             // Close all other FAQs
//             faqItems.forEach((otherItem) => {
//                 if (otherItem !== item) {
//                     otherItem.classList.remove("active");
//                     const otherAnswer = otherItem.querySelector(".faq-answer");
//                     const otherPlusImg = otherItem.querySelector(".plus_img img");
//                     if (otherAnswer) otherAnswer.style.display = "none";
//                     if (otherPlusImg) otherPlusImg.style.transform = "rotate(0deg)";
//                 }
//             });

//             // Toggle current
//             const answer = item.querySelector(".faq-answer");
//             const img = item.querySelector(".plus_img img");

//             if (isActive) {
//                 item.classList.remove("active");
//                 if (answer) answer.style.display = "none";
//                 if (img) img.style.transform = "rotate(0deg)";
//             } else {
//                 item.classList.add("active");
//                 if (answer) answer.style.display = "block";
//                 if (img) img.style.transform = "rotate(45deg)";
//             }
//         };

//         if (question) question.addEventListener("click", toggleFAQ);
//         if (plusImg) plusImg.addEventListener("click", toggleFAQ);
//     });
// });

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

// const leftTestimonialSection = document.querySelector('.testimonial-left-arrow-img');
// const rightTestimonialSection = document.querySelector('.testimonial-right-arrow-img');
// const testimonialContainer = document.querySelector('.testimonials-container');

// if(leftTestimonialSection && rightTestimonialSection && testimonialContainer){

//     leftTestimonialSection.addEventListener('click', ()=>{
//         testimonialContainer.scrollBy({
//             left:-300,
//             behavior:'smooth',
//         });
//     });

//      rightTestimonialSection.addEventListener('click', ()=>{
//         testimonialContainer.scrollBy({
//             left:300,
//             behavior:'smooth',
//         });
//     });
// }

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



// testimonial scrolling
const testimonialLeftArrow = document.querySelector(
    ".testimonial-left-arrow-img"
);
const testimonialRightArrow = document.querySelector(
    ".testimonial-right-arrow-img"
);
const testimonialContainer = document.querySelector(".testimonials-container");
const allTestimonialCards = document.querySelectorAll(
    ".flex_one_card, .flex_second_and_third_card, .flex_fourth_card"
);

let currentTestimonialIndex = 0;
const totalTestimonialSets = allTestimonialCards.length;

// Initial setup
function initializeTestimonials() {
    // Pehla set visible karo
    showTestimonialSet(0);
}

// Show specific testimonial set
// function showTestimonialSet(index) {
//     allTestimonialCards.forEach((card, i) => {
//         if (i === index || (index === 0 && i < 3)) {
//             card.style.display = "block";
//             card.style.animation = "fadeInUp 0.5s ease forwards";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }

function showTestimonialSet(index) {
    allTestimonialCards.forEach((card, i) => {
        card.style.display = "none"; // sab hide karo
    });

    // Current card set ko show karo (infinite rotation)
    const visibleCount = 3; // ek bar me 3 cards dikhane hain (adjust kar sakta hai)
    for (let i = 0; i < visibleCount; i++) {
        const cardIndex = (index + i) % allTestimonialCards.length; // loop back for infinite
        // allTestimonialCards[cardIndex].style.display = "block";
        allTestimonialCards[cardIndex].style.display = "flex";

        allTestimonialCards[cardIndex].style.animation = "fadeInUp 0.5s ease forwards";
    }
}


// Left arrow click - Previous testimonials
if (testimonialLeftArrow) {
    testimonialLeftArrow.addEventListener("click", () => {
        console.log("Left arrow clicked");

        // Add click animation
        testimonialLeftArrow.style.transform = "scale(0.9)";
        setTimeout(() => {
            testimonialLeftArrow.style.transform = "scale(1)";
        }, 150);

        // Testimonials ko left side scroll effect
        testimonialContainer.style.animation = "slideOutRight 0.4s ease";

        setTimeout(() => {
            currentTestimonialIndex =
                (currentTestimonialIndex - 1 + totalTestimonialSets) %
                totalTestimonialSets;
            showTestimonialSet(currentTestimonialIndex);
            testimonialContainer.style.animation = "slideInLeft 0.4s ease";
        }, 400);

        // Feedback message
        console.log("Showing previous testimonials");
    });
}

// Right arrow click - Next testimonials
if (testimonialRightArrow) {
    testimonialRightArrow.addEventListener("click", () => {
        console.log("Right arrow clicked");

        // Add click animation
        testimonialRightArrow.style.transform = "scale(0.9)";
        setTimeout(() => {
            testimonialRightArrow.style.transform = "scale(1)";
        }, 150);

        // Testimonials k right side scroll effect
        testimonialContainer.style.animation = "slideOutLeft 0.4s ease";

        setTimeout(() => {
            currentTestimonialIndex =
                (currentTestimonialIndex + 1) % totalTestimonialSets;
            showTestimonialSet(currentTestimonialIndex);
            testimonialContainer.style.animation = "slideInRight 0.4s ease";
        }, 400);

        // Feedback message
        console.log("Showing next testimonials");
    });
}

// Individual testimonial card click - Show full review
const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialCards.forEach((card, index) => {
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

    // Hover effect enhancement
    // card.addEventListener("mouseenter", () => {
    //     card.style.transform = "translateY(-5px)";
    //     card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.12)";
    // });

    // card.addEventListener("mouseleave", () => {
    //     card.style.transform = "translateY(0)";
    //     card.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.06)";
    // });
});

// Auto-play carousel (optional - comment out if not needed)
let autoPlayInterval;

// function startAutoPlay() {
//     autoPlayInterval = setInterval(() => {
//         if (testimonialRightArrow) {
//             testimonialRightArrow.click();
//         }
//     }, 50000); // Har 5 seconds mein automatically next
// }

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Auto-play start karo (optional)
// startAutoPlay();

// Jab user arrows pe hover kare toh auto-play band karo
if (testimonialLeftArrow && testimonialRightArrow) {
    testimonialLeftArrow.addEventListener("mouseenter", stopAutoPlay);
    testimonialRightArrow.addEventListener("mouseenter", stopAutoPlay);
    testimonialLeftArrow.addEventListener("mouseleave", startAutoPlay);
    testimonialRightArrow.addEventListener("mouseleave", startAutoPlay);
}

// Initialize on page load
initializeTestimonials();
