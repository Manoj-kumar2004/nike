import Popular_card from "../Components/Popular_card"
const Popularproduct = () => {
  return (
    <div className="padding-x">
      <h1 className=" font-montserrat text-2xl ">
        <span className="">Our </span>
        <span className="text-coral-red">new </span>
        products
      </h1>
      <div className="font-monsterrat font-medium bold leading-7 ">
        <p className="text-slate-400">A product is something made in a factory; <span className="text-coral-red">a brand is something that is bought by the customer</span>.br A product can be copied by a competitor; a brand is unique. A product can be quickly outdated; a successful brand is timeless.</p>
      <Popular_card/>

      </div>
    </div>
  )
}

export default Popularproduct