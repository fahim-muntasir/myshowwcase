import { FaReact, FaStripe } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiSupabase } from "react-icons/si";

const portfolios = [
  {
    id: 1,
    name: "QuizMaker",
    image: "project2.jpg",
    summary: "This quiz web app simplifies quiz creation, sharing, and participation, dynamic result generation",
    description:`This is a quiz web app. What does this project do and which problem solves it? well, sometimes we need to create quiz sets for students or friends and share that quiz with each other to participate. This web app does the same thing. Have a glance at the following features of this project.

    🚀 Project Features:
    
    • SignIn and SignUp
    • Email verification
    • Create quiz with unlimited questions
    • One-time quiz participation
    • Ownership control: Delete quizzes and view participants
    • Search quizzes by owner name
    • Pause quizzes for postponed participation
    • Logout
    
    💪 Major Challenge:
    
    • Implementation of Authentication and Authorization
    • Dynamic quiz result generation
    • Tracking quiz participants (One-time participation)
    
    ⚙️ Used Technology:
    
    • Front-end: Tailwind CSS for styling, React.js for the UI library, Redux for state management.
    • Back-end: Utilized Supabase for back-end functionality. (Supabase is an open-source Firebase alternative)
    • Deployment: Leveraged GitHub and Netlify for free.`,
    videoLink: "project2.mp4",
    technology: [
      {
        name: "React.js",
        color: "#149eca",
        icon: <FaReact />
      },
      {
        name: "TailwindCSS",
        color: "#38bdf8",
        icon: <SiTailwindcss />
      },
      {
        name: "Redux",
        color: "#764abc",
        icon: <SiRedux />
      },
      {
        name: "Supabase",
        color: "#3ecf90",
        icon: <SiSupabase />
      },
    ],
    liveLink: "https://endearing-wisp-deda6d.netlify.app",
    githubLink: "https://github.com/fahim-muntasir/quiz-application",
  },
  {
    id: 2,
    name: "Project Manager",
    summary: "SaaS project manager simplifies project tracking with drag-and-drop updates and subscription management",
    description: `This is a SaaS project manager web app. What does this project do and which problem solves it? well, You can create your team and can add members as well. Under each team, you can make projects after that we are all team members and owner is gonna see the project progress the owner can change it by drag and drop.

    We have two plans Free and plus. As a free member will be able to create 5 teams. If update plans then will be able to create the unlimited team.
    
    ✨ Key Features:
    
    • Create teams and add members
    • Create projects and change the project status by drag and drop.
    • Search and delete the project.
    • Update and manage subscription plans.
    
    💪 Major Challenges Overcome:
    
    • Subscription System Implementation
    • Drag-and-Drop Functionality
    • Payment Event Tracking
    
    ⚙️ Technologies Used:
    
    • Front-end: Tailwind CSS for sleek styling, React.js for dynamic UI rendering, Redux for efficient state management, and React DnD for seamless drag-and- drop functionality.
    
    • Back-end: json-server (To focus on only frontend functionality and stripe I have used it).
    
    • Payment gateway: Stripe`,
    videoLink: "project1.mp4",
    technology: [
      {
        name: "React.js",
        color: "#149eca",
        icon: <FaReact />
      },
      {
        name: "TailwindCSS",
        color: "#38bdf8",
        icon: <SiTailwindcss />
      },
      {
        name: "Redux",
        color: "#764abc",
        icon: <SiRedux />
      },
      {
        name: "Stripe",
        color: "#6860ff",
        icon: <FaStripe />
      },
      {
        name: "json-server",
        color: "black",
      },
    ],
    liveLink: "",
    githubLink: "https://github.com/fahim-muntasir/project-management",
  },
  {
    id: 3,
    name: "MusicHub",
    image: "funMusic.jpg",
    summary: "MusicHub transforms music creation with Tone.js. Simplified composition saving and editing",
    description:`This is a music-sounds web app 'MusicHub!' powered by React.js and Tone.js.

    🚀 Key Features:
    Explore music creation with Guitar, Piano, and Drums. Save your compositions for later playback and easy editing.
    
    💪 Major Challenge:
    
    • Generating sounds with Tone.js API.
    • Implementing backend storage for saving and playback of created sound data.
    
    ⚙️ Tech Stack:
    
    • Front-end: React.js and Tailwind CSS.
    • Back-end: JSON-server for seamless data storage.
    • Music: Tone.js web audio framework.`,
    videoLink: "project1.mp4",
    technology: [
      {
        name: "React.js",
        color: "#149eca",
        icon: <FaReact />
      },
      {
        name: "Tone.js",
        color: "#f734d7",
      },
      {
        name: "TailwindCSS",
        color: "#38bdf8",
        icon: <SiTailwindcss />
      },
      {
        name: "json-server",
        color: "black",
      },
    ],
    liveLink: "",
    githubLink: "https://github.com/fahim-muntasir/make-music",
  },
];

export default portfolios;