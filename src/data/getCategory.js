export async function getCategory() {
  const res = await fetch(`http://localhost:5039/category`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}