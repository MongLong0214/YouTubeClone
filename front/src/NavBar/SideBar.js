import React from 'react'
import 'antd/dist/antd.css'; 
import { Row, Col, Layout, Menu, } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  InboxOutlined,
  YoutubeOutlined,
  LikeOutlined,
  LoginOutlined,
  UploadOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const { Header, Sider } = Layout;

const items = [
  
  getItem('홈', '1', <HomeOutlined/>),
  getItem('탐색', '2', <SearchOutlined/>),
  getItem('보관함', '3', <InboxOutlined/>),
  getItem('좋아요 동영상', '4', <LikeOutlined/>),
  getItem('구독', 'sub1', <YoutubeOutlined/>, [
    getItem('LCK', '5'),
    getItem('G-Movie', '6'),
  ]),

]

const items2 = [

  getItem('업로드', '1', <UploadOutlined/>),
  getItem('로그인', '2', <LoginOutlined />),

]


const SideBar = () => (

  <>
  <Layout hasSider>
  <Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      paddingTop: 60,
      left: 0,
      top: 0,
      bottom: 0,
    }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
  </Sider>
  </Layout>
  
  <Layout
    className="site-layout"
    style={{
      marginLeft: 200,
    }}
    >
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      <Row>
        <Col flex="auto"></Col>
        <Col flex="200px">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']} items={items2} />
        </Col>

      </Row>
    </Header> 
  </Layout>
  </>

)

export default SideBar