// ==========================================================================
// Yale School of Art — 2026–2027 Faculty & Staff Directory Controller
// ==========================================================================

function getFacultyStickyBottom() {
    const topbar = document.querySelector('.topbar');
    const controls = document.querySelector('.faculty-controls-section');

    const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
    const stickyTop = Math.round(topbarHeight + 16);
    document.documentElement.style.setProperty('--topbar-offset', `${stickyTop}px`);

    const controlsHeight = (controls && window.innerWidth > 1120)
        ? controls.getBoundingClientRect().height
        : 0;

    return Math.round(stickyTop + controlsHeight + 24);
}

const FACULTY_GOVERNING_BOARD = [
    {
        name: 'Gregory Crewdson',
        role: 'Professor, Photography',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Anoka Faruqee',
        role: 'Professor, Painting/Printmaking',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Martin Kersels',
        role: 'Professor, Sculpture',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Marta Kuzma',
        role: 'Professor, Interdisciplinary',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Meleko Mokgosi',
        role: 'Professor, Painting/Printmaking',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Nontsikelelo Mutiti',
        role: 'Assistant Professor, Graphic Design',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Elle Pérez',
        role: 'Assistant Professor, Photography',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Kymberly Pinder',
        role: 'Stavros Niarchos Foundation Dean; Professor of Art and History of Art',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Aki Sasamoto',
        role: 'Professor, Sculpture',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    },
    {
        name: 'Alexandria Smith',
        role: 'Assistant Professor, Painting/Printmaking',
        url: 'https://art.yale.edu/about/faculty-governing-board'
    }
];

const ACADEMIC_LEADERSHIP = [
    {
        name: 'Kymberly Pinder',
        role: 'Stavros Niarchos Foundation Dean, Professor of Art and History of Art',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Nontsikelelo Mutiti',
        role: 'Director of Graduate Studies in Graphic Design, Assistant Professor',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Alexandria Smith',
        role: 'Director of Undergraduate Studies, Assistant Professor, on leave Fall 2026 & Spring 2027',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Gregory Crewdson',
        role: 'Director of Graduate Studies in Photography, Professor',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Sandra Burns',
        role: 'Senior Critic, Co-Director of Graduate Studies in Sculpture',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Sarah Stevens-Morling',
        role: 'Assistant Dean of Communications and Digital Media, Senior Critic',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Meleko Mokgosi',
        role: 'Director of Graduate Studies in Painting and Printmaking, Professor',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Martin Kersels',
        role: 'Professor, Co-Director of Graduate Studies in Sculpture',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    },
    {
        name: 'Taryn Wolf',
        role: 'Assistant Dean for Academic Affairs',
        url: 'https://art.yale.edu/people/faculty-and-staff'
    }
];

