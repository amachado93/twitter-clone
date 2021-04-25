import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from 'react-flip-move';

function Feed(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return(
        <div className="feed">
        {/* Header */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>

        {/* TweetBox */}
        <TweetBox />

        <FlipMove>
        {posts.map((post) => (
        <Post
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}

        />
        ))}
        </FlipMove>

        <Post 
        displayName="aaaaaa"
        username="kindofcool"
        verified="true"
        text="testing testing 123 hello!"
        avatar="#"
        image="https://media.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        />
        

        </div>
    );
}

export default Feed;