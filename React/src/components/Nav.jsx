import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { dataContext } from "../context/Usercontext.jsx";
import { food_items } from "../food.js";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, cate, setcate, showcart, setshowcart } =
    useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter((item) =>
      item.food_name?.toLowerCase().includes(input?.toLowerCase() || "")
    );
    setcate(newlist);
  }, [input]);
  let items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-8 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[40%]  h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:[40%]"
      >
        <IoMdSearch className=" w-[20px] h-[20px]  text-green-500" />
        <input
          className="w-[100px] outline-none text-[15px] md:text-[20px]"
          type="text"
          placeholder="Search items..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className=" relative w-[60px] h-[60px] bg-white flex justify-center
       items-center rounded-md shadow-xl"
        onClick={() => {
          setshowcart(true);
        }}
      >
        <span className="absolute  right-2 top-0 text-green-500 font-bold">
          {items.length}
        </span>
        <RiShoppingBag4Line className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
