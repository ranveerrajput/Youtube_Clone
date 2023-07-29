import React, { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(" ");

  useEffect(() => {
    getSearchSuggestions();
  }, [searchQuery]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2 ">
      <div className="col-span-1 flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAACOjo7CwsItLS3c3Nw/Pz/6+vrGxsaSkpKZmZmIiIjy8vK+vr7w8PA4ODgfHx+3t7fi4uKY3kT7AAAAzklEQVR4nO3byQ3CQAxA0TGQDQhZ+i+WHCiAi2UU3uvga6Q52HJrAAAAAAAAAAAAAAAAAAAAAAA/4N7fKvX37MBHVHskF1b3HXIDn9V5h2du4lrdF2tuYOuqA6NLLmzDeK00DtmBAAAAAAB8dNOl0pQ+8p6rh/oxJxdW90X2du1VnXd45SZW50X2G7atui+25MLz/6UAAAAAAHyc/t5irx7qx55cuFQHxpIb+Ae3a9V5kb5dO/8N6fnvgAEAAAAAAAAAAAAAAAAAAAAAvvEGU4ASPASDdpgAAAAASUVORK5CYII="
          alt="menu"
        />
        <a href="/">
          <img
            className="h-14"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GPQWygabpGYgr-IeHPUC7O-zuK2G5bJjaONppFem1Q&usqp=CAU&ec=48600112"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className="col-span-10">
        <input
          className="border w-3/4  border-gray-500 p-1 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="px-3 py-1 p-1  border border-gray-500 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>

      <div className="col-span-1 ">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQdGQyglNHmimZI7yUHYK9Kix8LYuIr00OvdaPEXePA&usqp=CAU&ec=48600112"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
