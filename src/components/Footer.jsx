import { Link } from "react-router";

const Footer = () => {
  return (
    
      <div className="bg-black text-gray-300 flex md:px-[10vw] px-4 items-center md:justify-between text-xs  w-full flex-col gap-2 md:flex-row py-8 ">
        <p>© 2025 Atul singh thakur. All rights reserved.</p>
   
      <div className="flex gap-2 ">
        <Link className="hover:text-blue-600 cursor-pointer">Contact</Link>
        <Link className="hover:text-blue-600 cursor-pointer">Skills</Link>
        <Link className="hover:text-blue-600 cursor-pointer">Education</Link>
        
      </div>
         </div>

  );
};
export default Footer;
