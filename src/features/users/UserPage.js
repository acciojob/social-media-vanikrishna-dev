import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectUserById } from './usersSlice';
import { selectAllPosts } from '../posts/postsSlice';

export default function UserPage() {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));
  const posts = useSelector(selectAllPosts);
  const userPosts = posts.filter((p) => p.user === userId);

  return (
    <section>
      <h2>{user?.name}</h2>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className="post">{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}