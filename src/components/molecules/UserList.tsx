import React from "react";
import User from "../atoms/User";
import { useAppSelector } from "../../store";

function UserList() {
	const userList = useAppSelector(state => state.user.userSearchList);
	return (
		<>
			<div className="card-body">
				<h6 className="card-title ">
					User List{" "}
					<div className="m-1">
						<input type="text" className="form-control" placeholder="search..." />
					</div>
				</h6>
				<div className="row no-gutters d-none d-lg-flex">

					{
						userList.map((user,index)=>{
							return <User isFollow={false} userId={user.id} name={user.name} userName={user.userName} avatar={user.avatar} />
						})
					}
					
										
				</div>
			</div>
		</>
	);
}

export default UserList;
