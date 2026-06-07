import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectPostById } from './postsSlice';
import { selectUserById } from '../users/usersSlice';
import ReactionButtons from './ReactionButtons';

export default function SinglePostPage() {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  const author = useSelector((state) => selectUserById(state, post?.user));

  if (!post) return <p>Post not found.</p>;

  return (
    <section className="post">
      <article className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p><small>By {author ? author.name : 'Unknown'}</small></p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">Edit Post</Link>
      </article>
    </section>
  );
}