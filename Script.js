function toggleAppFunctions(elementId) {
    var appFunctionsList = document.getElementById(elementId);
    if (appFunctionsList.style.display === "none") {
        appFunctionsList.style.display = "block";
    } else {
        appFunctionsList.style.display = "none";
    }
}

const bioSection = document.querySelector("#bio");
const projectsSection = document.querySelector("#projects");
const project1Section = document.querySelector("#project1");
const projectBookSection = document.querySelector("#project-book");
const experienceSection = document.querySelector("#experience");
const educationSection = document.querySelector("#education");
const contactSection = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", function() {
    const texts = {
        es: {
            bioTitle: "Biografía",
            bioParagraph1: "Estimados equipos de desarrollo,",
            bioParagraph2: "Me dirijo a ustedes con entusiasmo y determinación para presentarme como un apasionado de la programación y el desarrollo informático. Mi nombre es Daniel Requena, tengo 27 años y desde los 6 años he estado explorando el vasto mundo de la tecnología, sumergiéndome en la magia de los ordenadores. Sin embargo, fue hace aproximadamente 5 años cuando descubrí mi verdadera pasión por la programación y el desarrollo de software.",
            bioParagraph3: "A pesar de haber sido un autodidacta durante mis inicios, hace tres años tuve la oportunidad de formalizar mis estudios en este campo. No puedo decir que el camino haya sido fácil; enfrenté desafíos y obstáculos que me exigieron cierta perseverancia. Pero con dedicación y determinación, logré superar cada dificultad y alcanzar mis metas.",
            bioParagraph4: "En cuanto a mi experiencia laboral y proyectos actuales, los explico más abajo",
            bioParagraph5: "Agradezco sinceramente la oportunidad de compartir mi pasión y experiencia con su equipo. Estoy seguro de que mi dedicación y habilidades serían un activo valioso para cualquier empresa de desarrollo informático que busque impulsar la innovación y alcanzar nuevos niveles de excelencia.",
            bioParagraph6: "Quedo a su disposición para cualquier pregunta o consulta adicional, y espero con interés la posibilidad de colaborar juntos en futuros proyectos.",
            bioSignature: "Atentamente, Daniel Requena",

            projectsTitle: "Proyectos",
            project1Title: "CarSell",
            project1Description: "Proyecto FullStack en Flutter para web por ahora, utilizando NestJs para Back.",
            project1Functions: "Esta aplicación permite:",
            project1Link: "Ver Proyecto",
            project1FunctionsList: [
                "Registrar/crear usuario",
                "Login con token",
                "Crear anuncio",
                "Ver el propio anuncio",
                "Filtrar búsqueda",
                "Eliminar/Editar anuncio"
            ],

            projectBookTitle: "LaBibliotecaDeCoper",
            projectBookDescription: "Proyecto FullStack en React para móvil, utilizando SpringBoot para Back.",
            projectBookFunctions: "Esta aplicación permite:",
            projectBookLinkServer: "Ver Proyecto Server",
            projectBookLinkClient: "Ver Proyecto Cliente",
            projectBookFunctionsList: [
                "*Leer libros en PDF, registrados en categorías en el cliente",
                "EN SERVIDOR",
                "*Crear libro",
                "*Editar libro",
                "*Eliminar libro"
            ],

            experienceTitle: "Experiencia Laboral",
            jobTitle: "Desarrollador de Software en Inetum",
            jobDescription1: "Trabajé en Inetum desde el 16/10/2022 hasta el 18/04/2024 como desarrollador.",
            jobDescription2: "· Comenzamos nuestra trayectoria como un grupo de estudiantes, embarcándonos en proyectos pequeños peer to peer. Posteriormente, nos aventuramos en la creación de una aplicación tipo blog, en la cual los usuarios podían interactuar mediante comentarios en las publicaciones. En aquel entonces éramos un equipo de 12 personas, el cual se subdividió en grupos de 4 para abordar diferentes aspectos del desarrollo. Utilizamos tecnologías como NestJs para el backend, y Angular con Ionic para el frontend, llevando a cabo alrededor de 4 sprints antes de que comenzáramos a ser asignados a proyectos más amplios.",
            jobDescription3: "· Uno de los proyectos en los que participé fue el de Asistencia Jurídica Gratuita. Este proyecto se desarrolló utilizando SpringBoot, además de hacer uso de HTML y PLSQL, entre otras tecnologías. En este caso, éramos un equipo de tan solo dos compañeros, siendo mi compañero un profesional senior con años de experiencia en la aplicación. Nuestro trabajo implicaba reuniones periódicas, la elaboración de documentación detallada, y tuve el privilegio de participar en la implementación de dos actualizaciones significativas durante el tiempo que estuve involucrado en el proyecto.",

            bioTitle: "Biografía",
            // Otras secciones...
            educationTitle: "Educación",
            educationSubtitle: "Desarrollo Aplicaciones Multiplataforma",
            educationSchool: "IES Joan d' Austria",
            educationDates: "Fecha: 20/09/2021 => 20/06/2023",
            educationTechnologiesTitle: "Tecnologías y lenguajes con las que he trabajado:",
            educationTechnologies: [
                "· Java",
                "· SpringBoot",
                "· Python",
                "· Kubernetes",
                "· Android Studio",
                "· HTML",
                "· SQL/PLSQL",
                "· MongoDB"
            ],

            contactTitle: "Contacto"
        },
        en: {
            bioTitle: "Biography",
            bioParagraph1: "Dear development teams,",
            bioParagraph2: "I address you with enthusiasm and determination to introduce myself as a passionate programming and software development enthusiast. My name is Daniel Requena, I am 27 years old, and since the age of 6, I have been exploring the vast world of technology, diving into the magic of computers. However, it was approximately 5 years ago when I discovered my true passion for programming and software development.",
            bioParagraph3: "Despite being self-taught during my early stages, three years ago I had the opportunity to formalize my studies in this field. I cannot say that the path was easy; I faced challenges and obstacles that demanded perseverance. But with dedication and determination, I managed to overcome every difficulty and achieve my goals.",
            bioParagraph4: "As for my work experience and current projects, I explain them below",
            bioParagraph5: "I sincerely appreciate the opportunity to share my passion and experience with your team. I am confident that my dedication and skills would be a valuable asset to any software development company looking to drive innovation and reach new levels of excellence.",
            bioParagraph6: "I am at your disposal for any additional questions or inquiries, and I look forward to the possibility of collaborating together on future projects.",
            bioSignature: "Sincerely, Daniel Requena",

            projectsTitle: "Projects",
            project1Title: "CarSell",
            project1Description: "FullStack project in Flutter for web at the moment, using NestJs for Back.",
            project1Functions: "This app allows:",
            project1Link: "View Project",
            project1FunctionsList: [
                "Register/create user",
                "Login with token",
                "Create advertisement",
                "View own advertisement",
                "Filter search",
                "Delete/Edit advertisement"
            ],

            projectBookTitle: "LaBibliotecaDeCoper",
            projectBookDescription: "FullStack project in React for mobile, using SpringBoot for Back.",
            projectBookFunctions: "This app allows:",
            projectBookLinkServer: "View Server Project",
            projectBookLinkClient: "View Client Project",
            projectBookFunctionsList: [
                "*Read books in PDF, categorized on the client side",
                "ON SERVER",
                "*Create book",
                "*Edit book",
                "*Delete book"
            ],

            experienceTitle: "Work Experience",
            jobTitle: "Software Developer at Inetum",
            jobDescription1: "I worked at Inetum from 10/16/2022 to 18/04/2024 as a developer.",
            jobDescription2: "· We started our journey as a group of students, embarking on small peer-to-peer projects. Later, we ventured into creating a blog-type application where users could interact through comments on posts. At that time, we were a team of 12 people, which was divided into groups of 4 to address different aspects of development. We used technologies such as NestJs for the backend and Angular with Ionic for the frontend, carrying out about 4 sprints before we began to be assigned to larger projects.",
            jobDescription3: "· One of the projects I participated in was Free Legal Assistance. This project was developed using SpringBoot, along with HTML and PLSQL, among other technologies. In this case, we were a team of only two colleagues, with my colleague being a senior professional with years of experience in the application. Our work involved periodic meetings, the preparation of detailed documentation, and I had the privilege of participating in the implementation of two major updates during the time I was involved in the project.",

            bioTitle: "Biography",
            // Otras secciones...
            educationTitle: "Education",
            educationSubtitle: "Multiplatform Application Development",
            educationSchool: "IES Joan d' Austria",
            educationDates: "Date: 09/20/2021 => 06/20/2023",
            educationTechnologiesTitle: "Technologies and languages I worked with:",
            educationTechnologies: [
                "· Java",
                "· SpringBoot",
                "· Python",
                "· Kubernetes",
                "· Android Studio",
                "· HTML",
                "· SQL/PLSQL",
                "· MongoDB"
            ],

            contactTitle: "Contact"
        }
    };

    let currentLanguage = 'es';
    const toggleLanguageButton = document.querySelector('#toggle-language');

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';

        if (contactSection){
            contactSection.querySelector('h2').textContent = texts[currentLanguage].contactTitle;
        }

        // Cambiar contenido de LaBibliotecaDeCoper si existe
        if (projectBookSection) {
            const projectBookTitle = projectBookSection.querySelector('h3');
            const projectBookDescription = projectBookSection.querySelector('.project-book-description');
            const projectBookFunctions = projectBookSection.querySelector('.project-book-functions');
            const projectBookLinkServer = projectBookSection.querySelector('.project-book-link-server');
            const projectBookLinkClient = projectBookSection.querySelector('.project-book-link-client');

            if (projectBookTitle) {
                projectBookTitle.textContent = texts[currentLanguage].projectBookTitle;
            }
            if (projectBookDescription) {
                projectBookDescription.textContent = texts[currentLanguage].projectBookDescription;
            }
            if (projectBookFunctions) {
                projectBookFunctions.textContent = texts[currentLanguage].projectBookFunctions;
            }
            if (projectBookLinkServer) {
                projectBookLinkServer.textContent = texts[currentLanguage].projectBookLinkServer;
            }
            if (projectBookLinkClient) {
                projectBookLinkClient.textContent = texts[currentLanguage].projectBookLinkClient;
            }

            const projectBookFunctionsList = projectBookSection.querySelectorAll('#app-functions-list-book ul li');
            texts[currentLanguage].projectBookFunctionsList.forEach((text, index) => {
                if (projectBookFunctionsList[index]) {
                    projectBookFunctionsList[index].textContent = text;
                }
            });
        }

        if (experienceSection) {
            // Traducir títulos y descripciones
            experienceSection.querySelector('h2').textContent = texts[currentLanguage].experienceTitle;
            experienceSection.querySelector('h3').textContent = texts[currentLanguage].jobTitle;
            
            const jobParagraphs = experienceSection.querySelectorAll('p');
            
            if (jobParagraphs.length >= 3) {
                jobParagraphs[0].textContent = texts[currentLanguage].jobDescription1;
                jobParagraphs[1].textContent = texts[currentLanguage].jobDescription2;
                jobParagraphs[2].textContent = texts[currentLanguage].jobDescription3;
            } else {
                console.error("No se encontraron suficientes párrafos en la sección de experiencia laboral.");
            }
        }

        if (educationSection) {
            educationSection.querySelector('h2').textContent = texts[currentLanguage].educationTitle;
            educationSection.querySelector('h3').textContent = texts[currentLanguage].educationSubtitle;
            educationSection.querySelector('p:nth-child(3)').textContent = texts[currentLanguage].educationSchool;
            educationSection.querySelector('p:nth-child(4)').textContent = texts[currentLanguage].educationDates;
            educationSection.querySelector('p:nth-child(5)').textContent = texts[currentLanguage].educationTechnologiesTitle;
            
            // Actualizar lista de tecnologías
            const techList = educationSection.querySelectorAll('.education-div p:nth-child(n+6)');
            texts[currentLanguage].educationTechnologies.forEach((text, index) => {
                if (techList[index]) {
                    techList[index].textContent = text;
                }
            });
        }

        // Biografía si existe
        if (bioSection) {
            bioSection.querySelector('h2').textContent = texts[currentLanguage].bioTitle;
            bioSection.querySelector('p:nth-child(2)').textContent = texts[currentLanguage].bioParagraph1;
            bioSection.querySelector('p:nth-child(4)').textContent = texts[currentLanguage].bioParagraph2;
            bioSection.querySelector('p:nth-child(5)').textContent = texts[currentLanguage].bioParagraph3;
            bioSection.querySelector('p:nth-child(6)').textContent = texts[currentLanguage].bioParagraph4;
            bioSection.querySelector('p:nth-child(7)').textContent = texts[currentLanguage].bioParagraph5;
            bioSection.querySelector('p:nth-child(8)').textContent = texts[currentLanguage].bioParagraph6;
            bioSection.querySelector('p:nth-child(9)').textContent = texts[currentLanguage].bioSignature;
        }

        // Proyectos si existe
        if (projectsSection) {
            projectsSection.querySelector('h2').textContent = texts[currentLanguage].projectsTitle;
        }

        // Proyecto 1 si existe
        if (project1Section) {
            project1Section.querySelector('h3').textContent = texts[currentLanguage].project1Title;
            project1Section.querySelector('p:nth-child(2)').textContent = texts[currentLanguage].project1Description;
            project1Section.querySelector('p:nth-child(3)').textContent = texts[currentLanguage].project1Functions;
            project1Section.querySelector('p:nth-child(6) a').textContent = texts[currentLanguage].project1Link;

            const project1FunctionsList = project1Section.querySelectorAll('#app-functions-list ul li');
            texts[currentLanguage].project1FunctionsList.forEach((text, index) => {
                if (project1FunctionsList[index]) {
                    project1FunctionsList[index].textContent = text;
                }
            });
        }

        toggleLanguageButton.textContent = currentLanguage === 'en' ? "Change to Spanish" : "Cambiar a inglés";
    }

toggleLanguageButton.addEventListener('click', toggleLanguage);
});

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
