import MenuCard from "./menu_card";
import "./Menu.css";
import Burrata from "../../assets/burrata.jpg";
import Leeks from "../../assets/leeks.jpg";

const items = [
  {
    id: 1,
    name: "Burrata",
    description: "Tomato, basil",
    price: 450,
    image: Burrata,
  },
  {
    id: 2,
    name: "Charred Leeks",
    description: "Hazelnut, brown butter",
    price: 380,
    image: Leeks,
  },
  {
    id: 3,
    name: "Panner Tikka",
    description: "Hazelnut, brown butter",
    price: 380,
    image: Leeks,
  },
  // {
  //   id: 4,
  //   name: "Chicken Tikka",
  //   description: "Hazelnut, brown butter",
  //   price: 380,
  //   image: Leeks,
  // },
  // {
  //   id: 5,
  //   name: "Lamb Chops",
  //   description: "Hazelnut, brown butter",
  //   price: 380,
  //   image: Leeks,
  // },
  // {
  //   id: 5,
  //   name: "Lamb Chops",
  //   description: "Hazelnut, brown butter",
  //   price: 380,
  //   image: Leeks,
  // },
  // {
  //   id: 5,
  //   name: "Lamb Chops",
  //   description: "Hazelnut, brown butter",
  //   price: 380,
  //   image: Leeks,
  // },
];

const MenuHero = () => {
  return (
    <div className="menu_hero">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuHero;
