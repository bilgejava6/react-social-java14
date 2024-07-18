import {useState} from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, SocialDispatch } from "../../store";
import { fetchCreatePost } from "../../store/feature/postSlice";
import swal from "sweetalert";
function CreatePostCard() {
	const token = useAppSelector(state=>state.auth.token);
	const dispatch = useDispatch<SocialDispatch>();
	const [comment, setComment] = useState('');
	const createPost = ()=>{
		dispatch(fetchCreatePost({
			token: token,
			comment: comment,
			url: 'http://picsum.photos/500/500'
		})).then(()=>{
			swal('Başarılı', 'Post başarı ile paylaşıldı', 'success');
		});
	}
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
							onChange={evt=>setComment(evt.target.value)}
							rows={5}
							name="message"
							id="message"
							placeholder="Message"
							className="form-control form-control-sm"
						/>
						<div className="input-group-append" style={{ margin: "2px" }}>
							<div  onClick={createPost} 
								className="input-group-text hover-post-button"
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
