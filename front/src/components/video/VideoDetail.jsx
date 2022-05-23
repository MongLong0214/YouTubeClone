import React, { useEffect } from "react";
import { TESTDATA } from "../utils/utils";
import "../../css/VideoDetail.css";
import VideoDetailComment from "./VideoDetailComment";
import { Avatar } from "@mui/material";

const VideoDetails = ({ video, id }) => {
  useEffect(() => {
    console.log(video);
  }, []);
  // if (!video) {
  //   return <div>Loading...</div>;
  // }
  // const videoId = video.id.videoId;
  // const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          controls
          className="embed-responsive-item"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          src={TESTDATA[0].url}
        ></iframe>
      </div>

      <div className="details">
        <div>{TESTDATA[0].title}</div>
        <div>{TESTDATA[0].description}</div>
      </div>
      <hr />
      <div className="writer">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div className="subscriber">
          {/*<p>{video.writer.name}</p>*/}
          <p className="channelName">test Name</p>
          <p className="subscriberCount">구독자 0명</p>
        </div>
        <div className="btnWrapper">
          <button className="subscribeButton">SUBSCRIBE </button>
        </div>
      </div>
      <hr />
      <VideoDetailComment id={id} />
    </div>
  );
};

export default VideoDetails;
