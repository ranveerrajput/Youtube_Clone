import React from "react";

const Chatmessgae = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQdGQyglNHmimZI7yUHYK9Kix8LYuIr00OvdaPEXePA&usqp=CAU&ec=48600112"
        alt="user"
      />

      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default Chatmessgae;
