import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 2rem 0;
      button.decrement, button.increment {
        width: initial;
        padding: 1rem;
        background: white;
        border: 0.5px solid black;
        :hover{
          cursor: pointer;
          background: linear-gradient(90deg, white, #bbb);
        }
      }
        button.decrement {
          :hover {
            background: linear-gradient(270deg, white, #bbb)
          }
      }
      button.decrement {
        border-right: 0;
      }
      button.increment {
        border-left: 0;
      }
      input {
        width: 100%;
        text-align: center;
        border: 0.5px solid black;
        border-right: none;
        border-left: none;
        :disabled {
          background: initial;
          color: initial;
        }
      }
    
`

const QuantityInput = (props) => {
  return (
    <Root>
      <button className='decrement' onClick={props.decrease}>-</button>
      <input type='number' id='quantity' min='1' value={props.quantity} disabled />
      <button className='increment' onClick={props.increase}>+</button>
    </Root >
  )
}

export default QuantityInput
