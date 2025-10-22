const apiUrl = "http://localhost:5039/product";

export async function getProduct() {
  const res = await fetch(`${apiUrl}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${apiUrl}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
} 

export async function createProduct(data) {
  try {
    const res = await fetch(`${apiUrl}/admin`, {
    method: "POST",
    body: data,
    });
    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  } catch (error) {
    console.error("Error creating product:", error);
  }
}

export async function updateProduct(id, data) {
  const res = await fetch(`${apiUrl}/admin/${id}`, {
    method: "PUT",
    body: data,
  });

  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${apiUrl}/admin/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete product");
  return res.json();
} 