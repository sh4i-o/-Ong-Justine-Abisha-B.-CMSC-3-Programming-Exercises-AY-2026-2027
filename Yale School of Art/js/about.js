// ==========================================================================
// About Pages Interactive Functionality (Overview, Mission, History)
// ==========================================================================

function initCampusGallery() {
    const slides = document.querySelectorAll('.gallery-slide');
    const captions = document.querySelectorAll('.gallery-caption');
    const galleryMeta = document.querySelector('.gallery-meta');
    const galleryCounter = document.querySelector('.gallery-meta .meta-counter');
    const prevBtn = document.querySelector('.gallery-button[aria-label="Previous photo"]');
    const nextBtn = document.querySelector('.gallery-button[aria-label="Next photo"]');

    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentSlide = 0;

    function updateGallery(index) {
        slides[currentSlide].classList.remove('active');
        captions[currentSlide]?.classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        captions[currentSlide]?.classList.add('active');

        const label = `${currentSlide + 1} of ${slides.length}`;
        if (galleryCounter) galleryCounter.textContent = label;
        galleryMeta?.setAttribute('aria-label', `Photo ${label}`);
    }

    prevBtn.addEventListener('click', () => updateGallery(currentSlide - 1));
    nextBtn.addEventListener('click', () => updateGallery(currentSlide + 1));
}

function initHistoryTimeline() {
    const timelineBar = document.getElementById('history-timeline');
    const topbar = document.querySelector('.topbar');
    const historyEras = Array.from(document.querySelectorAll('.history-era'));
    const jumpLinks = Array.from(document.querySelectorAll('.history-jump-link'));
    const filterBtns = Array.from(document.querySelectorAll('.history-filter-btn'));

    if (!timelineBar || !historyEras.length) return;

    function syncTimelineOffset() {
        const isTopbarSticky = topbar && ['sticky', 'fixed'].includes(getComputedStyle(topbar).position);
        const headerHeight = isTopbarSticky ? topbar.getBoundingClientRect().height : 0;
        const offset = Math.round(headerHeight + 16);

        timelineBar.style.setProperty('--topbar-offset', `${offset}px`);
        historyEras.forEach((era) => {
            era.style.scrollMarginTop = `${offset + timelineBar.offsetHeight + 20}px`;
        });
    }

    syncTimelineOffset();
    window.addEventListener('resize', syncTimelineOffset);

    function setActiveJumpLink(eraId) {
        jumpLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.eraTarget === eraId);
        });
    }

    function applyEraFilter(filterValue) {
        filterBtns.forEach((btn) => {
            const isMatch = btn.dataset.eraFilter === filterValue;
            btn.classList.toggle('active', isMatch);
            btn.setAttribute('aria-pressed', String(isMatch));
        });

        historyEras.forEach((era) => {
            era.hidden = filterValue !== 'all' && era.id !== filterValue;
        });

        if (filterValue !== 'all') {
            setActiveJumpLink(filterValue);
            document.getElementById(filterValue)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    timelineBar.addEventListener('click', (e) => {
        const filterBtn = e.target.closest('.history-filter-btn');
        if (filterBtn) {
            applyEraFilter(filterBtn.dataset.eraFilter);
            return;
        }

        const jumpLink = e.target.closest('.history-jump-link');
        if (jumpLink) {
            e.preventDefault();
            const targetId = jumpLink.dataset.eraTarget;
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            if (targetEl.hidden) {
                applyEraFilter('all');
            }

            setActiveJumpLink(targetId);
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    if ('IntersectionObserver' in window) {
        const eraObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !entry.target.hidden) {
                        setActiveJumpLink(entry.target.id);
                    }
                });
            },
            { rootMargin: '-25% 0px -55% 0px' }
        );

        historyEras.forEach((era) => eraObserver.observe(era));
    }
}

function initArchivalLightbox() {
    const lightbox = document.getElementById('history-lightbox');
    if (!lightbox) return;

    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let items = [];
    let activeIndex = 0;
    let lastFocusedTrigger = null;
    let touchStartX = 0;

    function getLightboxItems() {
        const historyFigures = Array.from(document.querySelectorAll('.history-figure')).filter(
            (fig) => !fig.closest('[hidden]') && fig.querySelector('img')
        );

        if (historyFigures.length) {
            return historyFigures.map((fig) => ({
                element: fig,
                img: fig.querySelector('img'),
                caption: fig.querySelector('figcaption')?.textContent.trim() || ''
            }));
        }

        const gallerySlides = Array.from(document.querySelectorAll('.gallery-slide'));
        const galleryCaptions = Array.from(document.querySelectorAll('.gallery-caption'));

        return gallerySlides.map((slide, idx) => ({
            element: slide,
            img: slide,
            caption: galleryCaptions[idx]?.textContent.trim() || ''
        }));
    }

    function renderLightbox(index) {
        items = getLightboxItems();
        if (!items.length) return;

        activeIndex = (index + items.length) % items.length;
        const current = items[activeIndex];

        if (current.img && lightboxImg) {
            lightboxImg.src = current.img.currentSrc || current.img.getAttribute('src');
            lightboxImg.alt = current.img.alt || '';
        }
        if (lightboxCaption) {
            lightboxCaption.textContent = current.caption;
        }
        if (lightboxCounter) {
            lightboxCounter.textContent = `${activeIndex + 1} of ${items.length}`;
        }
    }

    function openLightbox(index, triggerEl) {
        lastFocusedTrigger = triggerEl || document.activeElement;
        renderLightbox(index);
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightboxClose?.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lastFocusedTrigger?.focus();
    }

    document.querySelectorAll('.history-figure .history-media-frame, .gallery-slides').forEach((trigger) => {
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('aria-label', 'Inspect image in full view');
    });

    function handleTriggerActivation(target, e) {
        if (target.closest('.gallery-controls')) return false;

        const historyFrame = target.closest('.history-media-frame');
        if (historyFrame) {
            const figure = historyFrame.closest('.history-figure');
            items = getLightboxItems();
            const index = Math.max(0, items.findIndex((item) => item.element === figure));
            if (e) e.preventDefault();
            openLightbox(index, historyFrame);
            return true;
        }

        const galleryArea = target.closest('.gallery-slides');
        if (galleryArea) {
            const slides = Array.from(document.querySelectorAll('.gallery-slide'));
            const activeIdx = Math.max(0, slides.findIndex((s) => s.classList.contains('active')));
            if (e) e.preventDefault();
            openLightbox(activeIdx, galleryArea);
            return true;
        }

        return false;
    }

    document.addEventListener('click', (e) => {
        if (handleTriggerActivation(e.target)) return;

        if (e.target.closest('[data-lightbox-close]') || e.target.closest('#lightbox-close')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && document.activeElement) {
            if (handleTriggerActivation(document.activeElement, e)) return;
        }

        if (!lightbox.classList.contains('open')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') renderLightbox(activeIndex - 1);
        if (e.key === 'ArrowRight') renderLightbox(activeIndex + 1);
    });

    lightboxPrev?.addEventListener('click', () => renderLightbox(activeIndex - 1));
    lightboxNext?.addEventListener('click', () => renderLightbox(activeIndex + 1));

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        if (window.visualViewport && window.visualViewport.scale > 1) return;
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 40) {
            renderLightbox(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
        }
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    initCampusGallery();
    initHistoryTimeline();
    initArchivalLightbox();
});