import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.url === id)
  );

  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
