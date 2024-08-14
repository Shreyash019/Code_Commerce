import React from 'react';

interface CategoryCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    reviews: number;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-light  hover:shadow-md rounded-lg p-2 my-2 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover mb-2 rounded"
      />
      <h3 className="line-clamp-1 px-1">{product.name}</h3>
      <p className="font-semibold px-1">Price: ₹{product.price}</p>
      <div className="flex items-center px-1">
        <span className="text-sm text-gold">{`★`.repeat(Math.round(product.rating))}</span>
        <span className="text-xs ml-2 text-gray">({product.rating})</span>
      </div>
    </div>
  );
};

export default CategoryCard;
