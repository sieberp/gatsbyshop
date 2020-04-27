import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'

const BackLink = styled(Link)`
  font-size: 1.4rem;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 3.2rem;
`

const PageTitle = ({ name }) => {

  return (
    <>
      <BackLink to="/shop">Zurück</BackLink>
      <Title>{name}</Title>
    </>

  )
}

export default PageTitle
