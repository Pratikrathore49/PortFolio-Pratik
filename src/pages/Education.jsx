import EducationTimeline from "../components/sections/EducationTimeline";

const Education = () => {
  return (
    <section className="bg-gray-900 min-h-screen text-white px-4 md:px-[10vw]  pt-20">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl bg-gradient-to-r from-purple-500 to-blue-500 md:text-5xl font-bold text-center bg-clip-text  text-transparent  mb-4 [text-shadow:0_0_0px_rgba(255,255,255,0.4)]">
          EDUCATION
        </h2>
        <p className="text-center  text-base sm:text-lg md:text-xl text-gray-400 mb-8 ">
          My academic journey and Experience
        </p>
        <EducationTimeline />
      </div>
    </section>
  );
};

export default Education;
