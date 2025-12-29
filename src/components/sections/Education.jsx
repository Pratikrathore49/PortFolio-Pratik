function Education() {
  const educationData = [
    {
      study: "Bachelor of Technology",
      university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya ,Bhopal",
      year: "May 2026",
    },
    {
      study: "Higher Secondary",
      university: "M.P Board ,Bhopal",
      year: "2022",
    },
    {
      study: "High School",
      university: "M.P Board, Bhopal",
      year: "May 2020",
    },
  ];
  return (
    <section >
      {educationData.map((item) => (
        <div className="mt-5 ">
          <li className="font-semibold text-base text-white marker:text-xl marker:text-blue-500">
            {item.study}
          </li>
          <div className="flex justify-between mt-0.5">
            <p className="text-gray-300 text-sm ">{item.university}</p>
            <p className="text-blue-400 text-sm">{item.year}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
