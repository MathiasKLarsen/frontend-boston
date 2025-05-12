export async function getFooter() {
    const res = await fetch(`http://localhost:5039/footer`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}