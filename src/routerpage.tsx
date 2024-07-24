import { useAppSelector } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import EditProfile from "./pages/editprofile/EditProfile";


function RouterPage() {
	
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
