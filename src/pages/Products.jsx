import React from "react";
import Link from 'next/link';
import { getProduct } from "../data/getProduct"

const Products = async () => {
  const product = await getProduct();

  return (
    <section id="products" className="flex flex-col justify-center items-center text-center">
      {/* Title */}
      <h2 className="text-[3.5rem] font-bold uppercase">products</h2>
      <div className="flex justify-center items-center mb-8">
        <div className="w-30 h-[4px] bg-white rounded-full"></div>
        <span className="text-[2.5rem] mx-2">★</span>
        <div className="w-30 h-[4px] bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 max-w-[1300px]">
        {product?.map(({ productimage, alttext, title, _id }, index) => (
          <Link href={`/products/${_id}`} key={index}>
            <div className="bg-neutral-700 rounded-lg p-6">
              <figure className="flex flex-col items-center">
                <figcaption className="text-xl font-bold text-white pb-4 w-full">
                  {title}
                </figcaption>
                <img
                  className="object-cover rounded-lg"
                  src={`http://localhost:5039/images/product/${productimage}`}
                  alt={alttext}
                />
              </figure>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Products;
