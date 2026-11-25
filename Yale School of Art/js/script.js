// ==========================================================================
// DOM References & Site Index
// ==========================================================================

// Search Drawer Elements
const searchToggle = document.getElementById('search-toggle');
const searchDrawer = document.getElementById('search-drawer');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('site-search-input');
const searchResults = document.getElementById('search-results');
const searchClear = document.getElementById('search-clear');
const searchDivider = document.getElementById('search-divider');

// Mobile Navigation Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileSearchToggle = document.getElementById('mobile-search-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileAccordions = document.querySelectorAll('.mobile-accordion');

// Desktop & Footer Interactive Menus
const dropdownItems = document.querySelectorAll('.has-dropdown');
const footerAccordions = document.querySelectorAll('.footer-accordion');

// Gallery Elements
const slides = document.querySelectorAll('.gallery-slide');
const captions = document.querySelectorAll('.gallery-caption');
const galleryMeta = document.querySelector('.gallery-meta');
const galleryCounter = document.querySelector('.gallery-meta .meta-counter');
const prevBtn = document.querySelector('.gallery-button[aria-label="Previous photo"]');
const nextBtn = document.querySelector('.gallery-button[aria-label="Next photo"]');

// Footer Copyright Year
const copyrightYear = document.getElementById('copyright-year');

// Searchable Site Directory
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

// ==========================================================================
// Search Drawer
// ==========================================================================

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
    if (!searchDrawer || !searchToggle) return;

    const isOpen = searchDrawer.classList.contains('open');
    const shouldOpen = forceClose ? false : !isOpen;

    // Close Mobile Menu When Opening Search
    if (shouldOpen && mobileDrawer?.classList.contains('open')) {
        toggleMobileMenu(true);
    }

    searchDrawer.classList.toggle('open', shouldOpen);
    searchDrawer.setAttribute('aria-hidden', String(!shouldOpen));
    searchDrawer.inert = !shouldOpen;

    searchToggle.classList.toggle('active', shouldOpen);
    searchToggle.setAttribute('aria-expanded', String(shouldOpen));

    mobileSearchToggle?.classList.toggle('active', shouldOpen);
    mobileSearchToggle?.setAttribute('aria-expanded', String(shouldOpen));

    if (shouldOpen) {
        requestAnimationFrame(() => searchInput.focus());
    } else {
        resetSearchState();
    }
}

if (searchDrawer && searchToggle && searchClose && searchInput) {
    searchDrawer.inert = true;

    searchToggle.addEventListener('click', () => toggleSearch());
    searchClose.addEventListener('click', () => toggleSearch(true));

    // Real-Time Site Index Filtering
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
            : `<li class="search-empty">No results found for "${escapeHtml(rawValue)}"</li>`;
    });

    searchClear.addEventListener('click', () => {
        resetSearchState();
        searchInput.focus();
    });
}

// ==========================================================================
// 0. Global Site Preferences Loader (Synced with settings.html)
// ==========================================================================
const yaleSoATranslations = {
    en: {
        about: 'About', apply: 'Apply', calendar: 'Calendar', programs: 'Programs',
        news: 'News', resources: 'Resources', facilities: 'Facilities', faculty: 'Faculty',
        support: 'Support', visit: 'Visit', contact: 'Contact', newsletter: 'Newsletter',
        settings: 'Settings', search: 'Search'
    },
    es: {
        about: 'Acerca de', apply: 'Solicitar', calendar: 'Calendario', programs: 'Programas',
        news: 'Noticias', resources: 'Recursos', facilities: 'Instalaciones', faculty: 'Profesorado',
        support: 'Apoyar', visit: 'Visitar', contact: 'Contacto', newsletter: 'Boletín',
        settings: 'Configuración', search: 'Buscar'
    },
    fr: {
        about: 'À propos', apply: 'Postuler', calendar: 'Calendrier', programs: 'Programmes',
        news: 'Actualités', resources: 'Ressources', facilities: 'Installations', faculty: 'Corps professoral',
        support: 'Soutenir', visit: 'Visiter', contact: 'Contact', newsletter: 'Infolettre',
        settings: 'Paramètres', search: 'Rechercher'
    },
    zh: {
        about: '关于学院', apply: '申请入学', calendar: '日程表', programs: '专业项目',
        news: '新闻动态', resources: '学院资源', facilities: '教学设施', faculty: '师资团队',
        support: '支持学院', visit: '参观访问', contact: '联系我们', newsletter: '电子简报',
        settings: '页面设置', search: '搜索'
    }
};

