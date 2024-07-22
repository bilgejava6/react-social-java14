import { useEffect } from "react";
import CreatePostCard from "../molecules/CreatePostCard";
import Post from "../molecules/Post";
import { SocialDispatch, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { fetchGetPostList } from "../../store/feature/postSlice";
function HomeContent() {
	const postList = useAppSelector(state=> state.post.postList);
	const token = useAppSelector(state=> state.auth.token);
	const dispatch = useDispatch<SocialDispatch>();
	useEffect(()=>{
		dispatch(fetchGetPostList(token));
	},[]);
	console.log('post listesi...: ', postList);
	return (
		<div className="middle-column">
			<div className="card">
        <CreatePostCard />
        {
			postList.map((post,index)=>{
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
						/>;
			})
		}
		
      </div>
		</div>
	);
}
export default HomeContent;
