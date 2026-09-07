import { useState } from "react";
import redheart from "../assets/heart-solid-full.svg";
import heart from "../assets/heart-regular-full.svg";
import "./comment_section.css";

function Comment({ content }) {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
    };

    return (
        <div className="comment">
            <p>{content}</p>

            <div className="btns-box">
                <div>
                    <button
                        className={`like-btn ${isLiked ? "liked" : ""}`}
                        onClick={toggleLike}
                    >
                        <img src={isLiked ? redheart : heart} alt="Like" />
                    </button>
                </div>

                <button>Reply</button>
                <button>View replies</button>
            </div>
        </div>
    );
}

export function CommentSection({ comment_id }) {
    const comments = [
        { id: 1, content: "This is a comment." },
        { id: 2, content: "This is another comment." },
        { id: 3, content: "This is yet another comment." },
        { id: 4, content: "This is a fourth comment." }
    ];

    return (
        <div className="comment-section">
            {comments.map((comment) => (
                <Comment key={comment.id} content={comment.content} />
            ))}
        </div>
    );
}