/* eslint-disable react/prop-types */
import { IoCheckmarkOutline } from "react-icons/io5";


const MainHighlightDesc = () => {
  return (
    <div>
        <div className="bg-orange-100 w-[505px] h-[116px] text-gray-500 text-[15px] rounded-lg">
        <MiniComponent rating={9.9} value={"Building Responsive"} />
        <MiniComponent  rating={8.9} value={"Cool"} />
        <MiniComponent  rating={8.9} value={"Docs"} />
        </div>
        <div>Why we love it</div>
        <div className="mt-3">
          <TickMark text={"Documentation"}/>
          <TickMark text={"Easy Use"}/>
          <TickMark text={"Out of box"}/>
        </div>
    </div>
  )
}


function MiniComponent(props){
    return<div className="flex justify-start gap-2">
       <div className="bg-white m-2 px-2 rounded-md text-blue-500">{props.rating}</div>
       <div className="pt-2">{props.value}</div>
    </div>
}
function TickMark({text}){
    return <div className="flex justify-start gap-3 text-[15px]">
      <IoCheckmarkOutline className="text-blue-700 p-[4px] bg-blue-100 w-[22px] h-[22px] rounded-full"/>
      <h1 >{text}</h1>
    </div>
}
export default MainHighlightDesc