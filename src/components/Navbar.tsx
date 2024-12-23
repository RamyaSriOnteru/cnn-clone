import React from "react";
import logo from "../images/cnn-logo.png";
import menu from "../images/menu.jpg";
import lens from "../images/lens.png";
interface menuProp {
  setMenu: any;
}
const Navbar = (props: menuProp) => {
  return (
    <div className="bg-black w-full flex text-white h-10 ">
      <img src={menu} alt="" className="w-12 h-10 cursor-pointer  ml-10" />
      <img
        src={logo}
        onClick={() => props.setMenu("politics")}
        alt=""
        className="w-12 h-10 cursor-pointer"
      />
      <div className="flex p-2">
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("usa")}
        >
          US
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("inter-national")}
        >
          World
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("Politics")}
        >
          Politics
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("Businessman")}
        >
          Business
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("Opinion")}
        >
          Opinion
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("healthcare")}
        >
          Health
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("cinema")}
        >
          Entertainment
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("fashion-trends")}
        >
          Style
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("travel-dairy")}
        >
          Travel
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("trendy")}
        >
          More
        </h1>
        <h1
          className="ml-44 cursor-pointer "
          onClick={() => props.setMenu("Audio")}
        >
          Audio
        </h1>
        <h1
          className="ml-5 cursor-pointer "
          onClick={() => props.setMenu("Live TV")}
        >
          LiveTV
        </h1>
        <img src={lens} alt="" className="w-9 h-6 ml-3" />
        <h1 className="border border-spacing-1 rounded-lg ml-3 pl-2 text-center w-16 font-semibold">
          Login
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