function applyGlobalNotificationBars(prefs) {
    const header = document.querySelector('.topbar');
    if (!header) return;

    // Remove existing dynamic banners before re-rendering
    document.getElementById('global-announcement-bar')?.remove();
    document.getElementById('global-events-bar')?.remove();

    if (prefs.announcements) {
        const bar = document.createElement('div');
        bar.id = 'global-announcement-bar';
        bar.className = 'global-notice-bar';
        bar.setAttribute('role', 'region');
        bar.setAttribute('aria-label', 'School announcement');
        bar.innerHTML = `
            <span><strong>Announcement:</strong> MFA Admissions &amp; Financial Aid applications for the upcoming academic year are now open.</span>
            <a href="../html/apply.html">Learn more →</a>
        `;
        header.prepend(bar);
    }

    if (prefs.events) {
        const eventBar = document.createElement('div');
        eventBar.id = 'global-events-bar';
        eventBar.className = 'global-notice-bar is-event';
        eventBar.setAttribute('role', 'region');
        eventBar.setAttribute('aria-label', 'Upcoming events notice');
        eventBar.innerHTML = `
            <span><strong>Upcoming Event:</strong> Visiting Artist Lecture Series &amp; Open Studios at Green Hall Gallery.</span>
            <a href="../html/calendar.html">View calendar →</a>
        `;
        header.append(eventBar);
    }
}

function applyGlobalLanguage(lang) {
    const dict = yaleSoATranslations[lang] || yaleSoATranslations.en;
    document.documentElement.lang = lang || 'en';

    const routeMap = {
        'index.html': dict.about,
        'apply.html': dict.apply,
        'calendar.html': dict.calendar,
        'programs.html': dict.programs,
        'news.html': dict.news,
        'resources.html': dict.resources,
        'facilities.html': dict.facilities,
        'faculty.html': dict.faculty,
        'support.html': dict.support,
        'visit.html': dict.visit,
        'contact.html': dict.contact,
        'newsletter.html': dict.newsletter,
        'settings.html': dict.settings
    };

    document.querySelectorAll('.primary-nav .primary-link, .utility-nav a.utility-link').forEach((link) => {
        const href = link.getAttribute('href') || '';
        const file = href.split('/').pop();
        if (file && routeMap[file]) {
            const labelSpan = link.querySelector('span');
            if (labelSpan) {
                labelSpan.textContent = routeMap[file];
            } else {
                link.textContent = routeMap[file];
            }
        }
    });

    const searchLabel = document.querySelector('#search-toggle span');
    if (searchLabel) searchLabel.textContent = dict.search;
}

window.syncYaleSoAPreferences = function syncYaleSoAPreferences() {
    try {
        const raw = localStorage.getItem('yale_soa_preferences');
        const prefs = raw ? JSON.parse(raw) : { announcements: true };
        const root = document.documentElement;

        // Font Scale
        if (prefs.fontScale && prefs.fontScale !== 'normal') {
            root.dataset.fontScale = prefs.fontScale;
        } else {
            delete root.dataset.fontScale;
        }

        // Theme & Accent
        if (prefs.theme === 'dark') {
            root.dataset.theme = 'dark';
        } else {
            delete root.dataset.theme;
        }

        if (prefs.accent === 'orange') {
            root.dataset.accent = 'orange';
        } else {
            delete root.dataset.accent;
        }

        // Accessibility Toggles
        root.dataset.highContrast = String(Boolean(prefs.highContrast));
        root.dataset.underlineLinks = String(Boolean(prefs.underlineLinks));
        root.dataset.reduceMotion = String(Boolean(prefs.reduceMotion));

        // Language & Notification Bars
        applyGlobalLanguage(prefs.language || 'en');
        applyGlobalNotificationBars(prefs);
    } catch (_) {
        // Ignore storage restrictions
    }
};

