// ==========================================================================
// Programs Pages Interactive Controller (Overview + All 5 Program Tracks)
// ==========================================================================

const PROGRAM_GALLERIES = {
    overview: {
        sourceUrl: 'https://art.yale.edu/program',
        collections: {
            intro: {
                label: 'Overview',
                count: 4,
                placeholderPrefix: '../assets/studio.webp',
                captionTemplate: (i, total) =>
                    `Yale School of Art studios and collaborative atrium spaces — View ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 6,
                placeholderPrefix: '../assets/exhibition.webp',
                captionTemplate: (i, total) =>
                    `Annual thesis and juried student exhibition at 32 Edgewood Gallery — View ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 4,
                items: [
                    {
                        src: '../assets/gh-entrance.webp',
                        alt: 'Green Hall Gallery',
                        name: 'Green Hall Gallery',
                        location: '1st Floor, Green Hall',
                        address: '1156 Chapel Street, New Haven, CT 06511',
                        hours: 'Mon – Sun: 12:00 PM – 6:00 PM ET (24/7 ID-card student access)'
                    },
                    {
                        src: '../assets/edgewood-gallery.webp',
                        alt: '32 Edgewood Gallery',
                        name: '32 Edgewood Gallery',
                        location: 'Ground Floor, 32 Edgewood Avenue',
                        address: '32 Edgewood Avenue, New Haven, CT 06511',
                        hours: 'Wed – Sun: 12:00 PM – 6:00 PM ET'
                    },
                    {
                        src: '../assets/studio.webp',
                        alt: 'Crown Street Printmaking & Painting Studios',
                        name: 'Crown Street Studios & Printshops',
                        location: 'Floors 1–4, Crown Street Wing',
                        address: '353 Crown Street, New Haven, CT 06511',
                        hours: 'Mon – Sun: 24/7 ID-card access (Staffed shops Mon – Fri: 9 AM – 6 PM ET)'
                    },
                    {
                        src: '../assets/sp-interior.webp',
                        alt: '36 Edgewood Fabrication & Photo Labs',
                        name: '36 Edgewood Studios & Labs',
                        location: 'Floors 1–3, Edgewood Building',
                        address: '36 Edgewood Avenue, New Haven, CT 06511',
                        hours: 'Mon – Sun: 24/7 ID-card access (Staffed labs Mon – Fri: 9 AM – 6 PM ET)'
                    }
                ]
            }
        }
    },
    gd: {
        sourceUrl: 'https://art.yale.edu/program/graphic-design',
        collections: {
            intro: {
                label: 'Overview',
                count: 4,
                placeholderPrefix: '../assets/gd-atrium.webp',
                captionTemplate: (i, total) =>
                    `Graphic Design MFA studio critiques and cohort workspace at 1156 Chapel Street — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 8,
                placeholderPrefix: '../assets/exhibition.webp',
                captionTemplate: (i, total) =>
                    `Graphic Design MFA thesis books, posters, and interactive installations — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 6,
                items: [
                    {
                        src: '../assets/gh-entrance.webp',
                        alt: 'Green Hall Gallery',
                        name: 'Green Hall Gallery',
                        location: '1st Floor, Green Hall',
                        address: '1156 Chapel Street',
                        hours: 'Mon – Sun: 12 AM – 4 AM ET'
                    },
                    {
                        src: '../assets/studio.webp',
                        alt: 'Graphic Design Studios & Critique Rooms',
                        name: 'Graphic Design Studios & Atrium',
                        location: '3rd & 4th Floors, Green Hall',
                        address: '1156 Chapel Street, New Haven, CT 06511',
                        hours: 'Mon – Sun: 24/7 ID-card student access'
                    },
                    {
                        src: '../assets/studio.webp',
                        alt: 'Print & Bindery Lab',
                        name: 'Print, Risograph & Bookbinding Lab',
                        location: 'Basement & 3rd Floor, Green Hall',
                        address: '1156 Chapel Street, New Haven, CT 06511',
                        hours: 'Mon – Fri: 9:00 AM – 6:00 PM ET (Staffed lab hours)'
                    },
                    {
                        src: '../assets/studio.webp',
                        alt: 'Letterpress & Typesetting Shop',
                        name: 'Letterpress & Typesetting Studio',
                        location: 'Lower Level, Green Hall',
                        address: '1156 Chapel Street, New Haven, CT 06511',
                        hours: 'Mon – Fri: 10:00 AM – 5:00 PM ET'
                    },
                    {
                        src: '../assets/studio.webp',
                        alt: 'Digital Output & Large-Format Plotter Room',
                        name: 'Digital Print & Output Bureau',
                        location: '3rd Floor, Green Hall',
                        address: '1156 Chapel Street, New Haven, CT 06511',
                        hours: 'Mon – Sun: 24/7 ID-card student access'
                    },
                    {
                        src: '../assets/studio.webp',
                        alt: 'Graphic Design Thesis Reading Room',
                        name: 'Graphic Design Resource & Reading Room',
                        location: '4th Floor, Green Hall',
                        address: '1156 Chapel Street, New Haven, CT 06511',
                        hours: 'Mon – Sun: 24/7 ID-card student access'
                    }
                ]
            }
        }
    },
    pp: {
        sourceUrl: 'https://art.yale.edu/program/painting-printmaking',
        collections: {
            intro: {
                label: 'Overview',
                count: 4,
                placeholderPrefix: '../assets/pp-interior.webp',
                captionTemplate: (i, total) =>
                    `Painting & Printmaking MFA individual studios and group critique spaces at 353 Crown Street — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 18,
                placeholderPrefix: '../assets/exhibition.webp',
                captionTemplate: (i, total) =>
                    `Painting & Printmaking MFA graduate exhibition and open studio installation — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 9,
                placeholderPrefix: '../assets/studio.webp',
                facilityTemplate: (i) => ({
                    name: `353 Crown Street — Painting & Printmaking Studio Space ${i}`,
                    location: 'Floors 1–4, Crown Street Wing',
                    address: '353 Crown Street, New Haven, CT 06511',
                    hours: 'Mon – Sun: 24/7 ID-card access (Printshops Mon – Fri: 9 AM – 6 PM ET)'
                })
            }
        }
    },
    photography: {
        sourceUrl: 'https://art.yale.edu/program/photography',
        collections: {
            intro: {
                label: 'Overview',
                count: 4,
                placeholderPrefix: '../assets/sp-interior.webp',
                captionTemplate: (i, total) =>
                    `Photography MFA critique rooms and lens-based practice studios at 36 Edgewood Avenue — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 11,
                placeholderPrefix: '../assets/exhibition.webp',
                captionTemplate: (i, total) =>
                    `Photography MFA thesis exhibition and large-format print installation — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 8,
                placeholderPrefix: '../assets/studio.webp',
                facilityTemplate: (i) => ({
                    name: `36 Edgewood Avenue — Photography Darkroom & Digital Lab ${i}`,
                    location: '2nd & 3rd Floors, Edgewood Building',
                    address: '36 Edgewood Avenue, New Haven, CT 06511',
                    hours: 'Mon – Sun: 24/7 ID-card access (Technical staff Mon – Fri: 9 AM – 6 PM ET)'
                })
            }
        }
    },
    sculpture: {
        sourceUrl: 'https://art.yale.edu/program/sculpture',
        collections: {
            intro: {
                label: 'Overview',
                count: 4,
                placeholderPrefix: '../assets/sp-interior.webp',
                captionTemplate: (i, total) =>
                    `Sculpture MFA individual studios and departmental seminars at 36 Edgewood Avenue — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 10,
                placeholderPrefix: '../assets/exhibition.webp',
                captionTemplate: (i, total) =>
                    `Sculpture MFA spatial installation and thesis exhibition work — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 6,
                placeholderPrefix: '../assets/edgewood-gallery.webp',
                facilityTemplate: (i) => ({
                    name: `36 Edgewood Avenue — Sculpture Studio & Fabrication Shop ${i}`,
                    location: '1st & 2nd Floors, Edgewood Building',
                    address: '36 Edgewood Avenue, New Haven, CT 06511',
                    hours: 'Mon – Sun: 24/7 ID-card access (Wood & metal shops Mon – Fri: 9 AM – 6 PM ET)'
                })
            }
        }
    },
    usp: {
        sourceUrl: 'https://art.yale.edu/program/undergraduate',
        collections: {
            intro: {
                label: 'Overview',
                count: 4,
                placeholderPrefix: '../assets/studio.webp',
                captionTemplate: (i, total) =>
                    `Yale College BA Art major and Summer School studio instruction — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 6,
                placeholderPrefix: '../assets/exhibition.webp',
                captionTemplate: (i, total) =>
                    `Undergraduate Senior Thesis Exhibition and Norfolk Summer School showcase — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 5,
                placeholderPrefix: '../assets/gh-entrance.webp',
                facilityTemplate: (i) => ({
                    name: `Undergraduate Studio & Classroom Space ${i}`,
                    location: 'Green Hall & Crown Street Studios',
                    address: '1156 Chapel Street, New Haven, CT 06511',
                    hours: 'Mon – Sun: 7:00 AM – 11:00 PM ET (Course-enrolled ID access)'
                })
            }
        }
    }
};

function escapeHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderFormattedCaption(containerEl, item, isFacility) {
    if (!containerEl || !item) return;

    if (isFacility && (item.name || item.location || item.address || item.hours)) {
        containerEl.classList.add('is-facility-caption');
        containerEl.innerHTML = `
            <span class="facility-cap-name">${escapeHtml(item.name)}</span>
            <span class="facility-cap-line">${escapeHtml(item.location)}</span>
            <span class="facility-cap-line">${escapeHtml(item.address)}</span>
            <span class="facility-cap-hours">${escapeHtml(item.hours)}</span>
        `;
    } else {
        containerEl.classList.remove('is-facility-caption');
        containerEl.textContent = item.caption || '';
    }
}

function getCollectionItems(col, key) {
    if (!col) return [];
    if (Array.isArray(col.items) && col.items.length) return col.items;

    return Array.from({ length: col.count }, (_, idx) => {
        if (key === 'facilities' && typeof col.facilityTemplate === 'function') {
            const meta = col.facilityTemplate(idx + 1, col.count);
            return {
                src: col.placeholderPrefix,
                alt: meta.name || `${col.label} ${idx + 1} of ${col.count}`,
                ...meta
            };
        }
        return {
            src: col.placeholderPrefix,
            alt: `${col.label} placeholder image ${idx + 1} of ${col.count}`,
            caption: col.captionTemplate(idx + 1, col.count)
        };
    });
}

