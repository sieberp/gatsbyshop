import React from 'react'
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
  margin-bottom: 2rem; 
`

const Navbar = styled.nav`
  max-width: 960px; 
  margin: 0 auto;
  padding: 2rem 2.5rem;
  .title {
  float: left
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
      <Header>
        <Navbar>
          <span className="title">Wien-Kaffee</span>
          {/* className='snipcart-checkout' opens the cart */}
          <button className='snipcart-checkout'>Open Cart -></button>
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