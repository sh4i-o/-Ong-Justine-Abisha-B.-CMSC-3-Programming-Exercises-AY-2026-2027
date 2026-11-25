// ==========================================================================
// Utility Pages Interactive Controller (Visit, Contact, Newsletter, Settings)
// ==========================================================================

let cachedStickyOffset = 154;

// ==========================================================================
// 1. Sticky Offset & Scroll Helpers
// ==========================================================================

function syncUtilityStickyOffset() {
    const topbar = document.querySelector('.topbar');
    const navBar = document.getElementById('utility-nav-bar');

    const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
    const stickyTop = Math.round(topbarHeight + 16);
    document.documentElement.style.setProperty('--topbar-offset', `${stickyTop}px`);

    const navBarHeight = navBar ? navBar.getBoundingClientRect().height : 0;
    cachedStickyOffset = Math.round(stickyTop + navBarHeight + 28);

    document.querySelectorAll('.utility-section').forEach((sec) => {
        sec.style.scrollMarginTop = `${cachedStickyOffset}px`;
    });

    return cachedStickyOffset;
}

function scrollToUtilitySection(targetEl, smooth = true) {
    if (!targetEl) return;
    const offset = syncUtilityStickyOffset();
    const targetY = targetEl.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: Math.max(0, targetY),
        behavior: smooth ? 'smooth' : 'auto'
    });
}

// ==========================================================================
// 2. Sticky Section Jump & Filter Bar (Visit, Contact)
// ==========================================================================

function initUtilityNavAndFilters() {
    const navBar = document.getElementById('utility-nav-bar');
    if (!navBar) return;

    syncUtilityStickyOffset();
    window.addEventListener('resize', syncUtilityStickyOffset);
    window.addEventListener('load', syncUtilityStickyOffset);

    const jumpLinks = Array.from(navBar.querySelectorAll('.utility-jump-link'));
    const filterBtns = Array.from(navBar.querySelectorAll('.utility-filter-btn'));
    const sections = Array.from(document.querySelectorAll('.utility-section'));

    let activeFilter = 'all';

    function setActiveJump(id) {
        jumpLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.utilityTarget === id);
        });
    }

    function applyFilter(filterKey) {
        activeFilter = filterKey;

        filterBtns.forEach((btn) => {
            const isMatch = btn.dataset.utilityFilter === filterKey;
            btn.classList.toggle('active', isMatch);
            btn.setAttribute('aria-pressed', String(isMatch));
        });

        sections.forEach((sec) => {
            sec.hidden = filterKey !== 'all' && sec.id !== filterKey;
        });

        if (filterKey !== 'all') {
            setActiveJump(filterKey);
        } else if (sections.length) {
            setActiveJump(sections[0].id);
        }

        syncUtilityStickyOffset();
    }

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            applyFilter(btn.dataset.utilityFilter || 'all');
        });
    });

    jumpLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.dataset.utilityTarget;
            if (!targetId) return;

            if (activeFilter !== 'all' && activeFilter !== targetId) {
                applyFilter('all');
            }
            setActiveJump(targetId);

            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                scrollToUtilitySection(targetEl, true);
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (activeFilter !== 'all') return;
        const threshold = cachedStickyOffset + 24;
        let currentId = sections[0]?.id;

        for (const sec of sections) {
            if (!sec.hidden && sec.getBoundingClientRect().top <= threshold) {
                currentId = sec.id;
            }
        }
        if (currentId) setActiveJump(currentId);
    }, { passive: true });

    // Handle direct URL hash links on initial load (e.g., visit.html#accommodations)
    if (window.location.hash) {
        const initialTarget = document.getElementById(window.location.hash.slice(1));
        if (initialTarget && initialTarget.classList.contains('utility-section')) {
            setActiveJump(initialTarget.id);
            requestAnimationFrame(() => scrollToUtilitySection(initialTarget, false));
        }
    }
}

// ==========================================================================
// 3. Contact Directory Real-Time Search (contact.html)
// ==========================================================================

