import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Layout from './components/layout'

const Index = () => {
  return (
    <StaticQuery query={graphql`
    query productsQuery {
      allContentfulProduct {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `}
      render={data => (
        <Layout>
          <ul>

            {
              data.allContentfulProduct.edges.map(product => (

                <li key={product.node.id} > {product.node.name}</li>
              ))
            }
          </ul>
        </Layout >
      )
      } />
  )
}

export default Index
