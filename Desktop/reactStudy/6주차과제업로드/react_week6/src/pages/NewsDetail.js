import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAsync from '../useAsync';
import { fetchNews } from '../api';

function NewsDetail() {
  const { category, id } = useParams();
  const [state] = useAsync(() => fetchNews(category), [category]);
  const { loading, data: articles, error } = state;
  const navigate = useNavigate();

  if (loading) return <p>로딩중...</p>;
  if (error)   return <p>에러 발생!</p>;
  if (!articles) return null;

  const article = articles[Number(id)];
  if (!article) return <p>존재하지 않는 뉴스입니다.</p>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <h1>{article.title}</h1>
      {article.urlToImage && <img src={article.urlToImage} alt="thumbnail" className="thumbnail" />}      
      <p>{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">원본 기사 보기</a>
    </div>
  );
}

export default NewsDetail;