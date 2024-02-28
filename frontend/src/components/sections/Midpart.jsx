import Advertise from "../minicomponents/midpart/Advertise"
import Products from "../minicomponents/midpart/Products"
import RelatedDeals from "../minicomponents/midpart/RelatedDeals"
import Signup from "../minicomponents/midpart/Signup"

const Midpart = () => {
  const desc = "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
  return (
    <div className="flex justify-center">
        <div>
          <div className=" w-[1024px] flex flex-wrap">
            <Advertise/>
            <Products choice={'Choice'} idx={1} MainDiscription={desc}/>
            <Products choice={'Value'} idx={2} MainDiscription={desc}/>
            <Products idx={3} MainDiscription={desc}/>
            <Products idx={4}/>
          </div>
          <div className="text-[32px] text-gray-900 m-4">Related deals you might like for</div>
          <div className="flex justify-center items-center">
            <RelatedDeals/>
            <RelatedDeals/>
            <RelatedDeals/>
          </div>
          <div>
            <Signup/>
          </div>
        </div>
    </div>
  )
}

export default Midpart