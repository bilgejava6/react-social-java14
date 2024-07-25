import React, { useState } from "react";
import "./Home.css";
import "./lightbox.min.css";
import { SocialDispatch, useAppSelector } from "../../store";
import { fetchgetUserProfile, fetchUpdateProfile, IUserProfile } from "../../store/feature/userSlice";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import Rest from '../../config/RestApis';
function EditProfile() {
	const dispatch = useDispatch<SocialDispatch>();
	const userProfile = useAppSelector(state=>state.user.userProfile);
	const token = useAppSelector(state=>state.auth.token);
	const [editProfile,setEditProfile] = useState(userProfile);
	let optionArray = [];
	for (let index = 1900; index < 2010; index++) {			
		optionArray.push(index);
	}
	
	let inputFileRef = React.useRef<HTMLInputElement | null>(null);
	const emptyFile: File = new File([], 'empty-file.txt');
	const [selectedFile, setSelectedFile] = useState<File>(emptyFile);
	const handleFileChange = (event: any) => {
		if(event.target.files){
			setSelectedFile(event.target.files[0]);
		if(editProfile)
			setEditProfile({...editProfile,avatar:URL.createObjectURL(event.target.files![0])});	
		}
			
	};
	const updateProfile = async()=>{
		let formData: FormData = new FormData();
		formData.append('file', selectedFile);
		
		let result = await fetch(Rest.media+'/add-storage-avatar',{
			method: 'POST',
			body: formData
		}).then(data=>data.json());
		dispatch(fetchUpdateProfile({
			token: token,
			name: editProfile ? editProfile.name : '',
			avatar: result.data,
			email:  '',
			about: editProfile ? editProfile.about : '',
			bornDate: editProfile ? editProfile.bornDate : 1900,
			phone: editProfile ? editProfile.phone : '',
			address: editProfile ? editProfile.address : '',
		})).then(()=>{
			swal('Güncelleme', 'Kullanıcı bilgileri başarı ile güncellendi.','success').then(()=>{
				dispatch(fetchgetUserProfile(token));
			});
		})
	}
	return (
		<>
			<nav
				className="navbar navbar-expand-md navbar-dark mb-4"
				style={{ backgroundColor: "#3097D1" }}>
				<a href="index.html" className="navbar-brand">
					<img
						src="/img/brand-white.png"
						alt="logo"
						className="img-fluid"
						width="80px"
						height="100px"
					/>
				</a>

				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#responsive">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="responsive">
					<ul className="navbar-nav mr-auto text-capitalize">
						<li className="nav-item">
							<a href="index.html" className="nav-link active">
								home
							</a>
						</li>
						<li className="nav-item">
							<a href="profile.html" className="nav-link">
								profile
							</a>
						</li>
						<li className="nav-item">
							<a href="#modalview" className="nav-link" data-toggle="modal">
								messages
							</a>
						</li>
						<li className="nav-item">
							<a href="notification.html" className="nav-link">
								docs
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link d-md-none">
								growl
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link d-md-none">
								logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container">
				<div className="row" style={{ width: "1000px" }}>
					<div className="col-12 col-lg-1"></div>
					<div className="col-12 col-lg-10 p-4 rounded-4" style={{backgroundColor: 'white',}}>
						<div className="input-group m-4 justify-content-center">
							<img src={editProfile?.avatar}
							onClick={()=>inputFileRef.current?.click()}
							style={{width:'150px', height:'150px'
								,borderRadius:'50%'
							}}
							/>
							<input type="file" hidden ref={inputFileRef} onChange={handleFileChange} />
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="basic-addon1">
								name
							</span>
							<input
							onChange={evt=>{
								if(editProfile)
									setEditProfile({...editProfile,name:evt.target.value})
							}}
								defaultValue={editProfile?.name}
								type="text"
								className="form-control"
								placeholder="adınız soyadınız"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="basic-addon1">
								phone
							</span>
							<input
							onChange={evt=>{
								if(editProfile)
									setEditProfile({...editProfile,phone:evt.target.value})
							}}
							defaultValue={editProfile?.phone}
								type="text"
								className="form-control"
								placeholder="0 (XXX) XXX XX XX"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="basic-addon1">
								bornDate
							</span>
							<select className="form-control"
							onChange={evt=>{
								if(editProfile)
									setEditProfile({...editProfile,bornDate:parseInt(evt.target.value)})
								}}
							>
								{
									optionArray.map(data=>{
										return(
											<option selected={data===editProfile?.bornDate} value={data}>{data}</option>
										)
									})
								}
							</select>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text">Adres</span>
							<textarea
							onChange={evt=>{
								if(editProfile)
									setEditProfile({...editProfile,address:evt.target.value})
							}}
							defaultValue={editProfile?.address}
							placeholder="açık adresinizi yazınız"
								className="form-control"
								aria-label="With textarea"></textarea>
						</div>

						<div className="input-group mb-3">
							<span className="input-group-text">Hakkında</span>
							<textarea
							onChange={evt=>{
								if(editProfile)
									setEditProfile({...editProfile,about:evt.target.value})
							}}
							defaultValue={editProfile?.about}
								rows={6}
								placeholder="kendinizi tanıtın"
								className="form-control"
								aria-label="With textarea"></textarea>
						</div>
						<div className="input-group d-grid">
							<button onClick={updateProfile} className="btn btn-success">
								Profili Güncelle
							</button>
						</div>
					</div>
					<br /> <br /> <br />
					<br /> <br /> <br />
					<div className="col-12 col-lg-1"></div>
				</div>
			</div>
		</>
	);
}

export default EditProfile;
