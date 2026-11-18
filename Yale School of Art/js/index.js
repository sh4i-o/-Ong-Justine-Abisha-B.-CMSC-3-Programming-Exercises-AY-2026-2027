const searchToggle = document.getElementById('search-toggle');
const searchDrawer = document.getElementById('search-drawer');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('site-search-input');
const searchResults = document.getElementById('search-results');
const searchClear = document.getElementById('search-clear');
const searchDivider = document.getElementById('search-divider');

const siteIndex = [
    { title: 'School Overview', category: 'About', url: '../html/index.html', keywords: 'about chapel street new haven 1869' },
    { title: 'Mission Statement', category: 'About', url: '../html/about-mission.html', keywords: 'mission purpose values' },
    { title: 'History', category: 'About', url: '../html/about-history.html', keywords: 'history 1869 founding' },
    { title: 'MFA Admissions & Apply', category: 'Apply', url: '../html/apply.html', keywords: 'tuition financial aid portfolio deadline' },
    { title: 'Academic Calendar & Exhibitions', category: 'Calendar', url: '../html/calendar.html', keywords: 'events lectures gallery shows' },
    { title: 'Programs Overview', category: 'Programs', url: '../html/programs.html', keywords: 'mfa degrees overview' },
    { title: 'Graphic Design MFA', category: 'Programs', url: '../html/programs-gd.html', keywords: 'mfa degrees graphic design' },
    { title: 'Painting & Printmaking MFA', category: 'Programs', url: '../html/programs-pp.html', keywords: 'mfa degrees painting printing printmaking' },
    { title: 'Photography MFA', category: 'Programs', url: '../html/programs-photography.html', keywords: 'mfa degrees photography' },
    { title: 'Sculpture MFA', category: 'Programs', url: '../html/programs-sculpture.html', keywords: 'mfa degrees sculpture' },
    { title: 'Undergraduate & Summer Programs', category: 'Programs', url: '../html/programs-usp.html', keywords: 'undergraduate summer courses norfolk' },
    { title: 'News', category: 'News', url: '../html/news.html', keywords: 'announcements press updates' },
    { title: 'Resources', category: 'Resources', url: '../html/resources.html', keywords: 'student handbook policies library' },
    { title: 'Facilities', category: 'Facilities', url: '../html/facilities.html', keywords: 'studios workshops labs green hall' },
    { title: 'Faculty Directory', category: 'Faculty', url: '../html/faculty.html', keywords: 'professors lecturers critics' },
    { title: 'Support the School', category: 'Support', url: '../html/support.html', keywords: 'donate alumni fellowships' },
    { title: 'Visit & Campus Tours', category: 'Visit', url: '../html/visit.html', keywords: 'map directions hours' },
    { title: 'Contact', category: 'Contact', url: '../html/contact.html', keywords: 'phone email address office' },
    { title: 'Newsletter', category: 'Newsletter', url: '../html/newsletter.html', keywords: 'subscribe updates email' },
    { title: 'Settings', category: 'Settings', url: '../html/settings.html', keywords: 'theme preferences accessibility' }
];

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function resetSearchState() {
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchClear.hidden = true;
    searchDivider.hidden = true;
}

function toggleSearch(forceClose = false) {
    const isOpen = searchDrawer.classList.contains('open');
    const shouldOpen = forceClose ? false : !isOpen;

    searchDrawer.classList.toggle('open', shouldOpen);
    searchDrawer.setAttribute('aria-hidden', String(!shouldOpen));
    searchDrawer.inert = !shouldOpen;

    searchToggle.classList.toggle('active', shouldOpen);
    searchToggle.setAttribute('aria-expanded', String(shouldOpen));

    if (shouldOpen) {
        requestAnimationFrame(() => searchInput.focus());
    } else {
        resetSearchState();
    }
}

// Initialize closed state on load
searchDrawer.inert = true;

searchToggle.addEventListener('click', () => toggleSearch());
searchClose.addEventListener('click', () => toggleSearch(true));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchDrawer.classList.contains('open')) {
        toggleSearch(true);
    }
});

