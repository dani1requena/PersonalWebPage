function toggleAppFunctions() {
    var appFunctionsList = document.getElementById("app-functions-list");
    if (appFunctionsList.style.display === "none") {
        appFunctionsList.style.display = "block";
    } else {
        appFunctionsList.style.display = "none";
    }
}

const textosEs = {
    bio: "Biografía",
    projects: "Proyectos",
    experience: "Experiencia Laboral",
    education: "Educación",
    contact: "Contacto",
    bioDescription: [
        "Estimados equipos de desarrollo,",
        "Me dirijo a ustedes con entusiasmo y determinación para presentarme como un apasionado de la programación y el desarrollo informático. Mi nombre es Daniel Requena, tengo 26 años y desde los 6 años he estado explorando el vasto mundo de la tecnología, sumergiéndome en la magia de los ordenadores. Sin embargo, fue hace aproximadamente 5 años cuando descubrí mi verdadera pasión por la programación y el desarrollo de software.",           
        "A pesar de haber sido un autodidacta durante mis inicios, hace tres años tuve la oportunidad de formalizar mis estudios en este campo. No puedo decir que el camino haya sido fácil; enfrenté desafíos y obstáculos que me exigieron cierta perseverancia. Pero con dedicación y determinación, logré superar cada dificultad y alcanzar mis metas.",            
        "En cuanto a mi experiencia laboral y proyectos actuales, los explico más abajo.",
        "Agradezco sinceramente la oportunidad de compartir mi pasión y experiencia con su equipo. Estoy seguro de que mi dedicación y habilidades serían un activo valioso para cualquier empresa de desarrollo informático que busque impulsar la innovación y alcanzar nuevos niveles de excelencia.",
        "Quedo a su disposición para cualquier pregunta o consulta adicional, y espero con interés la posibilidad de colaborar juntos en futuros proyectos.",
        "Atentamente,",
        "Daniel Requena"
    ],
    projectDetails: {
        title: "Proyectos",
        project1: {
            name: "CarSell",
            description: "Proyecto FullStack en Flutter para web por ahora, utilizando NestJs para Back.",
            appFunctions: "Esta aplicación permite:",
            functions: [
                "Registrar/crear usuario",
                "Login con token",
                "Crear anuncio",
                "Ver el propio anuncio",
                "Filtrar búsqueda",
                "Eliminar/Editar anuncio"
            ],
            viewProject: "Ver Proyecto"
        }
    },
    experienceDetails: {
        title: "Experiencia Laboral",
        job1: {
            position: "Desarrollador de Software en Inetum",
            period: "Trabajé en Inetum desde el 16/10/2022 hasta el 18/11/2023 como desarrollador.",
            description1: "· Comenzamos nuestra trayectoria como un grupo de estudiantes, embarcándonos en proyectos pequeños peer to peer. Posteriormente, nos aventuramos en la creación de una aplicación tipo blog, en la cual los usuarios podían interactuar mediante comentarios en las publicaciones. En aquel entonces éramos un equipo de 12 personas, el cual se subdividió en grupos de 4 para abordar diferentes aspectos del desarrollo. Utilizamos tecnologías como NestJs para el backend, y Angular con Ionic para el frontend, llevando a cabo alrededor de 4 sprints antes de que comenzáramos a ser asignados a proyectos más amplios.",
            description2: "· Uno de los proyectos en los que participé fue el de Asistencia Jurídica Gratuita. Este proyecto se desarrolló utilizando SpringBoot, además de hacer uso de HTML y PLSQL, entre otras tecnologías. En este caso, éramos un equipo de tan solo dos compañeros, siendo mi compañero un profesional senior con años de experiencia en la aplicación. Nuestro trabajo implicaba reuniones periódicas, la elaboración de documentación detallada, y tuve el privilegio de participar en la implementación de dos actualizaciones significativas durante el tiempo que estuve involucrado en el proyecto."
        }
    },
    educationDetails: {
        title: "Educación",
        education1: {
            degree: "Desarrollo Aplicaciones Multiplataforma",
            institution: "IES Joan d'Austria",
            date: "Fecha: 20/09/2021 => 20/06/2023",
            technologies: "Tecnologías y lenguajes con los que he trabajado:",
            skills: [
                "Java",
                "SpringBoot",
                "Python",
                "Kubernetes",
                "Android Studio",
                "HTML",
                "SQL PLSQL",
                "MongoDB"
            ]
        }
    },
    toggleButton: "English"
};

