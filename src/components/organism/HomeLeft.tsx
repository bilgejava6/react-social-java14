import React from 'react'
import UserCard from '../molecules/UserCard';
import About from '../molecules/About';
import PostImages from '../molecules/PostImages';

function HomeLeft() {
  return (
    <div className="left-column">
         <UserCard 
            backImage='/img/photo-1455448972184-de647495d428.jpg'
            avatar='/img/avatar-dhg.png'  
            name='Muhammet HOCA'
            userName='muhammedali'
            about='I wish i was a little bit taller, wish i was a baller, wish i had a
						girl… also.'
            follower={1500}
            following={54}
          />        
         <About />
         <PostImages />                    
    </div>
  )
}

export default HomeLeft;