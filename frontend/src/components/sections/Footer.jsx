import FoooterCatrgories from "../minicomponents/footer/FoooterCatrgories";
import FooterContact from "../minicomponents/footer/FooterContact";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-x-5 w-full h-[452px] bg-gray-900 text-gray-400">
      <div className="flex justify-around gap-x-[150px] w-[1024px]">
      <FoooterCatrgories/>
      <FooterContact/>
      <div className="flex m-5 items-center"><span>United State</span><IoIosArrowDown className="mx-2 pt-1 text-lg"/></div>
      </div>
    </div>
  )
}

export default Footer;