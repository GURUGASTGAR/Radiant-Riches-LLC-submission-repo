import Builder from "../../../assets/Builder.png"
import Button from "../../../smallComponents/Button";


const RelatedDeals = () => {
  return (
    <div className="w-[333px] h-[425px] bg-white m-2 flex flex-col justify-between gap-y-1 p-5  text-gray-600 shadow-md shadow-gray-200 rounded-lg ">
        <img  className=" w-[141px] h-[103px] ml-[75px] " src={Builder}/>
        <div>
            <span className="bg-gray-100 px-2 py-1 m-1 rounded-md">20% Off</span>
            <span className="bg-gray-100 px-2 py-1 m-1 rounded-md">Limited Offer</span>
        </div>
        <div className="text-gray-700 text-center mx-[90px]">Webbuilder 1</div>
        <p>Computer  Modern clasic with wix support</p>
        <div className="flex gap-4 items-end">
            <span className="text-[20px]">$39.96</span>
            <span className="text-[14px] text-gray-400">$49.96</span>
            <span className="text-[12px] text-red-500">(20% Off)</span>
        </div>
        <Button props={' View Deal '}/>
    </div>
  )
}

export default RelatedDeals;