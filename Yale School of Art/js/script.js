// ==========================================================================
// 0. Global Site Preferences Loader & Real-Time Notice Bars (Synced with settings.html & calendar-news.js)
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

// Default Snapshot of School Events & News (Automatically refreshed when calendar.html / news.html loads)
const DEFAULT_SOA_EVENTS = [
    { id: 'evt-2026-11-30', date: '2026-11-30', time: 'Morning', location: 'All Departments', category: 'Academic Calendar', title: 'Classes resume' },
    { id: 'evt-2026-12-01', date: '2026-12-01', time: 'Afternoon', location: '1156 Chapel St.', category: 'Events', title: 'All-School Town Hall' },
    { id: 'evt-2026-12-02', date: '2026-12-02', time: 'Workshop', location: '1156 Chapel St.', category: 'Events', title: 'Open Drawing' },
    { id: 'evt-2026-12-03', date: '2026-12-03', time: 'Evening Lecture', location: 'Yale School of Art', category: 'Events', title: 'Regina José Galindo' },
    { id: 'evt-2026-12-11', date: '2026-12-11', time: '5:00 PM', location: 'All Departments', category: 'Deadlines', title: 'Last day to withdraw from a course; Fall-term classes end; Reading period begins' },
    { id: 'evt-2026-12-15', date: '2026-12-15', time: 'All Day (Dec 15–22)', location: 'All Departments', category: 'Events', title: 'Critiques and examinations begin' },
    { id: 'evt-2026-12-22', date: '2026-12-22', time: 'End of Day', location: 'All School', category: 'Academic Calendar', title: 'Critiques and examinations end; Winter recess begins' },
    { id: 'evt-2027-01-10', date: '2027-01-10', time: '11:59 PM EST', location: 'Online Admissions Portal', category: 'Deadlines', title: 'Closing date for submission of applications for admission' },
    { id: 'evt-2027-01-18', date: '2027-01-18', time: 'All Day', location: 'All School', category: 'Academic Calendar', title: 'Martin Luther King, Jr. Day; classes do not meet; offices closed' },
    { id: 'evt-2027-01-19', date: '2027-01-19', time: 'Morning', location: 'All Departments', category: 'Academic Calendar', title: 'Spring-term classes begin' },
    { id: 'evt-2027-01-23', date: '2027-01-23', time: 'Gallery Hours (Jan 23 – Feb 2)', location: 'Green Hall Gallery, 1156 Chapel St.', category: 'Exhibitions', title: 'Spring 2027 Thesis Exhibition: Painting & Printmaking Group 1' },
    { id: 'evt-2027-01-29-b', date: '2027-01-29', time: 'Evening Reception', location: 'Green Hall Gallery, 1156 Chapel St.', category: 'Events', title: 'Public Reception: Painting & Printmaking Group 1 Thesis Exhibition' },
    { id: 'evt-2027-02-10', date: '2027-02-10', time: 'Gallery Hours (Feb 10–21)', location: 'Green Hall Gallery, 1156 Chapel St.', category: 'Exhibitions', title: 'Spring 2027 Thesis Exhibition: Painting & Printmaking Group 2' },
    { id: 'evt-2027-02-28', date: '2027-02-28', time: 'Gallery Hours (Feb 28 – Mar 11)', location: 'Green Hall Gallery, 1156 Chapel St.', category: 'Exhibitions', title: 'Spring 2027 Thesis Exhibition: Sculpture Group 1' },
    { id: 'evt-2027-03-04', date: '2027-03-04', time: 'Evening Lecture', location: 'Yale School of Art', category: 'Events', title: 'Jessica Dickinson' },
    { id: 'evt-2027-04-05', date: '2027-04-05', time: 'Gallery Hours (Apr 5–16)', location: 'Green Hall Gallery, 1156 Chapel St.', category: 'Exhibitions', title: 'Spring 2027 Thesis Exhibition: Graphic Design' },
    { id: 'evt-2027-04-10', date: '2027-04-10', time: 'All Day (Apr 10–11)', location: '1156 Chapel St., 353 Crown St. & 36 Edgewood Ave', category: 'Events', title: 'Spring 2027 Open Studios (Day 1)' },
    { id: 'evt-2027-05-10', date: '2027-05-10', time: 'Gallery Hours (May 10–25)', location: 'Green Hall Gallery, 1156 Chapel St.', category: 'Exhibitions', title: 'Spring 2027 Thesis Exhibition: Photography' },
    { id: 'evt-2027-05-24', date: '2027-05-24', time: 'Morning', location: 'Yale University Old Campus & Chapel St.', category: 'Academic Calendar', title: 'University Commencement' }
];

const DEFAULT_SOA_NEWS = [
    {
        id: 'news-sculpture-adjunct-job',
        date: '2026-11-11',
        displayDate: 'Nov 11, 2026',
        title: 'Yale School of Art Seeks Associate Adjunct Professor in Sculpture'
    },
    {
        id: 'news-devotional-alchemy',
        date: '2026-11-04',
        displayDate: 'Nov 04, 2026',
        title: '"Devotional Alchemy" open at 63 Audubon through November 19'
    },
    {
        id: 'news-alumni-tours-oct-2026',
        date: '2026-10-31',
        displayDate: 'Oct 31, 2026',
        title: 'Alums gather in New York and Philadelphia for exhibition tours'
    }
];

