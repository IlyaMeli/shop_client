export async function getProducts(num) {
  return await (
    await fetch(`${process.env.API_URL}/products/all-products?page=${num}`)
  ).json();
}
