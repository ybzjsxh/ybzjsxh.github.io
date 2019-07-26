import React from 'react';
import { Row, Col, Icon, Collapse } from 'antd';
import './about.css';

const Panel = Collapse.Panel;

export default () => (
  <Row>
    <Col
	    lg={{ span: 14, offset: 5 }}
	    md={{ span: 14, offset: 5 }}
	    xs={{ span: 24 }}
	    className="about-wrapper"
    >
			<Collapse defaultActiveKey={['1']}>
			  <Panel header="关于我" key="1">
	      	<p><Icon type="user" /> 姓名：方程/男/28岁</p>
	      	<p style={{marginTop: 20}}><Icon type="environment" /> 所在地：杭州</p>
	      	<p style={{marginTop: 20}}><Icon type="idcard" /> 关键词：前端，linux，宅</p>
	      	<p style={{marginTop: 20}}><Icon type="global" /> 毕业院校：湖北工业大学商贸学院/土木工程</p>
					<p style={{marginTop: 20}}><Icon type="flag" /> 这个博客主要是用来记录我的一些技术点滴，和一些其他方面的随笔，感悟，生活等。</p>
			  </Panel>
			  <Panel header="我的简历" key="2">
			  	<p>嘿！你好，这是<a href="https://ybzjsxh.github.io/Resume/" target="_blank" rel="noopener noreferrer">在线简历 <Icon type="export" /></a>！(2019.02.05更新)</p>
			  </Panel>
			  <Panel header="联系我" key="3">
	      	<p><Icon type="mail" /> 邮箱：2532378918@qq.com</p>
					<p style={{marginTop: 20}}>
						<Icon type="github" /> Github：
						<a href="https://github.com/ybzjsxh" target="_blank" rel="noopener noreferrer">ybzjsxh</a>
					</p>
					<p style={{marginTop: 20}}>
						<Icon type="home" /> 博客园：
						<a href="http://www.cnblogs.com/musiq66/" target="_blank" rel="noopener noreferrer">musiq66</a>
					</p>
			  </Panel>
			</Collapse>
    </Col>
  </Row>
)