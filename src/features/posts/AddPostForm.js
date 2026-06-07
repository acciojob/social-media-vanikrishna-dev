import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

export default function AddPostForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const onSave = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
      setUserId('');
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onSubmit}>
        <input
          id="postTitle"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select Author</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>
        <textarea
          id="postContent"
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
}