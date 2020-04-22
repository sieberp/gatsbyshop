import React, { useState } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 50%;
  button.decrement {
    width: initial;
    padding: 1rem;
  }
`

const NumberInput = (number, increment, decrement) => {
  return (
    <div className='quantity-input'>
      <button className='decrement' onClick={decrement}>-</button>
      <input type='number' id='quantity' min='1' value={number} />
      <button className='increment' onClick={increment}>+</button>
    </div>
  )
}

export default NumberInput