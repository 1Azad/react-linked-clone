import { Avatar } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"
function Post({ name, description, meassage, photoUrl }) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{meassage}</p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpOffAltIcon} title="like" color="grey" />
                <InputOption Icon={ChatIcon} title="Comment" color="grey" />
                <InputOption Icon={ShareIcon} title="Share" color="grey" />
                <InputOption Icon={SendIcon} title="Send" color="grey" />
            </div>
        </div>
    )
}


export default Post