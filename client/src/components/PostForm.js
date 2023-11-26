// components/PostForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const token = getToken();

      const response = await axios.post('http://localhost:5000/posts', formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.message);
    } catch (error) {
      console.error('Error creating post:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} required />

        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" onChange={handleChange} required />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
