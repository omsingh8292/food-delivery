import React, { useState, createContext } from "react";
import { food_items } from "../food";
export const dataContext = createContext();

function Usercontext({ children }) {
  let [input, setInput] = useState("");
  let [cate, setcate] = useState(food_items);
  let [showcart,setshowcart]=useState(false);

  let data = {
    input,
    setInput,
    cate,
    setcate,
    showcart,setshowcart
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default Usercontext;
