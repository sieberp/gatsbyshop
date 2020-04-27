import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from './layout'
import ProductList from './productList'
import PageTitle from './pageTitle'

const CategoryPage = ({ data }) => {
  const { name } = data.contentfulCategory

  return (
    <Layout>
      <PageTitle name={name}></PageTitle>
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
    </Layout>
  )
}

export default CategoryPage;

export const pageQuery = graphql`
  query($slug: String) {
    contentfulCategory(slug: {eq: $slug})
    {
      name
    }
    allContentfulProduct(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
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
`;