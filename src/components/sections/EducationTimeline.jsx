import { CiCalendar } from "react-icons/ci";
import { educationData } from "../../data/educationData";
import { PiBookOpenBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const EducationTimeline = () => {
  return (
    <div className="relative container mx-auto  md:px-[7vw]">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2  transform -translate-x-1/2 h-full border-l-2 border-gray-500"></div>

      {educationData.map((edu, idx) => {
        const Icon = edu.icon;
        return (
          <div
            style={{ "--accent": edu.color }}
            key={edu.id}
            className={`mb-10 flex w-full  md:${
              idx % 2 === 1 ? "justify-start" : "justify-end"
            } items-center`}
          >
            <div className="w-full md:w-1/2  ">
              <div
                className={`bg-gray-800 p-4 py-6 flex flex-col gap-1 rounded-xl border-l-4 ${idx %2 ===0?'md:border-l-4':'md:border-r-4 md:border-l-0'} border-[color:var(--accent)]/70 relative`}
              >
                <span
                  className={`absolute right-4 top-4   bg-[color:var(--accent)]/90 p-2 rounded-full`}
                >
                  <Icon fontWeight={600} className="text-white text-2xl " />
                </span>

                <div className={`bg-black p-[5px] rounded-full w-fit absolute -top-1 -left-3 ${idx%2 === 0?"md:-top-1 md:-left-3":"md:-top-1 md:-right-3 md:left-auto"}  shadow-[0_0_8px_4px_rgba(255,255,255,0.5)]`}>
                  <div className="bg-[color:var(--accent)] w-fit  rounded-full p-[6px]   "></div>
                </div>

                <span
                  className={`text-[color:var(--accent)] bg-[color:var(--accent)]/10 border w-fit rounded-full px-2  font-semibold flex gap-1 items-center my-1`}
                >
                  <CiCalendar />
                  <p className="text-sm"> {edu.date}</p>
                </span>
                <h3 className="text-lg  md:text-xl font-bold my-2">{edu.title}</h3>
                <p className="text-sm md:text-base text-gray-300 flex items-center gap-2"> <PiBookOpenBold  fontSize={"20px"}  />
{edu.board}</p>
                <p className="text-sm md:text-base text-gray-300  flex items-center gap-2"> <IoLocationOutline fontSize={"20px"} />{edu.location}</p>
                <p className="mt-2 text-gray-300 text-sm">{edu.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationTimeline;
