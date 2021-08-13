exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allProducts: allShopifyProduct {
        nodes {
          title
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const productTemplate = require.resolve(
    "./src/templates/product-template.jsx"
  )

  const products = result.data.allProducts.nodes
  products.forEach(product => {
    const { title } = product
    createPage({
      path: `/products/${title}`,
      component: productTemplate,
      context: {
        title: title,
      },
    })
  })
}
