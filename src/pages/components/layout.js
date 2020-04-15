import React from 'react'
import styled from 'styled-components'

import './layout.css'

const Header = styled.header`
  display: block;
  top: 0;
  height: 50px;
  width: 100vw;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  background-color: greenyellow;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100vw;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  background-color: grey;
`



const Layout = ({ children }) => {
  return (
    <>
      <Header>
        Wien-Kaffee
      </Header>
      <main>
        {children}
      </main>
      <Footer>
        Yeah
      </Footer>
    </>
  )
}

export default Layout