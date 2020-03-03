//Complete the necessary code in this file
// import useState
import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';

// import data
import dummyData from '../../dummy-data';

const PostsPage = props => {
	// set up state for your data
	const [posts, setPosts] = useState();
	return (
		<div className="posts-container-wrapper">
			{dummyData.map(post => {
				return (
					<Post
						username={props.post.username}
						// thumbnailUrl={props.post.thumbnailUrl}
						// imageUrl={props.post.imageUrl}
						// likes={props.post.likes}
					/>
				);
			})}
		</div>
	);
};

export default PostsPage;

// map through data here to return a Post and pass data as props to Post
