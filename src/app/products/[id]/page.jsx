import { getProductById } from "../../../data/getProduct"

const ProductPage = async (props) => {
  const { id } = await props.params;
  const product = await getProductById(id);

  return (
    <section className="flex flex-col justify-center items-center gap-2 py-10">
      <h2 className="text-4xl font-extrabold">{product.title}</h2>
      <p className="text-xl w-[600px] ">{product.content}</p>
      <p className="text-[1rem]"><span className="font-bold text-[1.2rem]">Category:</span> {product.category?.title}</p>

      <div className="flex justify-center">
        <img
          src={`http://localhost:5039/images/product/${product.productimage}`}
          alt={product.alttext || product.title}
          className="w-full max-w-3xl rounded-xl border-2 border-neutral-700"
        />
      </div>
    </section>
  );
}

export default ProductPage;