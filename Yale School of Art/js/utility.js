// ==========================================================================
// Utility Pages Interactive Functionality
// (Apply, Support, Visit, Contact, Newsletter, Settings)
// ==========================================================================

/* ==========================================================================
   Apply Page (apply.html)
   ========================================================================== */

function initApplyNavigation() {
    const navBar = document.getElementById('apply-nav-bar');
    const topbar = document.querySelector('.topbar');
    const sections = Array.from(document.querySelectorAll('.apply-section'));
    const jumpLinks = Array.from(document.querySelectorAll('.apply-jump-link'));
    const filterBtns = Array.from(document.querySelectorAll('.apply-filter-btn'));

    if (!navBar || !sections.length) return;

    function syncNavOffset() {
        const isTopbarSticky = topbar && ['sticky', 'fixed'].includes(getComputedStyle(topbar).position);
        const headerHeight = isTopbarSticky ? topbar.getBoundingClientRect().height : 0;
        const offset = Math.round(headerHeight + 16);

        navBar.style.setProperty('--topbar-offset', `${offset}px`);
        sections.forEach((sec) => {
            sec.style.scrollMarginTop = `${offset + navBar.offsetHeight + 20}px`;
        });
    }

    syncNavOffset();
    window.addEventListener('resize', syncNavOffset);

    function setActiveJumpLink(sectionId) {
        jumpLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.applyTarget === sectionId);
        });
    }

    function applySectionFilter(filterValue) {
        filterBtns.forEach((btn) => {
            const isMatch = btn.dataset.applyFilter === filterValue;
            btn.classList.toggle('active', isMatch);
            btn.setAttribute('aria-pressed', String(isMatch));
        });

        sections.forEach((sec) => {
            sec.hidden = filterValue !== 'all' && sec.id !== filterValue;
        });

        if (filterValue !== 'all') {
            setActiveJumpLink(filterValue);
            document.getElementById(filterValue)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    navBar.addEventListener('click', (e) => {
        const filterBtn = e.target.closest('.apply-filter-btn');
        if (filterBtn) {
            applySectionFilter(filterBtn.dataset.applyFilter);
            return;
        }

        const jumpLink = e.target.closest('.apply-jump-link');
        if (jumpLink) {
            e.preventDefault();
            const targetId = jumpLink.dataset.applyTarget;
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            if (targetEl.hidden) {
                applySectionFilter('all');
            }

            setActiveJumpLink(targetId);
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !entry.target.hidden) {
                        setActiveJumpLink(entry.target.id);
                    }
                });
            },
            { rootMargin: '-25% 0px -55% 0px' }
        );

        sections.forEach((sec) => sectionObserver.observe(sec));
    }
}

function initApplyAccordions() {
    const triggers = document.querySelectorAll('.apply-accordion-trigger');
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.apply-accordion-item');
            const actionLabel = trigger.querySelector('.apply-accordion-action');
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
    initApplyNavigation();
    initApplyAccordions();
});