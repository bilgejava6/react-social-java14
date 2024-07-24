import React from "react";
import User from "../atoms/User";
import { SocialDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { fetchSearchUserList, setSearchUserName } from "../../store/feature/userSlice";

function UserList() {
	const userList = useAppSelector(state => state.user.userSearchList);
	const token = useAppSelector(state=>state.auth.token);
	const dispatch = useDispatch<SocialDispatch>();
	const searchUser = (userName: string)=>{
		dispatch(setSearchUserName(userName));
		dispatch(fetchSearchUserList({
			token: token,
			userName: userName
		}));
	}
	return (
		<>
			<div className="card-body">
				<h6 className="card-title ">
					User List{" "}
					<div className="m-1">
						<input onChange={evt=> searchUser(evt.target.value)} type="text" className="form-control" placeholder="search..." />
					</div>
				</h6>
				<div className="row no-gutters d-none d-lg-flex">

					{
						userList.map((user,index)=>{
							return <User key={index} isFollow={false} userId={user.id} name={user.name} userName={user.userName} avatar={user.avatar} />
						})
					}
					
										
				</div>
			</div>
		</>
	);
}

export default UserList;
