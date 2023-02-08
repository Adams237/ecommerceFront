import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { popularProduct } from '../../data'
import Product from './Product/Product'

const Products = () => {
  const  {category}  = useParams()
  const products = category ?  popularProduct.filter(product =>product.cat === category): popularProduct
  return (
    <Container>
      {
        products.map((item) => (
          <Product key={item.id} item={item} />
        ))
      }
    </Container>
  )
}

export default Products

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`