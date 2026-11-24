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

function initHistoryMediaGrids() {
    const grids = Array.from(document.querySelectorAll('.history-media-grid'));
    if (!grids.length) return;

    grids.forEach((grid) => {
        const figures = Array.from(grid.querySelectorAll('.history-figure'));
        if (figures.length < 2) return;

        const firstFrame = figures[0].querySelector('.history-media-frame');
        const aspectClass = ['portrait', 'landscape', 'wide', 'emblem'].find((cls) =>
            firstFrame?.classList.contains(cls)
        ) || 'landscape';

        const frame = document.createElement('div');
        frame.className = `history-media-frame ${aspectClass}`;

        const slidesWrap = document.createElement('div');
        slidesWrap.className = 'history-carousel-slides';

        const captionsWrap = document.createElement('div');
        captionsWrap.className = 'gallery-captions';

        const slideEls = [];
        const captionEls = [];

        figures.forEach((fig, idx) => {
            const img = fig.querySelector('img');
            const figcap = fig.querySelector('figcaption');
            if (!img) return;

            const slideImg = img.cloneNode(true);
            slideImg.className = `history-carousel-slide${idx === 0 ? ' active' : ''}`;
            slidesWrap.appendChild(slideImg);
            slideEls.push(slideImg);

            const captionEl = document.createElement('p');
            captionEl.className = `gallery-caption${idx === 0 ? ' active' : ''}`;
            captionEl.textContent = figcap ? figcap.textContent.trim() : '';
            captionsWrap.appendChild(captionEl);
            captionEls.push(captionEl);
        });

        const controls = document.createElement('div');
        controls.className = 'gallery-controls';
        controls.innerHTML = `
            <button type="button" class="gallery-button" data-grid-prev aria-label="Previous photo">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14.5 5.5L8 12L14.5 18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="gallery-meta" aria-label="Photo 1 of ${slideEls.length}">
                <span class="meta-label">Photo</span>
                <span class="meta-counter">1 of ${slideEls.length}</span>
            </div>
            <button type="button" class="gallery-button" data-grid-next aria-label="Next photo">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9.5 5.5L16 12L9.5 18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        `;

        frame.appendChild(slidesWrap);
        frame.appendChild(controls);

        grid.innerHTML = '';
        grid.appendChild(frame);
        grid.appendChild(captionsWrap);

        let currentSlide = 0;
        const meta = controls.querySelector('.gallery-meta');
        const counter = controls.querySelector('.meta-counter');

        function updateGridCarousel(index) {
            slideEls[currentSlide].classList.remove('active');
            captionEls[currentSlide]?.classList.remove('active');

            currentSlide = (index + slideEls.length) % slideEls.length;

            slideEls[currentSlide].classList.add('active');
            captionEls[currentSlide]?.classList.add('active');

            const label = `${currentSlide + 1} of ${slideEls.length}`;
            if (counter) counter.textContent = label;
            meta?.setAttribute('aria-label', `Photo ${label}`);
        }

        controls.querySelector('[data-grid-prev]')?.addEventListener('click', (e) => {
            e.stopPropagation();
            updateGridCarousel(currentSlide - 1);
        });

        controls.querySelector('[data-grid-next]')?.addEventListener('click', (e) => {
            e.stopPropagation();
            updateGridCarousel(currentSlide + 1);
        });
    });
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

    const lightboxMedia = lightbox.querySelector('.history-lightbox-media');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    const ERA_LABELS = {
        'era-origins': 'Era I',
        'era-curriculum': 'Era II',
        'era-campus': 'Era III'
    };

    let items = [];
    let activeIndex = 0;
    let lastFocusedTrigger = null;
    let touchStartX = 0;
    let captionTimer = null;

    function getEraLabel(element) {
        const eraSection = element.closest('.history-era');
        if (!eraSection) return 'Campus Gallery';
        return ERA_LABELS[eraSection.id] || 'History';
    }

    function getLightboxItems() {
        const historyFrames = Array.from(document.querySelectorAll('.history-media-frame')).filter(
            (frame) => !frame.closest('[hidden]')
        );

        if (historyFrames.length) {
            const list = [];
            historyFrames.forEach((frame) => {
                const eraLabel = getEraLabel(frame);
                const carouselSlides = Array.from(frame.querySelectorAll('.history-carousel-slide'));
                if (carouselSlides.length) {
                    const captions = Array.from(
                        frame.closest('.history-media-grid')?.querySelectorAll('.gallery-caption') || []
                    );
                    carouselSlides.forEach((slide, idx) => {
                        list.push({
                            img: slide,
                            caption: captions[idx]?.textContent.trim() || '',
                            eraLabel
                        });
                    });
                } else {
                    const img = frame.querySelector('img');
                    const caption = frame.closest('.history-figure')?.querySelector('figcaption');
                    if (img) {
                        list.push({
                            img,
                            caption: caption ? caption.textContent.trim() : '',
                            eraLabel
                        });
                    }
                }
            });
            return list;
        }

        const gallerySlides = Array.from(document.querySelectorAll('.gallery-slide'));
        const galleryCaptions = Array.from(document.querySelectorAll('.gallery-caption'));

        return gallerySlides.map((slide, idx) => ({
            img: slide,
            caption: galleryCaptions[idx]?.textContent.trim() || '',
            eraLabel: 'Campus Gallery'
        }));
    }

    function renderLightbox(index, animate = true) {
        items = getLightboxItems();
        if (!items.length || !lightboxMedia) return;

        activeIndex = (index + items.length) % items.length;
        const current = items[activeIndex];
        const nextSrc = current.img?.currentSrc || current.img?.getAttribute('src') || '';
        const nextAlt = current.img?.alt || '';

        const existingSlides = Array.from(lightboxMedia.querySelectorAll('img'));
        const newSlide = document.createElement('img');
        newSlide.src = nextSrc;
        newSlide.alt = nextAlt;
        if (!animate) newSlide.classList.add('active');
        lightboxMedia.appendChild(newSlide);

        if (animate) {
            void newSlide.offsetWidth;
            newSlide.classList.add('active');
            existingSlides.forEach((oldSlide) => {
                oldSlide.classList.remove('active');
                setTimeout(() => oldSlide.remove(), 1050);
            });
        } else {
            existingSlides.forEach((oldSlide) => oldSlide.remove());
        }

        if (lightboxCaption) {
            clearTimeout(captionTimer);
            if (animate) {
                lightboxCaption.classList.add('is-changing');
                captionTimer = setTimeout(() => {
                    lightboxCaption.textContent = current.caption;
                    lightboxCaption.classList.remove('is-changing');
                }, 180);
            } else {
                lightboxCaption.classList.remove('is-changing');
                lightboxCaption.textContent = current.caption;
            }
        }

        if (lightboxCounter) {
            lightboxCounter.textContent = `${current.eraLabel} · ${activeIndex + 1} of ${items.length}`;
        }
    }

    function openLightbox(index, triggerEl) {
        lastFocusedTrigger = triggerEl || document.activeElement;
        renderLightbox(index, false);
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

    document.querySelectorAll('.history-media-frame, .gallery-slides').forEach((trigger) => {
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('aria-label', 'Inspect image in full view');
    });

    function handleTriggerActivation(target, e) {
        if (target.closest('.gallery-controls')) return false;

        const historyFrame = target.closest('.history-media-frame');
        if (historyFrame) {
            const activeImg =
                historyFrame.querySelector('.history-carousel-slide.active') ||
                historyFrame.querySelector('img');
            items = getLightboxItems();
            const index = Math.max(0, items.findIndex((item) => item.img === activeImg));
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
    initHistoryMediaGrids();
    initHistoryTimeline();
    initArchivalLightbox();
});