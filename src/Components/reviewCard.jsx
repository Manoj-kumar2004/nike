
const ReviewCard = ({customerName,rating,feedback,imgURL}) => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center py-5 text-center'>
    <div className=" object-contain">
    <img src={imgURL} alt="review" className="rounded-full" width={124} height={124}/>
    </div>

    <p className="max-w-sm info-text">{feedback}</p>
    
    </div>
  )
}

export default ReviewCard 