import React from "react";

function CreatePostCard() {
	return (
		<>
			<div className="card-header bg-transparent">
				<form className="form-inline">
					<div className="input-group w-100">
						<img
							src="http://picsum.photos/100/100"
							width={"60px"}
							height={"60px"}
							style={{ margin: "7px", borderRadius: "50%" }}
						/>
						<textarea
							rows={5}
							name="message"
							id="message"
							placeholder="Message"
							className="form-control form-control-sm"
						/>
						<div className="input-group-append" style={{ margin: "2px" }}>
							<div
								className="input-group-text"
								style={{ width: "60px", height: "60px" }}>
								<i className="fa-solid fa-arrow-up-from-bracket fa-xl ms-2"></i>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default CreatePostCard;
