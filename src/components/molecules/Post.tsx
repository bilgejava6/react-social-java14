import { getFormattedElapsedTime } from "../../util/Tools";

interface IPostProps{
	avatar: string,
	userName: string,
	comment: string,
	url: string
	date: number,
	likeCount: number,
	commentCount: number,
	commentList?: []
}
function Post(props: IPostProps ) {
	return (
		<>
			<div className="card-body">
				<div className="media">
					<img
						src={props.avatar}
						alt="img"
						width="55px"
						height="55px"
						className="rounded-circle mr-3"
					/>
					<div className="media-body">
						<h5>@{props.userName}</h5>
						<p className="card-text text-justify">
							{props.comment}
						</p>
						<div className="col-12 p-1 text-center">
							<img
								src={props.url}
								alt=""
								className="img-fluid shadow-sm img-thumbnail"
								style={{width:'100%', height:'400px'}}
							/>
						</div>
						<p className="card-text" style={{marginLeft:'10px', marginBottom: '10px'}}>
						<i
							className="fa-solid fa-comments mr-2"
							style={{ width: "30px" }}></i>
							{props.commentCount}
							<i
							className="fa-solid fa-heart mr-2"
							style={{ width: "30px", marginLeft:'10px' }}></i>
							{props.likeCount}
						</p>
						<small>{getFormattedElapsedTime(props.date)}</small>
						{
							props.commentList?.map((comment,index)=>{
								return <>
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
								</>;
							})
						}
						
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Post;