const DIRECTORY_GROUPS = [
    {
        id: 'gd',
        label: 'Graphic Design',
        tiers: [
            {
                title: 'Leadership',
                members: [
                    { name: 'Nontsikelelo Mutiti', role: 'Director of Graduate Studies in Graphic Design, Assistant Professor' },
                    { name: 'Nicole Killian', role: 'Assistant Director in Graphic Design, Assistant Professor' }
                ]
            },
            {
                title: 'Full-Time Faculty',
                members: [
                    { name: 'Alvin Ashiatey', role: 'Lecturer, Graphic Design Lab Coordinator' },
                    { name: 'Julian Bittiner', role: 'Senior Critic' },
                    { name: 'Jake Hobart', role: 'Lecturer, All-School Graphic Designer and Commission Coordinator' },
                    { name: 'Tiriree Kananuruk', role: 'Lecturer' },
                    { name: 'Henk Van Assen', role: 'Senior Critic, Interim Director of Undergraduate Studies' },
                    { name: 'Andrew Walsh-Lister', role: 'Senior Critic' }
                ]
            },
            {
                title: 'Part-Time Faculty',
                members: [
                    { name: 'Anna Craycroft', role: 'Critic' },
                    { name: 'Will Denton', role: 'Lecturer' },
                    { name: 'Nate Gibbons', role: 'Lecturer' },
                    { name: 'Neil Goldberg', role: 'Senior Critic' },
                    { name: 'Riley Hooker', role: 'Lecturer' },
                    { name: 'Jazsalyn', role: 'Lecturer' },
                    { name: 'Geoff Kaplan', role: 'Critic' },
                    { name: 'Nina Stössinger', role: 'Critic' },
                    { name: 'Juan Villanueva', role: 'Lecturer' },
                    { name: 'Bryant Wells', role: 'Lecturer' },
                    { name: 'Stanley Wolukau-Wanambwa', role: 'Critic' }
                ]
            },
            {
                title: 'Visiting Critics',
                members: [
                    { name: 'Julian Alexander', role: 'Thesis Advisor' },
                    { name: 'Paul Bailey', role: 'Visiting Artist' },
                    { name: 'Laurenz Brunner', role: 'Visiting Artist' },
                    { name: 'Sulki Choi', role: 'Visiting Artist' },
                    { name: 'Sung Min Choi', role: 'Visiting Artist' },
                    { name: 'Alice Chung', role: 'Thesis Advisor' },
                    { name: 'Talia Cotton', role: 'Thesis Advisor' },
                    { name: 'Ed Cutting', role: 'Visiting Artist' },
                    { name: 'Tin Nguyen', role: 'Visiting Artist' },
                    { name: 'John Provencher', role: 'Thesis Advisor' }
                ]
            },
            {
                title: 'Faculty Governing Board',
                members: [
                    { name: 'Nontsikelelo Mutiti', role: 'Director of Graduate Studies in Graphic Design, Assistant Professor' }
                ]
            }
        ]
    },
    {
        id: 'pp',
        label: 'Painting & Printmaking',
        tiers: [
            {
                title: 'Leadership',
                members: [
                    { name: 'Meleko Mokgosi', role: 'Director of Graduate Studies in Painting and Printmaking, Professor' }
                ]
            },
            {
                title: 'Full-Time & Part-Time Faculty',
                members: [
                    { name: 'Painting & Printmaking Faculty Roster', role: 'Full-time, part-time, and visiting critics — add full roster from art.yale.edu/people/faculty-and-staff' }
                ]
            }
        ]
    },
    {
        id: 'photography',
        label: 'Photography',
        tiers: [
            {
                title: 'Leadership',
                members: [
                    { name: 'Gregory Crewdson', role: 'Director of Graduate Studies in Photography, Professor' }
                ]
            },
            {
                title: 'Full-Time & Part-Time Faculty',
                members: [
                    { name: 'Photography Faculty Roster', role: 'Full-time, part-time, and visiting critics — add full roster from art.yale.edu/people/faculty-and-staff' }
                ]
            }
        ]
    },
    {
        id: 'sculpture',
        label: 'Sculpture',
        tiers: [
            {
                title: 'Leadership',
                members: [
                    { name: 'Sandra Burns', role: 'Senior Critic, Co-Director of Graduate Studies in Sculpture' },
                    { name: 'Martin Kersels', role: 'Professor, Co-Director of Graduate Studies in Sculpture' }
                ]
            },
            {
                title: 'Full-Time & Part-Time Faculty',
                members: [
                    { name: 'Sculpture Faculty Roster', role: 'Full-time, part-time, and visiting critics — add full roster from art.yale.edu/people/faculty-and-staff' }
                ]
            }
        ]
    },
    {
        id: 'undergraduate',
        label: 'Undergraduate Studies',
        tiers: [
            {
                title: 'Leadership & Faculty',
                members: [
                    { name: 'Alexandria Smith', role: 'Director of Undergraduate Studies, Assistant Professor, on leave Fall 2026 & Spring 2027' },
                    { name: 'Henk Van Assen', role: 'Senior Critic, Interim Director of Undergraduate Studies' }
                ]
            }
        ]
    },
    {
        id: 'staff',
        label: 'Staff Administration',
        tiers: [
            {
                title: 'Administration & Academic Affairs',
                members: [
                    { name: 'Sarah Stevens-Morling', role: 'Assistant Dean of Communications and Digital Media, Senior Critic' },
                    { name: 'Taryn Wolf', role: 'Assistant Dean for Academic Affairs' }
                ]
            }
        ]
    }
];

function escapeFacultyHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderFacultyCard(person) {
    const href = person.url || 'https://art.yale.edu/people/faculty-and-staff';
    return `
        <a class="program-faculty-card" href="${escapeFacultyHtml(href)}" target="_blank" rel="noopener noreferrer">
            <span class="program-faculty-name">${escapeFacultyHtml(person.name)}</span>
            <span class="program-faculty-role">${escapeFacultyHtml(person.role)}</span>
        </a>
    `;
}

