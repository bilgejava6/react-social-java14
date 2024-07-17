import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
function RouterPage() {
	const useAppSelector = useSelector.withTypes<RootState>();
	const isLogin = useAppSelector((state) => state.auth.isAuth);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RouterPage;
