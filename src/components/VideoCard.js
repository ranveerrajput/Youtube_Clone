import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

const AdVideoCard = (VideoCard) => {
  return (
    <div className="p-1 m-2 border border-red-500">
      <VideoCard />
    </div>
  );
};

export default VideoCard;
