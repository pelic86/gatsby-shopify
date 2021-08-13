import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Layout from "../components/layout"

const Product = ({ data }) => {
  const { shopifyProduct: product } = data
  const { title, description, images, totalInventory } = product
  const image = images[0].gatsbyImageData

  return (
    <Layout>
      <div className="container mx-auto px-6 sm:px-12 lg:px-6">
        <div className="flex">
          <GatsbyImage alt={title} image={image} />
          <div className="space-y-4">
            <h1 className="text-4xl">{title}</h1>
            <p className="text-gray-700">{description}</p>
            <p>尚有庫存量：{totalInventory}件</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Product.propTypes = {
  data: PropTypes.object,
}

export default Product

export const query = graphql`
  query Product($title: String!) {
    shopifyProduct(title: { eq: $title }) {
      title
      description
      totalInventory
      images {
        gatsbyImageData(placeholder: "BLURRED")
      }
    }
  }
`
