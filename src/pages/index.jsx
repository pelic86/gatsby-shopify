import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const {
    allShopifyProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <div className="container mx-auto px-6 sm:px-12 lg:px-8">
        <h1 className="text-4xl">首頁</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => {
            const { id, title, images } = product
            const image = images[0].gatsbyImageData

            return (
              <Link
                key={id}
                to={`/products/${title}`}
                className="cursor-pointer text-center"
              >
                <GatsbyImage alt={title} image={image} />
                <h2 className="text-2xl">{title}</h2>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        id
        title
        totalInventory
        images {
          gatsbyImageData(placeholder: "BLURRED")
        }
      }
    }
  }
`
