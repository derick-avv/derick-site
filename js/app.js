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
        { btn: document.getElementById('tab-btn-technical'), content: document.getElementById('tab-technical') },
        { btn: document.getElementById('tab-btn-sales'), content: document.getElementById('tab-sales') },
        { btn: document.getElementById('tab-btn-trades'), content: document.getElementById('tab-trades') }
    ];

    // Handle tab switching clicks
    tabs.forEach(tab => {
        if (tab.btn && tab.content) {
            tab.btn.addEventListener('click', () => {
                // Deactivate all tab buttons and hide all contents
                tabs.forEach(t => {
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