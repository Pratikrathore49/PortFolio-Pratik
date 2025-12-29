

const ResumeContainer = ({ children,icon,title }) => {
  return (
    <section className="rounded-xl  bg-[var(--secondary)] py-6 px-8 text-white  min-h-24 flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <div className="rounded-md bg-gradient-to-r from-blue-600 to-blue-400 flex justify-center items-center text-lg p-2">
          {icon}
        </div>
        <h2 className="font-semibold  text-xl capitalize">
          {title}
        </h2>
      </div>
      <div className="min-w-full bg-gray-600 h-[1px]"></div>
      <div>{children}</div>
    </section>
  );
};

export default ResumeContainer;
