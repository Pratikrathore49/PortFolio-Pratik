import img from "../assets/Images/ArtImage-pratik.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { IoBagCheckOutline } from "react-icons/io5";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <section className="bg-[var(--secondary)] w-full min-h-screen flex flex-col md:flex-row items-center px-4 md:px-[10vw] gap-12 pt-31 ">
        <div className="flex-1 flex flex-col gap-4 md:gap-6 ">
          <p className="text-blue-400 bg-[#16254b] border border-blue-500 w-fit px-1 md:px-2   rounded-full">
            Software Developer
          </p>
          <h1 className="text-[#d8e9ff] text-5xl md:text-5xl lg:text-7xl">Pratik Rathore</h1>
          <p className="text-[#dcdfe7] text-base max-w-[55ch] md:text-xl">
            Transforming ideas into elegant digital solutions with passion and
            precision. Specializing in Full Stack development.
          </p>

          <div className="text-white flex gap-6 mt-2 ">
            <a href="/Resume-Pratik_rathore.pdf" download className=" flex items-center gap-1 md:py-3 py-1.5 px-3 md:px-6  bg-blue-600 rounded-md cursor-pointer ">
              <MdOutlineFileDownload />
              <p className="text-sm">RESUME</p>
            </a>

            <Link to="/resume#projects" className=" flex items-center gap-1 border  md:py-3 py-1.5 px-3 md:px-6  bg-[#1e2939] rounded-md  cursor-pointer ">
              <IoIosArrowDown />
              <p className="text-sm"> VIEW PROJECTS </p>
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full  flex justify-center md:justify-end  ">
          <div className="  max-h-[80vh] w-[90%] overflow-hidden object-top border-8 border-[#282d69] rounded-2xl">
            <img
              className=" block object-cover hover:scale-110 transition-all duration-[1000ms] ease-in-out"
              src={img}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--primary)] px-[10vw] text-white py-[10vh] ">
        <span className="flex  gap-2 justify-center pb-12">
          <p className="text-blue-400">
          
            <RiExpandLeftRightLine fontSize={28} />
          </p>
          <h2 className="text-2xl font-semibold">MY CORE SKILLS</h2>
        </span>
        <div className="bg-[#101828]  grid grid-col-1  sm:grid-cols-3 md:grid-cols-5  gap-6 ">
          {skills.map((item, idx) => (
            <SkillCard key={idx} color={item.color} name={item.name} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--secondary)]  px-[10vw] text-white py-[10vh]">
        <span className="flex  gap-2 justify-center pb-8">
          <p className="text-blue-400">
            <RxPerson fontSize={28} />
          </p>
          <h2 className="text-2xl font-semibold uppercase">About Me</h2>
        </span>
        <p className="mx-auto text-center max-w-2xl text-gray-300 text-lg leading-relaxed ">
          A passionate Software developer with Expierince in builiding scalable
          and optimized Backends and user-friendly web applications. I blend
          creativity with technical expertise to deliver innovative solutions
          that exceed expectations.
        </p>
      </section>

      <section className="bg-[var(--primary)]  px-[10vw] text-white py-[10vh]">

         
       <div className="relative flex justify-center items-center pb-8 ">
  {/* Center: Recent Projects */}
  <span className="flex gap-2 items-center ">
    <IoBagCheckOutline fontSize={28} className="text-blue-400" />
    <h2 className="text-2xl font-semibold uppercase">RECENT PROJECTS</h2>
  </span>

  {/* Right: dfdfdf */}
  <Link to='/resume#projects' className="absolute right-2 top-3 border px-1 rounded-lg text-blue-400 border-blue-600/80 bg-blue-500/20">see more</Link>
</div>




        <div className="grid grid-cols-1  md:grid-cols-2  gap-6 md:gap-12 mt-8 ">
          {projects.map((item, idx) => (
            <ProjectCard
              key={idx}
              icon_bg={item.icon_bg}
              icon={item.icon}
              project_name={item.project_name}
              description={item.description}
              tech={item.tech}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
