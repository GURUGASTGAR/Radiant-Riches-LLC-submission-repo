import Advertise from "../minicomponents/midpart/Advertise"
import Products from "../minicomponents/midpart/Products"
import RelatedDeals from "../minicomponents/midpart/RelatedDeals"

const Midpart = () => {
  return (
    <div className="flex justify-center">
        <div>
          <div className=" w-[1024px] flex flex-wrap">
            <Advertise/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
          </div>
          <div className="text-[32px] text-gray-900 m-4">Related deals you might like for</div>
          <div className="flex justify-center items-center">
            <RelatedDeals/>
            <RelatedDeals/>
            <RelatedDeals/>
          </div>
        </div>
    </div>
  )
}

export default Midpart