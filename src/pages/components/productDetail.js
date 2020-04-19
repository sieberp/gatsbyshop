import React from "react";
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
  }
  button {
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
    word-wrap: none;
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
    button {
      width: 100%;
    }
  }
`

const ProductImage = styled(Img)`
`

const ProductDetail = ({ data }) => {
  const { id, name, price, picture, description, slug } = data.contentfulProduct;
  return (
    <Layout>
      <Link to="/shop">Zurück</Link>
      <h1>{name}</h1>
      <SingleProductGrid>
        <Img sizes={picture.sizes} imgStyle={{ objectFit: 'contain' }}></Img>
        <article>
          {description.description}
        </article>
        <button className='snipcart-add-item buyBtn'
          data-item-id={id}
          data-item-price={price}
          data-item-name={name}
          data-item-description={description.description}
          data-item-image={picture.file.url}
          data-item-url={'/products/' + slug}
        > Hinzufügen
        </button>
      </SingleProductGrid>
    </Layout>
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