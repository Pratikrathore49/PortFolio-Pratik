import { LiaGraduationCapSolid } from "react-icons/lia";
import { LuUtensils } from "react-icons/lu";

export const projects = [
    {   id:1,
        project_name:"Edu-Mantra(Student Portal)",
        description:'Built a MERN-based Student Portal with role-based access for Teachers and Students, featuring real-time question and paper creation, student management, and profile handling. Students can purchase test series via Razorpay, attempt tests, view results with AI explanations, and track previous performance with secure authentication and dashboards',
        icon:LiaGraduationCapSolid , 
        icon_bg:'from-purple-500 to-purple-700',
        tech:["Node.js",'React.js','Redux']
    },
    {   id:2,
        project_name:"Recipe App",
        description:'Developed a MERN full-stack Recipe Application enabling users to explore, add, and manage recipes with a user-friendly interface. Integrated authentication features including login, logout, and profile viewing',
        icon: LuUtensils  ,
        icon_bg:'from-blue-500 to-blue-700',
        tech:["Node.js",'React.js','Redux']
    },
     
     {   id:3,
        project_name:"Todo App",
        description:'Built a Todo Application using React Context API with full CRUD functionality, allowing users to add, read, update, and delete tasks. Implemented persistent storage to save and retrieve previous todos for a seamless user experience.',
        icon: LuUtensils  ,
        icon_bg:'from-blue-500 to-blue-700',
        tech:["Node.js",'React.js','Redux']
    },
]