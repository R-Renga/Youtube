import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { clearToggle } from "../utils/appSlice";
import { VIDEO_BY_ID } from "../utils/constant";
import Chat from "./Chat";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(clearToggle());
    getVideoById();
  }, []);

  const getVideoById = async () => {
    const data = await fetch(VIDEO_BY_ID + searchParams.get("v"));
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <Chat/>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
