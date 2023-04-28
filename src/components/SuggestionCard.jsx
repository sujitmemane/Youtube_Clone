import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import VideoLength from "../shared/VideoLength";
import { BsFillCheckCircleFill } from "react-icons/bs";
const SuggestionCard = ({ video }) => {
  const id = video?.video?.videoId;
  const thumnail = video?.video?.thumbnails[0]?.url;
  const time = video?.video?.lengthSeconds;
  const ava = video?.video?.author?.avatar[0]?.url;
  const title = video?.video?.title;
  return (
    <Link to={`/video/${id}`}>
      <div className="flex flex-col mb-8 cursor-pointer">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={thumnail}
            alt="Thumbnail"
          />
          {time && <VideoLength time={time} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover" src={ava} />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">{title}</span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {video?.video?.author?.title}
              {video?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
              )}
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(
                video?.video?.stats?.views,
                2
              )} views`}</span>
              <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">
                {video?.video?.publishedTimeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionCard;
