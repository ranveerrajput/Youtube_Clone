import React, { useEffect, useState } from "react";
import Chatmessgae from "./Chatmessgae";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomNames, makeRandonMessages } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  //API Polling --> we hava harccoded here we have to make a api call and convert it to json and pass to it
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandonMessages(15) + "🚀🚀",
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] m-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            //Dont use indexes as keys
            chatMessages.map((c, i) => (
              <Chatmessgae key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className=" p-2 ml-2 border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit");
          dispatch(
            addMessage({
              name: "Ranveer Rajput",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-56 px-2"
          type="text"
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
