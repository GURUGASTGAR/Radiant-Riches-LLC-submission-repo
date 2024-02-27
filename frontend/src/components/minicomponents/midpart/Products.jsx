import Bestvalue from "../../../smallComponents/BestDeal"
import Builder from "../../../assets/Builder.png"
import ProdDescription from "../../../smallComponents/ProdDescription"
import Rating from "../../../smallComponents/Rating"
import Button from "../../../smallComponents/Button"

const Products = () => {
  return (
    <div className="relative w-full h-[255px] bg-white m-2 text-gray-600">
        <Bestvalue  choice={"Value"}/>
        <div className="absolute left-[-22px] top-4 w-[44px] h-[44px] rounded-full border border-s border-gray-300 text-center pt-2 mt-2 ">1</div>
         <div className="flex justify-around">
             <div className="p-10  text-center">
               <img className=" w-[141px] h-[103px] mb-2" src={Builder}/>
               <h4>Builder</h4>
             </div>
             <ProdDescription/>
             <div className="flex flex-col justify-between items-center">
              <Rating/>
              <Button props={"view"}/>
             </div>
         </div>

    </div>
  )
}

export default Products