
import ReviewCard from "../Components/reviewCard"
import { reviews } from "../Constants"

const Customerreview = () => {
  return (
    <div>
    <div className=" xl:padding-x sm:max-md:px-5 text-center flex flex-col justify-evenly" >
      <h1 className="text-4xl font-bold font-montserrat py-5">What our <span className="text-coral-red">Customers say!</span></h1>
      <p className="info-text text-xl text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore veritatis corrupti minus necessitatibus, mollitia cum quas quidem fuga aperiam amet impedit provident tempora ipsam rerum! Tempora facere iure nemo.</p>
    </div>
    <div className="flex max-lg:flex-col flex-row justify-evenly">
      {reviews.map((review)=>(
        <div>
          <ReviewCard imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Customerreview