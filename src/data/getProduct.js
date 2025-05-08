export async function getProduct() {
  const res = await fetch(`http://localhost:5039/product/`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
  

export async function getProductById(id) {
  const res = await fetch(`http://localhost:5039/product/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}