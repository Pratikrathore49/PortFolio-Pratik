import { FiUser } from "react-icons/fi";
import ResumeContainer from "../components/common/ResumeContainer";
import Summary from "../components/sections/Summary";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import ResumeSkills from "../components/sections/ResumeSkills";
import Projects from "../components/sections/Projects";
import PersonalDetails from "../components/sections/PersonalDetails";
import { LiaGraduationCapSolid } from "react-icons/lia";
import {
  IoBagCheckOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { TbFolderOpen } from "react-icons/tb";
import { MdOutlineContentPaste, MdOutlineFileDownload } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { LuDownload } from "react-icons/lu";

const resumePageData = [
  { icon: <FiUser />, title: "Professional Summary", children: <Summary /> },
  {
    icon: <LiaGraduationCapSolid />,
    title: "Education",
    children: <Education />,
  },
  {
    icon: <IoBagCheckOutline />,
    title: "Experience",
    children: <Experience />,
  },
  {
    icon: <RiExpandLeftRightLine />,
    title: "Skills & Abillities",
    children: <ResumeSkills />,
  },
  { icon: <TbFolderOpen />, title: "Projects", children: <Projects /> },
  {
    icon: <MdOutlineContentPaste />,
    title: "Personal Details",
    children: <PersonalDetails />,
  },
];
const contactDetails = [
  {
    icon: <IoLocationOutline />,
    text: "Indore,(M.P)452011",
  },
  {
    icon: <IoCallOutline />,
    text: "+91 7692882971 ",
  },
  {
    icon: <CgMail />,
    text: "jipratik49@gmail.com ",
  },
];
function Resume() {
  return (
    <section className="bg-[var(--primary)] min-h-screen px-[10vw] pt-20 md:pt-28 text-white ">
      <div className="bg-[var(--secondary)] rounded-xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 min-h-1 w-full"></div>

        <div className="p-8 flex flex-col items-center gap-5 ">
          <h1 className="uppercase text-2xl md:text-3xl font-semibold ">
            Pratik Rathore
          </h1>
          <p className="capitalize text-blue-400 text-sm">full stack Developer</p>
          <div className="flex flex-col sm:flex-row gap-4 text-xs ">
            {contactDetails.map((item) => (
              <div className="flex items-center gap-1  ">
                <p className="text-blue-500 text-base ">{item.icon}</p>
                <p className="text-gray-400">{item.text} </p>
              </div>
            ))}
          </div>
          <a href="/Pratik_Resume.pdf"  download className="flex gap-2 mt-2 items-center bg-gradient-to-r from-blue-600 to-blue-400 py-2 px-4 rounded-md"><LuDownload /> <p className="text-sm">Download Resume</p></a>
        </div>
      </div>

      <div className="mt-6 pb-12 flex flex-col gap-6  ">
        {resumePageData.map((item) => (
          <ResumeContainer
            icon={item.icon}
            title={item.title}
            children={item.children}
          />
        ))}
      </div>
    </section>
  );
}
export default Resume;
