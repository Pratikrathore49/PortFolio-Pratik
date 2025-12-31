import React from "react";
import { getInTouchData } from "../../data/getInTouchData";

const GetInTouchComponents = () => {
  return (
    <>
      <section classname="bg-[var(--primary)] min-h-screen ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {getInTouchData.map((item) => {
            const Icon = item.icon;
            return (
              <div className="bg-[var(--secondary)] p-4 rounded-md">
                <div style={{ "--accent": item.color }} className="flex items-center gap-2">
                  <span className="text-2xl p-2 rounded-full bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent)]/80 to-[color:var(--accent)]/60 ] ">
                    {<Icon />}
                  </span>
                  <p className="text-xl font-medium"> {item.app} </p>
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default GetInTouchComponents;
