import SkillsDetails from "../components/SkillsDetails";
import skillsComplete from "../data/skillsComplete";

function Skills() {
  return (
    <section className="bg-[var(--primary)] w-full h-full pt-20 md:pt-28 flex flex-col gap-4 md:py-12">
      <h2  className=" capitalize font-semibold text-center text-3xl md:text-5xl text-white ">
        MY SKILLS
      </h2>
      <p className="md:py-4  text-center text-gray-300 ">
        
        Exploring the technologies that drive my passion for web development{" "}
      </p>

      {skillsComplete.map((data) => (
        <SkillsDetails data={data} />
      ))}
    </section>
  );
}
export default Skills;

// import { useState } from "react";

// const skills = [
//   { name: "React", level: 90 },
//   { name: "JavaScript", level: 85 },
//   { name: "CSS", level: 90 },
//   { name: "Bootstrap", level: 75 },
//   { name: "TypeScript", level: 70 },
//   { name: "HTML", level: 95 },
//   { name: "Tailwind CSS", level: 80 },
// ];

// export default function Skills() {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="max-w-4xl mx-auto mt-24 text-white">

//       {/* Accordion Header */}
//       <div
//         onClick={() => setOpen(!open)}
//         className="flex justify-between items-center cursor-pointer
//         bg-slate-800 px-6 py-4 rounded-lg"
//       >
//         <h2 className="text-xl font-semibold">
//           Frontend Technologies
//         </h2>
//         <span>{open ? "▲" : "▼"}</span>
//       </div>

//       {/* Accordion Body */}
//       {open && (
//         <div className="grid md:grid-cols-2 gap-4 mt-4">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-slate-900 p-4 rounded-lg border border-slate-700"
//             >
//               <div className="flex justify-between mb-2">
//                 <span className="font-medium">
//                   {skill.name}
//                 </span>
//                 <span className="text-blue-400">
//                   {skill.level}%
//                 </span>
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full h-2 bg-slate-700 rounded-full">
//                 <div
//                   className="h-2 bg-blue-500 rounded-full"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
