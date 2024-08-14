import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import productsData from '../data/products.json';
import LandingPage from '../pages/LandingPage';
import CategoryCard from '../components/CategoryCard';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState<Category[]>([]);

  const onClickNavigate = (e: any, id: string | number) => {
    e.preventDefault();
    navigate(`/product/${id}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setCategories(productsData.categories);
  }, []);

  return (
    <div className="w-full h-auto">
      <Helmet>
        <title>Code Commerce | Home</title>
        <meta name="description" content="Explore a wide range of products and categories on Code Commerce. Shop now for the best deals." />
      </Helmet>
      <LandingPage />

      {/* Product Categories */}
      {categories.map((category) => (
        <div
          key={category.id}
          className="md:w-11/12 mx-auto my-8 md:my-12 px-4 sm:px-6 lg:px-8 py-6 shadow-lg rounded-lg bg-white max-w-7xl"
        >
          <div className="flex flex-row justify-between items-center mb-6 overflow-hidden">
            <h2 className="text-2xl lg:text-3xl font-bold break-all">
              {category.name}
            </h2>
            <Link
              to={`/category/${category.id}`}
              className="text-xs sm:text-sm md:text-base lg:text-md border border-blue text-blue hover:bg-blue hover:text-white px-2 sm:px-3 md:px-4 py-1 rounded-md transition-colors duration-300 break-all"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.products.slice(0, 4).map((product) => (
              <div onClick={(e) => onClickNavigate(e, product.id)}>
                <CategoryCard key={product.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
