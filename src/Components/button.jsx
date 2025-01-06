
import {arrowRight} from "../assets/icons/index"
const Button = ({label,bg_color,border_color}) => {
  return (
 <button className={`flex gap-7 justify-start items-center px-7 py-4 ${bg_color?'bg-coral-red':'bg-slate-200'} ${border_color?'bg-black':'border-coral-red'} rounded-full text-white font-montserrat font-bold`}>
  {label}
  <img className="w-5 h-5" src={arrowRight} alt="arrow" />

 </button>
  )
}

export default Button