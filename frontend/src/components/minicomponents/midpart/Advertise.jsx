import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";


const Advertise = () => {
  return (
    <div className="w-full h-auto ">
        <div className="text-[48px] py-3 text-gray-900">
        Best Website builders in the US
        </div>
        <div className="w-full h-[1.33px] bg-gray-200"></div>
        <div className="flex justify-between my-3 text-gray-600">
          <div className="flex justify-start text-center ">
             <CiCircleCheck className="h-[20px] w-[20px] me-2 mt-1"/>
             <h4 >Last Updated - February 22, 2020</h4>
             <CiCircleInfo className="h-[20px] w-[20px] mx-3 mt-1"/>
             <h4>Advertising Disclosure</h4>
          </div>
          <div className="flex justify-normal">
            <h4>Top Relevant</h4>
            <IoIosArrowDown className="h-[20px] w-[20px] ms-2 mt-1"/>
          </div>
        </div>
        <div className="w-full h-[1.33px] bg-gray-200"></div>
        <div className="flex justify-start gap-[70px] mx-4 text-gray-600 py-4">
            <div>Tools</div>
            <div>AWS Builder</div>
            <div>Start Build</div>
            <div>Build Supplies</div>
            <div>Tooling</div>
            <div>BlueHosting</div>
        </div>
        <div className="flex justify-start gap-2 items-center text-gray-600 pb-3">
         <div>Home</div>
         <MdArrowForwardIos/>
         <div>Hosting for all</div>
         <MdArrowForwardIos/>
         <div>Hosting</div>
         <MdArrowForwardIos/>
         <div>Hosting6</div>
         <MdArrowForwardIos/>
         <div>Hosting5</div>       
        </div>
    </div>
  )
}

export default Advertise