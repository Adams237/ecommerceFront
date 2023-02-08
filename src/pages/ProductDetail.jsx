import { Add, Remove } from '@material-ui/icons'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { popularProduct } from '../data'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
const Product = () => {
  const { id } = useParams()
  const product = popularProduct.find(product => product.id === Number(id))
  const dispacth = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (type) => {
    if(type === "remove" && quantity>1){
      setQuantity(quantity - 1)
    }else{
      setQuantity(quantity + 1)
    }
  }
  const handleClick = () =>{
    dispacth(addProduct({...product, quantity}))
  }

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipi
            sicing elit. Suscipit error animi, rerum ex veritatis aut molestias, qui
            assumenda voluptate iste ipsa laboriosam i
            ncidunt nihil enim ratione nobis adipisci quasi temporibus.</Description>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Couleur</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='red' />
              <FilterColor color='gray' />
            </Filter>
            {
              product.taille && (
                <Filter>
                  <FilterTitle>Taille</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>X</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                  </FilterSize>
                </Filter>
              )
            }

          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity('remove')} />
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQuantity('add')}/>
            </AmountContainer>
            <Button onClick={handleClick}>Ajouter au pagnier</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: 'column' })}
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}

`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}

`

const Title = styled.h1`
  font-weight: 200;
`

const Description = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`


const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}


`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color : ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding:5px

`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid green;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  &:hover{
    background-color: green;
    color: white;
    transition: all 0.5s ease;
  }
`