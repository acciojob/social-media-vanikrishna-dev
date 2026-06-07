import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllPosts } from './postsSlice';
import { selectUserById } from '../users/usersSlice';
import ReactionButtons from './ReactionButtons';

function PostExcerpt({ post }) {
  const author = useSelector((state) => selectUserById(state, post.user));
  return (
  <article className="post">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p><small>By {author ? author.name : 'Unknown'}</small></p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button">View Post</Link>
    </article>
  );
}

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  return (
    <section className="posts-list">
      {posts.map((post) => (
        <PostExcerpt key={post.id} post={post} />
      ))}
    </section>
  );
}