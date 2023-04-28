import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextAPI";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";

const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
];

const LeftNav = () => {
  const { mobileMenu, setSelectedCategory, selectedCategory } =
    useContext(Context);
  const clickHandler = (name, type) => {
    if (type === "home") {
      setSelectedCategory("new");
    } else if (type === "category") {
      setSelectedCategory(name);
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-2" : ""
      }`}
    >
      <div className="flex flex-col px-5">
        {categories.map((item) => (
          <LeftNavMenuItem
            key={Math.random()}
            title={item.type === "home" ? "Home" : item.name}
            icon={item.icon}
            action={() => clickHandler(item.name, item.type)}
            className={`${
              selectedCategory === item.name ? "bg-white/[0.15]" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
