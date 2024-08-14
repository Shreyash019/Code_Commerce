import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import productsData from '../data/products.json';
import Loader from '../components/Loader';
import NotFound from '../components/NotFound';

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

const titleImage = [
  "https://res.cloudinary.com/du5evfwq7/image/upload/v1723564814/Electronic_ogl0hk.jpg",
  "https://res.cloudinary.com/du5evfwq7/image/upload/v1723564814/Fashion_eulccu.jpg",
  "https://res.cloudinary.com/du5evfwq7/image/upload/v1723564814/Appliences_qxwfhx.jpg"
];

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<Category | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const foundCategory = productsData.categories.find(
      (cat) => cat.id.toString() === categoryId
    );
    setCategory(foundCategory);
    setLoading(false);
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold"><Loader /></div>
      </div>
    );
  }

  if (!category) {
    return <div className='w-full h-screen'><NotFound /></div>;
  }

  return (
    <div className="w-full h-auto">
      <Helmet>
        <title>Code Commerce | {category?.name || 'Products'}</title>
        <meta name="description" content={`Explore products in the ${category?.name || 'category'} category on Code Commerce.`} />
      </Helmet>
      {/* Category Banner */}
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${titleImage[category.id - 1] || titleImage[0]})`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden">
          <h1 className="text-5xl md:text-8xl font-bold gradient-text-content text-center line-clamp-2 break-word animate-fadeIn delay-2s">
            {category.name}
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="lg:w-11/12 mx-auto p-2 my-16 animate-fadeIn delay-3s">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {category.products.map((product) => (
            <div key={product.id} className="bg-white border shadow border-gray-lightest hover:shadow-md rounded-lg p-2">
              <img src={product.image} alt={product.name} loading="lazy" className="h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover rounded-md mb-2" />
              <h3 className="px-1 text-base line-clamp-1">{product.name}</h3>
              <div className="px-1 font-semibold line-clamp-1">Price: ₹{product.price}</div>
              <div className="px-1 flex items-center">
                <span className="text-sm text-gold">{Array(Math.round(product.rating)).fill('★').join('')}</span>
                <span className="text-xs text-gray">({product.rating})</span>
              </div>
              <Link to={`/product/${product.id}`} className="px-1 text-sm sm:text-base text-blue hover:underline mt-1 block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
