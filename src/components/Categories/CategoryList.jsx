import React from 'react';
import { Link } from 'react-router'
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">

      {categories.map((category) => (
        <Link key={category.id} to={`/wiki/${category.routeLink}`}>
          <CategoryCard categoryData={category} />
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
