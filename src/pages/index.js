import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Layout from './components/layout'

const ProductList = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.5rem;
`
const ProductCard = styled.li`
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #333;
  padding: 5px;
  margin: 5px;
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
`


const Index = () => {
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
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Index</title>
          </Helmet>
          <ProductList>
            {
              data.allContentfulProduct.edges.map(product => (
                <ProductCard key={product.node.id} >
                  <Img sizes={product.node.picture.sizes}></Img>
                  <span className='name'>Name: {product.node.name}</span>
                  <span className='price'>Price: {product.node.price}€</span>
                  <button className='snipcart-add-item buyBtn'
                    data-item-id={product.node.id}
                    data-item-price={product.node.price}
                    data-item-name={product.node.name}
                    data-item-image={product.node.picture.file.url}
                    data-item-url={'/'}
                  > Add To Cart
                  </button>
                </ProductCard>
              ))
            }
          </ProductList>

        </Layout >
      )
      } />
  )
}

export default Index
