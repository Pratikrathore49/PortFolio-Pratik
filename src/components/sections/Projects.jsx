import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router";

const Projects = () => {
  const projectDetailsData = [
    {
      name: "Edu-Mantra(Student Helper)",
      description: "Built a MERN-based Student Portal with separate Teacher and Student modules. Teachers can manage students, create questions, and generate papers with real-time paper visualization, while students can purchase test series via Razorpay, attempt tests, view results with AI explanations, and track past performance. Secure authentication includes dashboards, profile management, password updates, and role-based access.",
      webLink: "https://edu-mantra-frontend.vercel.app",
    },
    {
      name: "Recipe App",
      description: "Created a MERN stack Recipe App providing functionality to view, add, and manage recipes along with secure user authentication. Features include login, logout, and personalized user profile access",
      webLink: "https://edu-mantra-frontend.vercel.app",
    },
    {
      name: "Todo App",
      description: "Built a Todo Application using React Context API with full CRUD functionality, allowing users to add, read, update, and delete tasks. Implemented persistent storage to save and retrieve previous todos for a seamless user experience.",
      webLink:"https://todo-react-topaz-chi.vercel.app",
    },
    {
      name:"Rock-Paper-Scissor-Game",
      description:"Developed a Rock-Paper-Scissors game where users can play against a computer (bot). The game features interactive gameplay, real-time result updates, and a simple, user-friendly interface.",
      webLink:"https://my-paper-scissor-game.vercel.app"
    }
  ];

  return (
    <section  className="grid grid-cols-1  gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-3"> 
      
      {projectDetailsData.map((item) => (
        <div className="bg-[#424d5e] rounded-md px-4 py-2 md:py-4 space-y-2 hover:border-blue-400 hover:border-2 hover:scale-[1.02] ">
          <div className="flex justify-between items-center   ">
            <p className="font-medium text-white">{item.name}</p>
            <Link to={ item.webLink } className="text-blue-400 cursor-pointer">
              <HiOutlineExternalLink />
            </Link>
          </div>
          <p className=" text-gray-300 text-sm">{item.description}</p>
          
        </div>
      ))}
    </section>
  );
};

export default Projects;
