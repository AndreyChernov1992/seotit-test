import React, { useState, useEffect } from 'react';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import './styles.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    setNews(storedNews);
  }, []);

  const addOrUpdateNews = (newItem) => {
    if (editingNews) {
      const updatedNews = news.map(item => item.id === newItem.id ? newItem : item);
      setNews(updatedNews);
      localStorage.setItem('news', JSON.stringify(updatedNews));
      setEditingNews(null);
    } else {
      const newId = Date.now();
      const updatedNews = [...news, { ...newItem, id: newId }];
      setNews(updatedNews);
      localStorage.setItem('news', JSON.stringify(updatedNews));
    }
  };

  const editNews = (item) => {
    setEditingNews(item);
  };

  const deleteNews = (id) => {
    const updatedNews = news.filter(item => item.id !== id);
    setNews(updatedNews);
    localStorage.setItem('news', JSON.stringify(updatedNews));
  };

  return (
    <div className="container">
      <h1>{editingNews ? 'Редактировать новость' : 'Добавить новость'}</h1>
      <NewsForm addOrUpdateNews={addOrUpdateNews} editingNews={editingNews} />
      <h1>Список новостей</h1>
      <NewsList news={news} editNews={editNews} deleteNews={deleteNews} />
    </div>
  );
};

export default App;
