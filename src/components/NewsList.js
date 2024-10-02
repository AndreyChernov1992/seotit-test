import React from 'react';

const NewsList = ({ news, editNews, deleteNews }) => {
  return (
    <ul>
      {news.map(item => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <button onClick={() => editNews(item)}>Редактировать</button>
          <button onClick={() => deleteNews(item.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
