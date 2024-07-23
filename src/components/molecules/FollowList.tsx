import { useAppSelector } from "../../store";
import User from "../atoms/User";

function FollowList() {
	const followList = useAppSelector(state=> state.follow.followList);
	return (
		<>
			<div className="card-body">
				<h6 className="card-title ">
					Following{" "}
					<a href="#" className="ml-1">						
					</a>{" "}
				</h6>
				<div className="row no-gutters d-none d-lg-flex">
					{
						followList.map((user,index)=>{
							return <User isFollow={true} userId={user.id} name={user.name} userName={user.userName} avatar={user.avatar} />
						})
					}
				</div>
			</div>
		</>
	);
}

export default FollowList;
