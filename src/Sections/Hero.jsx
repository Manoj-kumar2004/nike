import {shoes,statistics} from '../Constants/index';
import { useState,useEffect } from 'react';
import Button from '../Components/button'
import Shoecard from '../Components/Shoecard';
import { bigShoe1 } from '../assets/images';

export const Hero = () => {
  const [bigshoeimg,setbigshoeimg]=useState(bigShoe1);
  return (
    
  <section className='w-full flex xl:flex-row flex-col min-h-screen justify-center padding-x gap-10 max-container'>
    <div className='relative w-full xl:w-2/5 max-xl:padding-x pt-28 flex flex-col justify-center items-start'>
    <span className='text-xl text-coral-red font-medium '>Our Summer Collections</span>
    <h1 className='mt-10 font-palanquin font-bold max-md:text-4xl text-8xl max-sm:text-[50px] max-sm:leading-[72px] z-10 max-container xl:bg-white'>

      <p className=' whitespace-nowrap pr-10 relative z-10 '>The new Arrival</p>
      <span className='text-coral-red mt-3 inline-block'>Nike </span>
      Shoes
    </h1>
    <p className='text-slate-400 font-montserrat text-lg mt-5 mb-20 leading-8 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
    <Button label={"click me!"} bg_color={true} border_color={true}/>
    <div className='flex font-montserrat gap-5 py-2 leding-none flex-wrap mt-10 justify-start items-start'>
      {
        statistics.map((data)=>
        (
          <div key={data.label}>
            <p className='font-bold mt-5 mb-2 text-4xl xl:text-5xl font-palanquin'>{data.value}</p>
            <p className='text-slate-400'>{data.label}</p>
          </div>
        ))
      }
    </div>
    </div>
    <div className='flex flex-1 justify-center items-center xl:min-h-screen relative bg-primary max-xl:py-10 bg-hero bg-cover bg-center mt-5 sm:mt-2'>
    <img  className="object-contain " width="610px" height="500px"  src={bigshoeimg} alt="shoe 1" />
    <div className='flex absolute -bottom-[5%] mt-5 gap-5'>
      {
        shoes.map((shoe)=>
        (
          <Shoecard shoeURL={shoe} changeBigImage={(shoe)=>{setbigshoeimg(shoe)}} bigImg={bigshoeimg}/>
          
          
        ))
      }
    </div>
    </div>
   
  </section>
  )
}

export default Hero