import React from 'react'
import image from '../assets/image1.avif'
import { ImLeaf } from "react-icons/im";
import { GiChickenOven } from "react-icons/gi";

function Card({name,image,type,price,id}) {
  return (
    <div className='w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 hover:border-2 border-green-500 '>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
<img src={image} alt=""  className='object-cover'/>
      </div>
      <div className='font-bold text-[25px] mt-4'>
{name}
      </div>
      <div  className='w-full flex justify-between items-center'>
<div className='font-semibold text-xl text-green-500'>${price}/-</div>
<div className='font-semibold text-green-500 text-xl flex justify-between'>{type==='veg'?<ImLeaf />:<GiChickenOven />} <span className='font-semibold text-xl text-green-500'>{type}</span></div>
      </div>
      <button className='bg-green-400 text-white font-semibold shadow-lg transition-all py-2 rounded-md hover:bg-green-600 cursor-pointer'>Add to cart</button>
    </div>
  )
}

export default Card

