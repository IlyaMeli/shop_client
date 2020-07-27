export async function getProducts(num) {
  return await (
    await fetch(`${API_URL}/products/all-products?page=${num}`)
  ).json();
}
