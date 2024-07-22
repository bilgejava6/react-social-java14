import React from "react";

function LikeList() {
	return (
		<>
			<div className="card-body">
				<h6 className="card-title ">
					Following{" "}
					<a href="#" className="ml-1">						
					</a>{" "}
				</h6>
				<div className="row no-gutters d-none d-lg-flex">
					<div className="col-6 p-1">
						<img
							src="/img/avatar-dhg.png"
							alt="img"
							width="80px"
							height="80px"
							className="rounded-circle mb-4"
						/>
						<img
							src="/img/avatar-fat.jpg"
							alt="img"
							width="80px"
							height="80px"
							className="rounded-circle"
						/>
					</div>
					<div className="col-6 p-1 text-left">
						<h6>Jacob Thornton @fat</h6>
						<a href="#" className="btn btn-outline-info btn-sm mb-3">
							<i className="fas fa-user-friends"></i>Follow{" "}
						</a>

						<h6>Mark otto</h6>
						<a href="#" className="btn btn-outline-info  btn-sm">
							<i className="fas fa-user-friends"></i>Follow{" "}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default LikeList;
