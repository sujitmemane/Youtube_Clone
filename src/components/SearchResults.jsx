import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromAPI } from "../utils/api";
import SearchResultCard from "./SearchResultCard";
import { Context } from "../context/contextAPI";

const SearchResults = () => {
  const { setLoading } = useContext(Context);
  const [searchResults, setSearchResults] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    const fetchSearchData = async () => {
      document.getElementById("root").classList.remove("custom-h");
      setLoading(true);
      const searchData = await fetchDataFromAPI(`search/?q=${searchQuery}`);
      setSearchResults(searchData.contents);
      setLoading(false);
    };
    fetchSearchData();
  }, [searchQuery]);
  console.log(searchQuery);
  console.log(searchResults);
  return (
    <div className="flex flex-col h-[calc(100%-56px)] bg-black">
      <div className="grow w-full h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {searchResults?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return <SearchResultCard key={video.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
