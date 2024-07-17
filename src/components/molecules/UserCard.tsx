import React from "react";

interface IUserCardProps{
  backImage: string,
  avatar: string,
  name: string,
  userName: string,
  about: string,
  follower: number,
  following: number  
}

function UserCard(props: IUserCardProps) {
  
	return (
		<>
			<div className="card card-left1 mb-4">
				<img
					src={props.backImage}
					alt=""
					className="card-img-top img-fluid"
				/>
				<div className="card-body text-center ">
					<img
						src={props.avatar}
						alt="img"
						width="120px"
						height="120px"
						className="rounded-circle mt-n5"
					/>
					<h5 className="card-title">{props.name}</h5>
          <h6>@{props.userName}</h6>
					<p className="card-text text-justify mb-2">
						{props.about}
					</p>
					<ul className="list-unstyled nav justify-content-around">
						<a href="#" className="text-dark text-decoration-none">
							{" "}
							<li className="nav-item">
								Takipçi <br /> <strong>{props.follower}</strong>
							</li>
						</a>
						<a href="#" className="text-dark text-decoration-none">
							{" "}
							<li className="nav-item">
								Takip <br /> <strong>{props.following}</strong>
							</li>
						</a>
					</ul>
				</div>
			</div>
		</>
	);
}

export default UserCard;
