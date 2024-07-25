import React,{ useState} from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, SocialDispatch } from "../../store";
import { fetchCreatePost, fetchGetPostList } from "../../store/feature/postSlice";
import swal from "sweetalert";
import Rest from '../../config/RestApis';
function CreatePostCard() {
	const token = useAppSelector(state=>state.auth.token);
	const dispatch = useDispatch<SocialDispatch>();
	const [photos, setPhotos] = useState('https://picsum.photos/500/500');
	const [comment, setComment] = useState('');
	const [isLoading, setisLoading] = useState(false);
	let inputFileRef = React.useRef<HTMLInputElement | null>(null);
	const emptyFile: File = new File([], 'empty-file.txt');
	const [selectedFile, setSelectedFile] = useState<File>(emptyFile);
	const handleFileChange = (event: any) => {
		setSelectedFile(event.target.files[0]);
		setPhotos(URL.createObjectURL(event.target.files![0]))
	};
	const createPost = async ()=>{
		setisLoading(true);
		let formData: FormData = new FormData();
		formData.append('file', selectedFile);
		
		let result = await fetch(Rest.media+'/add-storage-post',{
			method: 'POST',
			body: formData
		}).then(data=>data.json());		
		dispatch(fetchCreatePost({
			token: token,
			comment: comment,
			url: result.data
		})).then(()=>{
			setisLoading(false);
			swal('Başarılı', 'Post başarı ile paylaşıldı', 'success').then(()=>{
				dispatch(fetchGetPostList(token));
			})
		});
	}
	return (
		<>
			
			<div className="card-header bg-transparent" >
				
				<form className="form-inline">
					<div className="input-group w-100">
						<img
							src={photos}
							width={"60px"}
							height={"60px"}
							style={{ margin: "7px", borderRadius: "50%" }}
							onClick={()=>inputFileRef.current?.click()}
						/>
						<input type="file" hidden ref={inputFileRef} onChange={handleFileChange} />

						<textarea
							onChange={evt=>setComment(evt.target.value)}
							rows={5}
							name="message"
							id="message"
							placeholder="Message"
							className="form-control form-control-sm"
						/>
						<div className="input-group-append" style={{ margin: "2px" }}>
							{
								isLoading
								? 
								<div style={{ width: "60px", height: "60px" }} className="spinner-grow text-success" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
								: <div onClick={createPost} 						
								className="input-group-text hover-post-button"
								style={{ width: "60px", height: "60px" }}>								
									
									<i className="fa-solid fa-arrow-up-from-bracket fa-xl ms-2"></i>
								</div>
							}
							
						</div>
					</div>
				</form>
				
				
			</div>
			
		</>
	);
}

export default CreatePostCard;
