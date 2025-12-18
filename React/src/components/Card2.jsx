import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../redux/cartslice";

function Card2({name,image,price,id,qty}) {
    let dispatch=useDispatch()
  return (
    <div className="w-full h-[120px] p-2">
      <div className="w-full h-full flex justify-between items-center p-2 rounded-md shadow-2xl">
        <div className="flex gap-4">
          <div className="w-[60px] h-full overflow-hidden rounded-md flex-shrink-0">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-between">
            <div className="text-lg text-gray-700 font-semibold">{name}</div>

            <div className="flex items-center w-[100px] h-[35px] border rounded-md bg-white">
              <button className="w-1/3 h-full font-bold cursor-pointer">
                -
              </button>
              <span className="w-1/3 h-full flex justify-center items-center">
              {qty}
              </span>
              <button className="w-1/3 h-full cursor-pointer font-bold">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end h-full py-2">
          <span className="text-lg font-semibold text-gray-700">{price}</span>
          <RiDeleteBinLine className="text-red-500 text-xl cursor-pointer"
          onClick={()=>dispatch(RemoveItem(id))} />
        </div>
      </div>
    </div>
  );
}

export default Card2;
