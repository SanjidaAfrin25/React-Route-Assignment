import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';


const Post = (props) => {
    const {title,body,id} = props.post;

    
    return (
        <div className="post-style">
            <h2>Title: {title}</h2>
            <p>{body}</p>
           <Link to={`/about/${id}`}><button>See more</button></Link>
        </div>
    );
};

export default Post;