function initContactDirectorySearch() {
    const searchInput = document.getElementById('contact-directory-search');
    if (!searchInput) return;

    const sections = Array.from(document.querySelectorAll('.utility-section'));
    const emptyState = document.getElementById('contact-empty-state');
    const filterBtns = Array.from(document.querySelectorAll('.utility-filter-btn'));

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        // Reset section filter pills to "All" while searching
        if (query) {
            filterBtns.forEach((btn) => {
                const isAll = btn.dataset.utilityFilter === 'all';
                btn.classList.toggle('active', isAll);
                btn.setAttribute('aria-pressed', String(isAll));
            });
        }

        let visibleSectionsCount = 0;

        sections.forEach((sec) => {
            const sectionTitle = sec.querySelector('.section-label')?.textContent.toLowerCase() || '';
            const cards = Array.from(sec.querySelectorAll('.utility-info-card'));

            if (!query) {
                sec.hidden = false;
                cards.forEach((card) => { card.hidden = false; });
                visibleSectionsCount++;
                return;
            }

            const matchesSectionTitle = sectionTitle.includes(query);
            let visibleCardsInSection = 0;

            cards.forEach((card) => {
                const cardText = card.textContent.toLowerCase();
                const isMatch = matchesSectionTitle || cardText.includes(query);
                card.hidden = !isMatch;
                if (isMatch) visibleCardsInSection++;
            });

            sec.hidden = visibleCardsInSection === 0;
            if (visibleCardsInSection > 0) visibleSectionsCount++;
        });

        if (emptyState) {
            emptyState.hidden = visibleSectionsCount > 0;
        }
    });
}

// ==========================================================================
// 4. Newsletter Sign-Up Form Handler (newsletter.html)
// ==========================================================================

function initNewsletterForm() {
    const form = document.getElementById('newsletter-signup-form');
    if (!form) return;

    const emailInput = document.getElementById('newsletter-email');
    const firstNameInput = document.getElementById('newsletter-first-name');
    const gradYearInput = document.getElementById('newsletter-grad-year');
    const gradAreaSelect = document.getElementById('newsletter-grad-area');
    const consentCheckbox = document.getElementById('newsletter-email-consent');
    const alumRadios = Array.from(form.querySelectorAll('input[name="isAlum"]'));
    const feedback = document.getElementById('newsletter-feedback');

    function syncAlumFields() {
        const isAlum = form.querySelector('input[name="isAlum"]:checked')?.value === 'yes';
        if (gradYearInput) {
            gradYearInput.disabled = !isAlum;
            if (!isAlum) gradYearInput.value = '';
        }
        if (gradAreaSelect) {
            gradAreaSelect.disabled = !isAlum;
            if (!isAlum) gradAreaSelect.value = 'Not an Alum';
        }
    }

    alumRadios.forEach((radio) => {
        radio.addEventListener('change', syncAlumFields);
    });
    syncAlumFields();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!feedback || !emailInput) return;

        const email = emailInput.value.trim();
        const checkedLists = Array.from(form.querySelectorAll('input[name="lists"]:checked'))
            .map((cb) => cb.value);

        feedback.hidden = false;
        feedback.classList.remove('is-error');

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            feedback.classList.add('is-error');
            feedback.textContent = 'Please enter a valid email address to subscribe.';
            emailInput.focus();
            return;
        }

        if (checkedLists.length === 0) {
            feedback.classList.add('is-error');
            feedback.textContent = 'Please select at least one newsletter ("News from New Haven" or "Week at SoA").';
            return;
        }

        if (consentCheckbox && !consentCheckbox.checked) {
            feedback.classList.add('is-error');
            feedback.textContent = 'Please check the Email box under Contact Permissions to consent to receiving updates.';
            consentCheckbox.focus();
            return;
        }

        const firstName = firstNameInput?.value.trim();
        const greeting = firstName ? `Thank you, ${firstName}!` : 'Thank you!';
        const listSummary = checkedLists.join(' and ');

        feedback.textContent = `${greeting} You are now subscribed to ${listSummary} (${email}).`;
        form.reset();
        syncAlumFields();
    });
}

// ==========================================================================
// 5. Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initUtilityNavAndFilters();
    initContactDirectorySearch();
    initNewsletterForm();
});