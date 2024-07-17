import React from "react";

function PostImages() {
	return (
		<>
			<div className="card shadow-sm card-left3 mb-4">
				<div className="card-body">
					<h5 className="card-title">
						Paylaşımlarım
						<small className="ml-2">
							<a href="#"></a>
						</small>
					</h5>

					<div className="row">
						<div className="col-6 p-1">
							<a href="/img/left1.jpg" data-lightbox="id">
								<img
									src="/img/left1.jpg"
									alt="img"
									className="img-fluid my-2"
								/>
							</a>
							<a href="/img/left2.jpg" data-lightbox="id">
								<img
									src="/img/left2.jpg"
									alt="img"
									className="img-fluid my-2"
								/>
							</a>
							<a href="/img/left3.jpg" data-lightbox="id">
								<img
									src="/img/left3.jpg"
									alt="img"
									className="img-fluid my-2"
								/>
							</a>
						</div>
						<div className="col-6 p-1">
							<a href="/img/left4.jpg" data-lightbox="id">
								<img
									src="/img/left4.jpg"
									alt="img"
									className="img-fluid my-2"
								/>
							</a>
							<a href="/img/left5.jpg" data-lightbox="id">
								<img
									src="/img/left5.jpg"
									alt="img"
									className="img-fluid my-2"
								/>
							</a>
							<a href="/img/left6.jpg" data-lightbox="id">
								<img
									src="/img/left6.jpg"
									alt="img"
									className="img-fluid my-2"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PostImages;
