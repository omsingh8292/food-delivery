import React, { useContext } from "react";
import Nav from "../components/Nav.jsx";
import Categories from "../Category.jsx";
import Card from "../components/Card.jsx";
import { food_items } from "../food.js";
import { dataContext } from "../context/Usercontext.jsx";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import Card2 from "../components/Card2.jsx";

function Home() {
  let { cate, setcate, input, showcart, setshowcart } = useContext(dataContext);

  function filter(category) {
    if (category === "all") {
      setcate(food_items);
    } else {
      const newlist = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setcate(newlist);
    }
  }

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  let deliveryFee = items.length > 0 ? 20 : 0;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Nav />

      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Categories.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => filter(item.name)}
                className="w-[140px] h-[150px] bg-white rounded-md flex flex-col justify-center items-center
                gap-6 text-[20px] font-bold shadow-md hover:scale-105
                duration-300 cursor-pointer text-gray-600"
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      )}

      <div className="w-full flex justify-center flex-wrap pb-8 items-center pt-8 gap-5 px-5">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              type={item.food_type}
              price={item.price}
              id={item.id}
            />
          ))
        ) : (
          <div className="font-bold text-2xl mt-20 text-red-500">
            No Dish Found
          </div>
        )}
      </div>
      <div
        className={`w-[40vh] h-[100%] fixed top-0 right-0 bg-white p-6 shadow-xl overflow-auto ${
          showcart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex items-center justify-between">
          <span className="font-bold text-18px text-green-500">
            Order items
          </span>

          <RxCross1
            className="font-bold w-[30px] h-[30px] text-green-500 cursor-pointer hover:text-gray-800"
            onClick={() => setshowcart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div>
              {items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  qty={item.qty}
                  id={item.id}
                />
              ))}
            </div>

            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8">
              <div className="w-full flex items-center justify-between">
                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-lg text-green-600 font-semibold">
                  ${subtotal}/-
                </span>
              </div>

              <div className="w-full flex items-center justify-between">
                <span className="text-lg text-gray-600 font-semibold">
                  Delivery
                </span>
                <span className="text-lg text-green-600 font-semibold">
                  ${deliveryFee}/-
                </span>
              </div>

              <div className="w-full flex items-center justify-between">
                <span className="text-lg text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-lg text-green-600 font-semibold">
                  ${taxes}/-
                </span>
              </div>
            </div>

            <div className="w-full flex items-center mt-5 justify-between">
              <span className="text-xl text-gray-600 font-semibold">Total</span>
              <span className="text-lg text-green-600 font-semibold">
                ${total}/-
              </span>
            </div>

            <button className="w-full p-3 rounded-lg bg-green-400 font-bold text-xl text-white hover:bg-green-600 transition-all mt-7">
              Place Order
            </button>
          </>
        ) : (
          <p className="text-center mt-10 text-xl text-green-500 font-semibold">
            Empty Card
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
