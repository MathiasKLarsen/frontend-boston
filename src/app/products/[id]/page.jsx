import { getProductById } from "../../../data/getProduct"

const ProductPage = async (props) => {
  const { id } = await props.params;
  const product = await getProductById(id);

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