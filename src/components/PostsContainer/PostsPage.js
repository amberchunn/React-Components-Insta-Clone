//Complete the necessary code in this file
// import useState
import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';

// import data
import dummyData from '../../dummy-data';

const PostsPage = props => {
	// set up state for your data
	const [postData, setPostData] = useState(dummyData);
	return (
		<div className="posts-container-wrapper">
			{postData.map(post => {
				return <Post post={post} key={post.username} />;
			})}
		</div>
	);
};

export default PostsPage;

// map through data here to return a Post and pass data as props to Post
