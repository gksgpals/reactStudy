import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAsync from '../useAsync';
import { fetchNews } from '../api';

const categories = [
  { value: 'general', label: '일반' },
  { value: 'business', label: '비즈니스' },
  { value: 'entertainment', label: '엔터테인먼트' },
  { value: 'health', label: '건강' },
  { value: 'science', label: '과학' },
  { value: 'sports', label: '스포츠' },
  { value: 'technology', label: '기술' }
];

function NewsList() {
  const [category, setCategory] = useState('general');
  const [state, refetch] = useAsync(() => fetchNews(category), [category]);
  const { loading, data: articles, error } = state;

  return (
    <div className="container">
      <h1>뉴스</h1>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat.value} value={cat.value}>{cat.label}</option>
        ))}
      </select>
      <button onClick={refetch}>새로고침</button>

      {loading && <p>로딩중...</p>}
      {error && <p>에러 발생!</p>}

      <ul className="list">
        {articles && articles.map((article, idx) => (
          <li key={idx} className="item">
            <Link to={`/news/${category}/${idx}`}>  {/* 카테고리와 인덱스를 URL에 포함 */}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
