/**
 * Header JavaScript
 * Mobile menu toggle and search functionality
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.getAttribute('data-mobile-menu-open') === 'true';
      mobileMenu.setAttribute('data-mobile-menu-open', !isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', !isOpen);
      
      // Prevent body scroll when menu is open
      if (!isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        if (mobileMenu.getAttribute('data-mobile-menu-open') === 'true') {
          mobileMenu.setAttribute('data-mobile-menu-open', 'false');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // Search Toggle
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchOverlay = document.querySelector('[data-search-overlay]');
  const searchClose = document.querySelector('[data-search-close]');
  const searchInput = document.querySelector('.search-input');

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', function() {
      searchOverlay.setAttribute('data-search-open', 'true');
      document.body.style.overflow = 'hidden';
      
      // Focus search input
      if (searchInput) {
        setTimeout(() => {
          searchInput.focus();
        }, 100);
      }
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', function() {
      searchOverlay.setAttribute('data-search-open', 'false');
      document.body.style.overflow = '';
    });
  }

  // Close search overlay on ESC key
  if (searchOverlay) {
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.getAttribute('data-search-open') === 'true') {
        searchOverlay.setAttribute('data-search-open', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Close search overlay when clicking outside
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.setAttribute('data-search-open', 'false');
        document.body.style.overflow = '';
      }
    });
  }
})();

