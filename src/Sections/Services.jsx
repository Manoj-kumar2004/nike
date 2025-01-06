import Services_card from "../Components/Services_card"
import { services } from "../Constants"


const Services = () => {
  return (
    <section>
        <p className="max-container text-4xl font-bold">We <span className="text-coral-red">Provide Customer</span> Services</p>
        <div className="flex flex-row gap-10 max-sm:flex-col mt-5">
            {
            services.map((serv)=>
            (
                <Services_card imgURL={serv.imgURL} label={serv.label} subtext={serv.subtext}/>
            ))}
            </div>
    </section>
        
  )
}

export default Services