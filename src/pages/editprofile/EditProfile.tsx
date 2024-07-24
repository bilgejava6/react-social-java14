import React from "react";
import "./Home.css";
import "./lightbox.min.css";
function EditProfile() {
	return (
		<>
			<nav
				className="navbar navbar-expand-md navbar-dark mb-4"
				style={{ backgroundColor: "#3097D1" }}>
				<a href="index.html" className="navbar-brand">
					<img
						src="/img/brand-white.png"
						alt="logo"
						className="img-fluid"
						width="80px"
						height="100px"
					/>
				</a>

				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#responsive">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="responsive">
					<ul className="navbar-nav mr-auto text-capitalize">
						<li className="nav-item">
							<a href="index.html" className="nav-link active">
								home
							</a>
						</li>
						<li className="nav-item">
							<a href="profile.html" className="nav-link">
								profile
							</a>
						</li>
						<li className="nav-item">
							<a href="#modalview" className="nav-link" data-toggle="modal">
								messages
							</a>
						</li>
						<li className="nav-item">
							<a href="notification.html" className="nav-link">
								docs
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link d-md-none">
								growl
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link d-md-none">
								logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container">
				<div className="row" style={{ width: "1000px" }}>
					<div className="col-12 col-lg-1"></div>
					<div className="col-12 col-lg-10 p-4 rounded-4" style={{backgroundColor: 'white',}}>
						<div className="input-group mb-3">
							<span className="input-group-text" id="basic-addon1">
								@
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>

						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Recipient's username"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							/>
							<span className="input-group-text" id="basic-addon2">
								@example.com
							</span>
						</div>

						<div className="mb-3">
							<label htmlFor="basic-url" className="form-label">
								Your vanity URL
							</label>
							<div className="input-group">
								<span className="input-group-text" id="basic-addon3">
									https://example.com/users/
								</span>
								<input
									type="text"
									className="form-control"
									id="basic-url"
									aria-describedby="basic-addon3 basic-addon4"
								/>
							</div>
							<div className="form-text" id="basic-addon4">
								Example help text goes outside the input group.
							</div>
						</div>

						<div className="input-group mb-3">
							<span className="input-group-text">$</span>
							<input
								type="text"
								className="form-control"
								aria-label="Amount (to the nearest dollar)"
							/>
							<span className="input-group-text">.00</span>
						</div>

						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								aria-label="Username"
							/>
							<span className="input-group-text">@</span>
							<input
								type="text"
								className="form-control"
								placeholder="Server"
								aria-label="Server"
							/>
						</div>

						<div className="input-group">
							<span className="input-group-text">With textarea</span>
							<textarea
								className="form-control"
								aria-label="With textarea"></textarea>
						</div>
					</div>
					<br /> <br /> <br />
					<br /> <br /> <br />
					<div className="col-12 col-lg-1"></div>
				</div>
			</div>
		</>
	);
}

export default EditProfile;
