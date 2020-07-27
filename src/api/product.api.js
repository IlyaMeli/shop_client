export async function getProducts(num) {
  return await (
    await fetch(
      `https://arcane-citadel-42275.herokuapp.com/products/all-products?page=${num}`
    )
  ).json();
}
