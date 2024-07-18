import { useAppSelector,SocialDispatch } from "./store";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";


function RouterPage() {
	
	const isLogin = useAppSelector((state) => state.auth.isAuth);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={isLogin ? <Home /> : <Login />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RouterPage;
