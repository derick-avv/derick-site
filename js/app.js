/**
 * Application Interactivity
 * Event listeners kept isolated from structural HTML markup
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inject current year into the footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Tab Navigation Configuration
  const tabs = [
    {
      btn: document.getElementById('tab-btn-technical'),
      content: document.getElementById('tab-technical'),
    },
    {
      btn: document.getElementById('tab-btn-sales'),
      content: document.getElementById('tab-sales'),
    },
    {
      btn: document.getElementById('tab-btn-admin'),
      content: document.getElementById('tab-admin'),
    },
    {
      btn: document.getElementById('tab-btn-trades'),
      content: document.getElementById('tab-trades'),
    },
  ];

  // Handle tab switching clicks
  tabs.forEach((tab) => {
    if (tab.btn && tab.content) {
      tab.btn.addEventListener('click', () => {
        // Deactivate all tab buttons and hide all contents
        tabs.forEach((t) => {
          t.btn.classList.remove('active-tab');
          t.content.classList.add('hidden');
        });

        // Activate selected tab and reveal content
        tab.btn.classList.add('active-tab');
        tab.content.classList.remove('hidden');
      });
    }
  });
});

/**
 * Real Estate Marketplace Filtering & Responsive Navigation
 * Derick Vasquez Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Controls
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
  }

  // Auto-close menu when clicking a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  });

  // Marketplace Property Filtering
  const filterType = document.getElementById('filter-type');
  const filterLocation = document.getElementById('filter-location');
  const filterPrice = document.getElementById('filter-price');
  const resetButton = document.getElementById('reset-filters');
  const propertyCards = document.querySelectorAll('.property-card');
  const leadForm = document.getElementById('realestate-lead-form');

  function filterProperties() {
    const typeValue = filterType ? filterType.value : 'all';
    const locationValue = filterLocation ? filterLocation.value : 'all';

    propertyCards.forEach((card) => {
      const cardType = card.getAttribute('data-type');
      const cardLocation = card.getAttribute('data-location');

      const matchesType = typeValue === 'all' || cardType === typeValue;
      const matchesLocation = locationValue === 'all' || cardLocation === locationValue;

      if (matchesType && matchesLocation) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (filterType && filterLocation) {
    filterType.addEventListener('change', filterProperties);
    filterLocation.addEventListener('change', filterProperties);
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      filterType.value = 'all';
      filterLocation.value = 'all';
      if (filterPrice) filterPrice.value = 'all';
      filterProperties();
    });
  }

  // Lead Form Handler
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your real estate query has been received.');
      leadForm.reset();
    });
  }
});

/**
 * Real Estate Responsive Navigation & Lead Capture
 * Derick Vasquez Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  });

  // Lead Capture Form Handler
  const leadForm = document.getElementById('placeholder-lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        'Thank you! Your information has been submitted. You will be notified as soon as the marketplace is live.',
      );
      leadForm.reset();
    });
  }
});

/**
 * Insurance Advisory Responsive Navigation & Lead Capture
 * Derick Vasquez Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  });

  // Lead Capture Form Handler
  const leadForm = document.getElementById('insurance-lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        'Thank you! Your information has been received. You will be contacted once insurance advisory services resume.',
      );
      leadForm.reset();
    });
  }
});
