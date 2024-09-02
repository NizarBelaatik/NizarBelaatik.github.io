import getProjectImages from './components/portfolio/getProjectImages';
import getProfileImage from './components/profile/getProfileImage';

const desktopPro={
  id: "3",
  folderid:"3",
  projectType:"desk",
  platforme:"",
  title: "",
  image: getProjectImages('project3'),
  category: "",
  date:"",
  client_for: "Freelance",
  role: "Software Dev",
  description: "",
  github_link: "#",
  

  technology: [ ''],
  technology_used:{'Proglang':[''],
    'database':null,
    'techFra':['Qt Designer']
  },
  details: "",

  RoleResp:[{
    Title_1:null,
    Title_2:"",
    Data:null,
  }],

  KeyFeatures:[{
    Title_1:null,
    Data:[
      {Title:'',
        Data:[''] 
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

  ScreenShotDiag:{
    ScreenShot:[
      { 
        image:[''],
        info:['']
      },
      
    ],
    Diagrams:null,
    VideoDemo:null
  },

}

const webPro={
  id: "2",
  folderid:"2",
  projectType:"web",
  platforme:"",
  title: "",
  image: getProjectImages('project2'),
  category: "",
  date:"sep 2023 - 2024",
  client_for: "",
  role: "Full-Stack Developer",
  description: "",
  github_link: "#",
  
  technology: ["HTML","CSS","JavaScript"],
  technology_used:{'front_end':["HTML","CSS","JavaScript"],
    'back_end':["JAVA",],
    'database':['SQL'],
    'techFra':[]
  },
  details: "",

  RoleResp:[{
    Title_1:"Full-stack Developer",
    Data:[
      {Title:'Back-end Development',
        Data:["",]
      },
      {Title:'Front-end Development',
        Data:["",]
      }
    ],
  }],
  KeyFeatures:[{
    Title_1:null,
    Data:[{
        Title:'',
        Data:[""]
      },

    ],
  }],
  ChallSolu:[{
    Title_1:null,
    Data:[{
      Title:'',
      Data:[""]
    },

    ],
  }],
  Reflection:[{
    Title_1:null,
    Data:[
      {
        Title:'',
        Data:[""]
      },
    ],
  }],

  VisualsMedia:{
    ScreenShot:[
      { 
        image:[''],
        info:['Dashboard ScreenShot',
          'Main dashboard showing  and  .'
        ]
      },
      
    ],
    Diagrams:[
      { 
        image:[''],
        info:['Diagrams ScreenShot',
          ''
        ]
      }
    ],
    VideoDemo:[
      { 
        video:[''],
        
      }
    ]
  },

}

const projects_ENG = [
    {
      id: "1",
      folderid:"1",
      projectType:"web",
      platforme:"",
      title: "CRM System",
      image: getProjectImages('project1'),
      category: "CRM",
      date:"September 2023 - February 2024",
      client_for: "Freelance",
      role: "Full-Stack Developer",
      description: "This CRM system was developed to enhance operational efficiency and project management capabilities.",
      github_link: "#",
      
      technology: ["Python","Django","HTML","CSS","JavaScript","Jquery","Bootstrap"],
      technology_used:{'front_end':["HTML","CSS","JavaScript","Jquery","Bootstrap"],
        'back_end':["Python","Django","RESTful API","JSON"],
        'database':['SQL',"Postgresql"],
        'techFra':[]
      },
      details: "Detailed information about Project One.",
  
      RoleResp:[{
        Title_1:"Full-stack Developer",
        Data:[
          {Title:'Back-end Development',
            Data:["Designed and implemented the database schema for storing",
              "Developed RESTful APIs for handling ... data, ... and ... managment",
              "Implemented user authentication and role-based access control"]
          },
          {Title:'Front-end Development',
            Data:["Created responsive UI components using Bootstrap and custom CSS",
              "Integrated AJAX calls for real-time data updates and interactive features",
              "Developed dashboards for different user roles, including ..., ... and administrators"]
          }
        ],
      }],
      KeyFeatures:[{
        Title_1:null,
        Data:[{
            Title:'Role-Based Access Control',
            Data:["Different levels of access for sales agents, managers, and administrators, ensuring data security and proper workflow management."]
          },
          {Title:'Reporting and Analytics',
            Data:["Customizable reports and dashboards for visualizing sales performance, customer trends, and inventory levels"]
          },
        ],
      }],
      ChallSolu:[{
        Title_1:null,
        Data:[{
            Title:'Role-Based Access Control',
            Data:["Different levels of access for sales agents, managers, and administrators, ensuring data security and proper workflow management."]
          },
          {Title:'Reporting and Analytics',
            Data:["Customizable reports and dashboards for visualizing sales performance, customer trends, and inventory levels"]
          },
        ],
      }],
      Reflection:[{
        Title_1:null,
        Data:[{
            Title:'What You Learned:',
            Data:["Gained deep insights into building scalable, secure, and user-friendly CRM systems. The project also enhanced my ability to work with large data sets and optimize database performance."]
          },
          {Title:'Improvements',
            Data:["If revisiting the project, I would implement machine learning models to predict customer behavior and optimize sales strategies. Additionally, further automation in the inventory management process could reduce manual interventions."]
          },
        ],
      }],
  
      VisualsMedia:{
        ScreenShot:[
          {ImInTitle:null,
            ImInData:[{ 
            image:['1.png'],
            info:['Dashboard ScreenShot',
              'Main dashboard showing  and  .'
            ]
          },{ 
            image:['2.png'],
            info:['Cust Managment',
              'Interface for managing customer information'
            ]
          }]},
          
        ],
        Diagrams:[
          {ImInTitle:null,
            ImInData:[{ 
              image:['1.png','2.png'],
              info:['Diagrams ScreenShot',
                'Diagram showing the architecture of the CRM system, including data flow and integrations'
              ]
            }]
          }
        ],

        VideoDemo:[
          { 
            video:['1TAP _Trim.mp4'],
            
          }
        ]
      },
  
    },

    {
      id: "2",
      folderid:"2",
      projectType:"web",
      platforme:"Web Application: The system is a web-based platform accessible via modern web browsers. This allows students, administrators, and responsible personnel to interact with the system from any device with an internet connection.",
      title: "Student Life Management System",
      image: getProjectImages('project2'),
      category: "Education Management System: This application falls under the category of educational management systems, focusing on enhancing administrative efficiency and improving student services. It supports functionalities like schedule management, document handling, and communication within an academic institution.",
      date:"February 2023 - June 2023",
      project_for:"Faculte Des science Ben M'Sik",
      client_for:'',
      role: "Full-Stack Developer",
      description: "The Student Life Management System is a web application designed to streamline student interactions with their academic institution. It facilitates the management of various aspects such as scheduling, document requests, and administrative tasks. The system aims to enhance the student experience by providing a user-friendly platform for accessing and managing academic and administrative services.",
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
            Title2:"This project involves creating a web application for the Faculty of Sciences BEN M’SIK to streamline access to administrative documents for students. The app aims to address delays in document retrieval, which can disrupt academic progress. It offers a quick solution for students to request and download essential documents like transcripts, enrollment certificates, and success certificates with a single click.",
            Data:null
          },
          {
            Title:null,
            Title2:"The application features two main areas:",
            Data:["Administrator Dashboard: Manages document updates, student records, and scheduling.",
              "Student Portal: Allows students to request, download documents, and view their schedules."
            ]
          },
          {
            Title:null,
            Title2:"The user-friendly interface is designed to improve administrative efficiency and facilitate students' academic management.",
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
            Title2:"The primary challenge addressed by this application is the need for a digital signature feature to allow students to download administrative documents quickly and flexibly. The application also seeks to improve the efficiency of managing schedules, document requests, and administrative duties.",
            Data:null
          }

        ],
      }],

      RoleResp:[
        {
          Title_1:"Full-stack Developer",
          Data:[
            {Title:'Front-end Development',
              Data:[
                "Designed and implemented the user interface using HTML, CSS, and JavaScript to ensure a seamless and engaging user experience.",
                "Developed interactive elements and ensured cross-browser compatibility.",
                "Created responsive designs to ensure usability across various devices and screen sizes.",
              ]
            },
            {Title:'Back-end Development',
              Data:["Developed server-side logic using Java JEE, including the implementation of RESTful APIs to handle client requests and data processing.",
                "Managed user authentication, session management, and data security.",
                "Integrated the application with the MySQL database, implementing CRUD operations and optimizing database queries for performance."
              ]
            },
            {Title:'Database Management',
              Data:[
                "Designed the database schema and relationships to support the application’s features.",
                "Ensured data consistency and integrity through careful design and indexing.",
                "Developed SQL queries for efficient data retrieval and reporting.",
              ]
            },
            {Title:'Collaboration',
              Data:[
                "Worked closely with team members to define requirements, design solutions, and implement features.",
                "Participated in code reviews and provided feedback to ensure code quality and adherence to best practices.",
              ]
            }
          ],
        },
      ],
      KeyFeatures:[{
        Title_1:'For Students',
        Data:[
          {Title:'View Schedules',
            Data:["Course schedules (Lectures, TD, TP)",
              "Exam schedules (Regular and Rescheduled)"
            ] 
          },
          {Title:'Request Documents',
            Data:["Diploma requests",
              "Permanent file withdrawal",
              "Temporary file withdrawal"
            ] 
          },
          {Title:'Download Documents',
            Data:["Enrollment certificate",
              "Transcript of grades"
            ] 
          },
          {Title:'Consult Events and News',
            Data:["New scholarship opportunities",
              "Recent updates"] 
          },
          {Title:'Access Group Chat',
            Data:["Engage with peers and administrators"] 
          },

        ],
      },
      {
        Title_1:'For Administrators',
        Data:[
          {Title:'Manage Document Requests',
            Data:['Approve or reject requests'] 
          },
          {Title:'Manage Schedules',
            Data:['Add, update, or delete schedules'] 
          },
          {Title:'Manage Students',
            Data:['Add, update, or remove student records'] 
          },

        ],
      },
      {
        Title_1:'For Responsible',
        Data:[
          {Title:'Database Management',
            Data:['Populate and maintain the database'] 
          },

        ],
      },],
    
      ChallSolu:[{
          Title_1:null,
          Data:[{
            Title:'Digital Signature Implementation',
            Data:["Challenge: Integrating a digital signature feature for document validation and secure downloads.",
              "Solution: Implemented a secure digital signature mechanism and ensured compatibility with various document formats."
            ]
          },{
            Title:'Data Management',
            Data:["Challenge: Efficiently managing and synchronizing large amounts of student and schedule data.",
              "Solution: Optimized database schema and used indexing to improve data retrieval performance."
            ]
          },],
          
        },
      ],

      Reflection:[{
        Title_1:null,
        Data:[
          {
            Title:'Personal Growth:',
            Title2:"Working on this project provided significant opportunities for growth in both front-end and back-end development. I gained hands-on experience with Java JEE and improved my ability to integrate front-end and back-end components effectively. The challenge of implementing a digital signature feature pushed me to deepen my understanding of security practices and data management.",
            Data:null,
          },
          {
            Title:'Challenges Faced:',
            Title2:"One of the primary challenges was integrating the digital signature functionality, which required careful consideration of security and compatibility. Additionally, ensuring the application’s responsiveness across different devices demanded meticulous attention to detail in the front-end development phase.",
            Data:null,
          },
          {
            Title:"Lessons Learned:",
            Data:["Full-Stack Integration: Gained valuable insights into how front-end and back-end components interact and the importance of seamless integration for a cohesive user experience.",
              "Security Practices: Enhanced my understanding of security measures, particularly in handling sensitive data and implementing digital signatures.",
              "Collaboration and Communication: Improved my ability to work collaboratively with team members, communicate effectively, and manage project requirements and deadlines."
            ]
          },

          {
            Title:"Impact:",
            Title2:" The project successfully streamlined student interactions with academic services, providing a more efficient and user-friendly platform. The experience has prepared me for future full-stack development roles and enhanced my problem-solving skills in both front-end and back-end development.",
            Data:null,
          },
          
        ],
      },],

      
    
      VisualsMedia:{
        ScreenShot:[
          {
            ImInTitle:"Student",
            ImInData:[{ 
                image:['1.jpg'],
                info:['Page for news and events.']
              },
              { 
                image:['2.jpg'],
                info:['Document request page.']
              },
              { 
                image:['3.jpg'],
                info:['Document download page.']
              },
              { 
                image:['4.jpg'],
                info:['Page to change the password.']
              },
              { 
                image:['5.jpg'],
                info:['Page to edit personal information.']
              },
              { 
                image:['chat.jpg'],
                info:['Group chat page.']
              }]
          },

          {
            ImInTitle:"Administrator",
            ImInData:[{ 
                image:['admin1.jpg'],
                info:["Page for adding, deleting, and editing news and events."]
              },
              { 
                image:['admin2.jpg'],
                info:["Page to accept or reject requests."]
              },
              { 
                image:['admin3.jpg'],
                info:["Page for adding, deleting, and editing a student."]
              },
              { 
                image:['admin4.jpg'],
                info:["Page for adding and updating a schedule."]
              },]
          }
        ],
        Diagrams:[
          {ImInTitle:"Use Case Diagrams",
            ImInData:[{ 
              image:['actA.jpg'],
              info:["Administrator"]
            },
            { 
              image:['actE.jpg'],
              info:["Student"]
            },]},

          {ImInTitle:"Sequence Diagrams",
            ImInData:[{ 
              image:['Diagram (2).jpg','Diagram (3).jpg','Diagram (4).jpg','Diagram (5).jpg','Diagram (6).jpg','Diagram (7).jpg'],
              info:['']
            }]},
          {ImInTitle:"Global Class Diagram",
            ImInData:[{ 
              image:['Diagram (1).jpg'],
              info:['']
            }]}
        ],
        VideoDemo:null
      },

    
    },

    
    {
      id: "3",
      folderid:"3",
      projectType:"web",
      platforme:"Web application, accessible on both desktop and mobile browsers.",
      title: "Real-Time Live Chat Application",
      image: getProjectImages('project3'),
      category: "",
      date:"June 2024",
      client_for: "Freelance",
      role: "Full-Stack Developer",
      description: "The Real-Time Live Chat Application is a web-based platform that allows users to engage in single or group chats in real-time. Users can send text messages, images, and files, making it ideal for both casual conversations and professional collaboration.",
      github_link: "#",
      
    
      technology: ["Python","Django","HTML","CSS","JavaScript","Jquery","Bootstrap"],
      technology_used:{'front_end':["HTML","CSS","JavaScript","Jquery","Bootstrap"],
        'back_end':["Python","Django","RESTful API","JSON"],
        'database':['SQL',"Postgresql"],
        'techFra':['Git']
      },
      details: "",
    
      RoleResp:[{
        Title_1:'Full-Stack Developer',
        Title_2:null,
        Data:[
          {Title:'Back-end Development',
            Data:["Designed and implemented the database schema for storing",
            "implementing real-time chat functionality using Django Channels"]
          },
          {Title:'Front-end Development',
            Data:["Created responsive UI components using Bootstrap and custom CSS",
              "Integrated AJAX calls for real-time data updates and interactive features",]
          }
        ],
      }],
    
      KeyFeatures:[{
        Title_1:null,
        Data:[
          {Title:'Single & Group Chat',
            Data:['Users can initiate one-on-one conversations or create/join group chats with multiple participants.'] 
          },
          {Title:'Real-Time Messaging',
            Data:['Messages are delivered instantly using WebSocket connections, ensuring smooth, real-time communication.'] 
          },
          {Title:'Multimedia Support',
            Data:['Users can send text messages, images, and files (e.g., PDFs, DOCs) with previews for images.'] 
          },
          {Title:'User Authentication',
            Data:['Secure user login with Django’s authentication system, including password reset and profile management.'] 
          },
          {Title:'Message History',
            Data:['All conversations are stored in the database, allowing users to view chat history at any time.'] 
          },
          {Title:'Notifications',
            Data:['Real-time notifications for new messages, even when the user is not on the chat page.'] 
          },
          {Title:'Responsive Design',
            Data:['The application is fully responsive, providing a seamless experience across all devices.'] 
          },
          
        ],
      }],
    
      Deployment:{
        Title_1:null,
        Data:[
          {Title:'Real-Time Communication',
            Data:['Managing real-time communication using WebSocket connections while ensuring performance and reliability, especially in group chats.'] 
          },
          {Title:'File Handling',
            Data:['Ensured secure and efficient file uploads and downloads, including support for large files and image previews.'] 
          },
          {Title:'Scalability',
            Data:['Optimized the application to handle hundreds of simultaneous users and multiple active group chats without lag.'] 
          },
        ],
      },
    
      ChallSolu:null,
    
      

      VisualsMedia:{
        ScreenShot:[
          {ImInTitle:null,
            ImInData:[{ 
                image:['real_time_chat.png'],
                info:['Real-Time Chat Interaction: User A and User B Messaging']
              }]
            }
          
        ],
        Diagrams:null,
        VideoDemo:[{
          video:['realtimechatVid.mkv'],
          info:['Live Chat Demonstration: Real-Time Messaging and Media Sharing between Users']
        }]
      },
    
    }, 
    
    
    
    {
      id: "4",
      folderid:"4",
      projectType:"desk",
      platforme:"Desktop application, compatible with Windows, macOS, and Linux.",
      title: "Twitch Channel Points TTS (Text-to-Speech)",
      image: getProjectImages('project4'),
      category: "Software Development",
      date:"May 2020 - June 2020",
      client_for: "Freelance",
      role: "Software Dev",
      description: "Developed a Twitch Channel Points TTS (Text-to-Speech) application that allows streamers to convert messages redeemed by viewers using channel points into speech. This enhances audience interaction by giving a voice to viewers during live streams.",
      github_link: "#",
      
  
      technology: ['Python','PyQt5','Selenium'],
      technology_used:{'Proglang':['Python','PyQt5'],
        'database':null,
        'frameworks':['PySide2','Selenium',],
        'Packaging':['PyInstaller'],
        'techFra':['Qt Designer','Git','Github']
      },
      details: "",
  
      RoleResp:[{
        Title_1:'',
        Title_2:null,
        Data:[{
            Title:'Designed and developed the entire application, from initial concept to final deployment.',
            Data:null 
          },
          {
            Title:'Implemented and tested the TTS functionality using PySide2.QtTextToSpeech.',
            Data:null 
          },
          {
            Title:'Integrated Selenium for real-time monitoring of channel points redemptions.',
            Data:null 
          },
          {
            Title:'Developed the words filter and speed adjustment features.',
            Data:null 
          },
          {
            Title:'Packaged the application for cross-platform distribution using PyInstaller.',
            Data:null 
          },]
      }],
  
      KeyFeatures:[{
        Title_1:null,
        Data:[
          {Title:'Text-to-Speech Integration:',
            Data:['Converts viewer messages redeemed with channel points into speech using the PySide2.QtTextToSpeech module.'] 
          },
          {Title:'Twitch Channel Points Integration:',
            Data:['Automatically detects when channel points are redeemed and triggers the TTS function.'] 
          },
          {Title:'Words Filter:',
            Data:['Includes a customizable filter to block inappropriate or unwanted words from being spoken.'] 
          },
          {Title:'Adjustable TTS Speed:',
            Data:['Allows streamers to control the speed of the speech, offering a more personalized viewer experience.'] 
          },
          {Title:'Customizable Voices:',
            Data:['Streamers can select different voices and adjust speech rate and pitch.'] 
          },
          {Title:'Cross-Platform Support:',
            Data:['Packaged into a standalone executable using PyInstaller for easy deployment on any platform.'] 
          },
        ],
      }],
  
      Deployment:{
        Title_1:null,
        Data:[
          {Title:'',
            Data:[''] 
          },
        ],
      },
  
      ChallSolu:null,
      
      Outcome:{
        Title_1:null,
        Title_2:"The TTS app enhanced audience interaction on Twitch streams, resulting in a 20% increase in viewer engagement. The words filter and adjustable TTS speed received positive feedback from streamers, who appreciated the control and customization options.",
        
      },

      ScreenShotDiag:{
        ScreenShot:[
          {ImInTitle:null,
            ImInData:[{ 
              image:['tts_1.png'],
              info:['Main Interface',
                'Screenshot of the main user interface where streamers can select TTS settings and manage the words filter.'
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
      folderid:"5",
      projectType:"desk",
      platforme:"Desktop application, compatible with Windows, macOS, and Linux.",
      title: "YouTube Video & Music Downloader",
      image: getProjectImages('project5'),
      category: "Software Development",
      date:"july 2022",
      client_for: "Freelance",
      role: "Software Dev",
      description: "The YouTube Video & Music Downloader is a desktop application that allows users to download videos or music from YouTube. Users can choose between single video downloads or entire playlists, with the option to select from multiple quality choices, including HD, SD, and audio-only formats.",
      github_link: "#",
      
  
      technology: [ 'Python','PyQt5'],
      technology_used:{'Proglang':['Python','PyQt5'],
        'database':null,
        'techFra':['Qt Designer','Git']
      },
      details: "Detailed information about Project Two.",
  


      RoleResp:[{
        Title_1:'',
        Title_2:null,
        Data:[{
            Title:'Designed and developed the entire application, from initial concept to final deployment.',
            Data:null 
          },
          {
            Title:'Packaged the application for cross-platform distribution using PyInstaller.',
            Data:null 
          },]
      }],
  
  
      KeyFeatures:[{
        Title_1:null,
        Data:[{
            Title:'Single Video Download:',
            Data:['Users can paste a YouTube video URL and choose the desired download quality (1080p, 720p, 480p, 360p, audio-only).']
          },
          {Title:'Playlist Download:',
            Data:['The application supports downloading entire playlists with the option to select video quality for each video or download all as audio files.']
          },
          {Title:'Quality Selection:',
            Data:['Users can choose from available resolutions or download only the audio in MP3 format.']
          },
          {Title:'Download Management:',
            Data:[' The application provides a progress bar for each download, pause/resume functionality, and a download history tab.']
          },
          {Title:'Batch Processing:',
            Data:['Ability to queue multiple downloads.'] //, which are processed sequentially or in parallel.
          },
        ],
      }],
  
      Deployment:[{
        Title_1:null,
        Data:[{
            Title:'Packaging:',
            Data:["Packaged as an executable using PyInstaller for Windows, and as .app for macOS, and an AppImage for Linux."]
          },
          {Title:'CI/CD:',
            Data:["Integrated with GitHub Actions for automated testing and building the application across all supported platforms."]
          },
        ],
      }],
  
      ChallSolu:null,
  
      ScreenShotDiag:{
        ScreenShot:[
          {ImInTitle:null,
            ImInData:[{ 
                image:['YD_1.png'],
                info:['A screenshot of the main interface showing the single download window, with quality selection.']
              },{ 
                image:['YD_2.png'],
                info:['A screenshot showing multiple downloads window, with quality selection.']
              },]}
          
        ],
        Diagrams:null,
        VideoDemo:null
      },
  
    },
    
   
  ];

export default projects_ENG;
