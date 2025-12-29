import React from "react";
import { FaCalendarAlt, FaGlobe, FaUser } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";

const personalData = [
  {
    icon: <FaCalendarAlt/>,
    contentKey:"Date of Birth",
     contentValue: "25/03/2005",
  },
  {
    icon: <GiDiamondRing/>,
    contentKey:"Marital Status",
     contentValue: "Single",
  },
  {
    icon: <FaGlobe/>,
    contentKey:"Nationality",
    contentValue: "Indian",
  },
  {
    icon: <FaUser/>,
    contentKey:"Gender",
    contentValue: "Male",
  },
];
const PersonalDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 " >
    {personalData.map((item)=>(<div className="flex gap-3 items-center text-gray-200  font-medium ">
     <p className="text-blue-400 ">{item.icon}</p>
     <p className="font-[550]">{item.contentKey}:</p>
     <p className="text-gray-300">{item. contentValue}</p>
     </div>
    ))}
    </div>
  );
};

export default PersonalDetails;
