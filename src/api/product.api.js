export async function getProducts(num) {
  return await (
    await fetch(`${window.API_URL || ""}/products/all-products?page=${num}`)
  ).json();
}
