import Catagories from "../minicomponents/topbar/Catagories"
import Searchbar from "../minicomponents/topbar/Searchbar"
import TodaysDeal from "../minicomponents/topbar/TodaysDeal"
import WebsiteBuilders from "../minicomponents/topbar/WebsiteBuilders"


export const Topbar = () => {
  return (
    <div className="w-full h-[64px] bg-gray-900 flex justify-center items-center gap-10">
      <Searchbar/>
      <Catagories/>
      <WebsiteBuilders/>
      <TodaysDeal/>
    </div>
  )
}
