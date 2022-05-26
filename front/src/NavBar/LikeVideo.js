import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState, userInfoState, tokenState } from '../../src/atom'
import * as api from '../api'
import 'antd/dist/antd.css'; 
import { Layout, PageHeader, Card, Button } from 'antd';


const { Content } = Layout;

const { Meta } = Card;

const cardStyle = {
  width: '420px',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '20px',
  marginBottom: '20px',
}

const cardimageStyle = {
  width: '100%',
  height: '280px',
  marginBottom: '3%',
  objectFit: 'cover',
  cursor: 'pointer'
}



const LikeVideo = () => {

  const navigate = useNavigate()
  
  // 영상리스트 저장을 위한 useState, 아래는 예시 데이터.

  const [videoList, setVideoList] = useState([])
  
  async function getVideoList() {
   const idListResponse = await api.get('likeList')
   const idListResponseData = idListResponse.data
   console.log('받아온 데이터는' , idListResponseData)
   
   const videoIdList = []
   for (let i=0; i < idListResponseData.length; i++) {
    videoIdList.push(idListResponseData[i].video_id) 
   }
   console.log('비디오아이디 리스트에 들어있는 정보는', videoIdList)

   const LikevideoList = []
   
   for (let j=0; j < videoIdList.length; j++) {
    const videoListResponse = await api.get(`video/getVideoDetail/${videoIdList[j]}`)
    const videoListResponseData = videoListResponse.data
    console.log('보내는 ID정보는', videoListResponseData)
    LikevideoList.push(videoListResponseData)
   }
   console.log('받아온 데이터는', LikevideoList)
   setVideoList(LikevideoList)
   
  }

  useEffect(() => getVideoList, [])
  
  // map함수 

  const mapVideo = videoList && (
    videoList.map((element, index) => {  
      const video_Id = element.video._id.replace(/(\s*)/g, "")
      const writerId = element.video.writer.id
      const title = element.video.title
      const description = element.video.description
      const avatar = element.video.writer.avatar
      const filePath = element.video.filePath.substring(8)
      const thumbnail = element.video.thumbnail
      const updatedAt = element.video.updatedAt 
  
  return (

  <Card.Grid
    style={cardStyle}
    className='videoBox'
    hoverable
    key={video_Id}
    >
  
  <img style={cardimageStyle} src={`http://localhost:3001/${thumbnail}`} alt="썸네일" onClick={(e) => navigate(`/video/${video_Id}`)} />   
  

  <Meta title={title} description={description}/>
  </Card.Grid>


)}))


// ------------------------------- 아래는 컴퍼넌트  --------------------------//


return (

  <Content
  style={{
    minWidth: '1200px',
    marginLeft: '216px',
    marginTop: '16px',
    marginRight: '16px',
    overflow: 'initial',
  }}  
>
  <div
    className="site-layout-background"
    style={{
      padding: 0,
      textAlign: 'center',
    }}
  >

  <PageHeader
    className="subscribe-page-header"
    ghost={false}
    title="좋아요"
    subTitle="총 3개"
    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
    extra={[]}
  />
  <Card>  
    {/* 아래는 맵함수  */}
    {mapVideo}
  </Card>  
  </div>
  </Content>
)}

export default LikeVideo