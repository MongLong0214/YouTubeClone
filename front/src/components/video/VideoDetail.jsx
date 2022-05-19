import React, { useEffect } from 'react';
import { TESTDATA } from '../utils/utils';
import { useParams } from 'react-router-dom';
import '../../css/VideoDetail.css';

const VideoDetails = ({ video }) => {
  const { id } = useParams();
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
    </div>
  );
};

export default VideoDetails;