function initFacultyDirectory() {
    const governingSection = document.querySelector('[data-faculty-group="governing-board"]');
    const governingGrid = document.getElementById('faculty-governing-board-grid');
    const pillsContainer = document.getElementById('faculty-filter-pills');
    const searchInput = document.getElementById('faculty-search-input');
    const leadershipSection = document.querySelector('[data-faculty-group="leadership"]');
    const leadershipGrid = document.getElementById('faculty-leadership-grid');
    const noteSection = document.getElementById('faculty-note-section');
    const departmentsRoot = document.getElementById('faculty-departments-root');
    const emptyState = document.getElementById('faculty-empty-state');

    if (!pillsContainer || !leadershipGrid || !departmentsRoot) return;

    let activeFilter = 'all';
    let searchQuery = '';

    const filterTabs = [
        { id: 'all', label: 'All' },
        { id: 'governing-board', label: 'Governing Board' },
        { id: 'leadership', label: 'Academic Leadership' },
        ...DIRECTORY_GROUPS.map((g) => ({ id: g.id, label: g.label }))
    ];

    function renderFilterPills() {
        pillsContainer.innerHTML = filterTabs.map((tab) => {
            const isActive = tab.id === activeFilter;
            return `
                <button
                    type="button"
                    class="faculty-pill${isActive ? ' active' : ''}"
                    data-group="${tab.id}"
                    aria-pressed="${String(isActive)}">
                    ${escapeFacultyHtml(tab.label)}
                </button>
            `;
        }).join('');
    }

    function matchesQuery(person) {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return (
            person.name.toLowerCase().includes(q) ||
            person.role.toLowerCase().includes(q)
        );
    }

    function renderDirectory() {
        let totalVisible = 0;

        // 0. Faculty Governing Board (Top Section)
        const showGoverningGroup = activeFilter === 'all' || activeFilter === 'governing-board';
        const filteredGoverning = showGoverningGroup ? FACULTY_GOVERNING_BOARD.filter(matchesQuery) : [];
        if (governingSection) {
            governingSection.hidden = filteredGoverning.length === 0;
        }
        if (governingGrid) {
            governingGrid.innerHTML = filteredGoverning.map(renderFacultyCard).join('');
        }
        totalVisible += filteredGoverning.length;

        // 1. Academic Leadership
        const showLeadershipGroup = activeFilter === 'all' || activeFilter === 'leadership';
        const filteredLeadership = showLeadershipGroup ? ACADEMIC_LEADERSHIP.filter(matchesQuery) : [];
        if (leadershipSection) {
            leadershipSection.hidden = filteredLeadership.length === 0;
        }
        leadershipGrid.innerHTML = filteredLeadership.map(renderFacultyCard).join('');
        totalVisible += filteredLeadership.length;

        // 2. Engagement Note (shown when viewing All and not actively searching)
        if (noteSection) {
            noteSection.hidden = !(activeFilter === 'all' && !searchQuery);
        }

        // 3. Departmental & Staff Groups
        departmentsRoot.innerHTML = DIRECTORY_GROUPS.map((group) => {
            if (activeFilter !== 'all' && activeFilter !== group.id) return '';

            const tierBlocks = group.tiers.map((tier) => {
                const filteredMembers = tier.members.filter(matchesQuery);
                if (!filteredMembers.length) return '';
                totalVisible += filteredMembers.length;

                return `
                    <h3 class="faculty-subtier-heading">${escapeFacultyHtml(tier.title)}</h3>
                    <div class="program-faculty-grid">
                        ${filteredMembers.map(renderFacultyCard).join('')}
                    </div>
                `;
            }).join('');

            if (!tierBlocks) return '';

            return `
                <section class="faculty-section" data-faculty-group="${group.id}" aria-label="${escapeFacultyHtml(group.label)}">
                    <div class="section-label">
                        <div class="section-rule" aria-hidden="true"></div>
                        <span>${escapeFacultyHtml(group.label)}</span>
                    </div>
                    ${tierBlocks}
                </section>
            `;
        }).join('');

        if (emptyState) {
            emptyState.hidden = totalVisible > 0;
        }
    }

    pillsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.faculty-pill');
        const group = btn?.dataset.group;
        if (!group || group === activeFilter) return;

        activeFilter = group;
        renderFilterPills();
        renderDirectory();
    });

    searchInput?.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderDirectory();
    });

    renderFilterPills();
    renderDirectory();
}

document.addEventListener('DOMContentLoaded', initFacultyDirectory);