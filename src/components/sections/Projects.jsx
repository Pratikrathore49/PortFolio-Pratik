import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router";

const Projects = () => {
  const projectDetailsData = [
    {
      name: "Edu-Mantra(Student Helper)",
      description: "A website for helping students A website for helping students A website for helping students A website for helping students A website for helping students A website for helping students ",
      webLink: "https://edu-mantra-frontend.vercel.app",
    },
    {
      name: "Recipe App",
      description: "show and add recipes",
      webLink: "https://edu-mantra-frontend.vercel.app",
    },
    {
      name: "Todo App",
      description: "create,read,update Todos",
      webLink:"https://todo-react-topaz-chi.vercel.app",
    },
    {
      name:"Rock-Paper-Scissor-Game",
      description:"human can play Rock,Paper, Scissor Game with robot",
      webLink:"https://my-paper-scissor-game.vercel.app"
    }
  ];

  return (
    <section className="grid grid-cols-1  gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-3"> 
      
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
