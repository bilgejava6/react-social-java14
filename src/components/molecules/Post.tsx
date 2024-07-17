import React from "react";

function Post() {
	return (
		<>
			<div className="card-body">
				<div className="media">
					<img
						src="/img/avatar-dhg.png"
						alt="img"
						width="55px"
						height="55px"
						className="rounded-circle mr-3"
					/>
					<div className="media-body">
						<h5>Dave Gamache</h5>
						<p className="card-text text-justify">
							Aenean lacinia bibendum nulla sed consectetur. Vestibulum id
							ligula porta felis euismod semper. Morbi leo risus, porta ac
							consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac
							facilisis in, egestas eget quam. Vestibulum id ligula porta felis
							euismod semper. Cum sociis natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus.
						</p>
						<div className="col-12 p-1 text-center">
							<img
								src="/img/mid5.jpg"
								alt=""
								className="img-fluid shadow-sm img-thumbnail"
							/>
						</div>

						<small>5min</small>
						<div className="media mb-3">
							<img
								src="/img/avatar-dhg.png"
								alt="img"
								width="45px"
								height="45px"
								className="rounded-circle mr-2"
							/>
							<div className="media-body">
								<p className="card-text text-justify">
									Jacon Thornton: Donec id elit non mi porta gravida at eget
									metus. Vivamus sagittis lacus vel augue laoreet rutrum
									faucibus dolor auctor. Donec ullamcorper nulla non metus
									auctor fringilla. Praesent commodo cursus magna, vel
									scelerisque nisl consectetur et. Sed posuere consectetur est
									at lobortis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Post;
