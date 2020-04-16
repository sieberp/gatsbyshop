import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from './components/layout'

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
          <ul>

            {
              data.allContentfulProduct.edges.map(product => (
                <li key={product.node.id} >
                  Name: {product.node.name}<br />
                  Price: {product.node.price}<br />
                  <button className='snipcart-add-item buyBtn'
                    data-item-id={product.node.id}
                    data-item-price={product.node.price}
                    data-item-name={product.node.name}
                    data-item-url={'https://gatsbyshopcoffee.netlify.app/'}
                  > Add To Cart
                  </button>
                </li>
              ))
            }
          </ul>
        </Layout >
      )
      } />
  )
}

export default Index
