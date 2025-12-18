import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { FaPastafarianism } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { CiPizza } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 3,
    name: "Soups",
    icon: <TbSoup className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 4,
    name: "Pasta",
    icon: <FaPastafarianism className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "Main_Course",
    icon: <BiFoodMenu className="w-[60px] h-[60px] text-green-600" />,
  },

  {
    id: 6,
    name: "Pizza",
    icon: <CiPizza className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "Burgers",
    icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
  },
];
export default Categories;