searchInput.addEventListener('input', (e) => {
    const rawValue = e.target.value;
    const hasText = rawValue.length > 0;
    searchClear.hidden = !hasText;
    searchDivider.hidden = !hasText;

    const query = rawValue.trim().toLowerCase();
    if (!query) {
        searchResults.innerHTML = '';
        return;
    }

    const matches = siteIndex.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query)
    );

    searchResults.innerHTML = matches.length
        ? matches.map(m => `<li><a href="${m.url}"><strong>${m.title}</strong><span>${m.category} →</span></a></li>`).join('')
        : `<li style="padding: 10px 14px; color: rgba(0,53,107,0.6);">No results found for "${escapeHtml(rawValue)}"</li>`;
});

searchClear.addEventListener('click', () => {
    resetSearchState();
    searchInput.focus();
});

const dropdownItems = document.querySelectorAll('.has-dropdown');

dropdownItems.forEach(item => {
    const trigger = item.querySelector('.primary-link');

    // Close search drawer if user hovers/opens a nav dropdown
    item.addEventListener('mouseenter', () => {
        if (searchDrawer.classList.contains('open')) {
            toggleSearch(true);
        }
    });

    // Support touch / click toggle on devices without hover
    trigger.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none)').matches && !item.classList.contains('open')) {
            e.preventDefault();
            dropdownItems.forEach(d => d.classList.remove('open'));
            item.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
        dropdownItems.forEach(item => {
            item.classList.remove('open');
            item.querySelector('.primary-link')?.setAttribute('aria-expanded', 'false');
        });
    }

    if (!e.target.closest('.footer-accordion')) {
        footerAccordions.forEach(acc => {
            acc.classList.remove('open');
            acc.querySelector('.footer-accordion-trigger')?.setAttribute('aria-expanded', 'false');
        });
    }
});

const footerAccordions = document.querySelectorAll('.footer-accordion');

footerAccordions.forEach(accordion => {
    const trigger = accordion.querySelector('.footer-accordion-trigger');

    trigger.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none)').matches && !accordion.classList.contains('open')) {
            e.preventDefault();
            footerAccordions.forEach(a => a.classList.remove('open'));
            accordion.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });
});

const galleryPhotos = [
    {
        src: '../assets/studio.png',
        alt: 'Yale School of Art main interior studio space',
        caption: 'Main interior studio and common workspace at Green Hall, 1156 Chapel Street.'
    },
    {
        src: '../assets/studio-photo-2.jpg',
        alt: 'Yale School of Art critique and exhibition room',
        caption: 'Critique space and exhibition gallery where MFA students present work in progress.'
    },
    {
        src: '../assets/studio-photo-3.jpg',
        alt: 'Yale School of Art fabrication and printmaking workshop',
        caption: 'Shared fabrication, printmaking, and digital production facilities.'
    }
];

const galleryImg = document.querySelector('.gallery img');
const galleryCaption = document.querySelector('.gallery-caption');
const galleryMeta = document.querySelector('.gallery-meta');
const galleryCounter = document.querySelector('.gallery-meta .meta-counter');
const prevBtn = document.querySelector('.gallery-button[aria-label="Previous photo"]');
const nextBtn = document.querySelector('.gallery-button[aria-label="Next photo"]');

if (galleryImg && prevBtn && nextBtn) {
    let currentSlide = 0;

    function updateGallery(index) {
        currentSlide = (index + galleryPhotos.length) % galleryPhotos.length;
        const slide = galleryPhotos[currentSlide];
        const label = `${currentSlide + 1} of ${galleryPhotos.length}`;

        galleryImg.src = slide.src;
        galleryImg.alt = slide.alt;
        galleryCaption.textContent = slide.caption;
        galleryCounter.textContent = label;
        galleryMeta.setAttribute('aria-label', `Photo ${label}`);
    }

    prevBtn.addEventListener('click', () => updateGallery(currentSlide - 1));
    nextBtn.addEventListener('click', () => updateGallery(currentSlide + 1));
}

const copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}