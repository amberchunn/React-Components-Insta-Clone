// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
	// Add state for the comments
	const [commentData, setCommentData] = useState(props.comment);

	return (
		<div>
			{/* {console.log(props)} */}
			{commentData.map(comment => {
				return <Comment comment={comment} />;
			})}
			<CommentInput />
		</div>
	);
};

export default CommentSection;
/* map through the comments data and return the Comment component */
