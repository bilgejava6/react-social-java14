import React from 'react'
import UserCard from '../molecules/UserCard';
import About from '../molecules/About';
import PostImages from '../molecules/PostImages';
import { IUserProfile } from '../../store/feature/userSlice';
interface IHomeProps{
  user: IUserProfile | null
}
function HomeLeft(props:IHomeProps) {
  return (
    <div className="left-column">
         <UserCard 
            backImage='/img/photo-1455448972184-de647495d428.jpg'
            avatar={props.user === null ? '/img/avatar-dhg.png' : props.user.avatar}  
            name={props.user === null ? '' : props.user.name}
            userName={props.user === null ? '' : props.user.userName}
            about={props.user === null ? '' : props.user.about}
            follower={props.user === null ? 0 : props.user.followerCount}
            following={props.user === null ? 0 : props.user.followingCount}
          />        
         <About 
            bornDate={props.user === null ? 1900 : props.user.bornDate}
            phone={props.user === null ? '' : props.user.phone}
            address={props.user === null ? '' : props.user.address}
         />
         <PostImages />                    
    </div>
  )
}

export default HomeLeft;