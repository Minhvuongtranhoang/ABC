'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

/**
 * Carousel handling
 */

window.addEventListener('load', function() {
    const handleCarousel = {
        slideIndex: 1,

        showSlides: function(n) {
            let i;
            const slides = document.querySelectorAll(".carousel-item");
            const indicators = document.querySelectorAll(".carousel-indicators > span");

            if (n > slides.length) {
                this.slideIndex = 1;
            }

            if (n < 1) {
                this.slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }

            for (i = 0; i < indicators.length; i++) {
                indicators[i].classList.remove("active");
            }

            slides[this.slideIndex - 1].classList.add("active");
            indicators[this.slideIndex - 1].classList.add("active");
        },

        plusSlides: function(n) {
            this.showSlides(this.slideIndex += n);
        },

        currentSlide: function(n) {
            this.showSlides(this.slideIndex = n);
        }
    };

    handleCarousel.showSlides(handleCarousel.slideIndex);

    const slideInterval = setInterval(function() {
        handleCarousel.plusSlides(1);
    }, 5000);
});


// Function to show/hide sections based on ID
window.onload = function() {
    // Get the hash value from the URL
    var hash = window.location.hash.substring(1);
    // Lấy id từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var sectionIdToShow = urlParams.get('sectionId');

    // Nếu có id section được truyền từ URL
    if (sectionIdToShow) {
        // Hiển thị phần tử có id tương ứng
        var sectionToShow = document.getElementById(sectionIdToShow);
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
    }

    // If there's a hash value
    if (hash) {
        // Show the section based on the hash value
        showHideSections(hash);
    }
};
