import axios from 'axios';

const API_KEY = 'e2cfb6c0ce2b43788643714bc0239635'; 
export async function fetchNews(category) {
  const base = 'https://newsapi.org/v2/everything';
  const url =
    category === 'all'
      ? `${base}?language=ko&sortBy=publishedAt&apiKey=${API_KEY}`
      : `${base}?language=ko&q=${category}&sortBy=publishedAt&apiKey=${API_KEY}`;
  const { data } = await axios.get(url);
  return data.articles;
}