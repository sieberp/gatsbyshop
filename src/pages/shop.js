import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from './components/layout'
import ProductList from './components/productList'

const CategoryLink = styled(Link)`
  font-size: 2rem;
  margin: 0 2rem;
`

const Shop = () => {
  return (
    <StaticQuery query={graphql`
    query productsQuery {
      allContentfulProduct {
        edges {
          node {
            id
            name
            price
            roasttype
            slug
            description {
              description
            }
            picture {
              file {
                url
              }
              sizes {
                ...GatsbyContentfulSizes
              }
            }
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `}
      render={data => (
        <Layout>
          <span style={{ fontSize: '2rem' }}>Kategorien: </span>
          {data.allContentfulCategory.edges.map(category => <CategoryLink to={'/products/' + category.node.slug}>{category.node.name}</CategoryLink>)}
          <ProductList>
            {
              data.allContentfulProduct.edges.map(product => (
                <Link to={'/products/' + product.node.slug} className="product-link" key={product.node.id} >
                  <li>
                    <Img sizes={product.node.picture.sizes} imgStyle={{ objectFit: 'contain' }}></Img>
                    <p>
                      <span className='name'>{product.node.name}</span>
                      <span className='price'>ab {product.node.price.toFixed(2).replace('.', ',')}€</span>
                    </p>
                  </li>
                </Link>
              ))
            }
          </ProductList>

        </Layout >
      )
      } />
  )
}

export default Shop