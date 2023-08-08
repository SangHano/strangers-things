import React, { useState } from 'react';

const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);


  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDeliveryChange = (e) => setWillDeliver(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver
          }
        })
      });

      const result = await response.json();
      console.log(result);

      setTitle('');
      setDescription('');
      setPrice('');
      setWillDeliver(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label>Will Deliver:</label>
          <input type="checkbox" checked={willDeliver} onChange={handleDeliveryChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;