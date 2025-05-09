export async function getAbout() {
    const res = await fetch(`http://localhost:5039/about`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}