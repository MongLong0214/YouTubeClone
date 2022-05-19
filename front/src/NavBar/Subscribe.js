import React, {useState, useEffect} from 'react'
import * as Api from "./Api";
import 'antd/dist/antd.css'; 
import { Row, Col, Layout, Menu, Image, PageHeader, Card, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const { Meta } = Card;

const cardStyle = {
  width: '23%',
  height: '23%',
  marginLeft: '1%',
  marginRight: '1%',
  marginTop: '1%',
  marginBottom: '1%',

}

const cardimageStyle = {
  width: '100%',
  height: '280px',
  marginBottom: '3%',
}



const SubScribe = () => {

  // 영상리스트 저장을 위한 useState

  const [videoList, setVideoList] = useState([
    {
      "_id": "62833275b35b1bd38f876376",
      "writer": {
        "_id": "627b3f7fd15cad6258ef5021",
        "role": 0,
        "email": "tlsdnddl12@naver.com",
        "password": "$2b$10$kkVEHoSqNVFqMpfvQDqVAeZ8HVQWkjm08sNg7AdvtKCD04Fpd3KcW",
        "name": "sw",
        "image": "http://gravatar.com/avatar/1652244351?d=identicon",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiJ9.NjI3YjNmN2ZkMTVjYWQ2MjU4ZWY1MDIx.7HkQPtt2zwu-qFwSm6ODe-GHb0mBVUmQ3O7XggcfgpA"
      },
      "title": "hello",
      "description": "this is test",
      "privacy": 0,
      "filePath": "https://www.youtube.com/embed/Q8g0tULRWn0",
      "category": "gregory",
      "views": 1,
      "duration": "123123",
      "thumbnail": "uploads/thumbnail/toenail",
      "createdAt": "2022-05-17T05:28:21.894Z",
      "updatedAt": "2022-05-17T05:28:21.894Z",
      "__v": 0
    },
    {
      "_id": "628332c232cd952c8611f19b",
      "writer": {
        "_id": "627b3f7fd15cad6258ef5021",
        "role": 0,
        "email": "tlsdnddl12@naver.com",
        "password": "$2b$10$kkVEHoSqNVFqMpfvQDqVAeZ8HVQWkjm08sNg7AdvtKCD04Fpd3KcW",
        "name": "sw",
        "image": "http://gravatar.com/avatar/1652244351?d=identicon",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiJ9.NjI3YjNmN2ZkMTVjYWQ2MjU4ZWY1MDIx.7HkQPtt2zwu-qFwSm6ODe-GHb0mBVUmQ3O7XggcfgpA"
      },
      "title": "hello",
      "description": "this is test",
      "privacy": 0,
      "filePath": "https://www.youtube.com/embed/Q8g0tULRWn0",
      "category": "gregory",
      "views": 1,
      "duration": "123123",
      "thumbnail": "uploads/thumbnail/toenail",
      "createdAt": "2022-05-17T05:29:38.405Z",
      "updatedAt": "2022-05-17T05:29:38.405Z",
      "__v": 0
    },
    {
      "_id": "628334066d07c01579adc6ba",
      "writer": {
        "_id": "627b3f7fd15cad6258ef5021",
        "role": 0,
        "email": "tlsdnddl12@naver.com",
        "password": "$2b$10$kkVEHoSqNVFqMpfvQDqVAeZ8HVQWkjm08sNg7AdvtKCD04Fpd3KcW",
        "name": "sw",
        "image": "http://gravatar.com/avatar/1652244351?d=identicon",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiJ9.NjI3YjNmN2ZkMTVjYWQ2MjU4ZWY1MDIx.7HkQPtt2zwu-qFwSm6ODe-GHb0mBVUmQ3O7XggcfgpA"
      },
      "title": "hello",
      "description": "this is test",
      "privacy": 0,
      "filePath": "https://www.youtube.com/embed/Q8g0tULRWn0",
      "category": "gregory",
      "views": 1,
      "duration": "123123",
      "thumbnail": "uploads/thumbnail/toenail",
      "createdAt": "2022-05-17T05:35:02.015Z",
      "updatedAt": "2022-05-17T05:35:02.015Z",
      "__v": 0
    },])


  // Api, 영상 전체 받아옴, videoList에 저장함. [getVideoList 함수]

//   const getVideoList = async() => {

//   const res = await Api.get("video/getVideos")
//   setVideoList(res.data)
  
// }

  // getVideoList 함수가 랜더링시 실행되게 함. 

  // useEffect(() => {getVideoList()}, [videoList])


  // map함수

  const mapVideo = videoList.map((video, index) => {  
    
  const videoId = video.id
  const writerId = video.writer.id
  const title = video.title
  const description = video.description
  const filePath = video.filePath
  const thumbnail = video.thumbnail
  const updatedAt = video.updatedAt 
  
  return (

  <Card.Grid
    style={cardStyle}
    className='videoBox'
    hoverable
    key={videoId}
    >
  
  <iframe style={cardimageStyle} src={filePath} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen="" >   
  </iframe>

  <Meta title={title} description={description}/>
  </Card.Grid>

)})

// 밑에 부터 컴퍼넌트


return (

  <Content
  style={{
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
  <Image
    width='100%'
    height='400px'
    src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130827_112%2Fkimgs5388_1377583745297S2Tyc_JPEG%2F%25B0%25ED%25C7%25D8%25BB%25F3%25B5%25B5_HD_%25BF%25F9%25C6%25E4%25C0%25CC%25C6%25DB_%25C0%25DA%25BF%25AC%25BB%25E7%25C1%25F8_6-.jpg&type=sc960_832'
    style={{
      objectFit: 'cover'
    }}
  />

  <PageHeader
    className="subscribe-page-header"
    ghost={false}
    title="LCK"
    subTitle="구독자 71.1만명"
    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
    extra={[
      <Button key="1" type="primary">
        구독
      </Button>,
    ]}
  />

    <Card title="LCK 모음집">  
    <Card.Grid
      style={cardStyle}
      className='videoBox'
      hoverable
    >
    <iframe style={cardimageStyle} src="https://www.youtube.com/embed/lsy0b6h_X2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen="" >   
    </iframe>

      <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
    </Card.Grid>

    <Card.Grid
      style={cardStyle}
      className='videoBox'
      hoverable
    >
    <iframe style={cardimageStyle} src="https://www.youtube.com/embed/lsy0b6h_X2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen="" >   
    </iframe>

      <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
    </Card.Grid>



  {/* 아래는 맵함수  */}

  {mapVideo}


  </Card>
    
  </div>
</Content>


)}

export default SubScribe