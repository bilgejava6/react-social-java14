import React, { useState } from "react";
import { SocialDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { fetchAddComment } from "../../store/feature/commentSlice";
import swal from "sweetalert";
import { fetchGetPostList } from "../../store/feature/postSlice";
function AddCommentPopup() {
    const [comment,setComment]= useState('');
    const  token = useAppSelector(state=>state.auth.token);
	const postId = useAppSelector(state=>state.comment.postId);
	const disatch = useDispatch<SocialDispatch>();
    const addComment = ()=>{
        /**
         * Yorum için gerekli olanlar
         * 1- post id : postId
         * 2- user id : token
         * 3- yorum : comment
         */
		disatch(fetchAddComment({
			postId: postId,
			token: token,
			comment: comment
		})).then(()=>{ // yorum yapma işlemi tamamlanınca olacaklar
			swal('Başarılı','yorum başarı ile kayıt edildi.', 'success')
			.then(()=>{ // sweet alert popup ı okey butonuna basılınca olacaklar.
				disatch(fetchGetPostList(token));	
			})
		})
    }
	return (
		<>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Yeni yorum ekleme
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label htmlFor="message-text" className="col-form-label">
									yorumunuz:
								</label>
								<textarea onChange={evt=>setComment(evt.target.value)} className="form-control" id="message-text"></textarea>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								kapat
							</button>
							<button onClick={addComment} type="button" className="btn btn-primary" data-bs-dismiss="modal">
								yorum yap
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddCommentPopup;
