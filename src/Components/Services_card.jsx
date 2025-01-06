
const Services_card = ({imgURL,label,subtext}) => {
  return (
    
    <div className="shadow-md hover:shadow-lg flex flex-col p-5 rounded-md">
    <img  width={32} height={32} src={imgURL} alt={label} className='bg-coral-red rounded-full p-1' />
    <h5 className="font-bold ">{label}</h5>
    <p className="text-slate-300">{subtext}</p>
    </div>

  )
}

export default Services_card