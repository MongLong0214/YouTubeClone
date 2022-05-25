import React, { useEffect, useState } from "react";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import { useParams, useNavigate } from "react-router-dom";
import * as API from "../../api";
import SideBar from "../../NavBar/SideBar";

const VideoDetailPage = () => {
  const { id } = useParams();
  const navigator = useNavigate();

  const handleSelect = (video) => {
    navigator(`/video/${video._id}`);
    console.log("test");
  };

  return (
    <>
      <SideBar />
      <div className="container">
        <VideoDetail id={id} />
        <VideoList onVideoSelect={handleSelect} id={id} />
      </div>
    </>
  );
};

export default VideoDetailPage;
