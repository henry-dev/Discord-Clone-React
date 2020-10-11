import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

import { selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser); //this will give us the user

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className="app">
			{user ? (
				<>
					<Sidebar />
					<Chat />
				</>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
