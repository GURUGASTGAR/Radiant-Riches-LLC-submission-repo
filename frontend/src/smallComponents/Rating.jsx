import { MdOutlineStarPurple500 } from "react-icons/md";

const Rating = () => {
  return (
    <div className="w-[135px] h-[118px] bg-blue-50 rounded-b-[12px]  text-blue-900 items-center text-center">
        <div className="text-[32px]">9.8</div>
        <div>Excellent</div>
        <div className="flex justify-center p-2">
            <MdOutlineStarPurple500 className="text-yellow-400 h-[12px]"/>
            <MdOutlineStarPurple500 className="text-yellow-400 h-[12px]"/>
            <MdOutlineStarPurple500 className="text-yellow-400 h-[12px]"/>
            <MdOutlineStarPurple500 className="text-yellow-400 h-[12px]"/>
            <MdOutlineStarPurple500 className="text-yellow-400 h-[12px]"/>

        </div>
    </div>
  )
}

export default Rating