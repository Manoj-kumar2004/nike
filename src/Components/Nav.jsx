import {headerLogo} from "../assets/images"
import { navLinks } from "../Constants"
import { hamburger } from "../assets/icons"
const Nav = () => {
  return (
    <header className="padding-x z-10  w-full py-8 absolute">
        <nav className="max-container flex  items-center justify-between">
            <img src={headerLogo} alt="logo" width={130} height={26}/>
        
        <ul className="flex-1 flex max-lg:hidden  justify-center items-center gap-16 font-montserrat tracking-tight text-orange-400 ">
          {
            navLinks.map(((link)=>(
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            )))
          }
        </ul>
          <img src={hamburger} alt="hamburger" width={25} height={25} className="hidden max-lg:block"/>
        </nav>
    </header>
  )
}

export default Nav