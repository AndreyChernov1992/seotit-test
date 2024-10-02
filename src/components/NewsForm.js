import React, { useState, useEffect } from 'react';

const NewsForm = ({ addOrUpdateNews, editingNews }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNews) {
      setTitle(editingNews.title);
      setContent(editingNews.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newsItem = { title, content, id: editingNews ? editingNews.id : null };
    addOrUpdateNews(newsItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Содержимое"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{editingNews ? 'Обновить' : 'Добавить'}</button>
    </form>
  );
};

export default NewsForm;
