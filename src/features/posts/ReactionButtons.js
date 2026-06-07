import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

export default function ReactionButtons({ post }) {
  const dispatch = useDispatch();
  const reactions = Object.entries(reactionEmoji);

  return (
    <div className="reactions">
      {reactions.map(([name, emoji], index) => (
        <button
          key={name}
          className="reaction-btn"
          onClick={() => {
            if (index < 4) {
              dispatch(reactionAdded({ postId: post.id, reaction: name }));
            }
          }}
        >
          <span>{emoji}</span>
          <span>{post.reactions[name]}</span>
        </button>
      ))}
    </div>
  );
}