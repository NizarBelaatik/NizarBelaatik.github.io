import getProjectImages from './components/portfolio/getProjectImages';



const projects_FR = [
    {
      id: "1",
      folderid:"1",
      projectType:"web",
      platforme:"Application Web",
      title: "Plateforme Intégrée de Gestion de Projet",
      image: getProjectImages('project1'),
      category: "ERP",
      date:"Septembre 2023 - Février 2024",
      client_for: "Freelance",
      role: "Développeur Full-Stack",
      description: "Une plateforme complète conçue pour centraliser les tâches de gestion de projet, y compris la collecte, le traitement et la vérification des données. La plateforme intègre la soumission de formulaires, la gestion des données, la communication en temps réel et le contrôle d'accès basé sur les rôles. De plus, elle comprend un serveur de sauvegarde pour garantir l'intégrité et la récupération des données.",
      github_link: "#",
      
      technology: ["Python","Django","RESTful API","HTML","CSS","JavaScript","Jquery","Bootstrap"],
      technology_used:{'front_end':["HTML","CSS","JavaScript","Jquery","Bootstrap"],
        'back_end':["Python","Django","RESTful API","JSON"],
        'database':['SQL',"Postgresql"],
        'techFra':null
      },
  
      RoleResp: [ 
        { Title_1: "Développement Front-end", 
          Data: [ 
            { Title: "Conception de l'Interface Utilisateur :", 
              Data: [ "Conception et mise en œuvre de l'interface utilisateur en utilisant HTML, CSS et JavaScript.", "Assuré un design réactif et intuitif en utilisant Bootstrap pour une expérience utilisateur fluide sur tous les appareils." 

              ] 
            }, 
            { Title: "Intégration des Formulaires :", 
              Data: [ "Développement de formulaires pour capturer divers types de données (texte, chiffres, images, signatures).", "Intégration de fonctionnalités automatisées de géolocalisation permettant aux utilisateurs de capturer leur emplacement en un clic." 

              ] }, 
            { Title: "Fonctionnalités de Communication :", 
              Data: [ "Implémentation de la fonctionnalité de chat en temps réel pour la communication entre les utilisateurs au sein de chaque projet." ] 
            }, 
            { Title: "Expérience Utilisateur (UX) :", 
              Data: [ "Assuré que la plateforme soit conviviale et visuellement cohérente.", 
                "Réalisation de tests d'utilisabilité pour affiner l'interface et améliorer les interactions des utilisateurs." 
              ] 
            }
          ]
        },
        { Title_1: "Développement Back-end", Data: [ { Title: "Logique Serveur :", Data: [ "Développement des fonctionnalités back-end en utilisant Django, y compris l'authentification des utilisateurs, le contrôle d'accès basé sur les rôles et le traitement des données.", "Implémentation d'API RESTful pour gérer la communication entre les systèmes frontend et backend." ] }, { Title: "Gestion de la Base de Données :", Data: [ "Conception et gestion du schéma de la base de données PostgreSQL pour stocker les informations des utilisateurs, les données des projets et les enregistrements de sauvegarde.", "Implémentation des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des données des projets et des utilisateurs.", "Création d'une structure de base de données robuste supportant toutes les fonctionnalités requises et garantissant l'intégrité des données." ] }, { Title: "Système de Sauvegarde :", Data: [ "Implémentation d'un système de sauvegarde local pour enregistrer automatiquement toutes les données chaque jour.", "Assurance que les processus de sauvegarde étaient fiables et que les données pouvaient être restaurées si nécessaire.", "Renforcement de la sécurité et de la fiabilité des données avec un processus de sauvegarde régulier, minimisant la perte de données." ] }, { Title: "Contrôle d'Accès Basé sur les Rôles :", Data: [ "Développement et gestion du contrôle d'accès basé sur les rôles pour restreindre et accorder l'accès à différentes parties de la plateforme en fonction des rôles des utilisateurs.", "Implémentation de contrôles d'accès efficaces pour protéger les informations sensibles et gérer les permissions des utilisateurs." ] } ] },
        { Title_1: "Contributions Supplémentaires", Data: [ { Title: "Intégration et Tests :", Data: [ "Intégration des composants frontend et backend pour assurer une fonctionnalité fluide.", "Réalisation de tests approfondis pour identifier et corriger les bugs, optimiser les performances et garantir la stabilité globale.", "Livraison d'une plateforme entièrement fonctionnelle avec un minimum de problèmes, répondant aux exigences du projet et aux attentes des utilisateurs." ] }, { Title: "Documentation :", Data: [ "Création d'une documentation complète pour les composants frontend et backend, y compris les instructions d'installation, les directives d'utilisation et les conseils de dépannage." ] }, { Title: "Collaboration et Communication :", Data: [ "Coordination avec les autres membres de l'équipe et les parties prenantes pour recueillir les exigences, fournir des mises à jour et intégrer les retours.", "Assurance que le projet répondait aux besoins de tous les utilisateurs grâce à une communication et une collaboration efficaces." ] } ] }

      ],

      KeyFeatures: [ 
        { Title_1: null, 
          Data: [ 
            { Title: "Authentification des Utilisateurs et Contrôle d'Accès Basé sur les Rôles :", 
              Data: [ "Inscription : L'accès à la plateforme est accordé uniquement aux utilisateurs enregistrés par un administrateur.", 
                "Contrôle d'Accès Basé sur les Rôles : Les utilisateurs peuvent uniquement voir ou interagir avec les parties de la plateforme pertinentes pour leurs rôles assignés." 
              ] 
            }, 
            { Title: "Collecte et Gestion des Données :", 
              Data: [ "Intégration des Formulaires : Les utilisateurs remplissent des formulaires avec des textes, des chiffres, des images et des signatures.", 
                "Formulaires Téléchargeables : Les formulaires peuvent être téléchargés au format XLSX pour un traitement hors ligne.", 
                "Gestion des Fichiers : Inclut une corbeille pour récupérer les fichiers supprimés par accident." 
              ] 
            }, 
            { Title: "Communication et Collaboration :", 
              Data: [ "Chat : Chaque projet/client inclut un chat pour la communication en temps réel.", 
                "Suivi des Statuts des Projets : Suivi et mise à jour des statuts des projets, y compris ajoutés, terminés, envoyés et modifiés." 
              ] 
            }, 
            { Title: "Rapports et Statistiques :", 
              Data: [ "Statistiques des Projets : Suivi et consultation des statistiques sur l'avancement et les statuts des projets.", 
                "Statistiques des Travailleurs : Les administrateurs peuvent consulter les indicateurs de performance pour les auditeurs, y compris le nombre de projets et les statuts sur différentes périodes." 
              ] 
            } 
          ] 
        } 
      ],


      ChallSolu: [ 
        { Title_1: null, 
          Data: [ 
            { Title: "Gestion Sécurisée des Accès :", 
              Data: [ "Défi : Assurer que seuls les utilisateurs autorisés peuvent accéder à la plateforme et à ses fonctionnalités.", 
                "Solution : Implémenter le système d'authentification intégré de Django et les permissions basées sur les rôles pour contrôler l'accès." 
              ] 
            }, 
            { Title: "Expérience Utilisateur :", 
              Data: [ "Défi : Équilibrer la fonctionnalité complexe avec une interface conviviale.", 
                "Solution : Utiliser Bootstrap et jQuery pour créer un design intuitif et réactif." 
              ] 
            }, 
            { Title: "Gestion et Récupération des Données :", 
              Data: [ "Défi : Gérer et récupérer les données de manière efficace.", 
                "Solution : Inclure une fonctionnalité de corbeille et des mécanismes de gestion des erreurs robustes." 
              ] 
            } 
          ] 
        } 
      ],

      Reflection: [ 
        { Title_1: "Ce Que Vous Avez Appris", 
          Data: [ 
            { Title: "Contrôle d'Accès Basé sur les Rôles :", 
              Data: ["Acquisition d'une expérience pratique dans la mise en œuvre d'un contrôle d'accès sécurisé basé sur les rôles, garantissant que les utilisateurs n'ont accès qu'aux données et fonctionnalités pertinentes."] 
            }, 
            { Title: "Intégrité et Sauvegarde des Données :", 
              Data: ["Compréhension de l'importance des sauvegardes régulières des données et des processus de récupération pour prévenir la perte de données et assurer la continuité des affaires." ]
            }, 
            { Title: "Intégration du Frontend et du Backend :", 
              Data: ["Amélioration des compétences en intégration des technologies frontend et backend, garantissant un flux de données fluide et une interaction utilisateur cohérente."] 
            }, 
            { Title: "Authentification des Utilisateurs :", 
              Data: ["Amélioration de la compréhension des méthodes d'authentification sécurisée et de la gestion des utilisateurs dans les applications web." ]
            } 
          ] ,
          Data:[
            {Title:"Contrôle d'Accès Basé sur les Rôles: Acquisition d'une expérience pratique dans la mise en œuvre d'un contrôle d'accès sécurisé basé sur les rôles, garantissant que les utilisateurs n'ont accès qu'aux données et fonctionnalités pertinentes.",
              Data:null,
            },
            {Title:"Intégrité et Sauvegarde des Données: Compréhension de l'importance des sauvegardes régulières des données et des processus de récupération pour prévenir la perte de données et assurer la continuité des affaires.",
              Data:null,
            },
            {Title:"Intégration du Frontend et du Backend: Amélioration des compétences en intégration des technologies frontend et backend, garantissant un flux de données fluide et une interaction utilisateur cohérente.",
              Data:null,
            },
            {Title:"Authentification des Utilisateurs: Amélioration de la compréhension des méthodes d'authentification sécurisée et de la gestion des utilisateurs dans les applications web.",
              Data:null,
            },
              
             
        ],
        }, 
        { Title_1: "Améliorations", 
          Data: [ 
            { Title: "Interface Utilisateur Améliorée :", 
              Data: [ "Amélioration : Raffiner continuellement l'interface utilisateur pour une expérience plus intuitive basée sur les retours des utilisateurs.", 
                "Plan : Réaliser des tests utilisateurs et mettre en œuvre des améliorations de design." 
              ] 
            }, 
            { Title: "Analytique Avancée :", 
              Data: [ "Amélioration : Étendre les fonctionnalités de reporting et d'analytique pour fournir des insights plus détaillés sur les performances des projets et des travailleurs.", 
                "Plan : Intégrer des outils avancés de visualisation des données et des fonctionnalités de reporting." 
              ] 
            }, 
            { Title: "Scalabilité :", 
              Data: [ "Amélioration : Améliorer la scalabilité de la plateforme pour gérer une charge d'utilisateurs et un volume de données accrus.", 
                "Plan : Optimiser les processus backend et envisager des solutions basées sur le cloud pour la scalabilité." 
              ] 
            }, 
            { Title: "Améliorations de la Sauvegarde Automatisée :",
              Data: [ "Amélioration : Renforcer le système de sauvegarde pour inclure des options de stockage en cloud et des intervalles de sauvegarde plus fréquents.", 
                "Plan : Mettre en œuvre des sauvegardes incrémentielles et explorer des solutions de sauvegarde hybrides." 
              ] 
            } 
          ] 
        } 
      ],

  
      VisualsMedia:{
        ScreenShot:[
          {ImInTitle:"Tableau de Bord",
            ImInData:[
              { 
                image:['1.png'],
                info:["Le tableau de bord offre un aperçu des activités récentes et des états des projets. Il affiche des statistiques clés telles que le nombre de projets ajoutés (ajouté), terminés (fini), envoyés (envoyé), et modifiés (modification faite)."]
              },
            ]
          },
          {ImInTitle:"Tableau de Projets avec Chatbox et Boîte de Fichiers",
            ImInData:[
              { 
                image:['2.png'],
                info:["Cet écran affiche un tableau des projets organisés par leur état actuel. Chaque entrée de projet inclut une chatbox pour la communication et une boîte de fichiers pour gérer les documents du projet."]
              },
            ]
          },
          {ImInTitle:"Vue d’Ensemble des Auditeurs",
            ImInData:[
              { 
                image:['3.png'],
                info:["Un écran de vue d'ensemble axé sur la performance et l'activité des auditeurs. Il affiche des statistiques relatives aux projets sur lesquels ils ont travaillé pendant diverses périodes."]
              },
            ]
          },
          {ImInTitle:"Projets par État et Activité des Auditeurs",
            ImInData:[
              { 
                image:['track1.png'],
                info:["Cet écran offre une vue détaillée des projets organisés par leur état, tels que fini, envoyé, et modification faite. Il inclut des statistiques sur combien de projets dans chaque état ont été traités par un auditeur spécifique (par exemple, Auditeur X) sur diverses périodes de temps."]
              },
            ]
          },
          {ImInTitle:"Vue d’Activité de l’Auditeur X",
            ImInData:[
              { 
                image:['track2.png'],
                info:["Un aperçu des activités individuelles de l’auditeur X, montrant des statistiques détaillées sur les projets sur lesquels il a travaillé au cours de diverses périodes."]
              },
            ]
          },
          {ImInTitle:"Vue d’Ensemble du Visiteur Technique",
            ImInData:[
              { 
                image:['vt1.png'],
                info:["Un écran de vue d’ensemble montrant l’activité et les contributions du Visiteur Technique, y compris les projets dans lesquels il est impliqué et ses soumissions de données."]
              },
            ]
          },

          {ImInTitle:"Formulaire pour le Visiteur Technique",
            ImInData:[
              { 
                image:['vt2.png'],
                info:["Le formulaire que le Visiteur Technique doit remplir lorsqu'il collecte et soumet les données du projet. Il comprend des champs pour le texte, les chiffres, les images, les signatures, et la géolocalisation automatisée."]
              },
            ]
          },
          
        ],
        Diagrams:null,

        VideoDemo:null
      },
    },

    {
      id: '2',
      folderid:'2',
      projectType:'web',
      platforme:"Application Web : Le système est une plateforme basée sur le web accessible via des navigateurs web modernes. Cela permet aux étudiants, aux administrateurs et au personnel responsable d'interagir avec le système depuis n'importe quel appareil connecté à Internet.",
      title: "Système de Gestion de la Vie Étudiante",
      image: getProjectImages('project2'),
      category: "Système de Gestion Éducative : Cette application relève de la catégorie des systèmes de gestion éducative, se concentrant sur l'amélioration de l'efficacité administrative et des services aux étudiants. Elle prend en charge des fonctionnalités telles que la gestion des horaires, la gestion des documents, et la communication au sein d'une institution académique.",
      date:"Février 2023 - Juin 2023",
      project_for:"Faculté des Sciences Ben M'Sik",
      client_for:'',
      role: "Développeur Full-Stack",
      description: "Le Système de Gestion de la Vie Étudiante est une application web conçue pour rationaliser les interactions des étudiants avec leur institution académique. Elle facilite la gestion de divers aspects tels que la planification, les demandes de documents et les tâches administratives. Le système vise à améliorer l'expérience des étudiants en fournissant une plateforme conviviale pour accéder et gérer les services académiques et administratifs.",
      github_link: "#",
      
      technology: ["JAVA","JEE","HTML","CSS","JavaScript"],
      technology_used:{'front_end':["HTML","CSS","JavaScript"],
        'back_end':["JAVA","JEE"],
        'database':['SQL',"MySql"],
        'techFra':null,
        'tech':['Apache','XAMPP'],
      },
      details: "",
    
      AboutProject:[{
        Title_1:null,
        Data_without_Style:true,
        
        Data:[
          {
            Title:null,
            Title2:"Ce projet consiste à créer une application web pour la Faculté des Sciences BEN M’SIK afin de faciliter l'accès aux documents administratifs pour les étudiants. L'application vise à résoudre les retards dans la récupération des documents, qui peuvent perturber le parcours académique. Elle offre une solution rapide pour que les étudiants puissent demander et télécharger des documents essentiels comme les relevés de notes, les certificats d'inscription et les attestations de réussite en un seul clic.",
            Data:null
          },
          {
            Title:null,
            Title2:"L'application se compose de deux zones principales :",
            Data:["Tableau de bord de l'administrateur : Gère les mises à jour des documents, les dossiers des étudiants, et la planification.",
              "Portail des étudiants : Permet aux étudiants de demander, télécharger des documents, et consulter leurs horaires."
            ]
          },
          {
            Title:null,
            Title2:"L'interface conviviale est conçue pour améliorer l'efficacité administrative et faciliter la gestion académique des étudiants.",
            Data:null
          },

        ],
      },],
      ProblemStatment:[{
        Title_1:null,
        Data_without_Style:true,
        Data:[
          {
            Title:null,
            Title2:"Le principal défi abordé par cette application est la nécessité d'une fonctionnalité de signature numérique permettant aux étudiants de télécharger des documents administratifs de manière rapide et flexible. L'application vise également à améliorer l'efficacité de la gestion des horaires, des demandes de documents, et des tâches administratives.",
            Data:null
          }

        ],
      }],

      RoleResp:[
        {
          Title_1:"Développeur Full-Stack",
          Data:[
            {Title:'Développement Front-End',
              Data:[
                "Conception et mise en œuvre de l'interface utilisateur en utilisant HTML, CSS, et JavaScript pour garantir une expérience utilisateur fluide et engageante.",
                "Développement d'éléments interactifs et assurance de la compatibilité entre navigateurs.",
                "Création de conceptions réactives pour garantir l'utilisabilité sur divers appareils et tailles d'écran.",
              ]
            },
            {Title:'Développement Back-End',
              Data:["Développement de la logique côté serveur en utilisant Java JEE, y compris la mise en œuvre d'APIs RESTful pour gérer les requêtes clients et le traitement des données.",
                "Gestion de l'authentification des utilisateurs, de la gestion des sessions, et de la sécurité des données.",
                "Intégration de l'application avec la base de données MySQL, mise en œuvre des opérations CRUD et optimisation des requêtes de la base de données pour la performance."
              ]
            },
            {Title:'Gestion de la Base de Données',
              Data:[
                "Conception du schéma de base de données et des relations pour soutenir les fonctionnalités de l'application.",
                "Assurance de la cohérence et de l'intégrité des données grâce à une conception et un indexation soigneuses.",
                "Développement de requêtes SQL pour une récupération des données et un reporting efficaces.",
              ]
            },
            {Title:'Collaboration',
              Data:[
                "Travail en étroite collaboration avec les membres de l'équipe pour définir les exigences, concevoir des solutions, et mettre en œuvre des fonctionnalités.",
                "Participation aux revues de code et fourniture de retours pour garantir la qualité du code et le respect des meilleures pratiques.",
              ]
            }
          ],
        },
      ],
      KeyFeatures:[{
        Title_1:'Pour les Étudiants',
        Data:[
          {Title:'Consulter les Horaires',
            Data:["Horaires des cours (Cours magistraux, TD, TP)",
              "Horaires des examens (Réguliers et reprogrammés)"
            ] 
          },
          {Title:'Demander des Documents',
            Data:["Demandes de diplômes",
              "Retrait du dossier permanent",
              "Retrait temporaire du dossier"
            ] 
          },
          {Title:'Télécharger des Documents',
            Data:["Certificat d'inscription",
              "Relevé de notes"
            ] 
          },
          {Title:'Consulter les Événements et Nouvelles',
            Data:["Nouvelles opportunités de bourses",
              "Mises à jour récentes"] 
          },
          {Title:'Accéder au Chat de Groupe',
            Data:["Interagir avec des pairs et des administrateurs"] 
          },

        ],
      },
      {
        Title_1:'Pour les Administrateurs',
        Data:[
          {Title:'Gérer les Demandes de Documents',
            Data:['Approuver ou rejeter les demandes'] 
          },
          {Title:'Gérer les Horaires',
            Data:['Ajouter, mettre à jour ou supprimer des horaires'] 
          },
          {Title:'Gérer les Étudiants',
            Data:['Ajouter, mettre à jour ou supprimer des dossiers étudiants'] 
          },

        ],
      },
      {
        Title_1:'Pour les Responsables',
        Data:[
          {Title:'Gestion de la Base de Données',
            Data:['Peupler et maintenir la base de données'] 
          },

        ],
      },],
    
      ChallSolu:[{
          Title_1:null,
          Data:[{
            Title:'Mise en œuvre de la Signature Numérique',
            Data:["Défi : Intégrer une fonctionnalité de signature numérique pour la validation des documents et des téléchargements sécurisés.",
              "Solution : Mise en place d'un mécanisme de signature numérique sécurisé et assurance de la compatibilité avec divers formats de documents."
            ]
          },{
            Title:'Gestion des Données',
            Data:["Défi : Gérer efficacement et synchroniser de grandes quantités de données d'étudiants et d'horaires.",
              "Solution : Optimisation du schéma de la base de données et utilisation de l'indexation pour améliorer la performance de la récupération des données."
            ]
          },],
          
        },
      ],

      Reflection:[{
        Title_1:null,
        Data:[
          {
            Title:'Croissance Personnelle:',
            Title2:"Travailler sur ce projet m'a offert des opportunités significatives de croissance tant en développement front-end qu'en back-end. J'ai acquis une expérience pratique avec Java JEE et amélioré ma capacité à intégrer efficacement les composants front-end et back-end. Le défi de mettre en œuvre une fonctionnalité de signature numérique m'a poussé à approfondir ma compréhension des pratiques de sécurité et de la gestion des données.",
            Data:null,
          },
          {
            Title:'Défis Rencontrés:',
            Title2:"L'un des principaux défis était l'intégration de la fonctionnalité de signature numérique, ce qui nécessitait une considération attentive de la sécurité et de la compatibilité. De plus, assurer la réactivité de l'application sur différents appareils a exigé une attention minutieuse aux détails lors de la phase de développement front-end.",
            Data:null,
          },
          {
            Title:"Leçons Apprises:",
            Data:["Intégration Full-Stack : J'ai acquis des connaissances précieuses sur la façon dont les composants front-end et back-end interagissent et l'importance d'une intégration fluide pour une expérience utilisateur cohérente.",
              "Pratiques de Sécurité : J'ai approfondi ma compréhension des mesures de sécurité, en particulier dans la gestion des données sensibles et la mise en œuvre de signatures numériques.",
              "Collaboration et Communication : J'ai amélioré ma capacité à travailler en collaboration avec les membres de l'équipe, à communiquer efficacement et à gérer les exigences du projet et les délais."
            ]
          },

          {
            Title:"Impact:",
            Title2:"Le projet a réussi à rationaliser les interactions des étudiants avec les services académiques, fournissant une plateforme plus efficace et conviviale. L'expérience m'a préparé pour de futurs rôles en développement full-stack et a renforcé mes compétences en résolution de problèmes tant en développement front-end qu'en back-end.",
            Data:null,
          },
          
        ],
      },],

      
    
      VisualsMedia:{
        ScreenShot:[
          {
            ImInTitle:"Étudiant",
            ImInData:[{ 
                image:['1.jpg'],
                info:['Page des actualités et des événements.']
              },
              { 
                image:['2.jpg'],
                info:['Page de demande de document.']
              },
              { 
                image:['3.jpg'],
                info:['Page de téléchargement de document.']
              },
              { 
                image:['4.jpg'],
                info:['Page pour changer le mot de passe']
              },
              { 
                image:['5.jpg'],
                info:['Page pour modifier les informations personnelles']
              },
              { 
                image:['chat.jpg'],
                info:['Page pour groupe Chat']
              }]
          },

          {
            ImInTitle:"Administrateur",
            ImInData:[{ 
                image:['admin1.jpg'],
                info:["Page d'ajout, de suppression et de modification des actualités et des évènements."]
              },
              { 
                image:['admin2.jpg'],
                info:["Page pour accepter ou rejeter les demandes."]
              },
              { 
                image:['admin3.jpg'],
                info:["d'ajout, de suppression et de modification d'un étudiant."]
              },
              { 
                image:['admin4.jpg'],
                info:["Page d'ajout et de mise à jour d'un emploi de temps."]
              },]
          }

          
          
        ],
        Diagrams:[
          {ImInTitle:"Diagrammes de cas d'utilisation",
            ImInData:[{ 
              image:['actA.jpg'],
              info:["Administrateur"]
            },
            { 
              image:['actE.jpg'],
              info:["Étudiant"]
            },]},

          {ImInTitle:"Digrammes de séquence",
            ImInData:[{ 
              image:['Diagram (2).jpg','Diagram (3).jpg','Diagram (4).jpg','Diagram (5).jpg','Diagram (6).jpg','Diagram (7).jpg'],
              info:['']
            }]},
          {ImInTitle:"Diagramme de classe globale",
            ImInData:[{ 
              image:['Diagram (1).jpg'],
              info:['']
            }]}
        ],
        VideoDemo:null,
        
      },
    
    },

    {
      id: "3",
      folderid: "3",
      projectType: "web",
      platforme: "Application web, accessible sur les navigateurs de bureau et mobiles.",
      title: "Application de Chat en Temps Réel",
      image: getProjectImages('project3'),
      category: "",
      date: "Juin 2024",
      client_for: "Freelance",
      role: "Développeur Full-Stack",
      description: "L'application de chat en temps réel est une plateforme web qui permet aux utilisateurs de participer à des discussions en solo ou en groupe en temps réel. Les utilisateurs peuvent envoyer des messages texte, des images et des fichiers, ce qui en fait une solution idéale pour des conversations informelles comme pour une collaboration professionnelle.",
      github_link: "#",
      
      technology: ["Python", "Django","RESTful API", "HTML", "CSS", "JavaScript", "Jquery", "Bootstrap"],
      technology_used: {
        'front_end': ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap"],
        'back_end': ["Python", "Django", "RESTful API", "JSON"],
        'database': ['SQL', "Postgresql"],
        'techFra': ['Git']
      },
      details: "",
      
      RoleResp: [{
        Title_1: 'Développeur Full-Stack',
        Title_2: null,
        Data: [
          {
            Title: 'Développement Back-end',
            Data: [
              "Conception et mise en œuvre du schéma de base de données pour le stockage",
              "Implémentation de la fonctionnalité de chat en temps réel en utilisant Django Channels"
            ]
          },
          {
            Title: 'Développement Front-end',
            Data: [
              "Création de composants UI réactifs en utilisant Bootstrap et CSS personnalisé",
              "Intégration des appels AJAX pour des mises à jour de données en temps réel et des fonctionnalités interactives"
            ]
          }
        ],
      }],
      
      KeyFeatures: [{
        Title_1: null,
        Data: [
          {
            Title: 'Chat Individuel & de Groupe',
            Data: ['Les utilisateurs peuvent initier des conversations en tête-à-tête ou créer/rejoindre des chats de groupe avec plusieurs participants.']
          },
          {
            Title: 'Messagerie en Temps Réel',
            Data: ['Les messages sont livrés instantanément grâce aux connexions WebSocket, garantissant une communication fluide en temps réel.']
          },
          {
            Title: 'Support Multimédia',
            Data: ['Les utilisateurs peuvent envoyer des messages texte, des images et des fichiers (par exemple, PDFs, DOCs) avec des aperçus pour les images.']
          },
          {
            Title: 'Authentification des Utilisateurs',
            Data: ['Connexion sécurisée des utilisateurs avec le système d’authentification de Django, y compris la réinitialisation de mot de passe et la gestion des profils.']
          },
          {
            Title: 'Historique des Messages',
            Data: ['Toutes les conversations sont stockées dans la base de données, permettant aux utilisateurs de consulter l’historique des chats à tout moment.']
          },
          {
            Title: 'Notifications',
            Data: ['Notifications en temps réel pour les nouveaux messages, même lorsque l’utilisateur n’est pas sur la page de chat.']
          },
          {
            Title: 'Design Réactif',
            Data: ['L’application est entièrement réactive, offrant une expérience fluide sur tous les appareils.']
          },
        ],
      }],
      
      Deployment: {
        Title_1: null,
        Data: [
          {
            Title: 'Communication en Temps Réel',
            Data: ['Gestion de la communication en temps réel utilisant les connexions WebSocket tout en assurant performance et fiabilité, surtout dans les chats de groupe.']
          },
          {
            Title: 'Gestion des Fichiers',
            Data: ['Assuré des téléchargements et des téléchargements de fichiers sécurisés et efficaces, y compris le support pour les grands fichiers et les aperçus d’images.']
          },
          {
            Title: 'Scalabilité',
            Data: ['Optimisation de l’application pour gérer des centaines d’utilisateurs simultanés et plusieurs chats de groupe actifs sans ralentissement.']
          },
        ],
      },
      
      ChallSolu: null,
      
      VisualsMedia: {
        ScreenShot: [
          {
            ImInTitle: null,
            ImInData: [{
              image: ['real_time_chat.png'],
              info: ['Interaction de Chat en Temps Réel : Utilisateur A et Utilisateur B Messagerie']
            }]
          }
        ],
        Diagrams: null,
        VideoDemo: [{
          video: ['realtimechatVid.mkv'],
          info: ['Démonstration de Chat en Direct : Messagerie en Temps Réel et Partage de Médias entre Utilisateurs']
        }]
      },
    },


    {
      id: "4",
      folderid:"4",
      projectType:"desk",
      platforme:"Application de bureau, compatible avec Windows, macOS et Linux.",
      title: "Points de Chaîne Twitch TTS (Texte-à-Parole)",
      image: getProjectImages('project4'),
      category: "Développement de Logiciels",
      date:"mai 2020 - Juin 2020",
      client_for: "Freelance",
      role: "Développeur Logiciel",
      description: "Développement d'une application TTS (Texte-à-Parole) pour les points de chaîne Twitch, permettant aux streamers de convertir les messages échangés contre des points de chaîne en parole. Cela améliore l'interaction avec le public en donnant une voix aux spectateurs pendant les diffusions en direct.",
      github_link: "#",
      
      technology: ['Python','PyQt5','Selenium'],
      technology_used:{'Proglang':['Python','PyQt5'],
        'database':null,
        'frameworks':['PySide2','Selenium'],
        'Packaging':['PyInstaller'],
        'techFra':['Qt Designer','Git','Github']
      },
      details: "",
  
      RoleResp:[{
        Title_1:'',
        Title_2:null,
        Data:[{
            Title:'Conception et développement de l\'application entière, depuis le concept initial jusqu’au déploiement final.',
            Data:null 
          },
          {
            Title:'Mise en œuvre et test de la fonctionnalité TTS en utilisant PySide2.QtTextToSpeech.',
            Data:null 
          },
          {
            Title:'Intégration de Selenium pour la surveillance en temps réel des échanges de points de chaîne.',
            Data:null 
          },
          {
            Title:'Développement des fonctionnalités de filtrage des mots et d’ajustement de la vitesse.',
            Data:null 
          },
          {
            Title:'Emballage de l’application pour une distribution multiplateforme en utilisant PyInstaller.',
            Data:null 
          },
        ]
      }],
  
      KeyFeatures:[{
        Title_1:null,
        Data:[
          {Title:'Intégration Texte-à-Parole:',
            Data:['Convertit les messages des spectateurs échangés avec des points de chaîne en parole en utilisant le module PySide2.QtTextToSpeech.'] 
          },
          {Title:'Intégration des Points de Chaîne Twitch:',
            Data:['Détecte automatiquement les échanges de points de chaîne et déclenche la fonction TTS.'] 
          },
          {Title:'Filtre de Mots:',
            Data:['Inclut un filtre personnalisable pour bloquer les mots inappropriés ou indésirables.'] 
          },
          {Title:'Vitesse TTS Ajustable:',
            Data:['Permet aux streamers de contrôler la vitesse de la parole, offrant une expérience plus personnalisée aux spectateurs.'] 
          },
          {Title

:'Voix Personnalisables:',
            Data:['Les streamers peuvent sélectionner différentes voix et ajuster la vitesse et le ton de la parole.'] 
          },
          {Title:'Support Multiplateforme:',
            Data:['Emballé en un exécutable autonome avec PyInstaller pour un déploiement facile sur n’importe quelle plateforme.'] 
          },
        ],
      }],
  
      Deployment:[{
        Title_1:null,
        Data:[
          {Title:'',
            Data:[''] 
          },
        ],
      }],
  
      ChallSolu:null,
  
      Outcome:{
        Title_1:null,
        Title_2:"L'application TTS a amélioré l'interaction avec le public sur les streams Twitch, entraînant une augmentation de 20% de l'engagement des spectateurs. Le filtre de mots et la vitesse TTS ajustable ont reçu des retours positifs de la part des streamers, qui ont apprécié les options de contrôle et de personnalisation.",
      },

      ScreenShotDiag:{
        ScreenShot:[
          {ImInTitle:null,
              ImInData:[{ 
                image:['tts_1.png'],
                info:['Main Interface',
                  "Capture d'écran de l'interface utilisateur principale où les streamers peuvent sélectionner les paramètres TTS et gérer le filtre de mots.",
                ]
              },]
            }
        ],
        Diagrams:null,
        VideoDemo:null
      },
    },
    {
    id: "5",
    folderid: "5",
    projectType: "desk",
    platforme: "Application de bureau, compatible avec Windows, macOS et Linux.",
    title: "Téléchargeur de Vidéos et Musique YouTube",
    image: getProjectImages('project5'),
    category: "Développement de Logiciels",
    date: "Juillet 2022",
    client_for: "Freelance",
    role: "Développeur Logiciel",
    description: "Le Téléchargeur de Vidéos et Musique YouTube est une application de bureau qui permet aux utilisateurs de télécharger des vidéos ou de la musique depuis YouTube. Les utilisateurs peuvent choisir entre des téléchargements individuels de vidéos ou de playlists entières, avec la possibilité de sélectionner parmi plusieurs choix de qualité, y compris HD, SD et formats audio uniquement.",
    github_link: "#",
    
    technology: ['Python', 'PyQt5'],
    technology_used: {
      'Proglang': ['Python', 'PyQt5'],
      'database': null,
      'techFra': ['Qt Designer', 'Git']
    },
    details: "Informations détaillées sur le Projet Cinq.",
    
    RoleResp: [{
      Title_1: '',
      Title_2: null,
      Data: [
        {
          Title: 'Conception et développement de l\'application entière, de l\'idée initiale au déploiement final.',
          Data: null
        },
        {
          Title: 'Packaging de l\'application pour distribution multiplateforme en utilisant PyInstaller.',
          Data: null
        }
      ]
    }],
    
    KeyFeatures: [{
      Title_1: null,
      Data: [
        {
          Title: 'Téléchargement de Vidéo Unique :',
          Data: ['Les utilisateurs peuvent coller une URL de vidéo YouTube et choisir la qualité de téléchargement souhaitée (1080p, 720p, 480p, 360p, audio uniquement).']
        },
        {
          Title: 'Téléchargement de Playlist :',
          Data: ['L\'application prend en charge le téléchargement de playlists entières avec la possibilité de sélectionner la qualité de chaque vidéo ou de télécharger tout en tant que fichiers audio.']
        },
        {
          Title: 'Sélection de Qualité :',
          Data: ['Les utilisateurs peuvent choisir parmi les résolutions disponibles ou télécharger uniquement l\'audio au format MP3.']
        },
        {
          Title: 'Gestion des Téléchargements :',
          Data: ['L\'application fournit une barre de progression pour chaque téléchargement, des fonctionnalités de pause/reprise, et un onglet historique des téléchargements.']
        },
        {
          Title: 'Traitement en Lot :',
          Data: ['Possibilité de mettre en file d\'attente plusieurs téléchargements.']
        }
      ]
    }],
    
    Deployment: [{
      Title_1: null,
      Data: [
        {
          Title: 'Packaging :',
          Data: ["Packagé en tant qu'exécutable en utilisant PyInstaller pour Windows, en .app pour macOS, et en AppImage pour Linux."]
        },
        {
          Title: 'CI/CD :',
          Data: ["Intégré avec GitHub Actions pour des tests automatisés et la construction de l'application sur toutes les plateformes supportées."]
        }
      ]
    }],
    
    ChallSolu: null,
    
    ScreenShotDiag: {
      ScreenShot: [
        {
          ImInTitle: null,
          ImInData: [
            {
              image: ['YD_1.png'],
              info: ['Capture d\'écran de l\'interface principale montrant la fenêtre de téléchargement unique, avec sélection de qualité.']
            },
            {
              image: ['YD_2.png'],
              info: ['Capture d\'écran montrant la fenêtre de téléchargements multiples, avec sélection de qualité.']
            }
          ]
        }
      ],
      Diagrams: null,
      VideoDemo: null
    }
  }

];

export default projects_FR;