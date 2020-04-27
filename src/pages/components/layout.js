import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

const Header = styled.header`
  display: block;
  top: 0;
  width: 100vw;
  max-width: 100%; /* makes horizontal scrolling go away */
  text-align: center;
  font-size: 2rem;
  padding: 10px;
`

const Navbar = styled.nav`
  max-width: 960px; 
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: bolder;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  grid-gap: 5px;
  .title {
      text-align: left;
      font-size: 2.5rem;
      line-height: 2.5rem;
  }
  a {
    align-self: center;
  }
  button {
    float: right;
    font-size: 1.5rem;
    background: white;
    border: none;
    padding: 0;
    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 699px) {
  }
`

const Footer = styled.footer`
  bottom: 0;
  height: 50px;
  width: 100vw;
  max-width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 10px;
  margin-top: 4rem;
  border-top: 2px dashed #333;
`

const MainContainer = styled.main`
  max-width: 960px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    margin: 0 1rem;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'de' }}>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
        <title>Wienkaffee</title>
      </Helmet>
      <Header>
        <Navbar>
          <Link to='/' className="title">Wien-Kaffee</Link>
          {/* className='snipcart-checkout' opens the cart */}
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <button className='snipcart-checkout'>Cart <span className='snipcart-items-count'></span></button>
        </Navbar>
      </Header>
      <MainContainer>
        {children}
      </MainContainer>
      <Footer>
        This is the footer with some extra information.
      </Footer>
    </>
  )
}

export default Layout