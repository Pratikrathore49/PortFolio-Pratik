import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GiEskimo, GiSpellBook } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const menuData = [
  { icon: <FiHome />, name: "HOME" },
  { icon: <GiEskimo />, name: "SKILLS" },
  {
    icon: <GiSpellBook />,
    name: "RESUME",
  },
  {
    icon: <FaGraduationCap />,
    name: "EDUCATION",
  },
  {
    icon: <MdOutlineMessage />,
    name: "CONTACT",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[var(--primary)] fixed top-0 left-0 z-50  w-full ">
      <div className=" flex items-center py-4 px-4 md:px-[10vw] justify-between">
        <div className="flex font-semibold  items-center text-xl   text-white">
          <p className="text-purple-700  gap-2 flex items-center ">
            <RiExpandLeftRightLine size={36} /> PRATIK
          </p>
          &nbsp; RATHORE
        </div>

        <div className="text-[#dcdfe7]  items-center gap-6 text-base hidden md:flex">
          {menuData.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-2 items-center py-1 cursor-pointer hover:text-purple-400 transition-colors"
            >
              {item.icon}
              <p className="text-sm font-semibold ">{item.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className=" md:hidden text-white p-2 focus:ouline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-300 rounded-md"
        >
          {open ? <RxCross2 fontSize={24} /> : <IoMenu fontSize={24} />}
        </button>

        {open && (
          <div className="md:hidden  text-[#dcdfe7]   bg-[var(--primary)] absolute top-[74px] -left-1 w-full  px-4 pb-4 ">
            {menuData.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 items-center py-2 border-b border-white/10 "
              >
                {item.icon}
                <p className="text-sm font-semibold text-[#dcdfe7] ">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
