import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from "../components/layout";
import PageTitle from './pageTitle'
import QuantityInput from './quantityInput'

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
  }
  select {
    display: inline-block;
    margin: 2rem 0;
    padding: 1rem;
    border: 0.5px solid black;
    :hover {
      cursor: pointer;
    }
  }
  .snipcart-add-item {
    display: inline-block;
    max-height: 50px;
    font-size: 1.6rem;
    font-weight: bolder;
    margin: auto 2rem;
    border: none;
    box-sizing: border-box;
    padding: 1rem;
    border: 1px solid #333;
    background: white;
    :hover {
      cursor: pointer;
      background: #ccc;
    }
    
  }
  .infogrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 0.5rem;
    .price {
      text-align: right;
      padding-right: 2rem;
      color:#77a464;
    }
  }
  @media (max-width: 699px) {
    grid-template-areas:
    "pic"
    "desc";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    article {
      width: 100%;
      font-size: 1.2rem;
      .quantity-input{
        width: 100%;
      }
      .snipcart-add-item {
        word-wrap: normal;
        margin: 1rem 0;

      }
    }
  }
`


const ProductDetail = ({ data }) => {
  const { id, name, price, picture, description, slug, variants } = data.contentfulProduct;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('250g');
  const [selectedPrice, setPrice] = useState(price);

  const selectVariant = (e) => {
    setSize(e.target.value);
    let price = variants.find(element => element.size == (e.target.value.slice(0, e.target.value.length - 1))).price;
    setPrice(price);
  }

  const increase = () => { setQuantity(quantity < 25 ? quantity + 1 : 25) }
  const decrease = () => { setQuantity(quantity > 1 ? quantity - 1 : 1) }


  return (
    <Layout>
      <PageTitle name={name}></PageTitle>
      <SingleProductGrid>
        <Img sizes={picture.sizes} imgStyle={{ objectFit: 'contain' }}></Img>
        <article>
          <div className="infogrid">
            <select value={size} onChange={selectVariant}>
              {variants.map((variant) => <option value={variant.size + 'g'}>{variant.size + 'g'}</option>)}
            </select>
            <span className="price">Preis: {selectedPrice.toFixed(2).replace('.', ',')}€</span>
            <QuantityInput increase={increase} decrease={decrease} quantity={quantity} />
            <button
              className='snipcart-add-item buyBtn'
              data-item-id={id}
              data-item-price={price}
              data-item-name={name}
              data-item-description={description.description}
              data-item-image={picture.file.url}
              data-item-quantity={quantity}
              data-item-custom1-name='Größe'
              data-item-custom1-value={size}
              data-item-custom1-options={variants.map((variant) => variant.size + 'g[+' + (variant.price - price) + ']').join('|')}
              data-item-custom2-name='Mahlgrad'
              data-item-custom2-options='Ganze Bohnen|Espresso|Filter'
              data-item-url={'/products/' + slug}
            >Hinzufügen</button>
          </div>
          <p>
            {description.description}
          </p>
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
      variants {
        size
        price
      }
      slug
      roasttype
    }
  }
`;