import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'; 
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName,
    username,
    verified,
    text,image, avatar})
{
    
    return(
        <div className="post">
            <div className="post__avatar">
                <Avatar src="#"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                        Username{" "} <span>
                        <VerifiedUserIcon className="post__badge"/>    
                        </span>
                        @reallycooluser
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to create a Twitter clone with React!</p>
                    </div>
                    <img src="https://media.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="gif"/>
                </div>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;