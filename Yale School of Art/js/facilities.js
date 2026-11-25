// ==========================================================================
// Facilities Single-Wrapper Filtered Showcase & Lightbox Controller
// ==========================================================================

const FACILITY_COLLECTIONS = {
    galleries: {
        label: 'Galleries',
        count: 3,
        placeholderPrefix: '../assets/gh-entrance.webp',
        facilityTemplate: (i, total) => ({
            name: `Gallery Facility Placeholder ${i} of ${total}`,
            location: 'Location (Floor / Building)',
            address: 'Address (Street, New Haven, CT)',
            hours: 'Operating Hours / Details'
        })
    },
    fabrication: {
        label: 'Fabrication & Production',
        count: 7,
        placeholderPrefix: '../assets/studio.webp',
        facilityTemplate: (i, total) => ({
            name: `Fabrication & Production Facility Placeholder ${i} of ${total}`,
            location: 'Location (Floor / Building)',
            address: 'Address (Street, New Haven, CT)',
            hours: 'Operating Hours / Details'
        })
    },
    digital: {
        label: 'Digital Equipment & Support',
        count: 2,
        placeholderPrefix: '../assets/gd-atrium.webp',
        facilityTemplate: (i, total) => ({
            name: `Digital Equipment and Support Placeholder ${i} of ${total}`,
            location: 'Location (Floor / Building)',
            address: 'Address (Street, New Haven, CT)',
            hours: 'Operating Hours / Details'
        })
    },
    archives: {
        label: 'Archives',
        count: 1,
        placeholderPrefix: '../assets/edgewood-gallery.webp',
        facilityTemplate: (i, total) => ({
            name: `Archives Facility Placeholder ${i} of ${total}`,
            location: 'Location (Floor / Building)',
            address: 'Address (Street, New Haven, CT)',
            hours: 'Operating Hours / Details'
        })
    },
    shops: {
        label: 'Departmental Shops & Labs',
        count: 3,
        placeholderPrefix: '../assets/sp-interior.webp',
        facilityTemplate: (i, total) => ({
            name: `Departmental Shops and Labs Placeholder ${i} of ${total}`,
            location: 'Location (Floor / Building)',
            address: 'Address (Street, New Haven, CT)',
            hours: 'Operating Hours / Details'
        })
    },
    administration: {
        label: 'Administration',
        count: 1,
        placeholderPrefix: '../assets/pp-interior.webp',
        facilityTemplate: (i, total) => ({
            name: `Administration Facility Placeholder ${i} of ${total}`,
            location: 'Location (Floor / Building)',
            address: 'Address (Street, New Haven, CT)',
            hours: 'Operating Hours / Details'
        })
    }
};

function escapeFacilityHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildCategoryItems(key) {
    const col = FACILITY_COLLECTIONS[key];
    if (!col) return [];

    if (Array.isArray(col.items) && col.items.length) {
        return col.items.map((item) => ({
            category: col.label,
            ...item
        }));
    }

    return Array.from({ length: col.count }, (_, idx) => {
        const meta = col.facilityTemplate(idx + 1, col.count);
        return {
            category: col.label,
            src: col.placeholderPrefix,
            alt: meta.name || `${col.label} ${idx + 1} of ${col.count}`,
            ...meta
        };
    });
}

function getAllFacilityItems() {
    return Object.keys(FACILITY_COLLECTIONS).flatMap((key) => buildCategoryItems(key));
}

function renderFacilityCaption(containerEl, item, showCategory) {
    if (!containerEl || !item) return;

    containerEl.innerHTML = `
        ${showCategory ? `<span class="facility-cap-category">${escapeFacilityHtml(item.category)}</span>` : ''}
        <span class="facility-cap-name">${escapeFacilityHtml(item.name)}</span>
        <span class="facility-cap-line">${escapeFacilityHtml(item.location)}</span>
        <span class="facility-cap-line">${escapeFacilityHtml(item.address)}</span>
        <span class="facility-cap-hours">${escapeFacilityHtml(item.hours)}</span>
    `;
}

