import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from "../components/layout";

const SingleProductGrid = styled.div`
  display: grid;
  grid-template-areas:
  "pic desc"
  "options buy";
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  Img {
    grid-area: pic;
    padding: 1.5rem;
    max-width: 100%;
  }
  article {
    grid-area: desc;
    padding: 3rem;
    line-height: 1.2;
    font-size: 1.6rem;
    .quantity-input {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      width: 50%;
      margin: 2rem 0;
      button.decrement, button.increment {
        width: initial;
        padding: 1rem;
        background: white;
        border: 0.5px solid black;
      }
      button.decrement {
        border-right: 0;
      }
      button.increment {
        border-left: 0;
      }
      input {
        width: 100%;
        text-align: center;
        border: 0.5px solid black;
        border-right: none;
        border-left: none;
      }
    }
  }
  select {
    padding: 0.4rem;
    border: 0.5px solid black
  }
  .snipcart-add-item {
    display: inline-block;
    max-height: 50px;
    width: 50%;
    font-size: 1.6rem;
    font-weight: bolder;
    margin: auto 2rem;
    border: none;
    box-sizing: border-box;
    padding: 0.5rem;
    border: 1px solid #333;
    background: white;
    :hover {
      cursor: pointer;
      border-color: brown;
      color: brown;   
    }
    
  }
  @media (max-width: 699px) {
    article {
      width: 100%;
      font-size: 1.2rem;
      .quantity-input{
        width: 100%;
      }
      .snipcart-add-item {
        word-wrap: normal;
        width: fit-content;
      }
    }
  }
`

const ProductDetail = ({ data }) => {
  const { id, name, price, picture, description, slug, packageSize } = data.contentfulProduct;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('250g');

  return (
    <Layout>
      <Link to="/shop">Zurück</Link>
      <h1>{name}</h1>
      <SingleProductGrid>
        <Img sizes={picture.sizes} imgStyle={{ objectFit: 'contain' }}></Img>
        <article>
          {description.description}
          <div className='quantity-input'>
            <button className='decrement' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <input type='number' id='quantity' min='1' value={quantity} readOnly />
            <button className='increment' onClick={() => setQuantity(quantity < 25 ? quantity + 1 : 25)}>+</button>
          </div>
          <select value={size} onChange={(event) => setSize(event.target.value)}>
            {packageSize.map((size) => <option value={size.name}>{size.name}</option>)}
          </select>
          <button
            className='snipcart-add-item buyBtn'
            data-item-id={id}
            data-item-price={price}
            data-item-name={name}
            data-item-description={description.description}
            data-item-image={picture.file.url}
            data-item-quantity={quantity}
            data-item-custom1-name={size}
            data-item-custom2-name='Mahlgrad'
            data-item-custom2-options='Ganze Bohne|Espresso|Filter'
            data-item-url={'/products/' + slug}
          >Hinzufügen</button>
        </article>
      </SingleProductGrid>
    </Layout >
  );
};

export default ProductDetail;

export const pageQuery = graphql`
  query($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      description {
        description
      }
      id
      name
      picture {
        file {
          url
        }
        sizes(maxWidth: 960) {
          ...GatsbyContentfulSizes
        }
          }
      price
      packageSize {
        name
        grams
      }
      slug
      roasttype
    }
  }
`;