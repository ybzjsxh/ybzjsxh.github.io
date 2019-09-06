import React from 'react';
import { Layout } from 'antd';
import Header from '../components/header/header';
import Routes from '../components/routes/routes';
import './layout.css';

const { Footer, Content } = Layout;
const contentHeight = document.body.clientHeight - 64 - 71;

export default () => (
  <Layout>
    <Header></Header>
    <Content
      style={{
        padding: '24px 0',
        background: '#fff',
        minHeight: contentHeight,
        height: '100%',
      }}
    >
      <Routes></Routes>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '15px 0',
      }}
    >
      Copyright © ybzjsxh 2019
    </Footer>
  </Layout>
);