function getTodayIsoLocal() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function formatShortNoticeDate(isoStr) {
    const [y, m, d] = isoStr.split('-').map(Number);
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    return `${months[m - 1]} ${String(d).padStart(2, '0')}, ${y}`;
}

function getLiveCalendarEvents() {
    if (typeof SCHOOL_EVENTS !== 'undefined' && Array.isArray(SCHOOL_EVENTS)) {
        return SCHOOL_EVENTS;
    }
    try {
        const cached = JSON.parse(localStorage.getItem('yale_soa_calendar_events') || 'null');
        if (Array.isArray(cached) && cached.length) return cached;
    } catch (_) {
        // Fallback to default snapshot
    }
    return DEFAULT_SOA_EVENTS;
}

function getLiveNewsItems() {
    if (typeof SCHOOL_NEWS !== 'undefined' && Array.isArray(SCHOOL_NEWS)) {
        return SCHOOL_NEWS;
    }
    try {
        const cached = JSON.parse(localStorage.getItem('yale_soa_news_items') || 'null');
        if (Array.isArray(cached) && cached.length) return cached;
    } catch (_) {
        // Fallback to default snapshot
    }
    return DEFAULT_SOA_NEWS;
}

function applyGlobalNotificationBars(prefs) {
    const header = document.querySelector('.topbar');
    if (!header) return;

    document.getElementById('global-announcement-bar')?.remove();
    document.getElementById('global-events-bar')?.remove();

    const todayIso = getTodayIsoLocal();

    // 1. Real-Time Latest Announcement from News
    if (prefs.announcements) {
        const newsList = getLiveNewsItems()
            .filter((item) => item.date <= todayIso)
            .sort((a, b) => b.date.localeCompare(a.date));
        const latestStory = newsList[0] || getLiveNewsItems()[0];

        if (latestStory) {
            const bar = document.createElement('div');
            bar.id = 'global-announcement-bar';
            bar.className = 'global-notice-bar';
            bar.setAttribute('role', 'region');
            bar.setAttribute('aria-label', 'Latest school announcement');
            bar.innerHTML = `
                <span><strong>Announcement (${escapeHtml(latestStory.displayDate || formatShortNoticeDate(latestStory.date))}):</strong> ${escapeHtml(latestStory.title)}</span>
                <a href="../html/news.html?story=${encodeURIComponent(latestStory.id)}">Read story →</a>
            `;
            header.prepend(bar);
        }
    }

    // 2. Real-Time Next Upcoming Event from Calendar
    if (prefs.events) {
        const upcomingEvents = getLiveCalendarEvents()
            .filter((evt) => evt.date >= todayIso)
            .sort((a, b) => a.date.localeCompare(b.date));

        const nextEvent = upcomingEvents[0];
        const eventBar = document.createElement('div');
        eventBar.id = 'global-events-bar';
        eventBar.className = 'global-notice-bar is-event';
        eventBar.setAttribute('role', 'region');
        eventBar.setAttribute('aria-label', 'Next upcoming calendar event');

        if (nextEvent) {
            const isToday = nextEvent.date === todayIso;
            const dateBadge = isToday ? 'Today' : formatShortNoticeDate(nextEvent.date);
            const metaText = [nextEvent.time, nextEvent.location].filter(Boolean).join(' · ');

            eventBar.innerHTML = `
                <span><strong>Upcoming Event (${escapeHtml(dateBadge)}):</strong> ${escapeHtml(nextEvent.title)}${metaText ? ` — ${escapeHtml(metaText)}` : ''}</span>
                <a href="../html/calendar.html?date=${encodeURIComponent(nextEvent.date)}">View on calendar →</a>
            `;
        } else {
            eventBar.innerHTML = `
                <span><strong>Calendar:</strong> No remaining scheduled events for this term.</span>
                <a href="../html/calendar.html">Open full calendar →</a>
            `;
        }

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

        // Language & Real-Time Notification Bars
        applyGlobalLanguage(prefs.language || 'en');
        applyGlobalNotificationBars(prefs);
    } catch (_) {
        // Ignore storage restrictions
    }
};

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
}

window.syncYaleSoAPreferences();

// ==========================================================================
// 1. DOM References & Site Index
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
// 2. Search Drawer
// ==========================================================================

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
// 3. Mobile Navigation Drawer
// ==========================================================================

function toggleMobileMenu(forceClose = false) {
    if (!mobileDrawer || !mobileMenuToggle) return;

    const isOpen = mobileDrawer.classList.contains('open');
    const shouldOpen = forceClose ? false : !isOpen;

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

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1120 && mobileDrawer.classList.contains('open')) {
            toggleMobileMenu(true);
        }
    });
}

// ==========================================================================
// 4. Desktop Dropdowns & Footer Accordions
// ==========================================================================

dropdownItems.forEach(item => {
    const trigger = item.querySelector('.primary-link');

    item.addEventListener('mouseenter', () => {
        if (searchDrawer?.classList.contains('open')) {
            toggleSearch(true);
        }
    });

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
// 5. Global Event Listeners & Utilities
// ==========================================================================

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    if (searchDrawer?.classList.contains('open')) {
        toggleSearch(true);
    }
    if (mobileDrawer?.classList.contains('open')) {
        toggleMobileMenu(true);
    }
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

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}