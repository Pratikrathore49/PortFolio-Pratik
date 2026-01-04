import { CgDatabase } from "react-icons/cg";
import { GoDatabase } from "react-icons/go";
import { IoBagOutline, IoColorPaletteOutline } from "react-icons/io5";
import { LuChevronsLeftRight } from "react-icons/lu";

const skillsComplete =[
   {
    id: 1,
    title: "Programming Languages",
    icon: LuChevronsLeftRight,
    color:'orange',
    isOpen: false,
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML", level: 65 },
    ],
  },

  {
    id: 2,
    title: "Frontend Technologies",
    icon: LuChevronsLeftRight,
     color:'yellow',
    isOpen: true,
    skills: [
      { name: "React", level: 90 },
      // { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      // { name: "Bootstrap", level: 75 },
    ],
  },

  {
    id: 3,
    title: "Data Structures & Algorithms",
    icon: GoDatabase ,
     color:'blue',
    isOpen: false,
    skills: [
      { name: "Arrays", level: 80 },
      { name: "Linked List", level: 75 },
      { name: "Stack & Queue", level: 70 },
      { name: "Recursion", level: 65 },
    ],
  },

  {
    id: 4,
    title: "Backend Technologies",
    icon: CgDatabase ,
     color:'green',
    isOpen: false,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
      { name:  'SQL' , level:80}
    ],
  },{
    id: 5,
    title: "Developer Tools",
    icon: IoColorPaletteOutline,
     color:'teal',
    isOpen: true,
    skills: [
      { name: "VS code", level: 90 },
      { name: "POSTMAN", level: 70 },
      { name: "GIT", level: 80 },
      { name: "GITHUB", level: 85 },
      { name: "CHAT GPT & AI TOOLS", level: 90 },
    ],
  },
    {
    id: 6,
    title: "Computer Science Fundamentals",
    icon: IoBagOutline ,
     color:'purple',
    isOpen: false,
    skills: [
      { name: "Operating System", level: 70 },
      { name: "DBMS", level: 80 },
      { name: "Computer Networks", level: 70 },
     
    ],
  },
]




export default skillsComplete;
