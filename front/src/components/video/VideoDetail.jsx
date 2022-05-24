import React, { useEffect, useState } from "react";
import { TESTDATA } from "../utils/utils";
import "../../css/VideoDetail.css";
import VideoDetailComment from "./VideoDetailComment";
import { Avatar } from "@mui/material";
import * as API from "../../api";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { IconButton } from "@mui/material";

const VideoDetails = ({ id }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [comments, setComments] = useState([]);
  const [title, setTitle] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [description, setDescription] = useState("");
  const [viewCounts, setViewCounts] = useState(null);
  const [subscriberNum, setSubscriberNum] = useState(0);
  const [writerId, setWriterId] = useState("");
  const [subscribed, setSubscribed] = useState("unsubscribe");
  const [writer, setWriter] = useState("");

  const getVideoDetail = async () => {
    try {
      const { data } = await API.get(`video/getVideoDetail/${id}`);
      setVideoInitialData(data);

      return data;
    } catch (e) {
      console.error(e);
    }
  };

  const setVideoInitialData = async (data) => {
    setVideoUrl(data.video.filePath.substring(8));
    setDescription(data.video.description);
    setViewCounts(data.video.views);
    setTitle(data.video.title);
    setWriter(data.video.writer.name);
    setWriterId(data.video.writer._id);
    setUpdatedDate(moment(data.video.createdAt).format("YYYY-MM-DD"));
    console.log("data============>>", data);
    try {
      const subscriber = await API.post("subscriberNum", {
        userTo: data.video.writer._id,
      });
      setSubscriberNum(subscriber.data.subscriberNum);
      if (sessionStorage.getItem("userToken")) {
        const verifyUser = await API.get("verify");
        console.log("verify", verifyUser.data.userId, data.video.writer._id);
        const isSubscribed = await API.post("subscribed", {
          userTo: data.video.writer._id,
          userFrom: verifyUser.data.userId,
        });
        console.log(
          "isSubscribed.data.subscribed",
          isSubscribed.data.subscribed
        );
        if (isSubscribed.data.subscribed) {
          setSubscribed("subscribe");
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getVideoDetail().then((res) => console.log("Successfully get Data"));
  }, [id, subscribed]);

  const handleSubscribe = async (e) => {
    const verifyUser = await API.get("verify");
    if (e.target.innerText === "UNSUBSCRIBE") {
      API.post("unsubscribe", {
        userTo: writerId,
        userFrom: verifyUser.data.userId,
      }).then(setSubscribed("unsubscribe"));
    } else {
      API.post("subscribe", {
        userTo: writerId,
        userFrom: verifyUser.data.userId,
      }).then(setSubscribed("subscribe"));
    }
  };

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <video src={`http://localhost:3001/${videoUrl}`} controls />
      </div>

      <div className="details">
        <div className="title">{title}</div>
        <div className="subscriberCount">{updatedDate}.</div>
        <div className="iconButton">
          <IconButton>
            <ThumbUpOffAltIcon />
          </IconButton>
        </div>
      </div>
      <hr />
      <div className="writer">
        <Avatar src="/static/images/avatar/1.jpg" />
        <div className="subscriber">
          {/*<p>{video.writer.name}</p>*/}
          <p className="channelName">{writer}</p>
          <p className="subscriberCount">구독자 {subscriberNum}명</p>
          <div>{description}</div>
        </div>
        {sessionStorage.getItem("userToken") && (
          <div className="btnWrapper">
            <button
              className={`subscribeButton ${subscribed}`}
              onClick={handleSubscribe}
            >
              {subscribed === "subscribe" ? "UNSUBSCRIBE" : "SUBSCRIBE"}
            </button>
          </div>
        )}
      </div>
      <hr />
      <VideoDetailComment id={id} />
    </div>
  );
};

export default VideoDetails;
