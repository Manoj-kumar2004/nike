import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../Constants"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start ">
      <div className="flex flex-col gap-2 text-sm justify-start">
        <img src={footerLogo} alt="logo" width={128} height={128} />
        <p className="max-w-md text-white leading-7 font-montserrat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid molestiae reprehenderit autem quas, assumenda cumque hic mollitia aliquam, sunt repellat possimus non architecto similique iste voluptatum quaerat aut corporis? Vel!</p>
        <div className="flex flex-row gap-2 justify-between items-center max-w-md py-5">
          {
            socialMedia.map((media)=>
            (
              <img src={media.src} className="bg-white border rounded-full p-1" alt={media.alt} width={32} height={32}/>
            ))
          }


        </div>
        <div className="flex flex-1 gap-3 justify-between align-center text-3xl text-gray-200">
        {
          footerLinks.map((foot)=>
          (
            <div>
            <h4>{foot.title}</h4>
            <ul className="">
            {
              foot.links.map((link)=>
              (
                <li className="font-montserrat hover:text-gray-400 text-sm lg:text-md p-2 "><a>{link.name}</a></li>
              ))
            }
            </ul>
            </div>
          ))
        }
        </div>
      </div>
        <div className="flex flex-row mt-10 text-gray-100 justify-between">
          <div className="text-sm font-montserrat flex flex-row gap-2 ">
          <img src={copyrightSign} alt="" />
          <p>Copy-Right@Nike<span> All rights reserved</span></p>

          </div>
        <p>Terms and conditions</p>
        </div>
    </footer>
  )
}

export default Footer