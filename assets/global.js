/**
 * Global JavaScript for Shopify Theme
 * Development-ready environment
 */

// Utility Functions
const utils = {
  /**
   * Debounce function
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Format money
   */
  formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    const value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || this.money_format;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      const centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    if (formatString.match(placeholderRegex)) {
      return formatString.replace(placeholderRegex, formatWithDelimiters(cents, 2));
    }

    return formatWithDelimiters(cents, 2);
  }
};

// Theme Object
window.theme = window.theme || {};
window.theme.utils = utils;

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Shopify Theme - Development Environment Ready');
  });
} else {
  console.log('Shopify Theme - Development Environment Ready');
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = utils;
}

