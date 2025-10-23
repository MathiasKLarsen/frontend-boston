const apiUrl = "http://localhost:5039/about";

export async function getAbout() {
    const res = await fetch(`${apiUrl}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}

export async function updateProduct(id, data) {
  const res = await fetch(`${apiUrl}/admin/${id}`, {
    method: "PUT",
    body: data,
  });

  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
}