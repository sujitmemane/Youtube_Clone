import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/contextAPI";
const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  return (
    <div className="flex flex-row h-[1200px]">
      <LeftNav />

      <div className="grow  w-[calc(100%-240px)] h-full  overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 "></div>
      </div>
    </div>
  );
};

export default Feed;
