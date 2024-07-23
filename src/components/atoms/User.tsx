import { useDispatch } from "react-redux";
import { SocialDispatch, useAppSelector } from "../../store";
import { fetchAddFollow, fetchFollowList, fetchUnFollow } from "../../store/feature/followSlice";
import swal from "sweetalert";
import { fetchSearchUserList } from "../../store/feature/userSlice";
interface IUserProps{
    userId: number,
    avatar: string,
    userName: string,
    name: string,
	isFollow: boolean
}
function User(user: IUserProps) {
	const token = useAppSelector(state=> state.auth.token);
	const userName = useAppSelector(state => state.user.searchUserName);
	const dispatch = useDispatch<SocialDispatch>();
	const addFollow = ()=>{
		dispatch(fetchAddFollow({
			token: token,
			followId: user.userId
		})).then(()=> {
			swal('Takip İsteği','Takip işlemi başarılı şekilde tamamlandı','success').then(()=>{
				dispatch(fetchSearchUserList({
					token: token,
					userName: userName
				}));
				dispatch(fetchFollowList(token));
			})
		});
	}
	const unFollow = ()=>{
		dispatch(fetchUnFollow({
			token: token,
			followId: user.userId
		})).then(()=> {
			swal('Takip İsteği','Takipten çıkma işlemi başarılı şekilde tamamlandı','warning').then(()=>{
				dispatch(fetchSearchUserList({
					token: token,
					userName: userName
				}));
				dispatch(fetchFollowList(token));
			})
		})
	}
	
	return (
		<div className="row">
			<div className="col-3 ">
				<img
					src={user.avatar === null ? '/img/default-avatar.png' : user.avatar}
					alt="img"
					width="50px"
					height="50px"
					className="rounded-circle mb-4"
				/>
			</div>
			<div className="col-9 p-1 text-left">
				<h6>@{user.userName} {user.name}</h6>
				{
					user.isFollow 
					? 	<a onClick={unFollow} href="#" className="btn btn-outline-info btn-sm mb-3">
							<i className="fas fa-user-friends"></i>UnFollow{" "}
						</a>
					:   <a onClick={addFollow} href="#" className="btn btn-outline-danger btn-sm mb-3">
							<i className="fas fa-user-friends"></i>Follow{" "}
						</a>
				}
				
			</div>
            <hr style={{width: '75%', marginLeft:'13%', color:'red'}}/>
		</div>
	);
}

export default User;
