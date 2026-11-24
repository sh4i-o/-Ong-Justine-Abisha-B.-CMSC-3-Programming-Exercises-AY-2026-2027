// ==========================================================================
// Resources Page Interactive Functionality (resources.html)
// ==========================================================================

function initResourceAccordions() {
    const triggers = document.querySelectorAll('.resource-accordion-trigger');
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.resource-accordion-item');
            const actionLabel = trigger.querySelector('.resource-accordion-action');
            if (!item) return;

            const willOpen = !item.classList.contains('open');
            item.classList.toggle('open', willOpen);
            trigger.setAttribute('aria-expanded', String(willOpen));

            if (actionLabel) {
                actionLabel.textContent = willOpen ? 'Hide' : 'View';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initResourceAccordions();
});