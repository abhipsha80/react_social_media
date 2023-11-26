import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Author: {post.author.username}</p>
      <p>Likes: {post.likes}</p>
    </div>
  );
};

export default Post;
