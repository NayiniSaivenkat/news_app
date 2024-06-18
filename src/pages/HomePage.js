import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/newsSlice';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, currentPage, category } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ category, page: currentPage }));
  }, [dispatch, category, currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <CategoryFilter />
      <ArticleList articles={articles} />
      <Pagination />
    </div>
  );
};

export default HomePage;
