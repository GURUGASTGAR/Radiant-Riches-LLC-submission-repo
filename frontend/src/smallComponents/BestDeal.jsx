/* eslint-disable react/prop-types */
import { CiTrophy } from "react-icons/ci";


const Bestvalue = ({choice}) => {

  return (
    <div className="bg-orange-500 h-[34px] w-min flex justify-around  items-center rounded-e-md gap-2 px-2  text-white text-[16px] absolute left-[-10px] top-[-17px]">
      <CiTrophy className="font-extrabold text-[20px] my-2 "/>
      Best 
      <div >{choice}</div>
    </div>
  )
}

export default Bestvalue