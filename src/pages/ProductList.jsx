import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products/Products'
import { mobile } from '../responsive'

const ProductList = () => {
  return (
    <Conatiner>
        <Title>Magasin</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrer les Produits:</FilterText>
                <Select>
                    <Option disabled selected>Couleur</Option>
                    <Option>Blanc</Option>
                    <Option>Noir</Option>
                    <Option>Rouge</Option>
                    <Option>Jaune</Option>
                    <Option>Vert</Option>
                </Select>
                <Select>
                    <Option disabled selected>Taille</Option>
                    <Option>Xs</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Trier les Produits:</FilterText>
                <Select>
                    <Option disabled selected> Trier par</Option>
                    <Option > prix (asc)</Option>
                    <Option > prix(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
    </Conatiner>
  )
}

export default ProductList


const Conatiner = styled.div``

const Title = styled.h1`
    margin: 20px
`

const FilterContainer = styled.div`
    display : flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ display: "flex", flexDirection:"column", margin:"0px 20px" })}

`

const FilterText = styled.span`
    font-siza: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}

`

const Option = styled.option``