function initProgramShowcase() {
    const showcase = document.getElementById('program-gallery-showcase');
    if (!showcase) return;

    const programKey = showcase.dataset.program || 'overview';
    const programConfig = PROGRAM_GALLERIES[programKey] || PROGRAM_GALLERIES.overview;
    const collectionKeys = Object.keys(programConfig.collections);

    const tabsContainer = showcase.querySelector('.gallery-tabs');
    const slidesContainer = showcase.querySelector('.gallery-slides');
    const metaEl = showcase.querySelector('.gallery-meta');
    const metaLabelEl = showcase.querySelector('.meta-label');
    const metaCounterEl = showcase.querySelector('.meta-counter');
    const captionEl = showcase.querySelector('.gallery-caption');
    const prevBtn = showcase.querySelector('[data-gallery-prev]');
    const nextBtn = showcase.querySelector('[data-gallery-next]');

    const lightbox = document.getElementById('program-lightbox');
    const lightboxMedia = lightbox?.querySelector('.program-lightbox-media');
    const lightboxCaption = document.getElementById('program-lightbox-caption');
    const lightboxCounter = document.getElementById('program-lightbox-counter');
    const lightboxClose = document.getElementById('program-lightbox-close');
    const lightboxPrev = document.getElementById('program-lightbox-prev');
    const lightboxNext = document.getElementById('program-lightbox-next');

    let activeKey = collectionKeys[0];
    let currentItems = [];
    let currentIndex = 0;
    let lastFocusedEl = null;
    let touchStartX = 0;

    function renderTabs() {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = collectionKeys.map((key) => {
            const col = programConfig.collections[key];
            const isActive = key === activeKey;
            const totalCount = Array.isArray(col.items) && col.items.length ? col.items.length : col.count;
            return `
                <button
                    type="button"
                    class="gallery-tab${isActive ? ' active' : ''}"
                    data-collection="${key}"
                    aria-pressed="${String(isActive)}">
                    <span>${col.label}</span>
                    <span class="gallery-tab-count">${totalCount}</span>
                </button>
            `;
        }).join('');
    }

    function mountCollectionImages(key) {
        activeKey = key;
        const col = programConfig.collections[activeKey];
        currentItems = getCollectionItems(col, activeKey);

        const buildImgs = (className) => currentItems.map((item, idx) => `
            <img
                class="${className}${idx === 0 ? ' active' : ''}"
                src="${item.src}"
                alt="${escapeHtml(item.alt)}"
            />
        `).join('');

        if (slidesContainer) slidesContainer.innerHTML = buildImgs('gallery-slide');
        if (lightboxMedia) lightboxMedia.innerHTML = buildImgs('');
    }

    function setSlide(index) {
        if (!currentItems.length) return;
        currentIndex = (index + currentItems.length) % currentItems.length;

        const col = programConfig.collections[activeKey];
        const current = currentItems[currentIndex];
        const isFacility = activeKey === 'facilities';
        const counterText = `${currentIndex + 1} of ${currentItems.length}`;

        slidesContainer?.querySelectorAll('.gallery-slide').forEach((img, idx) => {
            img.classList.toggle('active', idx === currentIndex);
        });

        lightboxMedia?.querySelectorAll('img').forEach((img, idx) => {
            img.classList.toggle('active', idx === currentIndex);
        });

        if (metaLabelEl) metaLabelEl.textContent = col.label;
        if (metaCounterEl) metaCounterEl.textContent = counterText;
        metaEl?.setAttribute('aria-label', `${col.label} ${counterText}`);
        renderFormattedCaption(captionEl, current, isFacility);

        if (lightboxCounter) lightboxCounter.textContent = `${col.label} · ${counterText}`;
        renderFormattedCaption(lightboxCaption, current, isFacility);
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
        setSlide(currentIndex - 1);
    });

    nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        setSlide(currentIndex + 1);
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
    lightboxPrev?.addEventListener('click', () => setSlide(currentIndex - 1));
    lightboxNext?.addEventListener('click', () => setSlide(currentIndex + 1));

    lightbox?.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox?.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 40) {
            setSlide(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
        }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        if (!lightbox?.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') setSlide(currentIndex - 1);
        if (e.key === 'ArrowRight') setSlide(currentIndex + 1);
    });

    mountCollectionImages(activeKey);
    renderTabs();
    setSlide(0);
}

function initProgramAccordions() {
    document.querySelectorAll('.program-accordion-trigger').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.program-accordion-item');
            const actionLabel = trigger.querySelector('.program-accordion-action');
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
    initProgramShowcase();
    initProgramAccordions();
});