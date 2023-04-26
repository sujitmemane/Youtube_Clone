import React from "react";

const LeftNavMenuItem = ({ className, action, icon, title }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-14 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {title}
    </div>
  );
};

export default LeftNavMenuItem;
