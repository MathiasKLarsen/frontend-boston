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

export async function createProduct(data) {
  const res = await fetch(`http://localhost:5039/product/`, {
    method: "POST",
    body: data,
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
}

export async function updateProduct(id, data) {
  const res = await fetch(`http://localhost:5039/product/${id}`, {
    method: "PUT",
    body: data,
  });

  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`http://localhost:5039/product/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete product");
  return res.json();
} 