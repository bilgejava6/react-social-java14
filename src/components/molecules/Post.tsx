import { useDispatch } from "react-redux";
import { getFormattedElapsedTime } from "../../util/Tools";
import { SocialDispatch, useAppSelector } from "../../store";
import { fetchAddComment, fetchGetAllCommentByPostId, setPostId } from "../../store/feature/commentSlice";

interface IPostProps{
	postId: number,
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
	const dispatch = useDispatch<SocialDispatch>(); 
	const token = useAppSelector(state=> state.auth.token);
	const addComment = ()=>{		
		dispatch(setPostId(props.postId));
	}	
	const getAllComment = ()=>{
		/**
		 * token, postid, page, size
		 */
		dispatch(setPostId(props.postId));
		dispatch(fetchGetAllCommentByPostId({
			postId: props.postId,
			token: token,
			page: 0,
			size: 10
		}));
	}
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
							onClick={addComment}
							data-bs-toggle="modal" data-bs-target="#exampleModal"
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
							props.commentList?.map((comment:any,index)=>{
								return (
									<div className="media mb-3 shadow p-2 rounded-4" key={index}>
											<img
												src={comment.avatar}
												alt="img"
												width="45px"
												height="45px"
												className="rounded-circle mr-2"
											/>
											<div className="media-body">
												<p>{comment.userName}</p>
												<p className="card-text text-justify">
													{
														comment.comment
													}
												</p>
											</div>
									</div>
								)
							})
						}
						{
							props.commentCount >3 &&
							(
								<p><a onClick={getAllComment} data-bs-toggle="modal" data-bs-target="#commentList"  style={{color: '#BBE9FF'}}>{props.commentCount} yorumun tümünü gör</a></p>
							)
						}
						
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Post;
