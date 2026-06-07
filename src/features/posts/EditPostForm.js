import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice';

export default function EditPostForm() {
  const { postId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, postId));

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  if (!post) return <p>Post not found.</p>;

  const onSave = () => {
    if (title && content) {
  dispatch(postUpdated({ id: post.id, title, content }));
  history.push(`/posts/${post.id}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={onSave}>Save Post</button>
    </section>
  );
}