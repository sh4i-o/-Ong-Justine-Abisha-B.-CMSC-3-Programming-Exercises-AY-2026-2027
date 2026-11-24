const SCHOOL_EVENTS = [
    // ======================================================================
    // 2026 Events (Spring, Summer & Fall)
    // ======================================================================
    {
        id: 'evt-2026-01-14',
        date: '2026-01-14',
        time: '5:00 PM',
        location: 'Office of the Registrar / Online',
        category: 'Deadlines',
        eventType: null,
        title: 'Spring-term registration due',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Official registration deadline for Spring 2026 courses.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-05-13',
        date: '2026-05-13',
        time: 'Gallery Hours',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: '2026 Photography MFA Thesis Exhibition',
        department: 'Photography',
        audience: 'Public',
        description: 'Annual graduating MFA thesis exhibition presented by the Department of Photography.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-06-03',
        date: '2026-06-03',
        time: 'Gallery Hours (Through Aug 19)',
        location: '63 Audubon',
        category: 'Exhibitions',
        eventType: null,
        title: 'euphonia: ACES Educational Center for the Arts Multimedia Exhibition',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Summer multimedia exhibition hosted at 63 Audubon (on view June 3 – August 19, 2026).',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-08-24',
        date: '2026-08-24',
        time: 'All Day (Aug 24–28)',
        location: '1156 Chapel St. & Campus',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Orientation for new students',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Fall 2026 orientation week for incoming Yale School of Art students (August 24–28, 2026).',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-08-31',
        date: '2026-08-31',
        time: 'All Day',
        location: 'All Departments',
        category: 'Deadlines',
        eventType: null,
        title: 'Advisement for all students; Fall-term registration due',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Mandatory faculty advisement and Fall 2026 course registration deadline.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-09-02',
        date: '2026-09-02',
        time: 'Morning',
        location: 'All Departments',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Fall-term classes begin',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'First day of Fall 2026 studio and seminar instruction.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-09-04',
        date: '2026-09-04',
        time: 'All Day',
        location: 'All Departments',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Friday classes do not meet; Monday classes meet instead',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Schedule adjustment prior to the Labor Day holiday.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-09-07',
        date: '2026-09-07',
        time: 'All Day',
        location: 'All School',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Labor Day; classes do not meet; offices closed',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'University holiday; studios and administrative offices closed.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-10-09',
        date: '2026-10-09',
        time: 'Gallery Hours (Through Nov 18)',
        location: '63 Audubon',
        category: 'Exhibitions',
        eventType: null,
        title: 'Devotional Alchemy: Connecticut Group Show',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Group exhibition featuring artists for whom creative practice is an act of devotion (on view Oct 9 – Nov 18, 2026).',
        relatedNewsId: 'news-devotional-alchemy'
    },
    {
        id: 'evt-2026-10-20',
        date: '2026-10-20',
        time: '5:00 PM',
        location: 'Office of the Registrar',
        category: 'Deadlines',
        eventType: null,
        title: 'Midterm; Last day to withdraw from a fall full-term course without transcript notation',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Fall 2026 midterm deadline with permission of the registrar.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-10-21',
        date: '2026-10-21',
        time: 'All Day (Oct 21–23)',
        location: 'All School',
        category: 'Academic Calendar',
        eventType: null,
        title: 'October Break',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Fall term October Break (October 21–23, 2026).',
        relatedNewsId: 'news-publishing-as-praxis'
    },
    {
        id: 'evt-2026-10-26',
        date: '2026-10-26',
        time: 'Morning',
        location: 'All Departments',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Classes resume',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Classes resume following October Break.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-01',
        date: '2026-11-01',
        time: 'Evening Lecture',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Artist Lectures',
        title: 'Josh Safdie: Film, Art, Life',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Visiting artist lecture examining cinema, visual art, and creative practice.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-02',
        date: '2026-11-02',
        time: 'All Day',
        location: '1156 Chapel St.',
        category: 'Events',
        eventType: 'MFA Crits',
        title: 'MFA Crits in Photography',
        department: 'Photography',
        audience: 'Department Only',
        description: 'Scheduled graduate critique sessions in the Department of Photography.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-03',
        date: '2026-11-03',
        time: 'Evening Lecture',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Artist Lectures',
        title: 'Breaking the Bargain: Art and Accountability',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Public lecture and discussion on artistic practice and institutional accountability.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-04',
        date: '2026-11-04',
        time: 'Opening & Book Talk',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Receptions',
        title: '"The Matriarch\'s Line" Art Exhibition Opening & Book Talk',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Exhibition opening reception and accompanying book talk.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-05',
        date: '2026-11-05',
        time: 'Gallery Hours',
        location: '63 Audubon',
        category: 'Exhibitions',
        eventType: null,
        title: 'Devotional Alchemy',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Continuing exhibition at 63 Audubon featuring Connecticut and Yale School of Art artists.',
        relatedNewsId: 'news-devotional-alchemy'
    },
    {
        id: 'evt-2026-11-09',
        date: '2026-11-09',
        time: 'All Day',
        location: '1156 Chapel St.',
        category: 'Events',
        eventType: 'MFA Crits',
        title: 'MFA Crits in Photography',
        department: 'Photography',
        audience: 'Department Only',
        description: 'Scheduled graduate critique sessions in the Department of Photography.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-10',
        date: '2026-11-10',
        time: 'Lunch',
        location: '1156 Chapel St.',
        category: 'Events',
        eventType: 'Community Events',
        title: 'Community Lunch & New Haven Arts Spotlight',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'School-wide community lunch spotlighting New Haven arts initiatives.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-11',
        date: '2026-11-11',
        time: 'Evening Lecture',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Artist Lectures',
        title: 'Nicole Eisenman and Craig Zammiello',
        department: 'Painting & Printmaking',
        audience: 'Public',
        description: 'Visiting artist conversation on painting, collaboration, and printmaking.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-12',
        date: '2026-11-12',
        time: 'Evening Lecture',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Artist Lectures',
        title: 'Edra Soto',
        department: 'Sculpture',
        audience: 'Public',
        description: 'Visiting artist lecture by Puerto Rican-born, Chicago-based artist Edra Soto.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-13',
        date: '2026-11-13',
        time: 'Gallery Hours (Nov 13 – Dec 5)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'undercurrent — 1st-Year MFA Show',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'First-year MFA group exhibition on view at Green Hall Gallery through December 5, 2026.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-15',
        date: '2026-11-15',
        time: 'Workshop',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Workshops',
        title: "Artists' Studio Archives: An Introduction for Yale School of Art students",
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Workshop introducing archival cataloging and preservation for studio artists.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-16',
        date: '2026-11-16',
        time: 'All Day',
        location: '1156 Chapel St.',
        category: 'Events',
        eventType: 'MFA Crits',
        title: 'MFA Crits in Photography',
        department: 'Photography',
        audience: 'Department Only',
        description: 'Scheduled graduate critique sessions in the Department of Photography.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-17',
        date: '2026-11-17',
        time: 'Lunch',
        location: '1156 Chapel St.',
        category: 'Events',
        eventType: 'Community Events',
        title: '2nd Annual Community Friendsgiving Lunch',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Annual community lunch bringing together students, faculty, and staff.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-17-b',
        date: '2026-11-17',
        time: 'Evening Lecture',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Artist Lectures',
        title: 'Jeff Sharlet',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Visiting lecture by writer and documentary journalist Jeff Sharlet.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-18',
        date: '2026-11-18',
        time: 'All Day',
        location: 'All Departments',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Spring-term advisement for all students',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Mandatory academic advisement day for Spring 2027 course selection.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-20',
        date: '2026-11-20',
        time: 'End of Day',
        location: 'All School',
        category: 'Academic Calendar',
        eventType: null,
        title: 'November recess begins after last academic obligation',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Thanksgiving / November recess begins following Friday academic obligations.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-22',
        date: '2026-11-22',
        time: 'Gallery Hours',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'undercurrent — 1st-Year MFA Show',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'First-year MFA group exhibition on view at Green Hall Gallery.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-22-b',
        date: '2026-11-22',
        time: 'Gallery Hours (Nov 22 – Dec 7)',
        location: '32 Edgewood Gallery',
        category: 'Exhibitions',
        eventType: null,
        title: 'Undergrad Fall Thesis',
        department: 'Undergraduate',
        audience: 'Public',
        description: 'Undergraduate Art majors fall thesis exhibition on view at 32 Edgewood Gallery through December 7, 2026.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-23',
        date: '2026-11-23',
        time: 'Gallery Hours',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'undercurrent — 1st-Year MFA Show',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'First-year MFA group exhibition on view at Green Hall Gallery.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-11-30',
        date: '2026-11-30',
        time: 'Morning',
        location: 'All Departments',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Classes resume',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Fall term classes resume following November recess.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-12-01',
        date: '2026-12-01',
        time: 'Afternoon',
        location: '1156 Chapel St.',
        category: 'Events',
        eventType: 'Town Halls',
        title: 'All-School Town Hall',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'All-school town hall gathering for students, faculty, and administration.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-12-02',
        date: '2026-12-02',
        time: 'Workshop',
        location: '1156 Chapel St.',
        category: 'Events',
        eventType: 'Workshops',
        title: 'Open Drawing',
        department: 'Painting & Printmaking',
        audience: 'SoA Community',
        description: 'Open studio figure and observational drawing session.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-12-03',
        date: '2026-12-03',
        time: 'Evening Lecture',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Artist Lectures',
        title: 'Regina José Galindo',
        department: 'Sculpture',
        audience: 'Public',
        description: 'Visiting artist lecture by Guatemalan performance and visual artist Regina José Galindo.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-12-11',
        date: '2026-12-11',
        time: '5:00 PM',
        location: 'All Departments',
        category: 'Deadlines',
        eventType: null,
        title: 'Last day to withdraw from a course; Fall-term classes end; Reading period begins',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Conclusion of Fall 2026 classes and start of reading period.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-12-15',
        date: '2026-12-15',
        time: 'All Day (Dec 15–22)',
        location: 'All Departments',
        category: 'Events',
        eventType: 'MFA Crits',
        title: 'Critiques and examinations begin',
        department: 'Interdisciplinary',
        audience: 'Department Only',
        description: 'End-of-term final studio critiques and examinations begin across all programs.',
        relatedNewsId: null
    },
    {
        id: 'evt-2026-12-22',
        date: '2026-12-22',
        time: 'End of Day',
        location: 'All School',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Critiques and examinations end; Winter recess begins',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Conclusion of Fall 2026 term; Winter recess begins.',
        relatedNewsId: null
    },

    // ======================================================================
    // 2027 Events (Spring Term, Thesis Exhibitions & Commencement)
    // ======================================================================
    {
        id: 'evt-2027-01-10',
        date: '2027-01-10',
        time: '11:59 PM EST',
        location: 'Online Admissions Portal',
        category: 'Deadlines',
        eventType: null,
        title: 'Closing date for submission of applications for admission',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Final deadline to submit MFA applications for admission.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-01-18',
        date: '2027-01-18',
        time: 'All Day',
        location: 'All School',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Martin Luther King, Jr. Day; classes do not meet; offices closed',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'University holiday observing Martin Luther King, Jr. Day.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-01-19',
        date: '2027-01-19',
        time: 'Morning',
        location: 'All Departments',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Spring-term classes begin',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'First day of Spring 2027 classes across all School of Art programs.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-01-23',
        date: '2027-01-23',
        time: 'Gallery Hours (Jan 23 – Feb 2)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'Spring 2027 Thesis Exhibition: Painting & Printmaking Group 1',
        department: 'Painting & Printmaking',
        audience: 'Public',
        description: 'First graduating MFA thesis exhibition in Painting & Printmaking (on view Jan 23 – Feb 2, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-01-29',
        date: '2027-01-29',
        time: 'All Day',
        location: 'All Departments',
        category: 'Deadlines',
        eventType: null,
        title: 'Friday classes do not meet; Monday classes meet instead; Last day to add a course',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Monday schedule runs on Friday; final day to add a Spring 2027 course with permission of registrar.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-01-29-b',
        date: '2027-01-29',
        time: 'Evening Reception',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Events',
        eventType: 'Receptions',
        title: 'Public Reception: Painting & Printmaking Group 1 Thesis Exhibition',
        department: 'Painting & Printmaking',
        audience: 'Public',
        description: 'Public opening reception for Painting & Printmaking Group 1 MFA thesis candidates.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-02-10',
        date: '2027-02-10',
        time: 'Gallery Hours (Feb 10–21)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'Spring 2027 Thesis Exhibition: Painting & Printmaking Group 2',
        department: 'Painting & Printmaking',
        audience: 'Public',
        description: 'Second graduating MFA thesis exhibition in Painting & Printmaking (on view Feb 10 – Feb 21, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-02-19',
        date: '2027-02-19',
        time: 'Evening Reception',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Events',
        eventType: 'Receptions',
        title: 'Public Reception: Painting & Printmaking Group 2 Thesis Exhibition',
        department: 'Painting & Printmaking',
        audience: 'Public',
        description: 'Public reception celebrating Painting & Printmaking Group 2 MFA thesis candidates.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-02-28',
        date: '2027-02-28',
        time: 'Gallery Hours (Feb 28 – Mar 11)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'Spring 2027 Thesis Exhibition: Sculpture Group 1',
        department: 'Sculpture',
        audience: 'Public',
        description: 'First graduating MFA thesis exhibition in Sculpture (on view Feb 28 – Mar 11, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-03-04',
        date: '2027-03-04',
        time: 'Evening Lecture',
        location: 'Yale School of Art',
        category: 'Events',
        eventType: 'Artist Lectures',
        title: 'Jessica Dickinson',
        department: 'Painting & Printmaking',
        audience: 'Public',
        description: 'Spring 2027 Visiting Artist Lecture by painter Jessica Dickinson.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-03-05',
        date: '2027-03-05',
        time: '5:00 PM',
        location: 'All Departments',
        category: 'Deadlines',
        eventType: null,
        title: 'Midterm; Last day to withdraw without transcript notation; Spring recess begins',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Spring 2027 midterm deadline; Spring recess begins after last academic obligation.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-03-05-b',
        date: '2027-03-05',
        time: 'Evening Reception',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Events',
        eventType: 'Receptions',
        title: 'Public Reception: Sculpture Group 1 Thesis Exhibition',
        department: 'Sculpture',
        audience: 'Public',
        description: 'Public reception for Sculpture Group 1 MFA thesis exhibition.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-03-18',
        date: '2027-03-18',
        time: 'Gallery Hours (Mar 18–29)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'Spring 2027 Thesis Exhibition: Sculpture Group 2',
        department: 'Sculpture',
        audience: 'Public',
        description: 'Second graduating MFA thesis exhibition in Sculpture (on view Mar 18 – Mar 29, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-03-22',
        date: '2027-03-22',
        time: 'Morning',
        location: 'All Departments',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Classes resume',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Spring 2027 classes resume following Spring recess.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-03-25',
        date: '2027-03-25',
        time: 'Evening Reception',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Events',
        eventType: 'Receptions',
        title: 'Public Reception: Sculpture Group 2 Thesis Exhibition',
        department: 'Sculpture',
        audience: 'Public',
        description: 'Public reception for Sculpture Group 2 MFA thesis exhibition.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-04-05',
        date: '2027-04-05',
        time: 'Gallery Hours (Apr 5–16)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'Spring 2027 Thesis Exhibition: Graphic Design',
        department: 'Graphic Design',
        audience: 'Public',
        description: 'Graduating MFA thesis exhibition in Graphic Design (on view Apr 5 – Apr 16, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-04-10',
        date: '2027-04-10',
        time: 'All Day (Apr 10–11)',
        location: '1156 Chapel St., 353 Crown St. & 36 Edgewood Ave',
        category: 'Events',
        eventType: 'Community Events',
        title: 'Spring 2027 Open Studios (Day 1)',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Annual School of Art Open Studios across all MFA buildings (April 10–11, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-04-11',
        date: '2027-04-11',
        time: 'All Day (Apr 10–11)',
        location: '1156 Chapel St., 353 Crown St. & 36 Edgewood Ave',
        category: 'Events',
        eventType: 'Community Events',
        title: 'Spring 2027 Open Studios (Day 2)',
        department: 'Interdisciplinary',
        audience: 'Public',
        description: 'Second day of School of Art Open Studios across all MFA departments.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-04-16',
        date: '2027-04-16',
        time: 'Evening Reception',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Events',
        eventType: 'Receptions',
        title: 'Public Reception: Graphic Design Thesis Exhibition',
        department: 'Graphic Design',
        audience: 'Public',
        description: 'Closing public reception celebrating Graphic Design MFA thesis candidates.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-04-23',
        date: '2027-04-23',
        time: 'Gallery Hours (Apr 23 – May 3)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'Spring 2027 Undergraduate Thesis Exhibition',
        department: 'Undergraduate',
        audience: 'Public',
        description: 'Senior Yale College Art majors thesis exhibition (on view Apr 23 – May 3, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-04-30',
        date: '2027-04-30',
        time: '5:00 PM',
        location: 'All Departments',
        category: 'Deadlines',
        eventType: null,
        title: 'Last day to withdraw from a course; Spring-term classes end; Reading period begins',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Final day of Spring 2027 classes and start of reading period.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-04-30-b',
        date: '2027-04-30',
        time: 'Evening Reception',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Events',
        eventType: 'Receptions',
        title: 'Public Reception: Undergraduate Thesis Exhibition',
        department: 'Undergraduate',
        audience: 'Public',
        description: 'Public reception celebrating graduating undergraduate Art majors.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-05-05',
        date: '2027-05-05',
        time: 'All Day (May 5–12)',
        location: 'All Departments',
        category: 'Events',
        eventType: 'MFA Crits',
        title: 'Spring Critiques and examinations begin',
        department: 'Interdisciplinary',
        audience: 'Department Only',
        description: 'End-of-year final studio critiques and examinations begin across all departments.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-05-10',
        date: '2027-05-10',
        time: 'Gallery Hours (May 10–25)',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Exhibitions',
        eventType: null,
        title: 'Spring 2027 Thesis Exhibition: Photography',
        department: 'Photography',
        audience: 'Public',
        description: 'Graduating MFA thesis exhibition in Photography (on view May 10 – May 25, 2027).',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-05-12',
        date: '2027-05-12',
        time: 'End of Day',
        location: 'All School',
        category: 'Academic Calendar',
        eventType: null,
        title: 'Critiques and examinations end; Summer recess begins',
        department: 'Interdisciplinary',
        audience: 'SoA Community',
        description: 'Conclusion of Spring 2027 critiques and exams; Summer recess begins.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-05-14',
        date: '2027-05-14',
        time: 'Evening Reception',
        location: 'Green Hall Gallery, 1156 Chapel St.',
        category: 'Events',
        eventType: 'Receptions',
        title: 'Public Reception: Photography Thesis Exhibition',
        department: 'Photography',
        audience: 'Public',
        description: 'Public reception celebrating Photography MFA thesis candidates.',
        relatedNewsId: null
    },
    {
        id: 'evt-2027-05-24',
        date: '2027-05-24',
        time: 'Morning',
        location: 'Yale University Old Campus & Chapel St.',
        category: 'Academic Calendar',
        eventType: null,
        title: 'University Commencement',
        department: 'Interdisciplinary',
        audience: 'Yale Community',
        description: '326th Yale University Commencement and School of Art diploma ceremony.',
        relatedNewsId: null
    }
];

const SCHOOL_NEWS = [
    {
        id: 'news-sculpture-adjunct-job',
        categories: ['Jobs'],
        department: 'Sculpture',
        title: 'Yale School of Art Seeks Associate Adjunct Professor in Sculpture',
        date: '2026-11-11',
        displayDate: 'Nov 11, 2026',
        image: '../assets/adjunct-prof.png',
        imageAlt: '36 Edgewood Avenue Sculpture facilities',
        shortDescription: 'The Department of Sculpture invites applications for an Associate Adjunct Professor position.',
        fullText: [
            'The Yale School of Art Department of Sculpture is seeking applications for an Associate Adjunct Professor to teach graduate studio courses and mentor MFA candidates.',
            'Full position details, required application materials, and submission deadlines are available through the Yale Faculty careers portal.'
        ],
        relatedEventDate: null
    },
    {
        id: 'news-devotional-alchemy',
        categories: ['In The World', 'Recap'],
        department: 'Interdisciplinary',
        title: '"Devotional Alchemy" open at 63 Audubon through November 19',
        date: '2026-11-04',
        displayDate: 'Nov 04, 2026',
        image: '../assets/devo-alchemy.png',
        imageAlt: 'Devotional Alchemy gallery exhibition view',
        shortDescription: 'Featuring artists for whom creative practice is an act of devotion.',
        fullText: [
            'Devotional Alchemy is on view at 63 Audubon in New Haven through November 19, bringing together artists for whom creative practice is an act of devotion.',
            'The exhibition features works across sculpture, painting, printmaking, and installation by members of the Yale School of Art community.'
        ],
        relatedEventDate: '2026-11-05'
    },
    {
        id: 'news-alumni-tours-oct-2026',
        categories: ['In The World'],
        department: 'Interdisciplinary',
        title: 'Alums gather in New York and Philadelphia for exhibition tours',
        date: '2026-10-31',
        displayDate: 'Oct 31, 2026',
        image: '../assets/exhibition-tours.png',
        imageAlt: 'Yale School of Art alumni gathering and studio tour',
        shortDescription: 'October highlights from alumni events!',
        fullText: [
            'Yale School of Art alumni convened in New York and Philadelphia throughout October for curator-led gallery walkthroughs and studio visits.',
            'The gatherings celebrated recent solo and group exhibitions by MFA graduates across all four departments.'
        ],
        relatedEventDate: null
    },
    {
        id: 'news-october-2026-community',
        categories: ['In The World'],
        department: 'Interdisciplinary',
        title: 'October 2026 Community News',
        date: '2026-10-30',
        displayDate: 'Oct 30, 2026',
        image: '../assets/oct-2026-cn.png',
        imageAlt: 'Green Hall entrance at 1156 Chapel Street',
        shortDescription: 'Monthly roundup of exhibitions, awards, publications, and residencies across the School of Art community.',
        fullText: [
            'Our October 2026 Community News highlights recent exhibitions, fellowships, publications, and residencies by current students, faculty, staff, and alumni.'
        ],
        relatedEventDate: null
    },
    {
        id: 'news-publishing-as-praxis',
        categories: ['Recap'],
        department: 'Graphic Design',
        title: 'Graphic Design hosts "Publishing as Praxis"',
        date: '2026-10-21',
        displayDate: 'Oct 21, 2026',
        image: '../assets/praxis.png',
        imageAlt: 'Graphic Design atrium at 1156 Chapel Street',
        shortDescription: 'The day-long convening unpacked the pedagogical and the performative.',
        fullText: [
            'The Department of Graphic Design hosted "Publishing as Praxis," a day-long convening examining publishing as both a pedagogical method and a performative practice.',
            'Sessions brought together designers, editors, educators, and students in Green Hall for lectures, readings, and live bookmaking demonstrations.'
        ],
        relatedEventDate: null
    }
];

// ==========================================================================
// Shared Date & Formatting Helpers
// ==========================================================================

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAY_NAMES = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

function toIsoDate(year, monthIndex, day) {
    const m = String(monthIndex + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
}

function parseIsoDate(isoStr) {
    const [y, m, d] = isoStr.split('-').map(Number);
    return new Date(y, m - 1, d);
}

function formatLongDate(isoStr) {
    const dt = parseIsoDate(isoStr);
    const weekday = WEEKDAY_NAMES[dt.getDay()];
    const month = MONTH_NAMES[dt.getMonth()];
    const day = String(dt.getDate()).padStart(2, '0');
    return `${weekday}, ${month} ${day}, ${dt.getFullYear()}`;
}

function formatShortMonthDate(isoStr) {
    const dt = parseIsoDate(isoStr);
    const monthShort = MONTH_NAMES[dt.getMonth()].slice(0, 3);
    const day = String(dt.getDate()).padStart(2, '0');
    return `${monthShort} ${day}, ${dt.getFullYear()}`;
}

// ==========================================================================
// Shared Filter Drawer Controller
// ==========================================================================

function setupFilterDrawer(toggleBtnId, panelId, resetBtnId, countBadgeId, onFilterChange) {
    const toggleBtn = document.getElementById(toggleBtnId);
    const panel = document.getElementById(panelId);
    const resetBtn = document.getElementById(resetBtnId);
    const countBadge = document.getElementById(countBadgeId);

    if (!toggleBtn || !panel) return;

    const defaults = {};
    panel.querySelectorAll('.cn-pill-group').forEach((group) => {
        const activeBtn = group.querySelector('.cn-pill.active') || group.querySelector('.cn-pill');
        defaults[group.dataset.filterType] = activeBtn ? activeBtn.dataset.value : 'all';
    });

    const state = { ...defaults };
    panel.inert = true;

    toggleBtn.addEventListener('click', () => {
        const willOpen = !panel.classList.contains('open');
        panel.classList.toggle('open', willOpen);
        panel.setAttribute('aria-hidden', String(!willOpen));
        panel.inert = !willOpen;
        toggleBtn.classList.toggle('active', willOpen);
        toggleBtn.setAttribute('aria-expanded', String(willOpen));
    });

    function syncBadge() {
        const activeCount = Object.keys(state).filter((key) => state[key] !== defaults[key]).length;
        if (countBadge) {
            countBadge.textContent = String(activeCount);
            countBadge.hidden = activeCount === 0;
        }
    }

    panel.querySelectorAll('.cn-pill-group').forEach((group) => {
        const type = group.dataset.filterType;
        group.addEventListener('click', (e) => {
            const pill = e.target.closest('.cn-pill');
            if (!pill) return;

            state[type] = pill.dataset.value;
            group.querySelectorAll('.cn-pill').forEach((btn) => {
                const isMatch = btn === pill;
                btn.classList.toggle('active', isMatch);
                btn.setAttribute('aria-pressed', String(isMatch));
            });

            syncBadge();
            onFilterChange({ ...state });
        });
    });

    resetBtn?.addEventListener('click', () => {
        Object.keys(state).forEach((key) => {
            state[key] = defaults[key];
        });
        panel.querySelectorAll('.cn-pill-group').forEach((group) => {
            const defaultVal = defaults[group.dataset.filterType];
            group.querySelectorAll('.cn-pill').forEach((btn) => {
                const isDefault = btn.dataset.value === defaultVal;
                btn.classList.toggle('active', isDefault);
                btn.setAttribute('aria-pressed', String(isDefault));
            });
        });
        syncBadge();
        onFilterChange({ ...state });
    });

    return state;
}

// ==========================================================================
// Calendar Page Controller (calendar.html)
// ==========================================================================

function initCalendarPage() {
    const gridEl = document.getElementById('cal-grid');
    if (!gridEl) return;

    const monthLabelEl = document.getElementById('cal-month-label');
    const prevMonthBtn = document.getElementById('cal-prev-month');
    const nextMonthBtn = document.getElementById('cal-next-month');
    const todayBtn = document.getElementById('cal-today-btn');
    const fullToggleBtn = document.getElementById('cal-full-toggle');
    const fullAgendaEl = document.getElementById('cal-full-agenda');
    const agendaHeadingEl = document.getElementById('cal-agenda-heading');
    const agendaListEl = document.getElementById('cal-agenda-list');
    const selectedHeadingEl = document.getElementById('cal-selected-heading');
    const selectedDateEl = document.getElementById('cal-selected-date');
    const eventsListEl = document.getElementById('cal-events-list');
    const activeSummaryEl = document.getElementById('cal-active-summary');

    const now = new Date();
    const todayIso = toIsoDate(now.getFullYear(), now.getMonth(), now.getDate());

    const params = new URLSearchParams(window.location.search);
    const paramDate = params.get('date');
    const initialDate = paramDate && /^\d{4}-\d{2}-\d{2}$/.test(paramDate) ? paramDate : todayIso;
    const initialDateObj = parseIsoDate(initialDate);

    let viewYear = initialDateObj.getFullYear();
    let viewMonth = initialDateObj.getMonth();
    let selectedIso = initialDate;
    let filters = { category: 'all', eventType: 'all', department: 'all', audience: 'all' };

    function animateGrid(direction) {
        gridEl.classList.remove('is-sliding-next', 'is-sliding-prev');
        void gridEl.offsetWidth;
        gridEl.classList.add(direction === 'next' ? 'is-sliding-next' : 'is-sliding-prev');
    }

    const boardEl = document.querySelector('.cal-board');
    let touchStartX = 0;
    let touchStartY = 0;
    let suppressNextCellClick = false;

    boardEl?.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        suppressNextCellClick = false;
    }, { passive: true });

    boardEl?.addEventListener('touchend', (e) => {
        if (!touchStartX && !touchStartY) return;
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        touchStartX = 0;
        touchStartY = 0;

        if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
            suppressNextCellClick = true;
            if (deltaX < 0) {
                nextMonthBtn?.click();
            } else {
                prevMonthBtn?.click();
            }
        }
    }, { passive: true });

    function getFilteredEvents() {
        return SCHOOL_EVENTS.filter((evt) => {
            const catOk = filters.category === 'all' || evt.category === filters.category;
            const typeOk = filters.eventType === 'all' || evt.eventType === filters.eventType;
            const deptOk = filters.department === 'all' || evt.department === filters.department;
            const audOk = filters.audience === 'all' || evt.audience === filters.audience;
            return catOk && typeOk && deptOk && audOk;
        });
    }

    function renderSelectedEvents() {
        const isToday = selectedIso === todayIso;
        if (selectedHeadingEl) {
            selectedHeadingEl.textContent = isToday ? 'Events Today' : 'Selected Date Events';
        }
        if (selectedDateEl) {
            selectedDateEl.textContent = formatLongDate(selectedIso);
        }

        const dayEvents = getFilteredEvents().filter((evt) => evt.date === selectedIso);

        if (!dayEvents.length) {
            eventsListEl.innerHTML = `
                <p class="cal-empty-state">
                    No scheduled events match your active filters on ${formatLongDate(selectedIso)}. Select a highlighted date on the grid or click <strong>View Full Calendar</strong> to browse the full month.
                </p>
            `;
            return;
        }

        eventsListEl.innerHTML = dayEvents.map((evt) => {
            const relatedNews = evt.relatedNewsId
                ? SCHOOL_NEWS.find((n) => n.id === evt.relatedNewsId)
                : null;

            return `
                <article class="cal-event-card">
                    <div class="cal-meta-field">
                        <span class="cn-meta-kicker">Category${evt.eventType ? ' · Event Type' : ''}</span>
                        <p class="cal-meta-value">${evt.category}${evt.eventType ? ` · ${evt.eventType}` : ''}</p>
                    </div>

                    <div class="cal-meta-field">
                        <span class="cn-meta-kicker">Event Title</span>
                        <p class="cal-meta-value is-title">${evt.title}</p>
                        <p class="cal-meta-sub">${evt.time} · ${evt.location}</p>
                        <p class="cal-meta-sub">${evt.description}</p>
                    </div>

                    <div class="cal-meta-field">
                        <span class="cn-meta-kicker">Department</span>
                        <p class="cal-meta-value">${evt.department}</p>
                    </div>

                    <div class="cal-meta-field">
                        <span class="cn-meta-kicker">Audience</span>
                        <p class="cal-meta-value">${evt.audience}</p>
                    </div>

                    ${relatedNews ? `
                        <a class="cn-cross-link" href="../html/news.html?story=${encodeURIComponent(relatedNews.id)}">
                            Read Related News Story →
                        </a>
                    ` : ''}
                </article>
            `;
        }).join('');
    }

    function renderFullAgenda() {
        const monthPrefix = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}`;
        const monthLabel = `${MONTH_NAMES[viewMonth]} ${viewYear}`;

        if (agendaHeadingEl) {
            agendaHeadingEl.textContent = `Full Schedule — ${monthLabel}`;
        }

        const monthEvents = getFilteredEvents()
            .filter((evt) => evt.date.startsWith(monthPrefix))
            .sort((a, b) => a.date.localeCompare(b.date));

        if (!monthEvents.length) {
            agendaListEl.innerHTML = `
                <p class="cal-empty-state">
                    No events scheduled in ${monthLabel} for the selected filters.
                </p>
            `;
            return;
        }

        agendaListEl.innerHTML = monthEvents.map((evt) => `
            <button type="button" class="cal-agenda-row" data-agenda-date="${evt.date}">
                <span class="cal-agenda-date">${formatShortMonthDate(evt.date)}</span>
                <span class="cal-agenda-title">${evt.title}</span>
                <span class="cal-agenda-dept">${evt.eventType || evt.category} · ${evt.department}</span>
            </button>
        `).join('');
    }

    function renderCalendarGrid() {
        const monthLabel = `${MONTH_NAMES[viewMonth]} ${viewYear}`;
        if (monthLabelEl) monthLabelEl.textContent = monthLabel;

        const filteredEvents = getFilteredEvents();
        const eventsByDate = new Map();
        filteredEvents.forEach((evt) => {
            const list = eventsByDate.get(evt.date) || [];
            list.push(evt);
            eventsByDate.set(evt.date, list);
        });

        const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();
        const totalCells = 42;

        const cellsHtml = [];

        for (let i = 0; i < totalCells; i++) {
            let cellYear = viewYear;
            let cellMonth = viewMonth;
            let dayNum;
            let isOutside = false;

            if (i < firstDayOfWeek) {
                dayNum = prevMonthDays - firstDayOfWeek + i + 1;
                cellMonth = viewMonth - 1;
                if (cellMonth < 0) {
                    cellMonth = 11;
                    cellYear -= 1;
                }
                isOutside = true;
            } else if (i >= firstDayOfWeek + daysInMonth) {
                dayNum = i - (firstDayOfWeek + daysInMonth) + 1;
                cellMonth = viewMonth + 1;
                if (cellMonth > 11) {
                    cellMonth = 0;
                    cellYear += 1;
                }
                isOutside = true;
            } else {
                dayNum = i - firstDayOfWeek + 1;
            }

            const iso = toIsoDate(cellYear, cellMonth, dayNum);
            const dayEvents = eventsByDate.get(iso) || [];
            const isSelected = iso === selectedIso;
            const isToday = iso === todayIso;

            const classes = [
                'cal-cell',
                isOutside ? 'is-outside' : '',
                isSelected ? 'is-selected' : '',
                isToday ? 'is-today' : ''
            ].filter(Boolean).join(' ');

            const dotsHtml = dayEvents.slice(0, 3).map((evt) =>
                `<span class="cal-dot${evt.category === 'Deadlines' ? ' is-deadline' : ''}"></span>`
            ).join('');

            cellsHtml.push(`
                <button
                    type="button"
                    class="${classes}"
                    data-date="${iso}"
                    aria-label="${formatLongDate(iso)}${dayEvents.length ? `, ${dayEvents.length} event${dayEvents.length > 1 ? 's' : ''}` : ''}"
                    aria-pressed="${String(isSelected)}">
                    <span class="cal-day-num">${String(dayNum).padStart(2, '0')}</span>
                    <span class="cal-dots" aria-hidden="true">${dotsHtml}</span>
                </button>
            `);
        }

        gridEl.innerHTML = cellsHtml.join('');
        renderSelectedEvents();
        renderFullAgenda();
    }

    gridEl.addEventListener('click', (e) => {
        if (suppressNextCellClick) {
            suppressNextCellClick = false;
            return;
        }
        const cell = e.target.closest('.cal-cell');
        if (!cell) return;

        selectedIso = cell.dataset.date;
        const clickedDate = parseIsoDate(selectedIso);
        viewYear = clickedDate.getFullYear();
        viewMonth = clickedDate.getMonth();
        renderCalendarGrid();
    });

    prevMonthBtn?.addEventListener('click', () => {
        viewMonth -= 1;
        if (viewMonth < 0) {
            viewMonth = 11;
            viewYear -= 1;
        }
        renderCalendarGrid();
        animateGrid('prev');
    });

    nextMonthBtn?.addEventListener('click', () => {
        viewMonth += 1;
        if (viewMonth > 11) {
            viewMonth = 0;
            viewYear += 1;
        }
        renderCalendarGrid();
        animateGrid('next');
    });

    todayBtn?.addEventListener('click', () => {
        selectedIso = todayIso;
        viewYear = now.getFullYear();
        viewMonth = now.getMonth();
        renderCalendarGrid();
    });

    fullToggleBtn?.addEventListener('click', () => {
        const willOpen = fullAgendaEl.hidden;
        fullAgendaEl.hidden = !willOpen;
        fullToggleBtn.setAttribute('aria-expanded', String(willOpen));
        fullToggleBtn.textContent = willOpen ? 'Hide Full Calendar' : 'View Full Calendar';

        if (willOpen) {
            fullAgendaEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    agendaListEl?.addEventListener('click', (e) => {
        const row = e.target.closest('.cal-agenda-row');
        if (!row) return;

        selectedIso = row.dataset.agendaDate;
        renderCalendarGrid();

        const panel = document.getElementById('cal-selected-panel');
        if (panel) {
            const headerHeight = document.querySelector('.topbar')?.offsetHeight || 0;
            const targetY = panel.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
            window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
    });

    setupFilterDrawer('cal-filter-toggle', 'cal-filter-panel', 'cal-filter-reset', 'cal-filter-count', (nextFilters) => {
        filters = nextFilters;

        if (activeSummaryEl) {
            const parts = [
                filters.category !== 'all' ? filters.category : '',
                filters.eventType !== 'all' ? filters.eventType : '',
                filters.department !== 'all' ? filters.department : '',
                filters.audience !== 'all' ? filters.audience : ''
            ].filter(Boolean);
            activeSummaryEl.textContent = parts.join(' · ');
            activeSummaryEl.hidden = parts.length === 0;
        }

        renderCalendarGrid();
    });

    renderCalendarGrid();
}

// ==========================================================================
// News Page Controller (news.html)
// ==========================================================================

function initNewsPage() {
    const gridEl = document.getElementById('news-grid');
    if (!gridEl) return;

    const activeHeadingEl = document.getElementById('news-active-heading');
    const countLabelEl = document.getElementById('news-count-label');
    const activeSummaryEl = document.getElementById('news-active-summary');
    const loadMoreBtn = document.getElementById('news-load-more');

    const modal = document.getElementById('news-modal');
    const modalClose = document.getElementById('news-modal-close');
    const modalCategory = document.getElementById('news-modal-category');
    const modalImage = document.getElementById('news-modal-image');
    const modalDate = document.getElementById('news-modal-date');
    const modalDepartment = document.getElementById('news-modal-department');
    const modalTitle = document.getElementById('news-modal-title');
    const modalCopy = document.getElementById('news-modal-copy');
    const modalActions = document.getElementById('news-modal-actions');

    const PAGE_SIZE = 4;
    let visibleCount = PAGE_SIZE;
    let filters = { sort: 'newest', category: 'all', department: 'all' };
    let lastTriggerEl = null;

    function getFilteredNews() {
        const list = SCHOOL_NEWS.filter((item) => {
            const catOk = filters.category === 'all' || item.categories.includes(filters.category);
            const deptOk = filters.department === 'all' || item.department === filters.department;
            return catOk && deptOk;
        });

        return list.sort((a, b) =>
            filters.sort === 'oldest'
                ? a.date.localeCompare(b.date)
                : b.date.localeCompare(a.date)
        );
    }

    function openStoryModal(storyId, triggerEl) {
        const story = SCHOOL_NEWS.find((n) => n.id === storyId);
        if (!story || !modal) return;

        lastTriggerEl = triggerEl || document.activeElement;

        if (modalCategory) modalCategory.textContent = story.categories.join(', ');
        if (modalImage) {
            modalImage.src = story.image;
            modalImage.alt = story.imageAlt;
        }
        if (modalDate) modalDate.textContent = story.displayDate;
        if (modalDepartment) modalDepartment.textContent = story.department;
        if (modalTitle) modalTitle.textContent = story.title;
        if (modalCopy) {
            modalCopy.innerHTML = story.fullText.map((p) => `<p>${p}</p>`).join('');
        }
        if (modalActions) {
            modalActions.innerHTML = story.relatedEventDate
                ? `<a class="cn-cross-link" href="../html/calendar.html?date=${encodeURIComponent(story.relatedEventDate)}">View Related Event on Calendar (${formatShortMonthDate(story.relatedEventDate)}) →</a>`
                : '';
        }

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        modalClose?.focus();
    }

    function closeStoryModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lastTriggerEl?.focus();
    }

    function renderNewsGrid() {
        const filtered = getFilteredNews();
        const visibleItems = filtered.slice(0, visibleCount);

        if (activeHeadingEl) {
            if (filters.category !== 'all' && filters.department !== 'all') {
                activeHeadingEl.textContent = `${filters.category} — ${filters.department}`;
            } else if (filters.category !== 'all') {
                activeHeadingEl.textContent = filters.category;
            } else if (filters.department !== 'all') {
                activeHeadingEl.textContent = filters.department;
            } else {
                activeHeadingEl.textContent = 'All News';
            }
        }

        if (countLabelEl) {
            countLabelEl.textContent = `Showing ${visibleItems.length} of ${filtered.length}`;
        }

        if (!visibleItems.length) {
            gridEl.innerHTML = `
                <p class="cal-empty-state" style="grid-column: 1 / -1;">
                    No news stories match the selected filters. Try resetting your filter selection.
                </p>
            `;
        } else {
            gridEl.innerHTML = visibleItems.map((item) => `
                <article class="news-card">
                    <div class="news-card-media" role="button" tabindex="0" data-story-id="${item.id}" aria-label="Read story: ${item.title}">
                        <img src="${item.image}" alt="${item.imageAlt}" />
                    </div>

                    <div class="news-card-body">
                        <span class="cn-meta-kicker">${item.categories.join(', ')}</span>
                        <h3 class="news-card-title">
                            <button type="button" class="news-card-title-btn" data-story-id="${item.id}">
                                ${item.title}
                            </button>
                        </h3>
                        <p class="news-card-date">${item.displayDate}</p>
                        <p class="news-card-excerpt">${item.shortDescription}</p>
                        ${item.relatedEventDate ? `
                            <a class="cn-cross-link" href="../html/calendar.html?date=${encodeURIComponent(item.relatedEventDate)}">
                                View on Calendar →
                            </a>
                        ` : ''}
                    </div>
                </article>
            `).join('');
        }

        if (loadMoreBtn) {
            loadMoreBtn.hidden = visibleItems.length >= filtered.length;
        }
    }

    gridEl.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-story-id]');
        if (trigger) {
            openStoryModal(trigger.dataset.storyId, trigger);
        }
    });

    gridEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const mediaTrigger = e.target.closest('.news-card-media[data-story-id]');
            if (mediaTrigger) {
                e.preventDefault();
                openStoryModal(mediaTrigger.dataset.storyId, mediaTrigger);
            }
        }
    });

    loadMoreBtn?.addEventListener('click', () => {
        visibleCount += PAGE_SIZE;
        renderNewsGrid();
    });

    modal?.addEventListener('click', (e) => {
        if (e.target.closest('[data-modal-close]') || e.target.closest('#news-modal-close')) {
            closeStoryModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('open')) {
            closeStoryModal();
        }
    });

    setupFilterDrawer('news-filter-toggle', 'news-filter-panel', 'news-filter-reset', 'news-filter-count', (nextFilters) => {
        filters = nextFilters;
        visibleCount = PAGE_SIZE;

        if (activeSummaryEl) {
            const parts = [
                filters.sort === 'oldest' ? 'Oldest First' : '',
                filters.category !== 'all' ? filters.category : '',
                filters.department !== 'all' ? filters.department : ''
            ].filter(Boolean);
            activeSummaryEl.textContent = parts.join(' · ');
            activeSummaryEl.hidden = parts.length === 0;
        }

        renderNewsGrid();
    });

    renderNewsGrid();

    const params = new URLSearchParams(window.location.search);
    const storyParam = params.get('story');
    if (storyParam) {
        openStoryModal(storyParam);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCalendarPage();
    initNewsPage();
});