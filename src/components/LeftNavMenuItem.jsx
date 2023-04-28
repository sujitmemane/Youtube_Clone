import React, { useContext } from "react";
import { Context } from "../context/contextAPI";
const LeftNavMenuItem = ({ className, action, icon, title }) => {
  const { setMobileMenu } = useContext(Context);
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-14 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <h1
        className="text-xl mr-5"
        onClick={() => {
          setMobileMenu(false);
        }}
      >
        {icon}
      </h1>
      {title}
    </div>
  );
};

export default LeftNavMenuItem;
