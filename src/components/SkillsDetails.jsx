import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SkillsDetails = ({ data }) => {
  const [open, setOpen] = useState(false);
  const My_icon = data.icon;
  const colorData = {
    blue: "border-blue-400 bg-blue-600/20",
    teal: "border-teal-400 bg-teal-600/20",
    orange: "border-orange-400 bg-orange-600/20",
    purple: "border-purple-400 bg-purple-600/20",
    green: 'border-green-400 bg-green-600/20',
    yellow: 'border-yellow-400 bg-yellow-600/20'
  };

  return (
    <section className=" px-4 md:px-[10vw] bg-[var(--secondary)] rounded-md text-white py-4">
      <div className=" flex justify-between items-center  ">
        <div className="flex items-center gap-4  ">
          <p className="rounded-md bg-blue-500 w-fit p-1 text-2xl  ">
            <My_icon />
          </p>
          <h4 className=" font-semibold test-xl md:text-2xl ">{data.title}</h4>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>

      {/* indivisual skills */}
      {open && (
        <div className="pt-8 grid md:grid-cols-2 grid-cols-1 gap-8 transition-all ease-in-out duration-300 ">
          {data.skills.map((item) => (
            <div className={`border ${colorData[data.color]} border-blue-400 bg-blue-600/20 rounded-md px-4 py-4 `}>
              <div className="flex justify-between ">
                <p>{item.name}</p>
                <p>{item.level}</p>
              </div>
              <div    className=" min-w-full rounded-full h-2 overflow-hidden bg-blue-600/20">
                <div
                  style={{ width: `${item.level}% `, background:`${data.color}` }}
                  className="w-[50%] rouned-full h-2 bg-blue-500  "
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SkillsDetails;
