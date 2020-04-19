import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

const Header = styled.header`
  display: block;
  top: 0;
  height: 50px;
  width: 100vw;
  max-width: 100%;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  margin-bottom: 3rem; 
`

const Navbar = styled.nav`
  max-width: 960px; 
  margin: 0 auto;
  padding: 2rem 2.5rem;
  font-size: 1.6rem;
  font-weight: bolder;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
  .title {
      text-align: left;
  }
  a {
    align-self: center;
  }
  button {
    float: right;
    font-size: 1.5rem;
    background: white;
    border: none;
    :hover {
      cursor: pointer;
    }
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
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'de' }}>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
        <title>Index</title>
      </Helmet>
      <Header>
        <Navbar>
          <Link to='/'><h1 className="title">Wien-Kaffee</h1></Link>
          {/* className='snipcart-checkout' opens the cart */}
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/'>About</Link>
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