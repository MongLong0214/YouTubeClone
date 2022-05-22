import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col, Layout, Menu } from 'antd';
import {
  HomeOutlined,
  InboxOutlined,
  YoutubeOutlined,
  LikeOutlined,
  LoginOutlined,
  UploadOutlined,
  CustomerServiceOutlined,
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

const SideBar = () => {
  const navigate = useNavigate();

  const items = [
    getItem('홈', '/', <HomeOutlined />),
    getItem('보관함', '/myVideoPage', <InboxOutlined />),
    getItem('좋아요 동영상', '/likeVideoPage', <LikeOutlined />),
    getItem('구독', 'sub1', <YoutubeOutlined />, [
      getItem('LCK', '/subscribePage'),
      getItem('G-Movie', '/subscribePage'),
    ]),
  ];

  const items2 = [
    getItem('업로드', '/video/upload', <UploadOutlined />),
    getItem('회원가입', '/register', <CustomerServiceOutlined />),
    getItem('로그인', '/login', <LoginOutlined />),
  ];

  const onClick = (e) => {
    navigate(e.key);
  };

  return (
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
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={items}
            onClick={onClick}
          />
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
            <Col flex="330px">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['4']}
                items={items2}
                onClick={onClick}
              />
            </Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
};

export default SideBar;
