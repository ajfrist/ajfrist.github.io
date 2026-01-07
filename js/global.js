const skills = [
    { name: 'Python', img: '/global-media/python_image.png' },
    { name: "Java", img: '/global-media/java_image.png' },
    { name: 'JavaScript', img: '/global-media/javascript_image.svg' },
    { name: 'C#', img: '/global-media/csharp_image.svg' },
    { name: 'React Native', img: '/global-media/react_image.png' },
    { name: 'Node.js', img: '/global-media/nodejs_image.svg' },
    { name: 'SQL', img: '/global-media/sql_image.png' },
    { name: 'Git', img: '/global-media/git_image.png' },
    // { name: '.NET Core', img: '/global-media/dotnetcore_image.svg' },
    { name: 'RestAPI', img: '/global-media/restapi_image.png' },
    // { name: 'Heroku', img: '/global-media/heroku_image.svg' },
    // { name: 'LinkedIn', img: '/global-media/linkedin_image.svg' },
    // { name: 'NPM', img: '/global-media/npm_image.svg' },
    // { name: 'PostgreSQL', img: '/global-media/postgresql_image.svg' },
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