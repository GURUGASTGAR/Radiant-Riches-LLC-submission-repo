/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import MainHighlightDesc from "./MainHighlightDesc";

const ProdDescription = ({MainDiscription}) => {
  return (
    <div className="max-w-[500px]">
        <div>
        <div className="text-gray-900 font-bold">WixPro 72-Inch Responsive Website Builder-</div> 
              Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
        </div>
        <div>
        <div className="text-gray-900 font-bold my-2">Main highlights</div>
        <div className="mx-2">{MainDiscription?MainDiscription:<MainHighlightDesc/>}</div>
        </div>
        <div className="hover:underline hover:text-blue-500 flex items-center p-2">show more <IoIosArrowDown className="mt-2 m-1"/></div>
    </div>
  )
}

export default ProdDescription