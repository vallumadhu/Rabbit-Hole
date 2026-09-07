import "./post.css"
import redheart from "../assets/heart-solid-full.svg";
import heart from "../assets/heart-regular-full.svg";
import share from "../assets/share-nodes-solid-full.svg";
import { useState } from "react";
import { CommentSection } from '../components/comment_section'

export function Post({ postid, title, imageurl, content, comments,likecount }) {
    const getComment_ids = (postid) => {
        return null;
    }
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(likecount);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    };
    return (
        <div className="post-container">
            <div className="post-header">
                <h2>{title}</h2>
            </div>
            <div className="post-image">
                <img src={imageurl} alt={title} />
            </div>
            <div className="post-content">
                <p>{content}</p>
            </div>
            <div className="post-actions">
                <button
                    className={`like-btn ${isLiked ? "liked" : ""}`}
                    onClick={toggleLike}
                >
                    <img src={isLiked ? redheart : heart} alt="Like" />
                </button>

                <span className="likes">{likes.toLocaleString()} likes</span>
            </div>
            <CommentSection comment_id={getComment_ids(postid)} />
        </div>
    )
}