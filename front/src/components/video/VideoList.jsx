import React from 'react';
import VideoListItem from './VideoListItem';
import { TESTDATA } from '../utils/utils';

const VideoList = ({ onVideoSelect, video }) => {
  const VideoItems = TESTDATA.map((video) => {
    console.log(video.thumb);
    return <VideoListItem onVideoSelect={onVideoSelect} key={video.id} video={video} />;
  });
  return <ul className="col-md-4 list-group">{VideoItems}</ul>;
};

export default VideoList;
