// ==========================================================================
// Programs Pages Interactive Controller (Overview + All 5 Program Tracks)
// ==========================================================================

const PROGRAM_GALLERIES = {
    overview: {
        sourceUrl: 'https://art.yale.edu/program',
        collections: {
            intro: {
                label: 'Studios & Atrium',
                count: 4,
                placeholderPrefix: '../assets/studio.png',
                captionTemplate: (i, total) =>
                    `Yale School of Art studios and collaborative atrium spaces — View ${i} of ${total}. (Replace with program overview image ${i})`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 6,
                placeholderPrefix: '../assets/exhibition.png',
                captionTemplate: (i, total) =>
                    `Annual thesis and juried student exhibition at 32 Edgewood Gallery — View ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 4,
                placeholderPrefix: '../assets/gh-entrance.png',
                captionTemplate: (i, total) =>
                    `Shared fabrication labs, print shops, and digital media facilities — View ${i} of ${total}.`
            }
        }
    },
    gd: {
        sourceUrl: 'https://art.yale.edu/program/graphic-design',
        collections: {
            intro: {
                label: 'Introduction',
                count: 4,
                placeholderPrefix: '../assets/gd-atrium.png',
                captionTemplate: (i, total) =>
                    `Graphic Design MFA studio critiques and cohort workspace at 1156 Chapel Street — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 8,
                placeholderPrefix: '../assets/exhibition.png',
                captionTemplate: (i, total) =>
                    `Graphic Design MFA thesis books, posters, and interactive installations — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 6,
                placeholderPrefix: '../assets/studio.png',
                captionTemplate: (i, total) =>
                    `Graphic Design letterpress, Risograph, bookbinding, and digital labs — Facility ${i} of ${total}.`
            }
        }
    },
    pp: {
        sourceUrl: 'https://art.yale.edu/program/painting-printmaking',
        collections: {
            intro: {
                label: 'Introduction',
                count: 4,
                placeholderPrefix: '../assets/pp-interior.png',
                captionTemplate: (i, total) =>
                    `Painting & Printmaking MFA individual studios and group critique spaces at 353 Crown Street — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 18,
                placeholderPrefix: '../assets/exhibition.png',
                captionTemplate: (i, total) =>
                    `Painting & Printmaking MFA graduate exhibition and open studio installation — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 9,
                placeholderPrefix: '../assets/studio.png',
                captionTemplate: (i, total) =>
                    `Intaglio, lithography, silkscreen, woodcut, and painting studios at 353 Crown Street — Facility ${i} of ${total}.`
            }
        }
    },
    photography: {
        sourceUrl: 'https://art.yale.edu/program/photography',
        collections: {
            intro: {
                label: 'Introduction',
                count: 4,
                placeholderPrefix: '../assets/sp-interior.png',
                captionTemplate: (i, total) =>
                    `Photography MFA critique rooms and lens-based practice studios at 36 Edgewood Avenue — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 11,
                placeholderPrefix: '../assets/exhibition.png',
                captionTemplate: (i, total) =>
                    `Photography MFA thesis exhibition and large-format print installation — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 8,
                placeholderPrefix: '../assets/studio.png',
                captionTemplate: (i, total) =>
                    `Analog darkrooms, color processors, lighting studios, and digital print labs — Facility ${i} of ${total}.`
            }
        }
    },
    sculpture: {
        sourceUrl: 'https://art.yale.edu/program/sculpture',
        collections: {
            intro: {
                label: 'Introduction',
                count: 4,
                placeholderPrefix: '../assets/sp-interior.png',
                captionTemplate: (i, total) =>
                    `Sculpture MFA individual studios and departmental seminars at 36 Edgewood Avenue — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 10,
                placeholderPrefix: '../assets/exhibition.png',
                captionTemplate: (i, total) =>
                    `Sculpture MFA spatial installation and thesis exhibition work — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 6,
                placeholderPrefix: '../assets/edgewood-gallery.png',
                captionTemplate: (i, total) =>
                    `Woodworking, metal fabrication, foundry, and digital prototyping shops at 36 Edgewood Avenue — Facility ${i} of ${total}.`
            }
        }
    },
    usp: {
        sourceUrl: 'https://art.yale.edu/program/undergraduate',
        collections: {
            intro: {
                label: 'Introduction',
                count: 4,
                placeholderPrefix: '../assets/studio.png',
                captionTemplate: (i, total) =>
                    `Yale College BA Art major and Summer School studio instruction — Image ${i} of ${total}.`
            },
            exhibitions: {
                label: 'Exhibitions',
                count: 6,
                placeholderPrefix: '../assets/exhibition.png',
                captionTemplate: (i, total) =>
                    `Undergraduate Senior Thesis Exhibition and Norfolk Summer School showcase — Exhibition ${i} of ${total}.`
            },
            facilities: {
                label: 'Facilities',
                count: 5,
                placeholderPrefix: '../assets/gh-entrance.png',
                captionTemplate: (i, total) =>
                    `Undergraduate painting, printmaking, design, and sculpture classrooms — Facility ${i} of ${total}.`
            }
        }
    }
};

function initProgramShowcase() {
    const showcase = document.getElementById('program-gallery-showcase');
    if (!showcase) return;

    const programKey = showcase.dataset.program || 'overview';
    const programConfig = PROGRAM_GALLERIES[programKey] || PROGRAM_GALLERIES.overview;

    const tabsContainer = showcase.querySelector('.gallery-tabs');
    const slidesContainer = showcase.querySelector('.gallery-slides');
    const metaEl = showcase.querySelector('.gallery-meta');
    const metaLabelEl = showcase.querySelector('.gallery-meta .meta-label');
    const metaCounterEl = showcase.querySelector('.gallery-meta .meta-counter');
    const captionEl = showcase.querySelector('.gallery-caption');
    const prevBtn = showcase.querySelector('[data-gallery-prev]');
    const nextBtn = showcase.querySelector('[data-gallery-next]');

    // Lightbox elements
    const lightbox = document.getElementById('program-lightbox');
    const lightboxMedia = lightbox?.querySelector('.program-lightbox-media');
    const lightboxCaption = document.getElementById('program-lightbox-caption');
    const lightboxCounter = document.getElementById('program-lightbox-counter');
    const lightboxClose = document.getElementById('program-lightbox-close');
    const lightboxPrev = document.getElementById('program-lightbox-prev');
    const lightboxNext = document.getElementById('program-lightbox-next');

    const collectionKeys = Object.keys(programConfig.collections);
    let activeCollectionKey = collectionKeys[0];
    let currentIndex = 0;
    let lastFocusedEl = null;
    let touchStartX = 0;

    function getItemsForCollection(key) {
        const col = programConfig.collections[key];
        if (!col) return [];
        if (Array.isArray(col.items) && col.items.length) {
            return col.items;
        }
        return Array.from({ length: col.count }, (_, idx) => ({
            src: col.placeholderPrefix,
            alt: `${col.label} placeholder image ${idx + 1} of ${col.count}`,
            caption: col.captionTemplate(idx + 1, col.count)
        }));
    }

    function renderTabs() {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = collectionKeys.map((key) => {
            const col = programConfig.collections[key];
            const isActive = key === activeCollectionKey;
            return `
                <button
                    type="button"
                    class="gallery-tab${isActive ? ' active' : ''}"
                    data-collection="${key}"
                    aria-pressed="${String(isActive)}">
                    <span>${col.label}</span>
                    <span class="gallery-tab-count">${col.count}</span>
                </button>
            `;
        }).join('');
    }

    function renderGallery(index = 0) {
        const col = programConfig.collections[activeCollectionKey];
        const items = getItemsForCollection(activeCollectionKey);
        if (!items.length || !slidesContainer) return;

        currentIndex = (index + items.length) % items.length;

        slidesContainer.innerHTML = items.map((item, idx) => `
            <img
                class="gallery-slide${idx === currentIndex ? ' active' : ''}"
                src="${item.src}"
                alt="${item.alt}"
            />
        `).join('');

        const labelText = `${currentIndex + 1} of ${items.length}`;
        if (metaLabelEl) metaLabelEl.textContent = 'Photo';
        if (metaCounterEl) metaCounterEl.textContent = labelText;
        metaEl?.setAttribute('aria-label', `Photo ${labelText}`);

        if (captionEl) {
            captionEl.textContent = items[currentIndex].caption;
        }
    }

    function renderLightbox(index) {
        const col = programConfig.collections[activeCollectionKey];
        const items = getItemsForCollection(activeCollectionKey);
        if (!items.length || !lightboxMedia) return;

        currentIndex = (index + items.length) % items.length;
        renderGallery(currentIndex);

        const current = items[currentIndex];
        lightboxMedia.innerHTML = `<img class="active" src="${current.src}" alt="${current.alt}" />`;

        if (lightboxCounter) {
            lightboxCounter.textContent = `${col.label} · ${currentIndex + 1} of ${items.length}`;
        }
        if (lightboxCaption) {
            lightboxCaption.textContent = current.caption;
        }
    }

    function openLightbox() {
        if (!lightbox) return;
        lastFocusedEl = document.activeElement;
        renderLightbox(currentIndex);
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
        if (!tab) return;
        const nextKey = tab.dataset.collection;
        if (!nextKey || nextKey === activeCollectionKey) return;

        activeCollectionKey = nextKey;
        renderTabs();
        renderGallery(0);
    });

    prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        renderGallery(currentIndex - 1);
    });

    nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        renderGallery(currentIndex + 1);
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
    lightboxPrev?.addEventListener('click', () => renderLightbox(currentIndex - 1));
    lightboxNext?.addEventListener('click', () => renderLightbox(currentIndex + 1));

    lightbox?.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox?.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 40) {
            renderLightbox(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
        }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        if (!lightbox?.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') renderLightbox(currentIndex - 1);
        if (e.key === 'ArrowRight') renderLightbox(currentIndex + 1);
    });

    renderTabs();
    renderGallery(0);
}

document.addEventListener('DOMContentLoaded', initProgramShowcase);