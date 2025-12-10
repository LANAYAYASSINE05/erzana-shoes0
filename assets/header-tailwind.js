/**
 * Header JavaScript for Tailwind version
 * Mobile menu toggle and search functionality
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('translate-x-0');
      
      if (!isOpen) {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('-translate-x-full');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        if (mobileMenu.classList.contains('translate-x-0')) {
          mobileMenu.classList.remove('translate-x-0');
          mobileMenu.classList.add('-translate-x-full');
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
      searchOverlay.classList.remove('opacity-0', 'invisible');
      searchOverlay.classList.add('opacity-100', 'visible');
      document.body.style.overflow = 'hidden';
      
      if (searchInput) {
        setTimeout(() => {
          searchInput.focus();
        }, 100);
      }
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', function() {
      searchOverlay.classList.remove('opacity-100', 'visible');
      searchOverlay.classList.add('opacity-0', 'invisible');
      document.body.style.overflow = '';
    });
  }

  // Close search overlay on ESC key
  if (searchOverlay) {
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('opacity-100')) {
        searchOverlay.classList.remove('opacity-100', 'visible');
        searchOverlay.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = '';
      }
    });
  }

  // Close search overlay when clicking outside
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('opacity-100', 'visible');
        searchOverlay.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = '';
      }
    });
  }
})();