function initFacilitiesShowcase() {
    const showcase = document.getElementById('facilities-gallery-showcase');
    if (!showcase) return;

    const categoryKeys = Object.keys(FACILITY_COLLECTIONS);
    const tabsContainer = showcase.querySelector('.gallery-tabs');
    const slidesContainer = showcase.querySelector('.gallery-slides');
    const metaEl = showcase.querySelector('.gallery-meta');
    const metaLabelEl = showcase.querySelector('.meta-label');
    const metaCounterEl = showcase.querySelector('.meta-counter');
    const captionEl = showcase.querySelector('.gallery-caption');
    const prevBtn = showcase.querySelector('[data-gallery-prev]');
    const nextBtn = showcase.querySelector('[data-gallery-next]');

    const lightbox = document.getElementById('facility-lightbox');
    const lightboxMedia = lightbox?.querySelector('.program-lightbox-media');
    const lightboxCaption = document.getElementById('facility-lightbox-caption');
    const lightboxCounter = document.getElementById('facility-lightbox-counter');
    const lightboxClose = document.getElementById('facility-lightbox-close');
    const lightboxPrev = document.getElementById('facility-lightbox-prev');
    const lightboxNext = document.getElementById('facility-lightbox-next');

    let activeKey = 'all';
    let currentItems = [];
    let currentIndex = 0;
    let lastFocusedEl = null;
    let touchStartX = 0;

    function getFilterTabs() {
        const allItems = getAllFacilityItems();
        return [
            { key: 'all', label: 'All Facilities', count: allItems.length },
            ...categoryKeys.map((key) => {
                const col = FACILITY_COLLECTIONS[key];
                const total = Array.isArray(col.items) && col.items.length ? col.items.length : col.count;
                return { key, label: col.label, count: total };
            })
        ];
    }

    function renderTabs() {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = getFilterTabs().map((tab) => {
            const isActive = tab.key === activeKey;
            return `
                <button
                    type="button"
                    class="gallery-tab${isActive ? ' active' : ''}"
                    data-collection="${tab.key}"
                    aria-pressed="${String(isActive)}">
                    <span>${escapeFacilityHtml(tab.label)}</span>
                    <span class="gallery-tab-count">${tab.count}</span>
                </button>
            `;
        }).join('');
    }

    function mountCollectionImages(key) {
        activeKey = key;
        currentItems = key === 'all' ? getAllFacilityItems() : buildCategoryItems(key);

        const buildImgs = (className) => currentItems.map((item, idx) => `
            <img
                class="${className}${idx === 0 ? ' active' : ''}"
                src="${item.src}"
                alt="${escapeFacilityHtml(item.alt)}"
            />
        `).join('');

        if (slidesContainer) slidesContainer.innerHTML = buildImgs('gallery-slide');
        if (lightboxMedia) lightboxMedia.innerHTML = buildImgs('');
    }

    function setSlide(index) {
        if (!currentItems.length) return;
        currentIndex = (index + currentItems.length) % currentItems.length;

        const current = currentItems[currentIndex];
        const activeLabel = activeKey === 'all' ? current.category : FACILITY_COLLECTIONS[activeKey].label;
        const counterText = `${currentIndex + 1} of ${currentItems.length}`;
        const hasMultiple = currentItems.length > 1;

        slidesContainer?.querySelectorAll('.gallery-slide').forEach((img, idx) => {
            img.classList.toggle('active', idx === currentIndex);
        });

        lightboxMedia?.querySelectorAll('img').forEach((img, idx) => {
            img.classList.toggle('active', idx === currentIndex);
        });

        if (prevBtn) prevBtn.disabled = !hasMultiple;
        if (nextBtn) nextBtn.disabled = !hasMultiple;

        if (metaLabelEl) metaLabelEl.textContent = activeLabel;
        if (metaCounterEl) metaCounterEl.textContent = counterText;
        metaEl?.setAttribute('aria-label', `${activeLabel} ${counterText}`);
        renderFacilityCaption(captionEl, current, false);

        if (lightboxCounter) lightboxCounter.textContent = `${activeLabel} · ${counterText}`;
        renderFacilityCaption(lightboxCaption, current, false);
    }

    function openLightbox() {
        if (!lightbox) return;
        lastFocusedEl = document.activeElement;
        setSlide(currentIndex);
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightboxClose?.focus();
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lastFocusedEl?.focus();
    }

    tabsContainer?.addEventListener('click', (e) => {
        const tab = e.target.closest('.gallery-tab');
        const nextKey = tab?.dataset.collection;
        if (!nextKey || nextKey === activeKey) return;

        mountCollectionImages(nextKey);
        renderTabs();
        setSlide(0);
    });

    prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentItems.length > 1) setSlide(currentIndex - 1);
    });

    nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentItems.length > 1) setSlide(currentIndex + 1);
    });

    slidesContainer?.addEventListener('click', openLightbox);
    slidesContainer?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox();
        }
    });

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox?.querySelector('[data-lightbox-close]')?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', () => {
        if (currentItems.length > 1) setSlide(currentIndex - 1);
    });
    lightboxNext?.addEventListener('click', () => {
        if (currentItems.length > 1) setSlide(currentIndex + 1);
    });

    lightbox?.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox?.addEventListener('touchend', (e) => {
        if (currentItems.length <= 1) return;
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 40) {
            setSlide(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
        }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        if (!lightbox?.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft' && currentItems.length > 1) setSlide(currentIndex - 1);
        if (e.key === 'ArrowRight' && currentItems.length > 1) setSlide(currentIndex + 1);
    });

    mountCollectionImages(activeKey);
    renderTabs();
    setSlide(0);
}

