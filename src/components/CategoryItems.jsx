import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mobile } from "../responsive"

const CategoryItems = ({ item }) => {
    return (
        <Container>
            <Link to={`/route/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Voir Plus</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItems


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Title = styled.h1`
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`