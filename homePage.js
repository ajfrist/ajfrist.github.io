const skills = [
    { name: 'JavaScript', img: '/global-media/js.png' },
    { name: 'Python', img: '/global-media/python.png' },
    { name: 'React', img: '/global-media/react.png' },
    { name: 'Node.js', img: '/global-media/node.png' },
    { name: 'SQL', img: '/global-media/sql.png' },
    { name: 'Git', img: '/global-media/git.png' }
];

const projects = [
    {
        id: 1,
        title: 'Task Management App',
        description: 'A full-stack web application for managing daily tasks with user authentication',
        tech: ['React', 'Node.js', 'MongoDB', 'Express'],
        status: 'Completed',
        color: 'blue'
    },
    {
        id: 2,
        title: 'Weather Dashboard',
        description: 'Real-time weather tracking application with interactive maps and forecasts',
        tech: ['JavaScript', 'API Integration', 'CSS3'],
        status: 'Completed',
        color: 'cyan'
    },
    {
        id: 3,
        title: 'E-commerce Platform',
        description: 'Online shopping platform with cart functionality and payment integration',
        tech: ['React', 'Redux', 'Stripe API', 'Firebase'],
        status: 'In Progress',
        color: 'green'
    },
    {
        id: 4,
        title: 'Portfolio Generator',
        description: 'Tool for developers to create customizable portfolio websites',
        tech: ['Python', 'Flask', 'Jinja2', 'Bootstrap'],
        status: 'Completed',
        color: 'purple'
    }
];

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    if (page === 'home') {
        document.getElementById('homePage').classList.add('active');
        document.getElementById('homeBtn').classList.add('active');
    } else {
        document.getElementById('projectsPage').classList.add('active');
        document.getElementById('projectsBtn').classList.add('active');
    }
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-img-block';
        skillDiv.innerHTML = `
            <img src="${skill.img}" alt="${skill.name}" class="skill-img" />
            <span class="skill-name">${skill.name}</span>
        `;
        container.appendChild(skillDiv);
    });
}

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        projectDiv.innerHTML = `
            <div class="project-header ${project.color}"></div>
            <div class="project-content">
                <div class="project-title">
                    <h3>${project.title}</h3>
                    <span class="status-badge ${project.status === 'Completed' ? 'completed' : 'progress'}">
                        ${project.status}
                    </span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="tech-tags">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-link">View Details →</div>
            </div>
        `;
        
        projectDiv.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
        
        container.appendChild(projectDiv);
    });
}

// Dark/Light mode toggle with persistence and dynamic year
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    // Set theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }
    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

renderSkills();
renderSkills();