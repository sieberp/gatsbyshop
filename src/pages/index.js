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
          }
        }
      }
    }
  `}
      render={data => (
        <Layout>
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Index</title>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
            <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NzY2OGFhMzQtOGQzOC00NGIyLThlOTktOTIwMGQyMzgyMzkzNjM3MDUwMzkzODEzNzgwNTYw"></script>
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
