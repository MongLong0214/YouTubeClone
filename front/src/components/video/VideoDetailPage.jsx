import React, { useEffect, useState } from 'react';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { useParams } from 'react-router-dom';

const VideoDetailPage = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    //id로 요청 후 데이터 받아온 것 selectedVideo로 설정
    //비디오 리스트 동영상 정보 가져오기
  }, []);
  const handleSelect = () => {
    // setSelectedVideo();
    console.log('test');
  };
  return (
    <div className="container">
      <VideoDetail />
      <VideoList onVideoSelect={handleSelect} />
    </div>
  );
};

export default VideoDetailPage;
