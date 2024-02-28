/* eslint-disable react/prop-types */


const Button = ({props}) => {
  return (
    <div>
        <button className=" px-[100px]   w-full h-[48px] bg-blue-500 text-white rounded-lg hover:scale-105 shadow-lg shadow-gray-300">{props}</button>
    </div>
  )
}

export default Button