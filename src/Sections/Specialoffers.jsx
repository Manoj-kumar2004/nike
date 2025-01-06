import { offer } from "../assets/images"
import Button from "../Components/button"
Button
offer
const Specialoffers = () => {
  return (
    <section className="xl:padding-x">
      <div className="flex flex-col xl:flex-row ">
      <img className="object-contain" src={offer} alt="offer" width={570} height={522} />
      <h2 className='mt-10 font-palanquin font-bold text-4xl max-container '>

      <p className=' whitespace-nowrap inline-block pr-10 relative z-10 capitalize'> Special</p>
      <span className='text-coral-red mt-3 inline-block capitalize'>Offer</span>

      <p className='text-slate-400 text-lg mt-5  leading-8 sm:max-w-sm info-text max-sm:justify-center'>
      Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
      </p>
      <p className='text-slate-400 text-lg mt-5  leading-8 sm:max-w-sm mb-5'>
      Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className="flex justify-start items-start text-sm gap-5">
      <Button label={"click here!" }/>
      <Button label={"learn more"} bg_color={true} border_color={true}/>
      </div>
      </h2>
      </div>
    </section>
  )
}

export default Specialoffers