/**
 * Product Slider Initialization
 * Initializes Swiper.js for featured products slider sections
 */

(function() {
  'use strict';

  // Wait for DOM and Swiper to be ready
  function initSliders() {
    // Check if Swiper is loaded
    if (typeof Swiper === 'undefined') {
      // Retry after a short delay (max 50 attempts = 5 seconds)
      if (typeof initSliders.attempts === 'undefined') {
        initSliders.attempts = 0;
      }
      initSliders.attempts++;
      if (initSliders.attempts < 50) {
        setTimeout(initSliders, 100);
      }
      return;
    }

    // Find all slider containers that haven't been initialized
    const sliderContainers = document.querySelectorAll('.featured-products-slider:not(.swiper-initialized)');
    
    sliderContainers.forEach((container) => {
      // Skip if already initialized
      if (container.swiper) {
        return;
      }

      // Get settings from container data attributes or defaults
      const autoplayValue = container.dataset.autoplay;
      const autoplayEnabled = autoplayValue !== 'false' && autoplayValue !== '0' && autoplayValue !== '';
      const autoplayDelay = parseInt(container.dataset.autoplayDelay) || 3000;

      // Initialize Swiper
      new Swiper(container, {
        // Basic settings
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        speed: 600,
        
        // Autoplay configuration
        autoplay: autoplayEnabled ? {
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        } : false,
        
        // Responsive breakpoints
        breakpoints: {
          // Mobile: 1 slide
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          // Tablet: 2 slides
          750: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Desktop: 4 slides
          990: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
        
        // Navigation arrows
        navigation: {
          nextEl: container.querySelector('.swiper-button-next'),
          prevEl: container.querySelector('.swiper-button-prev'),
        },
        
        // Pagination dots
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
          dynamicBullets: false,
        },
        
        // Accessibility
        a11y: {
          enabled: true,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
        },
        
        // Performance optimizations
        watchOverflow: true,
        observer: true,
        observeParents: true,
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSliders);
  } else {
    initSliders();
  }

  // Re-initialize when sections are loaded dynamically (Shopify theme editor)
  if (typeof CustomEvent !== 'undefined') {
    document.addEventListener('shopify:section:load', function(event) {
      if (event.detail.sectionId) {
        setTimeout(initSliders, 100);
      }
    });
  }
})();

