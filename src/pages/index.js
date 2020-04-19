import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from './components/layout'
import Text from './components/Text'


const Index = () => {
  return (
    <StaticQuery
      query={graphql`
      query ImageQuery {
        file(name: {eq: "nathan-dumlao-etkmWcqtZzg-unsplash"}) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
           }
         }
      }
    `}
      render={data => {
        console.log(data)
        return (
          <Layout>
            <Img
              style={{
                height: "300px",
              }}
              fluid={data.file.childImageSharp.fluid}
              imgStyle={{
                objectPosition: "50% 95%",
              }}
            ></Img>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vel porro amet saepe esse accusamus placeat sapiente ad in, facere
              ipsa quaerat quas, est, nostrum animi adipisci perspiciatis sint
              ducimus.
          </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vel porro amet saepe esse accusamus placeat sapiente ad in, facere
              ipsa quaerat quas, est, nostrum animi adipisci perspiciatis sint
              ducimus.
          </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vel porro amet saepe esse accusamus placeat sapiente ad in, facere
              ipsa quaerat quas, est, nostrum animi adipisci perspiciatis sint
              ducimus.
          </Text>
          </Layout>
        )
      }}
    />
  )
}

export default Index