// ==========================================================================
// Live Open / Closed Status Board (Evaluated in New Haven ET)
// ==========================================================================

function getNewHavenNow() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }).formatToParts(now);

    const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
    const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const hour = Number(map.hour) === 24 ? 0 : Number(map.hour);
    const minute = Number(map.minute);

    const formattedClock = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        weekday: 'short',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).format(now);

    return {
        day: dayMap[map.weekday] ?? 1,
        minutesSinceMidnight: hour * 60 + minute,
        formattedClock
    };
}

/**
 * Evaluates whether a facility is currently open.
 * Optional item.schedule format:
 *   { days: [1,2,3,4,5], open: 9 * 60, close: 18 * 60 } // Mon-Fri 9 AM - 6 PM
 *   { is247: true }
 * Falls back to sensible demo schedules by category until real schedules are added.
 */
function isFacilityOpenNow(item, etNow) {
    const sched = item.schedule || getDefaultScheduleForCategory(item.category);
    if (sched.is247) return true;
    if (!sched.days.includes(etNow.day)) return false;
    return etNow.minutesSinceMidnight >= sched.open && etNow.minutesSinceMidnight < sched.close;
}

function getDefaultScheduleForCategory(category) {
    switch (category) {
        case 'Galleries':
            // Wed–Sun, 12:00 PM – 6:00 PM ET
            return { days: [0, 3, 4, 5, 6], open: 12 * 60, close: 18 * 60 };
        case 'Fabrication & Production':
        case 'Departmental Shops & Labs':
            // Mon–Fri, 9:00 AM – 6:00 PM ET
            return { days: [1, 2, 3, 4, 5], open: 9 * 60, close: 18 * 60 };
        case 'Digital Equipment & Support':
            // 24/7 ID-card access
            return { is247: true };
        case 'Archives':
        case 'Administration':
        default:
            // Mon–Fri, 9:00 AM – 5:00 PM ET
            return { days: [1, 2, 3, 4, 5], open: 9 * 60, close: 17 * 60 };
    }
}

function initFacilitiesStatusBoard() {
    const gridEl = document.getElementById('facility-status-grid');
    const clockEl = document.getElementById('facility-et-clock');
    const pills = document.querySelectorAll('[data-status-filter]');
    if (!gridEl) return;

    let activeFilter = 'all';

    function renderBoard() {
        const etNow = getNewHavenNow();
        if (clockEl) {
            clockEl.textContent = `New Haven Time (ET): ${etNow.formattedClock}`;
        }

        const allFacilities = getAllFacilityItems().map((item) => ({
            ...item,
            isOpen: isFacilityOpenNow(item, etNow)
        }));

        const openCount = allFacilities.filter((f) => f.isOpen).length;
        const closedCount = allFacilities.length - openCount;

        const allCountEl = document.getElementById('status-count-all');
        const openCountEl = document.getElementById('status-count-open');
        const closedCountEl = document.getElementById('status-count-closed');
        if (allCountEl) allCountEl.textContent = allFacilities.length;
        if (openCountEl) openCountEl.textContent = openCount;
        if (closedCountEl) closedCountEl.textContent = closedCount;

        const filtered = allFacilities.filter((item) => {
            if (activeFilter === 'open') return item.isOpen;
            if (activeFilter === 'closed') return !item.isOpen;
            return true;
        });

        gridEl.innerHTML = filtered.map((item) => `
            <article class="facility-status-card">
                <div>
                    <div class="facility-status-top">
                        <span class="facility-status-cat">${escapeFacilityHtml(item.category)}</span>
                        <span class="status-badge ${item.isOpen ? 'is-open' : 'is-closed'}">
                            <span class="status-dot ${item.isOpen ? 'is-open' : 'is-closed'}" aria-hidden="true"></span>
                            ${item.isOpen ? 'Open' : 'Closed'}
                        </span>
                    </div>
                    <h3 class="facility-status-name">${escapeFacilityHtml(item.name)}</h3>
                    <p class="facility-status-loc">${escapeFacilityHtml(item.location)} · ${escapeFacilityHtml(item.address)}</p>
                </div>
                <p class="facility-status-hours">${escapeFacilityHtml(item.hours)}</p>
            </article>
        `).join('');
    }

    pills.forEach((pill) => {
        pill.addEventListener('click', () => {
            activeFilter = pill.dataset.statusFilter || 'all';
            pills.forEach((btn) => {
                const isSelected = btn === pill;
                btn.classList.toggle('active', isSelected);
                btn.setAttribute('aria-pressed', String(isSelected));
            });
            renderBoard();
        });
    });

    renderBoard();
    setInterval(renderBoard, 60000);
}

document.addEventListener('DOMContentLoaded', () => {
    initFacilitiesShowcase();
    initFacilitiesStatusBoard();
});