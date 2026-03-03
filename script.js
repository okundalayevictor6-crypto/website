// ==================== MOBILE MENU ====================
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  
  if (hamburger && navLinks) {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  }
  
  if (navOverlay) {
    navOverlay.classList.toggle('active');
  }
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
    
    if (hamburger) hamburger.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
  });
});

// ==================== COURSE DATA ====================
const coursesData = {
  100: {
    first: [
      { code: 'CSC 101', title: 'Introduction to Computer Science', units: 3, desc: 'History of computers, functional components, number systems, logic gates. Core course.' },
      { code: 'MTH 101', title: 'Elementary Mathematics I', units: 3, desc: 'Set theory, real numbers, integers, rational numbers, Venn diagrams.' },
      { code: 'PHY 101', title: 'General Physics I', units: 3, desc: 'Mechanics, thermal physics, waves. Required.' },
      { code: 'PHY 107', title: 'General Physics Laboratory I', units: 1, desc: 'Practical experiments in mechanics, heat, and optics.' },
      { code: 'CHM 101', title: 'General Chemistry I', units: 3, desc: 'Atomic structure, chemical bonding, stoichiometry.' },
      { code: 'GST 101', title: 'Communication in English I', units: 2, desc: 'Effective writing, grammar, comprehension.' },
      { code: 'GST 113', title: 'Nigerian Peoples and Culture', units: 2, desc: 'Study of Nigerian history, cultures.' },
      { code: 'GST 107', title: 'Use of Library, Study Skills & ICT', units: 2, desc: 'Library resources, e-learning, ICT fundamentals.' }
    ],
    second: [
      { code: 'CSC 102', title: 'Introduction to Problem Solving', units: 3, desc: 'Algorithms, flowcharts, implementation in a programming language.' },
      { code: 'MTH 102', title: 'Elementary Mathematics II', units: 3, desc: 'Functions, derivatives, integration.' },
      { code: 'PHY 102', title: 'General Physics II', units: 3, desc: 'Electricity, magnetism, modern physics.' },
      { code: 'PHY 108', title: 'General Physics Laboratory II', units: 1, desc: 'Experiments in electricity and magnetism.' },
      { code: 'CHM 102', title: 'General Chemistry II', units: 3, desc: 'Thermochemistry, rates, equilibrium, electrochemistry.' },
      { code: 'GST 102', title: 'Communication in English II', units: 2, desc: 'Logical presentation, public speaking, report writing.' },
      { code: 'GST 106', title: 'Logic, Philosophy and Human Existence', units: 2, desc: 'Symbolic logic, arguments, philosophy.' }
    ]
  },
  200: {
    first: [
      { code: 'CSC 201', title: 'Computer Programming I', units: 3, desc: 'Introduction to programming using a high-level language (C/Python).' },
      { code: 'CSC 203', title: 'Foundations of Sequential Program', units: 3, desc: 'Relationship between HLL and machine architecture.' },
      { code: 'CSC 205', title: 'Operating Systems I', units: 3, desc: 'OS roles, process management, memory.' },
      { code: 'CSC 209', title: 'Structured Programming', units: 3, desc: 'Structured design, modularity, stepwise refinement.' },
      { code: 'MTH 201', title: 'Mathematical Methods I', units: 3, desc: 'Complex numbers, vectors, matrices.' },
      { code: 'GST 205', title: 'Introduction to Entrepreneurship', units: 2, desc: 'Fundamentals of entrepreneurship.' },
      { code: 'GST 211', title: 'Environment & Sustainable Development', units: 2, desc: 'Environmental issues, sustainability.' },
      { code: 'GST 203', title: 'Peace Studies and Conflict Resolution', units: 2, desc: 'Conflict analysis, resolution strategies.' }
    ],
    second: [
      { code: 'CSC 202', title: 'Computer Programming II', units: 3, desc: 'Advanced programming, recursion, searching, sorting.' },
      { code: 'CSC 204', title: 'Fundamentals of Data Structures', units: 3, desc: 'Arrays, stacks, queues, trees, linked lists.' },
      { code: 'CSC 208', title: 'Discrete Structure', units: 3, desc: 'Set theory, logic, graphs, Boolean algebra.' },
      { code: 'CSC 210', title: 'Computer Hardware', units: 3, desc: 'Digital logic, circuits, CPU design.' },
      { code: 'CSC 214', title: 'Data Management I', units: 3, desc: 'Intro to databases, DBMS, query languages.' },
      { code: 'PHY 202', title: 'Electric Circuit and Electronics', units: 3, desc: 'Circuit analysis, semiconductors.' },
      { code: 'GST 206', title: 'Entrepreneurship Studies II', units: 2, desc: 'Business planning, venture creation.' }
    ]
  },
  300: {
    first: [
      { code: 'CSC 303', title: 'Compiler Construction I', units: 3, desc: 'Lexical analysis, parsing, code generation.' },
      { code: 'CSC 305', title: 'Operating Systems II', units: 3, desc: 'Concurrency, deadlocks, scheduling.' },
      { code: 'CSC 307', title: 'Computer Architecture and Organisation I', units: 3, desc: 'Digital logic, CPU, memory.' },
      { code: 'CSC 309', title: 'Systems Analysis and Design', units: 3, desc: 'SDLC, DFD, system design.' },
      { code: 'CSC 311', title: 'Computational Science and Numerical Methods', units: 3, desc: 'Numerical computation, modeling.' },
      { code: 'CSC 313', title: 'Object-Oriented Programming', units: 3, desc: 'Classes, inheritance, polymorphism (Java).' },
      { code: 'CSC 315', title: 'Survey of Programming Languages', units: 4, desc: 'History, paradigms, syntax, semantics.' },
      { code: 'GST 311', title: 'Leadership Skills', units: 1, desc: 'Leadership theories, team dynamics.' }
    ],
    second: [
      { code: 'CSC 399', title: 'SIWES', units: 16, desc: 'Six months industrial training in IT industry.' }
    ]
  },
  400: {
    first: [
      { code: 'CSC 401', title: 'Software Engineering', units: 4, desc: 'Software design, architecture, testing.' },
      { code: 'CSC 403', title: 'Net-Centric Computing', units: 3, desc: 'Distributed computing, web technologies.' },
      { code: 'CSC 405', title: 'Organization of Programming Languages', units: 3, desc: 'Language design, data types.' },
      { code: 'CSC 407', title: 'Artificial Intelligence', units: 3, desc: 'Knowledge representation, expert systems.' },
      { code: 'CSC 409', title: 'Human Computer Interface', units: 2, desc: 'HCI principles, usability.' },
      { code: 'CSC 413', title: 'Algorithm and Complexity Analysis', units: 3, desc: 'Algorithm analysis, sorting, searching.' }
    ],
    second: [
      { code: 'CSC 402', title: 'Data Management II', units: 3, desc: 'Relational databases, SQL, transactions.' },
      { code: 'CSC 406', title: 'Computer Networks/Communications', units: 3, desc: 'OSI, TCP/IP, routing.' },
      { code: 'CSC 408', title: 'Computer Architecture and Organization II', units: 3, desc: 'Advanced memory, pipelining.' },
      { code: 'CSC 499', title: 'Final Year Project', units: 6, desc: 'Substantial software development project.' }
    ]
  }
};

