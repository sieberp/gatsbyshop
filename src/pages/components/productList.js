import React from 'react'
import styled from 'styled-components'

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
      font-weight: bolder;
    }
    .price {
      margin-bottom: 2rem;
      color:#77a464;
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

export default ProductList