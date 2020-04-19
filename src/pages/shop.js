import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from './components/layout'

const ProductList = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.5rem;
  li {
    padding: 5px;
    margin: 5px;
    .gatsby-image-wrapper {
      height: 50%;
    }
    .name {
      margin-top: 2rem;
    }
    .price {
      margin-bottom: 2rem;
    }
    span {
      display: block;
      margin: 10px;
      letter-spacing: 0.7px;
    }
    button {
      display: block;
      width: 75%;
      margin: 0 auto;
      border: none;
      box-sizing: border-box;
      padding: 5px;
      border: 0.5px solid #333;
      background: white;
      :hover {
        cursor: pointer;
        border-color: brown;
        color: brown;   
      }
    }
    .product-link {
      display: block;
      width: 75%;
      margin: 5px auto;
      border: none;
      box-sizing: border-box;
      padding: 5px;
      border: 0.5px solid #333;
      background: white;
      text-align: center;
      :hover {
        cursor: pointer;
        border-color: brown;
        color: brown;   
      }
    }
  }
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
    li {
      height: 230px;
      width: 90%;
      display: grid;
      grid-template-columns: 2fr 3fr;
      .gatsby-image-wrapper {
        height: 100%;
      }
      p {
        align-self: center;
      }
      button .product-.link {
        margin: 10px;
        width: 50%;
      }
    }
  }
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
    }
  `}
      render={data => (
        <Layout>

          <ProductList>
            {
              data.allContentfulProduct.edges.map(product => (
                <li key={product.node.id} >
                  <Img sizes={product.node.picture.sizes} imgStyle={{ objectFit: 'contain' }}></Img>
                  <p>
                    <span className='name'>{product.node.name}</span>
                    <span className='price'>{product.node.price.toFixed(2).replace('.', ',')}€</span>
                    <button className='snipcart-add-item buyBtn'
                      data-item-id={product.node.id}
                      data-item-price={product.node.price}
                      data-item-name={product.node.name}
                      data-item-description={product.node.description.description}
                      data-item-image={product.node.picture.file.url}
                      data-item-url={'/'}
                    > Hinzufügen
                  </button>
                    <Link to={'/products/' + product.node.slug} className="product-link">Mehr Info</Link>
                  </p>
                </li>
              ))
            }
          </ProductList>

        </Layout >
      )
      } />
  )
}

export default Shop