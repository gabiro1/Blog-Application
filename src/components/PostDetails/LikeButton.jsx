import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
        liked ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
      }`}
    >
      <span>{liked ? "💚" : "🤍"}</span>
      <span>{likes} Like{likes !== 1 && "s"}</span>
    </button>
  );
};

export default LikeButton;
