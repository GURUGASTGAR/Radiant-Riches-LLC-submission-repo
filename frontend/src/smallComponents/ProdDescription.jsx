import { IoIosArrowDown } from "react-icons/io";

const ProdDescription = () => {
  return (
    <div className="max-w-[500px]">
        <div>
        <div className="text-gray-900 font-bold">WixPro 72-Inch Responsive Website Builder-</div> 
              Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
        </div>
        <div>
        <div className="text-gray-900 font-bold my-2">Main highlights</div>
        <div className="mx-2">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</div>
        </div>
        <div className="hover:underline hover:text-blue-500 flex items-center p-2">show more <IoIosArrowDown className="mt-2 m-1"/></div>
    </div>
  )
}

export default ProdDescription