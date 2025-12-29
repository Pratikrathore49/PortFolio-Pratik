import React from "react";

const ResumeSkills = () => {
  const ResumeSkillsData = [
    {
      field: "Programming Languages",
      names: ["C", "C++", "python", "javascript"],
    },
    {
      field: "Software Skills",
      names: [
        "Deployment",
        "Data management",
        "Computer operations management",
      ],
    },
    {
      field: "Frontend Technologies",
      names: [
        "React JS",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      field: "Backend Development ",
      names: [
        "Django",
        "Django Rest Framework",
        "NodeJs",
        "Express",
        "MongoDB",
        "SQL",
        "REST API",
        "Microservices",
      ],
    },
    {
      field: "Developer Tools ",
      names: [
        "VS Code",
        "Postman",
        "AWS",
        "Docker",
        "Git",
        "GitHub",
        "Chat Gpt",
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {ResumeSkillsData.map((item) => (
        <div>
          
          <h3 className="capitalize  font-semibold py-1 text-lg">{item.field}</h3>
          <div className="flex gap-2 ">
            {item.names.map((val) => (
              <p className="text-blue-300 bg-gray-300/20 border border-blue-700/30  px-2 text-base rounded-lg w-fit flex items-center justify-center capitalize">
                {val}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeSkills;