// ==================== COURSES PAGE LOGIC ====================
if (document.getElementById('courses-container')) {
  let currentLevel = '100';
  let currentSemester = 'first';

  function renderCourses() {
    const container = document.getElementById('courses-container');
    const courses = coursesData[currentLevel]?.[currentSemester];
    if (!courses) {
      container.innerHTML = '<p>No courses available for this semester.</p>';
      return;
    }

    let html = '';
    courses.forEach(course => {
      html += `
        <div class="course-card" data-code="${course.code}" data-title="${course.title}" data-units="${course.units}" data-desc="${course.desc.replace(/"/g, '"')}">
          <div class="course-code">${course.code}</div>
          <div class="course-title">${course.title}</div>
          <div class="course-units">${course.units} Unit${course.units > 1 ? 's' : ''}</div>
        </div>
      `;
    });
    container.innerHTML = html;

    document.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', () => {
        const code = card.dataset.code;
        const title = card.dataset.title;
        const units = card.dataset.units;
        const desc = card.dataset.desc;
        showCourseModal(code, title, units, desc);
      });
    });
  }

  const levelTabs = document.querySelectorAll('.level-tab');
  const semesterTabs = document.querySelectorAll('.semester-tab');

  levelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      levelTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentLevel = tab.dataset.level;
      renderCourses();
    });
  });

  semesterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      semesterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSemester = tab.dataset.semester;
      renderCourses();
    });
  });

  renderCourses();
}

// ==================== MODALS ====================
const courseModal = document.getElementById('courseModal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

function showCourseModal(code, title, units, desc) {
  if (!courseModal) return;
  modalBody.innerHTML = `
    <h2 style="color:#2c1a4a;">${code}: ${title}</h2>
    <p style="margin:1rem 0;"><strong>Units:</strong> ${units}</p>
    <p><strong>Description:</strong> ${desc}</p>
    <p style="margin-top:1.5rem;"><em>From the Chrisland University Computer Science Handbook.</em></p>
  `;
  courseModal.style.display = 'flex';
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    courseModal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === courseModal) courseModal.style.display = 'none';
});

// Handbook modal
const handbookModal = document.getElementById('handbookModal');
const closeHandbookModal = document.getElementById('closeHandbookModal');
const readMoreVision = document.getElementById('readMoreVision');

if (readMoreVision) {
  readMoreVision.addEventListener('click', (e) => {
    e.preventDefault();
    handbookModal.style.display = 'flex';
  });
}

if (closeHandbookModal) {
  closeHandbookModal.addEventListener('click', () => {
    handbookModal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === handbookModal) handbookModal.style.display = 'none';
});

// ==================== DROPDOWN FOR MISCONDUCT ====================
const toggleBtn = document.getElementById('misconductToggle');
const dropdownContent = document.getElementById('misconductContent');
const toggleIcon = document.querySelector('.toggle-icon');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
    if (dropdownContent.classList.contains('show')) {
      toggleIcon.style.transform = 'rotate(180deg)';
    } else {
      toggleIcon.style.transform = 'rotate(0deg)';
    }
  });
}

// ==================== HANDBOOK QUICK LINKS ====================
document.getElementById('academicRegLink')?.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Academic Regulations:\n• Course system with credits\n• GPA/CGPA calculation\n• Probation: GPA < 1.50\n• Withdrawal: CGPA < 1.50 for two consecutive semesters\n• Pass mark: 40%\n• Attendance: 75% mandatory');
});

document.getElementById('courseReqLink')?.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Course Requirements:\n• Minimum 15 units, maximum 24 units per semester.\n• All core/compulsory courses must be passed.\n• Electives can be chosen from specified lists.\n• SIWES (CSC 399) is mandatory for 300 level.');
});

// ==================== SMOOTH SCROLLING (for anchor links) ====================
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
