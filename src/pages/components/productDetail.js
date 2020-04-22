import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from "../components/layout";
import NumberInput from '../components/numberInput'

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
    .quantit-input {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      width: 50%;
      button.decrement {
        width: initial;
        padding: 1rem;
      }
    }
  }
  button.snipcart-add-item {
    grid-area: buy;
    display: block;
    max-height: 50px;
    width: 50%;
    font-size: 1.6rem;
    font-weight: bolder;
    margin: 0 auto;
    border: none;
    box-sizing: border-box;
    padding: 5px;
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
    }
    input[submit] {
      width: 100%;
    }
  }
`

const ProductDetail = ({ data }) => {
  const { id, name, price, picture, description, slug } = data.contentfulProduct;
  const [quantity, setQuantity] = useState(1);

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
            <input type='number' id='quantity' min='1' value={quantity} />
            <button className='increment' onClick={() => setQuantity(quantity < 25 ? quantity + 1 : 25)}>+</button>
          </div>
        </article>
        <button
          className='snipcart-add-item buyBtn'
          data-item-id={id}
          data-item-price={price}
          data-item-name={name}
          data-item-description={description.description}
          data-item-image={picture.file.url}
          data-item-quantity={quantity}
          data-item-custom1-name='Größe'
          data-item-custom1-options='250g|500g[+10.00]|1kg[+25.00]'
          data-item-custom2-name='Mahlgrad'
          data-item-custom2-options='Ganze Bohne|Espresso|Filter'
          data-item-url={'/products/' + slug}
        >Hinzufügen</button>
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
      slug
      roasttype
    }
  }
`;