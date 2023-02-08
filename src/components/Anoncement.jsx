import React from 'react'
import styled from 'styled-components'

const Anoncement = () => {
  return (
    <Container>
        Super deal! Free Shipping on orderOver $50
    </Container>
  )
}

export default Anoncement

const Container = styled.div`
    height:30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`