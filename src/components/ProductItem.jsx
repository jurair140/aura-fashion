import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  // Find the first image (non-video) in the array
  const previewImage = image.find(
    (item) => typeof item === 'string' && !item.endsWith('.mp4')
  ) || image[0]; // fallback to first item if no image found

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          src={previewImage}
          className='hover:scale-110 transition ease-in-out h-[350px]'
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductItem;
