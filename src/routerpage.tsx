import { SocialDispatch, useAppSelector } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import EditProfile from "./pages/editprofile/EditProfile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./store/feature/authSlice";


function RouterPage() {
	const dispatch = useDispatch<SocialDispatch>();
	useEffect(()=>{
		const token = localStorage.getItem('token');
		if(token){
			dispatch(setToken(token));
		}
	},[]);
	const isLogin = useAppSelector((state) => state.auth.isAuth);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={isLogin ? <Home /> : <Login />} />
				<Route path="/edit-profile" element={isLogin ? <EditProfile /> : <Login />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RouterPage;
