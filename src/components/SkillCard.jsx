
const SkillCard = ({name,color}) =>{

    return(
        <section className="rounded-xl  overflow-hidden w-full">
        <div className={`w-full h-[4px]  bg-gradient-to-r ${color} `}>
        
        </div>
        
        <div className="bg-[#1e2939]  text-white p-6  justify-center items-center flex ">
          <h3 className="uppercase">{name}</h3>
        </div>
        </section>
    )
}

export default SkillCard
