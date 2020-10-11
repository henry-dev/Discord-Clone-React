import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

const Message = ({ timestamp, user, message }) => {
	return (
		<div className="message">
			<Avatar src={user.photo} />
			<div className="message__info">
				<h4>{user.displayName}</h4>
				<span className="message__timeStamp">
					{new Date(timestamp?.toDate()).toUTCString()}
				</span>
				<p>{message}</p>
			</div>
		</div>
	);
};

export default Message;
