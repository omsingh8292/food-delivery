import React, { useContext } from "react";
import Nav from "../components/Nav.jsx";
import Categories from "../Category.jsx";
import Card from "../components/Card.jsx";
import { food_items } from "../food.js";
import { dataContext } from "../context/Usercontext.jsx";
import { RxCross1 } from "react-icons/rx";

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
        {cate.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              type={item.food_type}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
      <div
        className={`w-[40vh] h-[100%] fixed top-0 right-0 bg-white p-6 shadow-xl ${
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
      </div>
    </div>
  );
}

export default Home;
