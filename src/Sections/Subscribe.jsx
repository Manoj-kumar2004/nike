import Button from "../Components/button"

const Subscribe = () => {
  return (
    <section className="text-4xl max-container items-center justify-center flex flex-col gap-5 text-center">
      <h1 className="font-palanquin lg:max-w-md"><span className="text-coral-red font-montserrat"> Subscribe </span> for news & updates</h1>
      <div className="flex p-5 max-sm:flex-col w-[70%] items-center justify-end lg:max-w-[40%] max-sm:w-full rounded-full border border-solid border-slate-300">
        <input type="text " className="text-xl focus:outline-none font-montserrat" placeholder="Subscribe@nike.com"/>
        <div className="text-xl">
        <Button label={"Send!"} />
        </div>
      </div>
    </section>
  )
}

export default Subscribe