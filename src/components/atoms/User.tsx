interface IUserProps{
    userId: number,
    avatar: string,
    userName: string,
    name: string,
}
function User(user: IUserProps) {
	return (
		<div className="row">
			<div className="col-3 ">
				<img
					src={user.avatar === null ? '/img/default-avatar.png' : user.avatar}
					alt="img"
					width="50px"
					height="50px"
					className="rounded-circle mb-4"
				/>
			</div>
			<div className="col-9 p-1 text-left">
				<h6>@{user.userName} {user.name}</h6>
				<a href="#" className="btn btn-outline-danger btn-sm mb-3">
					<i className="fas fa-user-friends"></i>Follow{" "}
				</a>
			</div>
            <hr style={{width: '75%', marginLeft:'13%', color:'red'}}/>
		</div>
	);
}

export default User;
