import React from 'react'
import './Post.css';
import {useState,useEffect} from 'react';

function Post(props) {

    const[likes,setLikes] = useState(1);


    const handleLike=()=>{
        setLikes((likes)=>likes+1);
    }
  return (
    <div className="post">
      <img src={`https://picsum.photos/200?random=${props.id}`} />
      <p>User ID :{props.userId}</p>
      <div className="text">
      Title :{props.title}
      </div>
      <p>Likes:{likes}</p>
      <button onClick={handleLike}>Like Post</button>
    </div>
  )
}

export default Post
