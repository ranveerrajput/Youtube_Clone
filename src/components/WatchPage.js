import React, { useEffect } from "react";

import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullsceen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
