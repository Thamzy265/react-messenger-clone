import React, { useState, useEffect } from "react";
import { FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./App.css";
import Message from "./Message";
import { db } from "./firebase";
import firebase from "firebase";
import logo from "./logo.png";
import FlipMove from "react-flip-move";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState([]);

	const sendMessage = (event) => {
		event.preventDefault();
		db.collection("messages").add({
			username: username,
			text: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, messages: doc.data() }))
				);
			});
	}, []);

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, []);

	return (
		<div className='App'>
			<img className='app__logo' src={logo} alt='logo' />
			<h2>Facebook messenger clone</h2>
			<h4>Welcome {username}</h4>
			<form className='app__form'>
				<FormControl className='app__formControl'>
					<Input
						className='app__input'
						type='text'
						placeholder='Enter a message'
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
					<IconButton
						className='app__iconBtn'
						color='primary'
						disabled={!input}
						onClick={sendMessage}
						type='submit'
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>

			<FlipMove>
				{messages.map(({ id, messages }) => (
					<Message key={id} message={messages} user={username} />
				))}
			</FlipMove>
		</div>
	);
}

export default App;
