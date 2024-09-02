import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import getProjectImages from './components/portfolio/getProjectImages';
import getProfileImage from './components/profile/getProfileImage';
import { CgScreenShot } from 'react-icons/cg';

import projects_ENG from './projects_ENG'
import projects_FR from './projects_FR'
// Translation files
const Info ={
    username:"Nizar Belaatik",
    Website:"Website",
    Phone:'+212-65034-1124',
    Email:'belaatiknizar@gmail.com',
    Address:'Casablanca, Morocco',
    Linkedin:"https://www.linkedin.com/in/nizar-belaatik/",
    Facebook:"https://web.facebook.com/belaatik.nizar/",
    Twitter:"https://x.com/NBelaatik",
    Instagram:"https://www.instagram.com/belaatik_nizar/",
    ProfileImage:getProfileImage(),}

    

const resources = {
  en: {
    
    translation: {
        lang:"ENG",
        language:"en",
        Language:"English",
        Info:Info,
        
        projects:projects_ENG,
        Titles:{
          Proglang:"Programming Languages",
          front_end:"Front-End",
          back_end:"Back-End",
          tech:"Frameworks",
          techFra:"Other Technologies and Frameworks",
          database:"DATABASE",
          project:"Project",
          Search:"Search",
          All:"All",
          keyhigh:"Key Highlights",
        },

        Home:{
            Title:"Home",
            Title_before_span:"I'm a ",
            Title_span:"Software Developer",

            Title_after_span:"",
        },

        About:{
            Title:"About",
            About_me:{
                Title_1:"Learn more about me",
                Title_11:"Software Developer",
                Skills:"Skills",
                Birthday:"Birthday",
                Age:"Age",
                Website:"Website",
                Phone:"Phone",
                Email:"Email",
                Degree:"Degree",
                City:"City",
                Freelance:"Freelance",},
            
            Description1:"Hi, I’m Nizar Belaatik, a passionate and versatile software developer with expertise in both front-end and back-end technologies. I have a strong foundation in various programming languages and frameworks, and I excel at creating robust, efficient solutions that produce impactful results.",
            Description2:"My approach is centered around solving complex problems with clean, maintainable code and delivering user-centric solutions. I’m always eager to embrace new challenges and continuously expand my knowledge.",
            Description3:"Feel free to explore my portfolio to see examples of my work. If you have any questions or projects you'd like to discuss, don’t hesitate to reach out!",
            
            About_me_data:{
                Birthday:"20 March 2002",
                Age:"22",
                Website:"Website",
                Phone:Info.Phone,
                Email:Info.Email,
                Degree:"Bachelor degree",
                City:"Casablanca, Morocco",
                Freelance:"Available",},

            Skills:{
              Title_1:"Front-End",
              Title_2:"Back-End",
              Title_3:"Other Technologies and Frameworks",
              Title_4:"DATABASE",
            },
          },
            
        
        Resume:{
          Title:"Resume",
          Title_2:"Check My Resume",
          Education:{
            Title:"Education",

            DATA:[{
              Title1: 'Bachelor’s Degree in Computer Science',
              Date: '2020-2023',
              Title2: 'Faculty of Sciences Ben M’sik - Casablanca'
            },
            {
              Title1: 'High School Diploma in Mathematical Sciences',
              Date: '2020',
              Title2: 'Jaâfar Elfassi Elfihri High School - Casablanca'
            },],
          },
          Summary:{
            Title:"Summary",
            Sum:['Dynamic and results-driven Full Stack Developer with a proven track record in crafting scalable and high-performance web applications. Adept in both front-end and back-end technologies, I bring expertise in Python, Django, PHP, Laravel, and Java EE, complemented by a strong command of HTML, CSS, JavaScript, React.js, and jQuery. My experience extends to database management with SQL, MySQL, and NoSQL, and I excel at implementing automation solutions using Selenium and developing cross-platform applications with PyQt and PySide.',
              'I leverage data analysis tools like Pandas and NumPy to drive informed decision-making and am skilled in agile methodologies and version control with Git and GitHub. Passionate about delivering innovative solutions and eager to contribute to cutting-edge projects, I am committed to pushing the boundaries of technology and achieving impactful results.'
            ],
            KeyHigh:[
              'Proficient in multiple programming languages and frameworks.',
              'Experienced in building and maintaining dynamic web applications.',
              'Strong problem-solving skills with a focus on delivering high-quality solutions.',
              'Skilled in data analysis and automation with a proactive approach to technology.',
            ],

          },
          
          P_E:{
            Title:"Professional Experience",
            DATA: [
              { 
                Title1: 'Full-Stack Developer', // role
                Date: 'September 2023 - February 2024',
                Title2: 'Customer Relationship Management (CRM) System', // location
                About: [
                  'Design and development of the Customer Relationship Management (CRM) system for GLOBAL TECHNIQUE BATIMENT, including the design, development, and implementation of custom solutions to meet their specific needs.'
                ]
              },
              { 
                Title1: 'Full-Stack Developer', // role
                Date: 'February 2023 - June 2023',
                Title2: 'Educational Management System', // location
                About: [
                  'Web application for managing student life at FSBM.'
                ]
              }
            ]
          },
        },

        Portfolio:{
          Title:"Portfolio",
          
          Category:"Category",
          Project_date:"Project date",
          Client_Company:"Client/Company",
          Project_for:"Project for",
          platforme:"Platforme",

          AboutProject:"About the project",
          ProblemStatment:"Problem Statement",

          Role:"Role",
          RoleResp:"Role & Responsibilities",

          KeyFeatures:"Key Features",

          ChallSolu:"Challenges & Solutions",
          Outcome:"Outcome",
          Reflection:"Reflection",

          VisualsMedia:"Visuals & Media",
          ScreenShot:"ScreenShot",
          VideoDemo:"Video Demo",
          Diagrams:"Diagrams",

          ScreenShotDiag:"ScreenShot & Diagrams",
          

          

          Project_Description:"Project Description",
          Technology:"Technology",
          TechnologyUsed:"Technology USED",
          My_works:"My Works",
        },

        Contact:{
          Title:"Contact",
          ContactMe:"Contact Me",
          MyAddress:'My Address',
          SocialProfiles:'Social Profiles',
          EmailMe:'Email Me',
          CallMe:'Call Me',

          YouName:'You Name',
          YouEmail:'You Email',
          Subject:'Subject',
          Message:'Message',

          SendMessage:'Send Message',
          Loading:'Loading',
          sentMessage:'Your message has been sent. Thank you!',
          sentErrorMessage:"Failed to send your message. Please try again later.",
        },
    },
  },
  
  fr: {
    
    translation: {
        lang:"FR",
        language:"fr",
        Language:"Français",
        Info:Info,

        projects:projects_FR,
        Titles:{
          Proglang:"Langages de Programmation",
          front_end:"Front-End",
          back_end:"Back-End",
          tech:"Frameworks",
          techFra:"Autres Technologies et Frameworks",
          database:"BASE DE DONNÉES",
          project:"Projet",
          Search:"Recherche",
          All:"Tous",
          keyhigh:"Points Clés",
        },
        Home:{
            Title:"Accueil",
            Title_before_span:"Je suis un ",
            Title_span:"Développeur de Logiciels",
            Title_after_span:"",
        },

        About:{
            Title:"À propos",

            About_me:{
                Title_1:"En savoir plus sur moi",  
                Title_11:"Développeur de Logiciels",
                Birthday:"Anniversaire",
                Age:"Âge",
                Website:"Site Web",
                Phone:"Téléphone",
                Email:"Email",
                Degree:"Diplôme",
                City:"Ville",
                Freelance:"Freelance",},

            Description1:"Bonjour, je suis Nizar Belaatik, un développeur logiciel passionné et polyvalent avec une expertise en technologies front-end et back-end. J'ai une solide expérience dans divers langages de programmation et frameworks, et j'excelle dans la création de solutions robustes et efficaces qui produisent des résultats significatifs.",
            Description2:"Je me concentre sur la résolution de problèmes complexes avec un code propre et maintenable, tout en fournissant des solutions centrées sur l'utilisateur. Je suis toujours prêt à relever de nouveaux défis et à élargir continuellement mes connaissances.",
            Description3:"N'hésitez pas à explorer mon portfolio pour voir des exemples de mon travail. Si vous avez des questions ou des projets que vous souhaitez discuter, n'hésitez pas à me contacter !",

            About_me_data:{
                Birthday:"20 Mars 2002",
                Age:"22",
                Website:"Website",
                Phone:Info.Phone,
                Email:Info.Email,
                Degree:"Licence",
                City:"Casablanca, Maroc",
                Freelance:"Disponible",},
              Skills:{
                Title_1:"Front-End",
                Title_2:"Back-End",
                Title_3:"Autres technologies et Frameworks",
                Title_4:"Base de données",
              },
          },

        Resume:{
          Title:"CV",
          Title_2:"Vérifiez mon CV",
          Education:{
            Title:"Éducation",
            DATA:[{Title1:'Licence en Informatique',
              Date:'2020-2023',
              Title2:"Faculté des Sciences Ben M’sik - Casablanca",
            },
            {Title1:'Baccalauréat en Sciences Mathématiques',
              Date:'2020',
              Title2:"Lycée Jaâfar Elfassi Elfihri - Casablanca",
            },],
          },
          Summary:{
            Title:"Résumé",
            Sum: [
              "Développeur Full Stack dynamique et axé sur les résultats, avec un solide parcours dans la création d'applications web évolutives et performantes. Expert en technologies front-end et back-end, je maîtrise Python, Django, PHP, Laravel et Java EE, ainsi que HTML, CSS, JavaScript, React.js et jQuery. Mon expérience inclut également la gestion de bases de données avec SQL, MySQL et NoSQL. Je suis également compétent dans la mise en œuvre de solutions d'automatisation avec Selenium et le développement d'applications multiplateformes avec PyQt et PySide.",
              "J'utilise des outils d'analyse de données tels que Pandas et NumPy pour prendre des décisions éclairées, et je suis familiarisé avec les méthodologies agiles et le contrôle de version avec Git et GitHub. Passionné par la livraison de solutions innovantes et désireux de contribuer à des projets de pointe, je suis déterminé à repousser les limites de la technologie et à obtenir des résultats percutants."
            ],
            KeyHigh: [
                "Maîtrise de plusieurs langages de programmation et frameworks.",
                "Expérience dans la création et la maintenance d'applications web dynamiques.",
                "Compétences solides en résolution de problèmes avec un focus sur la livraison de solutions de haute qualité.",
                "Compétent en analyse de données et en automatisation avec une approche proactive de la technologie."
            ],

          },
          
          P_E:{
            Title:"Expérience professionnelle",
            DATA:[{ 
              Title1:'Full-stack Developer',//role
              Date:'September 2023 - February 2024',
              Title2:'Système de gestion de la relation client (CRM)',//location
              About:['Conception et développement du système de gestion de la relation client (CRM) pour GLOBAL TECHNIQUE BATIMENT, incluant la conception, le développement et la mise en œuvre de solutions personnalisées pour répondre à leurs besoins spécifiques.',],
            },
            { 
              Title1:'Full-stack Developer',//role
              Date:'Février 2023 - Juin 2023',
              Title2:'Système de Gestion Éducative',//location
              About:['Application web pour la gestion de la vie estudiantine des etudiants de la fsbm',],
            },
          ],

          
          },
        },



        Portfolio: {
          Title: "Portfolio",
          Category: "Catégorie",
          Project_date: "Date du Projet",
          Client_Company: "Client/Entreprise",

          Project_for:"Project pour",
          
          AboutProject:"À propos du projet",
          ProblemStatment:"Problématique",


          platforme: "Plateforme",
          Role: "Rôle",
          RoleResp: "Rôle & Responsabilités",
          KeyFeatures: "Fonctionnalités Clés",
          ChallSolu: "Défis & Solutions",
          Outcome: "Résultat",
          Reflection: "Réflexion",
          VisualsMedia: "Visuels & Médias",
          ScreenShot: "Capture d'écran",
          VideoDemo: "Démonstration Vidéo",
          Diagrams: "Diagrammes",
          ScreenShotDiag: "Captures d'écran & Diagrammes",
          Project_Description: "Description du Projet",
          Technology: "Technologie",
          TechnologyUsed: "Technologie UTILISÉE",
          My_works: "Mes Réalisations",//Mes oeuvres
        },
        
        Contact:{
          Title:"Contact",
          ContactMe:"Contactez-moi",
          MyAddress:'Mon adresse',
          SocialProfiles:'Profils sociaux',
          EmailMe:'Envoyez-moi un email',
          CallMe:'Appelez-moi',

          YouName:'Votre nom',
          YouEmail:'Votre email',
          Subject:'Objet',
          Message:'Message',

          SendMessage:'Envoyer le message',
          Loading:'Chargement',
          sentMessage:'Votre message a été envoyé. Merci !',
          sentErrorMessage:"Échec de l'envoi de votre message. Veuillez réessayer plus tard.",
}
    },
  },
};



i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  //lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;