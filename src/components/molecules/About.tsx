import React from "react";

function About() {
	return (
		<>
			<div className="card shadow-sm card-left2 mb-4">
				<div className="card-body">
					<h5 className="mb-3 card-title">
						Hakkında
						<small>
							<a href="#" className="ml-1">
								Düzenle
							</a>
						</small>
					</h5>
					<p className="card-text">
						<i
							className="fas fa-calendar-week mr-2"
							style={{ width: "30px" }}></i>
						Doğum Tarihi:
					</p>
					<p className="card-text">
						<i className="far fa-building mr-2" style={{ width: "30px" }}></i>
						Ünvan:
					</p>
					<p className="card-text">
						<i className="fas fa-home mr-2" style={{ width: "30px" }}></i>
						İletişim:
					</p>
					<p className="card-text">
						<i className="fas fa-map-marker mr-2" style={{ width: "30px" }}></i>
						Adres:
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
