import { useDispatch } from "react-redux";
import { SocialDispatch, useAppSelector } from "../../store";
import { fetchGetAllCommentByPostId } from "../../store/feature/commentSlice";
import { useState } from "react";

function CommentListPopup() {   
    const commentList = useAppSelector(state=> state.comment.commentList);
	const postId = useAppSelector(state => state.comment.postId);
	const token = useAppSelector(state=>state.auth.token);
	const dispatch = useDispatch<SocialDispatch>();
	const [page,setPage] = useState(0);
	const loadMore = ()=>{
		dispatch(fetchGetAllCommentByPostId({
			postId: postId,
			token: token,
			size: 10,
			page: page+1
		})).then(()=>{			
			setPage(page+1);
		});
	}
	console.log('yorum listesi..: ', commentList);
	return (
		<>
			<div
				className="modal fade"
				id="commentList"
				tabIndex={-1}
				aria-labelledby="commentListLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="commentListLabel">
								Yorum Listesi
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="mb-3" >
								
								{
									/**
									 * Tüm yorumlaın listesi olacak.
									 */
									commentList.map((comment,index)=>{
										return(
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

								<div className="text-center">
									<button onClick={loadMore} className="btn btn-warning">Daha fazla yükle</button>
								</div>

							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								kapat
							</button>							
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CommentListPopup;
