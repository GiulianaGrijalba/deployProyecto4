import { IProduct } from '@/types';
import Image from 'next/image';
import React from 'react';

const ProductDetailView: React.FC<IProduct> = ({ name, stock, price, image }) => {
  return (
    <div className="flex flex-wrap items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="relative w-40 h-40 mb-4">
        <Image 
          src={image} 
          alt={`${name} - Product Image`} 
          fill 
          className="rounded-md object-cover"
        />
      </div>
      
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{name}</h1>
      {/* <p className="text-gray-600 text-sm mb-4 text-center">{description}</p> */}
      <div className="flex justify-between w-full text-gray-700 text-sm gap-4">
        <span className="font-medium"> Precio: <span className="font-semibold text-green-600">${price}</span></span>
        <span className="font-medium">Stock: <span className="font-semibold">{stock} unidades </span></span>
      </div>
    </div>
  );
};

export default ProductDetailView;
