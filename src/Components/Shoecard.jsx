
const Shoecard = ({shoeURL,changeBigImage,bigImg}) => {
const handleClick = ()=>
{
  if(shoeURL.bigShoe !== bigImg)
  {
    changeBigImage(shoeURL.bigShoe)
  }
}
  return (
    <div className={`bg-card bg-cover bg-center border-2 border-solid rounded-xl flex justify-center items-start sm:px-2 sm:py-2   ${
      shoeURL.bigShoe === bigImg ? 'border-coral-red' : 'border-transparent'}`
      } onClick={handleClick}>
      <div width={127} height={120} className="object-contain " > 
      <img src={shoeURL.thumbnail} alt="shoe" />
      </div>
    </div>
  )
}

export default Shoecard