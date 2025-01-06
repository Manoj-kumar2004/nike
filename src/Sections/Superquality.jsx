import { shoe8 } from "../assets/images";
import Button from "../Components/button";


const Superquality = () => {
  return (
      <div className='relative w-full max-xl:padding-x pt-28 flex flex-col md:flex-row md:justify-center justify-between'>
        <div>
    <h2 className='mt-10 font-palanquin font-bold text-4xl max-container'>

      <p className=' whitespace-nowrap pr-10 relative z-10 capitalize'> We provide </p>
      <span className='text-coral-red mt-3 inline-block capitalize'>super quality </span>
      Shoes
    </h2>
    <p className='text-slate-400 text-lg mt-5  leading-8 sm:max-w-sm info-text max-sm:justify-center'>
    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
    </p>
    <p className='text-slate-400 text-lg mt-5  leading-8 sm:max-w-sm mb-5'>
    Our dedication to detail and excellence ensures your satisfaction
    </p>
    <Button label={"More details" }/>
    </div>
    <img src={shoe8} className="mt-5" alt="shoe" />
    </div>
  )
}

export default Superquality