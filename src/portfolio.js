/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
//import postmanWebp from "./assets/images/postman.webp"

// Splash Screen1

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saumya Chaudhary",
  title: "Hi all, I'm Saumya / Developer",
  subTitle: emoji(
    "A passionate student interested in LLM, Machine Learning, and Software Engineering 🚀 with experience in Python, Langchain, Docker, C# & Microsoft SQL Server. Actively seeking a co-op or full time role in 2026"
  ),
  resumeLink:
    //1ksxEdlyWYt6gCi-0XBpZ3u30z6Ls_sHH
    "https://drive.google.com/file/d/1fhcEHeRqAVI_W_aGykGNoW6OF5NC19tq/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SaumyaC11",
  linkedin: "https://www.linkedin.com/in/saumya-chaudhary11/",
  gmail: "saumyachaudhary1011@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  gitlab : "",
  //leetcode : "https://leetcode.com/u/chaudharysaumya847/",
  ///facebook: "https://www.facebook.com/saad.pasta7",
  facebook : "",
  //medium: "https://medium.com/@saadpasta",
  medium : "",
  stackoverflow: "",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I am working on",
  subTitle: "Building a personal brand and growing my skills",
  skills: [
    emoji(
      "⚡ Automating the data pipeline, removing manual labour using C# and Microsoft SQL Server"
    ),
    emoji("⚡ Learning and creating LLM pipelines, from RAG to fine-tuning LLM to agentic-AI"),
    emoji(
      "⚡ Working on building skills in optimized ETL pipelines, Cloud, and MLOps"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "Langchain",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain"
    },
    {
      skillName: "Prompt Enginnering",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName : "C#",
      fontAwesomeClassname : "devicon-csharp-plain"
    },
    {
      skillName : ".NET",
      fontAwesomeClassname : "devicon-dotnetcore-plain"
    },
    {
      skillName: "Microsoft SQL Server",
      fontAwesomeClassname: "devicon-microsoftsqlserver-plain"
    },
    {
      skillName: "Postgres SQL",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName : "AWS",
      fontAwesomeClassname : "devicon-amazonwebservices-plain-wordmark"
    },
    {
      skillName : "ElasticSearch",
      fontAwesomeClassname : "devicon-elasticsearch-plain-wordmark"
    },
    {
      skillName : "Gitlab",
      fontAwesomeClassname : "devicon-gitlab-plain"
    },
    {
      skillName : "Postman",
      fontAwesomeClassname : "devicon-postman-plain"
    },
    {
      skillName : "Github",
      fontAwesomeClassname : "devicon-github-original"
    },
    {
      skillName : "Flask",
      fontAwesomeClassname : "devicon-flask-original"
    },
    {
      skillName : "Linux",
      fontAwesomeClassname : "devicon-linux-plain"
    },
    {
      skillName : "MongoDB",
      fontAwesomeClassname : "devicon-mongodb-plain"
    },
    {
      skillName : "Numpy",
      fontAwesomeClassname : "devicon-numpy-plain"
    },
    {
      skillName : "Pandas",
      fontAwesomeClassname : "devicon-pandas-plain"
    },
    {
      skillName : "Tensorflow",
      fontAwesomeClassname : "devicon-tensorflow-original"
    },
    {
      skillName : "Keras",
      fontAwesomeClassname : "devicon-keras-plain"
    },
    {
      skillName : "Sklearn",
      fontAwesomeClassname : "devicon-scikitlearn-plain"
    },
    {
      skillName : "Matplotlib",
      fontAwesomeClassname : "devicon-matplotlib-plain"
    },
    {
      skillName : "PostgreSQL",
      fontAwesomeClassname : "devicon-postgresql-plain"
    },
    {
      skillName : "Google Cloud Platform",
      fontAwesomeClassname : "devicon-googlecloud-plain"
    },
   
    {
      skillName : "Pytorch",
      fontAwesomeClassname : " devicon-pytorch-original"
    },
    {
      skillName : "Apache Kakka",
      fontAwesomeClassname : " devicon-apachekafka-original"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Chicago",
      logo: require("./assets/images/uic1.png"),
      subHeader: "Master in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "GPA = 4.0",
      descBullets: [
        "CS411 : Artificial Intelligence",
        "CS418: Intro to Data Science",
        "CS483 : Big Data Mining",
        "CS511 : Artificial Intelligence II",
        "CS594 : Socially Responsible AI"
      ]
    },
    {
      schoolName: "Medi-Caps University",
      logo: require("./assets/images/medicaps.jpg"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "June 2020 - August 2024",
      desc: "GPA = 3.70",
      descBullets: ["Did courses like Machine learning, Object Oriented Programming, Software Engineering, and many more",
        "Worked as Assistant Head of Marketing and Management, responsible for ensuring reach to target audience for the events and organized 10+ workshops throughout the duration"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      Stack: "SQL",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Specialist",
      company: "School of Public Health SPH-UIC",
      companylogo: require("./assets/images/uic1.png"),
      date: "May 2025 – Present",
      desc: "Responsible for full stack development of projects handing task like data pipelining, automation and monitoring",
      descBullets: [
        "Developed a comprehensive research analytics dashboard for the SPH using ASP.NET Web Forms, Chart.js, and Microsoft SQL Server. The system aggregates research data from multiple sites, visualizes key impact metrics, and highlights inter-author collaboration networks, enabling more than 500+ stakeholders to assess the scope and influence of their ongoing academic research.",
         "Engineered a competency management portal enabling professors to update and submit competency profiles for approval. Implemented a robust approval workflow where approvers can view version history, accept or revoke changes, and send structured feedback to users. Built with ASP.NET Web Forms, Microsoft SQL Server, and JavaScript, the solution supports full CRUD operations, version tracking, and role-based access control, reducing manual updation effort by 90%",
        ]
    },
    {
      role: "Software Engineer Intern",
      company: "Swastika Investmart Ltd",
      companylogo: require("./assets/images/swastika.png"),
      date: "January 2024 – July 2024",
      desc: "Learned skills like Python for backend development, C#, Flask API, Docker and MongoDB",
      descBullets: [
        "Engineered the backend for the stock information page using Flask API and MongoDB, enabling seamless data access of 4,500 stocks, while Docker ensures the reliable deployment of cronjobs and NGINX secures API responses.",
        "Revamped customer acquisition emails by fixing issues in 20 C# templates and APIs, resulting in an improved onboarding experience and a 15% reduction in onboarding time. ",
        "Built C# APIs to automate trade reports, which analyzed 150 stocks trade calls daily, boosting the decision-making speed of the research department by 30%. "    ]
    },
    {
      role: "Research Intern",
      company: "Indian Space Research Organsization",
      companylogo: require("./assets/images/isro.png"),
      date: "June 2023 – August 2023",
      desc: "Worked towards a solution of Blue Band Detection Problem for satellite images using deep learning and GAN",
      descBullets: [
        "Regenerated the blue band of approximately 1 million images using red, green, and near-infrared images effectively addressing the blue band detection problem in satellite imagery. ",
        "Conducted a comprehensive analysis of existing methods, which led to the development of a custom GAN from scratch using TensorFlow and Keras, achieved 94% accuracy by training for 500 epochs and surpassed prior solutions for generating blue band. ",
        "Utilized Dense Block and U-Net architectures, outperforming the pix2pix model with a 97% R-squared score and 0.013 FID, demonstrating superior quantitative and qualitative results. "  ]
    },
    /*
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    } */
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image : require("./assets/images/rag.webp"),
      projectName: "StudyMate AI: Agentic RAG" ,
      projectDesc: "RAG build with Langchain, llama-3.3-70b-versatile, which are not just limited to questions regarding documents, but can choose tools like summarize PDF, generate MCQ, generate short answers intelligently to use based on the query of the user itself.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/SaumyaC11/agentic_rag_tutor"
        },
        {
          name: "Website Link",
          url: "https://studymateai-yls2b3vfmky8ck5goowby.streamlit.app/"
        }
        
        //  you can add extra buttons here.
      ]
    },
    {
      image : require("./assets/images/traffic.webp"),
      projectName: "Traffic Sign Classification System",
      projectDesc: "Trained and fine-tuned a Convolutional Neural Network (CNN) on the German Traffic Sign Recognition Benchmark (GTSRB) dataset, achieving 93% accuracy in classifying signs across 43 traffic sign classes. ",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/SaumyaC11/TrafficSignClassification"
        }
        //  you can add extra buttons here.
      ]
    },
    
    {
      image : require("./assets/images/fire.png"),
      projectName: "Wildfire Prediction Model",
      projectDesc: "Programmed a model to analyze fire cause and size classifier using 300,000 demographic fire records over the past 30 years, achieving 70% and 73% accuracy with Random Forest and SMOTE respectively.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/SaumyaC11/wildfire_prediction_model/tree/master"
        }
      ]
    },
    {
      image : require("./assets/images/melodify.png"),
      projectName: "Melodify - Music Similarity through Embedding and Metadata",
      projectDesc: "Developed a lyric-based music recommendation to address the cold start problem by analyzing 10,000+ songs from Last.fm and Million Song Dataset. Utilized Word2Vec, graph embeddings, Sentence-BERT for song embeddings and leveraged XGBoost for artist-tag based recommendations, achieving 54% better recommendations for cold start.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/SaumyaC11/Melodify"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@chaudharysaumya847/elasticsearch-search-and-mlops-engine-effdf5b1648b",
      title: "Elasticsearch: Search and MLOps Engine",
      description:
        "Took a dive into how Elasticsearch (build on search engine) is more of MLOps tools used for efficient reterival and searching "
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "331-341-8755",
  email_address: "saumyachaudhary1011@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
