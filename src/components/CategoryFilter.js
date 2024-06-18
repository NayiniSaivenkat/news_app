import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/newsSlice';

const categories = ['Business', 'Technology', 'Entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.news.category);

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => dispatch(setCategory(category.toLowerCase()))}
          className={currentCategory === category.toLowerCase() ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
