const ProjectCard = ({ project_name, description, icon_bg, icon, tech }) => {
  const MyIcon = icon;


  const colors = ["green", "indigo", "orange", "blue"];

  const chooseCol = {
    green: "bg-green-600/20 text-green-400 border-green-500/30",
    indigo: "bg-indigo-600/20 text-indigo-400 border-indigo-500/30",
    orange: "bg-orange-600/20 text-orange-400 border-orange-500/30",
    blue: "bg-blue-600/20 text-blue-400 border-blue-500/30",
  };



  return (
    <div className="w-full  bg-[var(--secondary)] rounded-lg overflow-hidden  shadow-lg shadow-black/30 ">
      <p
        className={`bg-gradient-to-r ${icon_bg} min-w-full flex justify-center items-center min-h-[16vh] md:min-h-[18vh] mx-auto text-white text-4xl`}
      >
        <MyIcon />
      </p>
      <div className="px-5  ">
        <h3 className="capitalize font-semibold py-2">{project_name}</h3>
        <p className="text-gray-400 text-xs leading-snug pb-4">{description}</p>
        <div className="flex gap-2 pb-4 flex-wrap">
          {tech.map((item, idx) => (
            <p
              key={idx}
              className={` rounded-md  text-xs px-3 py-1 ${
                chooseCol[colors[idx]]
              }  bg-blue-600/20 text-blue-400 border-blue-500/30 `}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
