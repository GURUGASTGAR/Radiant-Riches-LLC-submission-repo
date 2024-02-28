import {Rate} from "antd";

const Rating = () => {
  return (
    <div className="w-[135px] h-[118px] bg-blue-50 rounded-b-[12px]  text-blue-900 items-center text-center">
        <div className="text-[32px]">9.8</div>
        <div>Excellent</div>
        <div className="flex justify-center p-2 ">
          <Rate  defaultValue={3} className="text-[11px]"allowHalf/>
        </div>
    </div>
  )
}

export default Rating