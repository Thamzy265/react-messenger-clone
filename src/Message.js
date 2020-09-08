import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
const Message = forwardRef(({ message, user }, ref) => {
	const isUser = message.username === user;
	return (
		<div ref={ref} className={`message ${isUser && "message__card"}`}>
			<Typography className='message__username' color='textSecondary'>
				{!isUser && `${message.username || "Unknown User"} `}
			</Typography>
			<Card className={isUser ? "message__user" : "message__guest"}>
				<CardContent>
					<Typography variant='body1'>{message.text}</Typography>
				</CardContent>
			</Card>
		</div>
	);
});

export default Message;
