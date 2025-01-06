import { products } from "../Constants"
import { star } from "../assets/icons"
const Popular_card = () => {
  return (  
    <div className="flex flex-wrap gap-2 mt-10 xl:justify-evenly max-md:justify-center">
        {
            products.map((prod)=>
            (   <div className="flex flex-col justify-start gap-2 mb-2 ">
               <img src={prod.imgURL} alt="shoe" />
               <div className="flex justify-start items-center "><img className="inline-block" src={star} alt="str" width={24} height={24} /><span className="px-2">(4.2)</span></div>
                <p className="bold font-montserrat text-2xl">{prod.name}</p>
                <p className="text-xl font-bold text-slate-400">{prod.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Popular_card