const textosEn = {
    bio: "Biography",
    projects: "Projects",
    experience: "Work Experience",
    education: "Education",
    contact: "Contact",
    bioDescription: [
        "Dear development teams,",
        "I am writing to you with enthusiasm and determination to introduce myself as someone passionate about programming and software development. My name is Daniel Requena, I am 26 years old, and since I was 6, I have been exploring the vast world of technology, immersing myself in the magic of computers. However, it was about 5 years ago when I discovered my true passion for programming and software development.",           
        "Despite being self-taught at the beginning, three years ago I had the opportunity to formalize my studies in this field. I cannot say that the journey has been easy; I faced challenges and obstacles that required perseverance. But with dedication and determination, I managed to overcome every difficulty and achieve my goals.",            
        "Regarding my work experience and current projects, I will explain them below.",
        "I sincerely appreciate the opportunity to share my passion and experience with your team. I am confident that my dedication and skills would be a valuable asset to any software development company looking to drive innovation and reach new levels of excellence.",
        "I am at your disposal for any questions or additional inquiries, and I look forward to the possibility of collaborating together on future projects.",
        "Sincerely,",
        "Daniel Requena"
    ],
    projectDetails: {
        title: "Projects",
        project1: {
            name: "CarSell",
            description: "FullStack project in Flutter for web (for now), using NestJs for the backend.",
            appFunctions: "This application allows:",
            functions: [
                "Register/create user",
                "Login with token",
                "Create ad",
                "View your own ad",
                "Filter search",
                "Delete/Edit ad"
            ],
            viewProject: "View Project"
        }
    },
    experienceDetails: {
        title: "Work Experience",
        job1: {
            position: "Software Developer at Inetum",
            period: "I worked at Inetum from 16/10/2022 to 18/11/2023 as a developer.",
            description1: "· We began our journey as a group of students embarking on small peer-to-peer projects. Later, we ventured into creating a blog-like application where users could interact by commenting on posts. At that time, we were a team of 12 people, which was subdivided into groups of 4 to tackle different aspects of development. We used technologies such as NestJs for the backend and Angular with Ionic for the frontend, completing around 4 sprints before we started being assigned to larger projects.",
            description2: "· One of the projects I participated in was Free Legal Aid. This project was developed using SpringBoot, in addition to using HTML and PLSQL, among other technologies. In this case, we were a team of just two colleagues, with my colleague being a senior professional with years of experience in the application. Our work involved regular meetings, detailed documentation creation, and I had the privilege of participating in the implementation of two significant updates during the time I was involved in the project."
        }
    },
    educationDetails: {
        title: "Education",
        education1: {
            degree: "Multiplatform Application Development",
            institution: "IES Joan d'Austria",
            date: "Date: 20/09/2021 => 20/06/2023",
            technologies: "Technologies and languages I have worked with:",
            skills: [
                "Java",
                "SpringBoot",
                "Python",
                "Kubernetes",
                "Android Studio",
                "HTML",
                "SQL PLSQL",
                "MongoDB"
            ]
        }
    },
    toggleButton: "Español"
};

let currentLanguage = "es";

