import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Layout, Menu, Image, PageHeader, Card, Button } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  InboxOutlined,
  YoutubeOutlined,
  LikeOutlined,
  LoginOutlined,
  WindowsOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const { Header, Content, Footer, Sider } = Layout;

const { Meta } = Card;

const items = [
  getItem("홈", "1", <HomeOutlined />),
  getItem("탐색", "2", <SearchOutlined />),
  getItem("보관함", "3", <InboxOutlined />),
  getItem("좋아요 동영상", "4", <LikeOutlined />),
  getItem("구독", "sub1", <YoutubeOutlined />, [
    getItem("LCK", "5"),
    getItem("G-Movie", "6"),
  ]),
];

const items2 = [
  getItem("설정", "1", <WindowsOutlined />),
  getItem("로그인", "2", <LoginOutlined />),
];

const cardStyle = {
  width: "23%",
  marginLeft: "1%",
  marginRight: "1%",
  marginTop: "1%",
  marginBottom: "1%",
};

const cardimageStyle = {
  width: "100%",
  height: "86%",
  marginBottom: "3%",
};

const NavBar = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
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
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
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
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["4"]}
              items={items2}
            />
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 0,
            textAlign: "center",
          }}
        >
          <Image
            width="100%"
            height="400px"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130827_112%2Fkimgs5388_1377583745297S2Tyc_JPEG%2F%25B0%25ED%25C7%25D8%25BB%25F3%25B5%25B5_HD_%25BF%25F9%25C6%25E4%25C0%25CC%25C6%25DB_%25C0%25DA%25BF%25AC%25BB%25E7%25C1%25F8_6-.jpg&type=sc960_832"
            style={{
              objectFit: "cover",
            }}
          />

          <PageHeader
            className="subscribe-page-header"
            ghost={false}
            title="LCK"
            subTitle="구독자 71.1만명"
            avatar={{
              src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
            }}
            extra={[
              <Button key="1" type="primary">
                구독
              </Button>,
            ]}
          />

          <Card title="LCK 모음집">
            <Card.Grid style={cardStyle} className="videoBox" hoverable>
              <img
                alt="예제"
                src="https://i.ytimg.com/vi/XUruxrozLoI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBKE3NIvs-EkQ2B0miYVcag9wcg"
                style={cardimageStyle}
              />

              <Meta title="LCK 파이팅" description="조회수 2.5만회" />
            </Card.Grid>

            {/* <Card.Grid
            style={cardStyle}
            className='videoBox'
            hoverable
        >
          <img alt='예제' src='https://i.ytimg.com/vi/XUruxrozLoI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBKE3NIvs-EkQ2B0miYVcag9wcg'
              style={cardimageStyle}/>
            <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
          </Card.Grid>

          <Card.Grid
            style={cardStyle}
            className='videoBox'
            hoverable
        >
          <img alt='예제' src='https://i.ytimg.com/vi/XUruxrozLoI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBKE3NIvs-EkQ2B0miYVcag9wcg'
              style={cardimageStyle}/>
            <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
          </Card.Grid>

          <Card.Grid
            style={cardStyle}
            className='videoBox'
            hoverable
        >
          <img alt='예제' src='https://i.ytimg.com/vi/XUruxrozLoI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBKE3NIvs-EkQ2B0miYVcag9wcg'
              style={cardimageStyle}/>
            <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
          </Card.Grid>
          
          <Card.Grid
            style={cardStyle}
            className='videoBox'
            hoverable
        >
          <img alt='예제' src='https://i.ytimg.com/vi/XUruxrozLoI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBKE3NIvs-EkQ2B0miYVcag9wcg'
              style={cardimageStyle}/>
            <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
          </Card.Grid>

          <Card.Grid
            style={cardStyle}
            className='videoBox'
            hoverable
        >
          <img alt='예제' src='https://i.ytimg.com/vi/XUruxrozLoI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBKE3NIvs-EkQ2B0miYVcag9wcg'
              style={cardimageStyle}/>
            <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
          </Card.Grid>
          
          <Card.Grid
            style={cardStyle}
            className='videoBox'
            hoverable
        >
          <img alt='예제' src='https://i.ytimg.com/vi/XUruxrozLoI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeBKE3NIvs-EkQ2B0miYVcag9wcg'
              style={cardimageStyle}/>
            <Meta title="LCK 파이팅" description="조회수 2.5만회"/>
          </Card.Grid> */}
          </Card>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default NavBar;
