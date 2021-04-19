import { useParams } from 'react-router';
import React, {useState,useEffect} from 'react';
import './PostDetails.css';


const PostDetails = () => {
    const {PostId}=useParams();
    const [postt,setPostt] =useState([]);
    const{name,email,body,}=postt;
    
   
    
    
    useEffect(() =>{
        const url=(`https://jsonplaceholder.typicode.com/comments/${PostId}`)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPostt(data))
       
    },[]);
    
    return (
        <div className="detail-style">
            <h1>Comment-section</h1>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;