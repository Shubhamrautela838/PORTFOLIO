// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's




// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import liveQuizLogo from './assets/work_logo/quiz_prep.png';
import memegenerator from './assets/work_logo/memegenerator.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
     
     
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
     
      { name: 'Java', logo: javaLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      
      school: "APJ Abdul Kalam Technical University",
      date: "Sept 2021- July 2025",
      grade: "7.62 CGPA",
      desc: "I have completed my Bachelor of Technology (B.tech) in Computer Applications RKGIT college, Ghaziabad. During my time at RKGIT, I gained a strong foundation in MERN stack developement. I have studied courses such as Data Structures, Algorithms, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Bachelor of Technology  - B.Tech",
    },
    
    
    {
      id: 1,
      
      school: "Swami Vivekanand Saraswati Vidya Mandir, Ghaziabad",
      date: "Apr 2019 - March 2020",
      grade: "90.2%",
      desc: "I completed my class 12 education from Swami Vivekanand Saraswati Vidya Mandir, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
   
      school: "Swami Vivekanand Saraswati Vidya Mandir, Ghaziabad",
      date: "Apr 2018 - March 2019",
      grade: "87.6%",
      desc: "I completed my class 10 education from Swami Vivekanand Saraswati Vidya Mandir, Ghaziabad, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Live Chat App",
      description:
        "Chit-Chat is a JavaScript-based chat application designed to provide real-time messaging capabilities. The project demonstrates skills in frontend and backend integration, real-time communication, and user interface development. It showcases the ability to build interactive, scalable web applications with modern JavaScript technologies.",
      image: githubdetLogo,
      tags: ["Javascript","React JS", "API", "MongoDB", "Node JS", "Express JS" ,"Socket.io"],
      github: "https://github.com/Shubhamrautela838/Chit-Chat",
      webapp: "https://chatapp-7atl.onrender.com/login",
    },
    {
      id: 1,
      title: "Vibe Check Quiz",
      description:
        "VibeCheckQuiz is a web-based quiz application built with JavaScript, CSS, and HTML. It offers users an engaging and interactive way to test their knowledge on various topics, featuring a dynamic interface and responsive design. This project highlights skills in frontend development and user experience design.",
      image: liveQuizLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shubhamrautela838/VibeCheckQuiz",
      webapp: "https://vibe-check-quiz.vercel.app/",
    },
    {
      id: 2,
      title: "Meme Generator",
      description:
        "MemeGenerator is a web application built with JavaScript, HTML, and CSS that allows users to easily create and customize memes. It features a user-friendly interface for adding text, selecting images, and sharing the final memes, showcasing skills in interactive frontend development and creative web design.",
      image: memegenerator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shubhamrautela838/MemeGenerator",
      webapp: "https://meme-generator-ten-sooty.vercel.app/",
    },
   
   
  ];  