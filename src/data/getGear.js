export async function getGearCategory() {
  const res = await fetch(`http://localhost:5039/gearcategory`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getGear() {
  const res = await fetch("http://localhost:5039/gear");
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}