import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/econom.png'
const ArticleCard = ({ article }) => {
const imageUrl = article.urlToImage || img1; // Provide a default image URL or path

  return (
    <div className="article-card">
      <img src={imageUrl} alt={article.title} style={{ height: '20%' , width:"20%"}}/>
      <h2>{article.title}</h2>
      {/* <img src={img1} alt='...'/> */}
      <p>{article.description}</p>
      <Link to={`/article/${article.url}`}>Read more</Link>
    </div>
  );
};

export default ArticleCard;