function toggleLanguage() {
    const languageToggle = document.getElementById("language-toggle");
    const bioHeader = document.querySelector("#bio h2");
    const projectsHeader = document.querySelector("#projects h2");
    const experienceHeader = document.querySelector("#experience h2");
    const educationHeader = document.querySelector("#education h2");
    const contactHeader = document.querySelector("#contact h2");
    const bioParagraphs = document.querySelectorAll("#bio p");
    const projectTitle = document.querySelector("#projects h2");
    const project1Title = document.querySelector("#projects .project h3");
    const project1Description = document.querySelector("#projects .project p:nth-of-type(1)");
    const appFunctionsTitle = document.querySelector("#projects .app-functions");
    const appFunctionsList = document.querySelectorAll("#projects .function-list li");
    const project1Link = document.querySelector("#projects .project a");

    const jobTitle = document.querySelector("#experience h2");
    const job1Title = document.querySelector("#experience .job h3");
    const job1Period = document.querySelector("#experience .job p:nth-of-type(1)");
    const job1Description1 = document.querySelector("#experience .job p:nth-of-type(2)");
    const job1Description2 = document.querySelector("#experience .job p:nth-of-type(3)");

    const educationTitle = document.querySelector("#education h2");
    const education1Title = document.querySelector("#education .education h3");
    const education1Institution = document.querySelector("#education .education p:nth-of-type(1)");
    const education1Date = document.querySelector("#education .education p:nth-of-type(2)");
    const educationTechnologies = document.querySelector("#education .education p:nth-of-type(3)");
    const educationSkills = document.querySelectorAll("#education .education p:nth-of-type(n+4)");

    if (currentLanguage === "es") {
        bioHeader.textContent = textosEn.bio;
        projectsHeader.textContent = textosEn.projects;
        experienceHeader.textContent = textosEn.experience;
        educationHeader.textContent = textosEn.education;
        contactHeader.textContent = textosEn.contact;
        bioParagraphs.forEach((p, index) => {
            p.textContent = textosEn.bioDescription[index];
        });
        projectTitle.textContent = textosEn.projectDetails.title;
        project1Title.textContent = textosEn.projectDetails.project1.name;
        project1Description.textContent = textosEn.projectDetails.project1.description;
        appFunctionsTitle.textContent = textosEn.projectDetails.project1.appFunctions;
        appFunctionsList.forEach((li, index) => {
            li.textContent = textosEn.projectDetails.project1.functions[index];
        });
        project1Link.textContent = textosEn.projectDetails.project1.viewProject;
        jobTitle.textContent = textosEn.experienceDetails.title;
        job1Title.textContent = textosEn.experienceDetails.job1.position;
        job1Period.textContent = textosEn.experienceDetails.job1.period;
        job1Description1.textContent = textosEn.experienceDetails.job1.description1;
        job1Description2.textContent = textosEn.experienceDetails.job1.description2;

        educationTitle.textContent = textosEn.educationDetails.title;
        education1Title.textContent = textosEn.educationDetails.education1.degree;
        education1Institution.textContent = textosEn.educationDetails.education1.institution;
        education1Date.textContent = textosEn.educationDetails.education1.date;
        educationTechnologies.textContent = textosEn.educationDetails.education1.technologies;
        educationSkills.forEach((skill, index) => {
            skill.textContent = textosEn.educationDetails.education1.skills[index];
        });

        educationTitle.textContent = textosEs.educationDetails.title;
        education1Title.textContent = textosEs.educationDetails.education1.degree;
        education1Institution.textContent = textosEs.educationDetails.education1.institution;
        education1Date.textContent = textosEs.educationDetails.education1.date;
        educationTechnologies.textContent = textosEs.educationDetails.education1.technologies;
        educationSkills.forEach((skill, index) => {
            skill.textContent = textosEs.educationDetails.education1.skills[index];
        });
        languageToggle.textContent = textosEn.toggleButton;
        currentLanguage = "en";
    } else {
        bioHeader.textContent = textosEs.bio;
        projectsHeader.textContent = textosEs.projects;
        experienceHeader.textContent = textosEs.experience;
        educationHeader.textContent = textosEs.education;
        contactHeader.textContent = textosEs.contact;
        bioParagraphs.forEach((p, index) => {
            p.textContent = textosEs.bioDescription[index];
        });
        projectTitle.textContent = textosEs.projectDetails.title;
        project1Title.textContent = textosEs.projectDetails.project1.name;
        project1Description.textContent = textosEs.projectDetails.project1.description;
        appFunctionsTitle.textContent = textosEs.projectDetails.project1.appFunctions;
        appFunctionsList.forEach((li, index) => {
            li.textContent = textosEs.projectDetails.project1.functions[index];
        });
        project1Link.textContent = textosEs.projectDetails.project1.viewProject;
        jobTitle.textContent = textosEs.experienceDetails.title;
        job1Title.textContent = textosEs.experienceDetails.job1.position;
        job1Period.textContent = textosEs.experienceDetails.job1.period;
        job1Description1.textContent = textosEs.experienceDetails.job1.description1;
        job1Description2.textContent = textosEs.experienceDetails.job1.description2;
        languageToggle.textContent = textosEs.toggleButton;
        currentLanguage = "es";
    }
}

function mostrarSeccion(seccionId) {
    document.querySelectorAll('section').forEach(seccion => {
        seccion.style.display = 'none';
    });
    const seccion = document.getElementById(seccionId);
    seccion.style.display = 'block';
}


document.querySelectorAll('#drawer a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccionId = this.getAttribute('href').substring(1);
        mostrarSeccion(seccionId);
    });
});
