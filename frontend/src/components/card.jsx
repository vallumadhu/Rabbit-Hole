import redheart from "../assets/heart-solid-full.svg";
import heart from "../assets/heart-regular-full.svg";
import share from "../assets/share-nodes-solid-full.svg";
import { useState } from "react";
import "./card.css";

export function Card({ title, likecount, imageUrl }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(likecount);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    };

    return (
        <div className="post-card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>

            <div className="imagebox">
                <img src={imageUrl} alt={title} />
            </div>

            <div className="button-box">
                <div>
                    <button
                        className={`like-btn ${isLiked ? "liked" : ""}`}
                        onClick={toggleLike}
                    >
                        <img src={isLiked ? redheart : heart} alt="Like" />
                    </button>

                    <span className="likes">{likes.toLocaleString()} likes</span>
                </div>

                <button>
                    <img src={share} alt="Share" />
                </button>
            </div>
        </div>
    );
}