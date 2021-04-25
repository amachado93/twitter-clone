import React, { useState } from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core"
import db from './firebase';

function TweetBox(){
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Alex',
            username:'reallycoolguy',
            verified: true,
            avatar:"https://avatars.githubusercontent.com/u/32115324?v=4",
            text: tweetMessage,
            image: tweetImage
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="#"></Avatar>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text"></input>
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URL" 
                type="text"></input>

                <Button 
                onClick={sendTweet}
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;