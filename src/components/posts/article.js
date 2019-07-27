import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import { Card, BackTop, Tag } from 'antd';
import { getColor, setAnchor } from '../../config/methods';
import 'highlight.js/styles/atom-one-light.css'
// import '../../highlight.min.css';

class Article extends Component {
	componentWillMount() {
		marked.setOptions({
			highlight: code => hljs.highlightAuto(code).value
		});
	};

	render() {
		return (
			<Card
				loading={this.props.loading}
				title={this.props.blog.title}
				extra={[
					<span key="tag">标签：<Tag color={getColor(this.props.blog.color)}>{this.props.blog.tag}</Tag></span>,
					<span key="time">发布于：<Tag color="blue">{this.props.blog.date}</Tag></span>,
					<span key="update">最后修改于：<Tag color="blue">{this.props.blog.update}</Tag></span>
				]}
			>
			  <div className='article-wrapper' dangerouslySetInnerHTML={{__html:setAnchor(marked(this.props.blog.desc))}}></div>
			  <BackTop visibilityHeight={250}>
			    <div className="ant-back-top-inner">UP</div>
			  </BackTop>
			</Card>
		)
	}
}
export default Article