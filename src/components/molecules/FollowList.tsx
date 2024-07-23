import User from "../atoms/User";

function FollowList() {
	return (
		<>
			<div className="card-body">
				<h6 className="card-title ">
					Following{" "}
					<a href="#" className="ml-1">						
					</a>{" "}
				</h6>
				<div className="row no-gutters d-none d-lg-flex">
					<User isFollow={true} userId={111} name={"Deniz"} userName={"deniz4333"} avatar={''} />
					<User isFollow={true} userId={222} name={"Temel TAŞ"} userName={"temel61"} avatar={''} />
				</div>
			</div>
		</>
	);
}

export default FollowList;