window.syncYaleSoAPreferences();

// ==========================================================================
// Mobile Navigation Drawer
// ==========================================================================

function toggleMobileMenu(forceClose = false) {
    if (!mobileDrawer || !mobileMenuToggle) return;

    const isOpen = mobileDrawer.classList.contains('open');
    const shouldOpen = forceClose ? false : !isOpen;

    // Close Search Drawer Before Opening Mobile Menu
    if (shouldOpen && searchDrawer?.classList.contains('open')) {
        toggleSearch(true);
    }

    mobileDrawer.classList.toggle('open', shouldOpen);
    mobileDrawer.setAttribute('aria-hidden', String(!shouldOpen));
    mobileDrawer.inert = !shouldOpen;

    mobileMenuToggle.classList.toggle('active', shouldOpen);
    mobileMenuToggle.setAttribute('aria-expanded', String(shouldOpen));
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
}

if (mobileDrawer && mobileMenuToggle) {
    mobileDrawer.inert = true;

    mobileMenuToggle.addEventListener('click', () => toggleMobileMenu());

    mobileSearchToggle?.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('open')) {
            toggleMobileMenu(true);
        }
        toggleSearch();
    });

    // Exclusive Mobile Drawer Accordion Toggles
    mobileAccordions.forEach(acc => {
        const btn = acc.querySelector('.mobile-accordion-btn');
        btn?.addEventListener('click', () => {
            const willOpen = !acc.classList.contains('open');
            mobileAccordions.forEach(other => {
                other.classList.remove('open');
                other.querySelector('.mobile-accordion-btn')?.setAttribute('aria-expanded', 'false');
            });
            acc.classList.toggle('open', willOpen);
            btn.setAttribute('aria-expanded', String(willOpen));
        });
    });

    // Auto-Close Mobile Drawer Above Breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1120 && mobileDrawer.classList.contains('open')) {
            toggleMobileMenu(true);
        }
    });
}

// ==========================================================================
// Desktop Dropdowns & Footer Accordions
// ==========================================================================

dropdownItems.forEach(item => {
    const trigger = item.querySelector('.primary-link');

    // Close Search Drawer On Dropdown Hover
    item.addEventListener('mouseenter', () => {
        if (searchDrawer?.classList.contains('open')) {
            toggleSearch(true);
        }
    });

    // Touch Device Tap-To-Open Support
    trigger?.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none)').matches && !item.classList.contains('open')) {
            e.preventDefault();
            dropdownItems.forEach(d => d.classList.remove('open'));
            item.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });
});

footerAccordions.forEach(accordion => {
    const trigger = accordion.querySelector('.footer-accordion-trigger');

    // Touch Device Tap-To-Open Support
    trigger?.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none)').matches && !accordion.classList.contains('open')) {
            e.preventDefault();
            footerAccordions.forEach(a => a.classList.remove('open'));
            accordion.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });
});

// ==========================================================================
// Global Event Listeners & Utilities
// ==========================================================================

// Close Open Drawers On Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    if (searchDrawer?.classList.contains('open')) {
        toggleSearch(true);
    }
    if (mobileDrawer?.classList.contains('open')) {
        toggleMobileMenu(true);
    }
});

// Close Open Menus On Outside Click
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

// Dynamic Copyright Year
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}