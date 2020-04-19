import React from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from "../components/layout";

const SingleProductGrid = styled.div`
  display: grid;
  grid-template: 
  "pic pic desc desc"
  "pic pic buy buy";
  article {
    display: inline-block;
    grid-area: desc;
    padding: 3rem;
    max-width: 50vw;
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
    :hover {
      cursor: pointer;
      border-color: brown;
      color: brown;   
    }
  }
`

const ProductImage = styled(Img)`
  width: 300px;
  display: inline-block;
  grid-area: pic;
`

const Description = styled.article`
  display: inline-block;
  grid-area: desc;
`

const CartButton = styled.button`
  max-height: 50px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 5px #333;
  :hover {
    color: #fff;
    background-color: #333;
  }
`

const ProductDetail = ({ data }) => {
  const { name, picture, description } = data.contentfulProduct;
  return (
    <Layout>
      <Link to="/shop">Go back</Link>
      <h1>{name}</h1>
      <SingleProductGrid>
        <ProductImage sizes={picture.sizes}></ProductImage>
        <article>
          {description.description}
        </article>
        <button>
          In den Warenkorb
        </button>
      </SingleProductGrid>
    </Layout>
  );
};

export default ProductDetail;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      description {
        description
      }
      id
      name
      picture {
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