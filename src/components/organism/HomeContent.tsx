import React from "react";
import CreatePostCard from "../molecules/CreatePostCard";
import Post from "../molecules/Post";

function HomeContent() {
	return (
		<div className="middle-column">
			<div className="card">
        <CreatePostCard />
        <Post />
      </div>
		</div>
	);
}

export default HomeContent;
