import { useEffect } from "react";
import CreatePostCard from "../molecules/CreatePostCard";
import Post from "../molecules/Post";
import { SocialDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { fetchGetPostList } from "../../store/feature/postSlice";
import { clearToken } from "../../store/feature/authSlice";
function HomeContent() {
	const postList = useAppSelector(state=> state.post.postList);
	const token = useAppSelector(state=> state.auth.token);
	const dispatch = useDispatch<SocialDispatch>();
	useEffect(()=>{
		refreshPage();
	},[]);
	const refreshPage=()=>{
		dispatch(fetchGetPostList(token)).then((data)=>{
			if(data.payload.code!==200){
			   localStorage.removeItem('token');
			   dispatch(clearToken());
			   }
	   })
	}
	return (
		<div className="middle-column">
			<div className="card">
        <CreatePostCard />
		<div className="row m-3">
			<button onClick={refreshPage} style={{width:'25%', marginLeft: '37%'}} className="btn btn-warning justify-content-center">Yenile</button>
		</div>
        {
			postList?.map((post,index)=>{
				return <Post 
						postId={post.postId}
						key={index} 
						avatar={post.avatar}
						userName={post.userName}
						url={post.photo}
						comment={post.comment}
						date={post.sharedDate}
						likeCount={post.likeCount}
						commentCount={post.commentCount}
						commentList={post.commentList}
						/>;
			})
		}
		
      </div>
		</div>
	);
}
export default HomeContent;
