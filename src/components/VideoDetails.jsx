import React from "react";
import { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { abbreviateNumber } from "js-abbreviation-number";
import { AiFillLike } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { fetchDataFromAPI } from "./../utils/api";
import { Context } from "../context/contextAPI";
import SuggestionCard from "./SuggestionCard";
import { useParams } from "react-router-dom";
const VideoDetails = () => {
  const [video, setVideo] = useState({});
  const [relatedVideo, setRelatedVideo] = useState();
  const { setLoading } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchDataFromAPI(`video/details/?id=${id}`);
      setVideo(data);
      setLoading(false);
    };
    const fetchRelatedData = async () => {
      setLoading(true);
      const relatedData = await fetchDataFromAPI(
        `video/related-contents/?id=${id}`
      );
      setRelatedVideo(relatedData?.contents);
      setLoading(false);
    };
    fetchData();
    fetchRelatedData();
  }, [id]);

  const avatar = video?.author?.avatar[1]?.url;
  const channelName = video?.author?.title;
  const subs = video?.author?.stats?.subscribersText;
  const likes = video?.stats?.likes;
  const comments = video?.stats?.comments;
  const views = video?.stats?.views;
  const datePub = video?.publishedDate;
  const description = video?.description;

  console.log(video);
  console.log(relatedVideo);

  return (
    <div className="flex flex-row justify-center h-[calc(100%-56px)]  bg-black">
      <div className="w-full max-w-[1280px flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-200px)] xl:w-[calc(100%-350px)] px-4 py-3 lg:py-6 overflow-y-auto ">
          <div className="h-[200px] md:h-[400px] lg:[400px] xl:h-[550px] l-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              playing="true"
            />
          </div>
          <div className="text-white font-bold text-xl">{video?.title}</div>
          <div>
            <div className="flex flex-row items-start my-2 space-x-2  justify-between p-4">
              <div className="flex  space-x-2 items-start">
                <img src={avatar} className="rounded-full" />
                <div className="flex flex-col items-start  text-white">
                  <h1 className="font-bold text-md">{channelName} </h1>
                  <h2 className="text-[15px] lowercase">{subs}</h2>
                </div>
              </div>
              <div className=" flex flex-row text-white space-x-4">
                <div className="flex flex-row space-x-2 items-center">
                  <AiFillLike className="text-white text-3xl " />
                  <h1>{abbreviateNumber(views)}</h1>
                </div>
                <div className=" flex flex-row space-x-2 items-center">
                  <AiFillEye className="text-white text-3xl " />
                  <h1>{abbreviateNumber(likes)}</h1>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <FcComments className="text-white text-3xl " />
                  <h1>{abbreviateNumber(comments)}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white py-10 px-2 text-sm bg-[#2C3333] ">
            <h1 className="font-bold text-md"> Published on {datePub} </h1>
            <p className="text-sm"> {description}</p>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[200px] xl:w-[350px]">
          {relatedVideo?.map((item, index) => {
            return <SuggestionCard key={index} video={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
