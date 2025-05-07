// "use client"

// import React from "react";
// import { useSearchParams } from "next/navigation";

// const ProductPage = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");

//   return (
//     <section>
//       <h2>hey</h2>
//     </section>
//   );
// }

// export default ProductPage;

async function getProduct(id) {
  const res = await fetch(`http://localhost:5039/product/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

const ProductPage = async (props) => {
  const { id } = await props.params;
  const product = await getProduct(id);

  return (
    <section className="text-white p-8">
      <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
      <p className="text-lg">{product.content}</p>
      <p className="mt-4 text-sm text-gray-400">Category: {product.category?.title}</p>
      <img
        src={`http://localhost:5039/images/product/${product.productimage}`}
        alt={product.alttext || product.title}
        className="w-full max-w-xl mx-auto my-6 rounded"
      />
    </section>
  );
}

export default ProductPage;