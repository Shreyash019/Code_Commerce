import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import productsData from '../data/products.json';
import Button from '../components/Button';
import NotFound from '../components/NotFound';
import toast, { Toaster } from 'react-hot-toast';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  rating: number;
  reviews: number;
  video?: string;
}

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  const [mainImage, setMainImage] = useState<string | undefined>();
  const [showCartPopup, setShowCartPopup] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = productsData.categories
      .flatMap((category) => category.products)
      .find((product) => product.id.toString() === productId);

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image);
    }
  }, [productId]);

  const handleBuyClick = () => {
    setShowCartPopup(true);
    setTimeout(() => {
      setShowCartPopup(false);
    }, 3000);
  };

  const handleAddToCartClick = () => {
    toast.success('Item added to cart', {
      style: {
        background: 'white',
        color: 'blue',
      },
    });
  };

  if (!product) {
    return <div className='w-full h-screen'><NotFound /></div>;
  }

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 py-8 my-12 relative">
      <Helmet>
        <title>Code Commerce | {product?.name || 'Product'}</title>
        <meta name="description" content={product?.description || 'Detailed view of the product on Code Commerce.'} />
        <meta name="keywords" content={product?.name + ', e-commerce, product details'} />
      </Helmet>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={mainImage}
            alt={product.name}
            loading="lazy"
            className="w-full h-[20rem] sm:h-[22rem] object-cover rounded-lg shadow-lg border border-gray-light"
          />
          <div className="flex justify-start my-4 items-center overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
                className="w-28 h-24 mr-1 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue"
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>

          {/* Buy and Add to Cart Buttons */}
          <div className='w-full flex items-center justify-center my-4'>
            <div className='w-1/2 m-1'>
              <Button item={"Buy"} onClickFunction={handleBuyClick} />
            </div>
            <div className='w-1/2 m-1'>
              <Button item={"Add to Cart"} onClickFunction={handleAddToCartClick} />
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 border border-gray-light p-4 bg-white rounded-md">
          <h1 className="text-2xl md:text-3xl break-all xs:break-words mb-4">{product.name}</h1>
          <div className='text-gray font-semibold my-2 text-xs sm:text-sm break-all xs:break-words'>
            <p className='rounded-md w-fit px-1.5 py-0.5 bg-blue text-white flex items-center justify-center'>{product.rating || 0}{" ★"}</p>
            <p className='w-full my-1'>{product.reviews * 22 || 100} Ratings && {product.reviews || 0} Reviews</p>
          </div>
          <div className="text-3xl sm:text-4xl font-bold my-4 break-all xs:break-words">{"₹" + product.price}</div>
          <div className='w-full my-4 text-xs sm:text-sm md:text-base'>
            <div className='text-gray font-semibold break-all xs:break-word'>Description</div>
            <div className='break-word xs:break-all'>{product.description}</div>
          </div>

          {/* Video Section */}
          {product.video ? (
            <div className="my-4">
              <video
                controls
                className="w-full h-auto aspect-[3/2] object-cover rounded-lg shadow-lg border border-gray-light"
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="my-4 text-center text-gray-500 italic">
              No video available for this product.
            </div>
          )}
        </div>


        {/* Cart Popup */}
        {showCartPopup && (
          <div className="absolute backdrop-blur top-0 left-0 right-0 bg-white p-4 border border-gray-light rounded-md shadow-lg text-center">
            <h2 className="text-xl font-bold">Order Successful</h2>
            <p>Your order has been placed successfully!</p>
            <button
              className="mt-4 px-4 py-2 bg-blue text-white rounded-md"
              onClick={() => setShowCartPopup(false)}
            >
              Close
            </button>
          </div>
        )}

        {/* React Hot Toast Container */}
        <Toaster />
      </div>
    </div>
  );
};

export default ProductDetails;
