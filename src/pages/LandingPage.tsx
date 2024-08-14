import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import '/src/CustomStyle/textStyling.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/category/1');
  };

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/du5evfwq7/image/upload/v1723566263/mark-konig-Tl8mDaue_II-unsplash_cp5nkp.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4">
          <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 gradient-text-header animate-fadeIn">
            Welcome to Code Commerce
          </h1>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-center gradient-text-content animate-fadeIn delay-1s">
            Discover the best products in various categories. Get your products delivered quickly and efficiently.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-center gradient-text-content animate-fadeIn delay-3s">
            Whether you’re looking for the latest electronics, stylish fashion, or essential home goods, we have something for everyone.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-center gradient-text-content animate-fadeIn delay-2s">
            Shop Now and Explore More
          </p>
          <button
            onClick={handleClick}
            className="mt-8 sm:mt-12 px-4 sm:px-6 py-2 sm:py-3 bg-blue text-white font-semibold text-sm sm:text-lg rounded-lg shadow-lg hover:bg-blue transition-transform transform hover:scale-105 animate-bounce"
          >
            Shop Now
          </button>
        </div>
      </div>

      <section className="py-8 sm:py-12 bg-gray-lightest animate-fadeIn">
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-blue text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className=''>Get your products delivered quickly and efficiently.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Best Prices</h3>
              <p>Find the best deals and discounts on a wide range of products.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Quality Products</h3>
              <p>Shop high-quality products that meet your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
