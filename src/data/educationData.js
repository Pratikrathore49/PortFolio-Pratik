import {FaBook,FaGraduationCap} from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu';
import { PiBookOpenBold, PiBookOpenLight } from 'react-icons/pi';
import { RiExpandLeftRightLine } from 'react-icons/ri';
import { SlGraduation } from 'react-icons/sl';



export const educationData = [
  {
    id: 1,
    date: "2020",
    title: "High School",
    board: "M.P Board",
    location: "Abhinav Public School,New Harsud",
    description:"Established strong academic foundation with 94% marks.",
    icon: PiBookOpenBold ,
    color: "#ea7804"
  },
  {
    id: 2,
    date: "2020",
    title: "Higher Secondary",
    board: "M.P Board",
    location: "Govt.Model School,New Harsud",
    description: "Focused on Science and Mathematics, completing studies with 84% marks.",
    icon:RiExpandLeftRightLine ,
    color: "#00a63e"
  },
  {
    id: 3,
    date: "May 2026",
    title: "Bachelor of Technology",
    board: "Rjiv Gandhi Proudyogiki Vishwavidyalaya",
    location: "Shri Dadaji Institude of Technology & Science, Khandwa",
    description: "Focused on core scientific principles and analytical thinking.",
    icon: LuGraduationCap ,
    color: "#155dfc"
  },
];
