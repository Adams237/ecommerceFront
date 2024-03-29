import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import {Badge} from '@material-ui/core';

import {mobile} from '../responsive'
import { useSelector } from 'react-redux';


const Navbar = () => {
    const cart = useSelector((state)=>state.cart)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>FR</Language>
                    <SearchComponent>
                        <Input placeholder='search' />
                        <Search style={{ color: 'gray', fontSize:16 }} />
                    </SearchComponent>
                </Left>
                <Center>
                    <Logo>Adams.</Logo>
                </Center>
                <Right>

                    <MenuItems><Link to="/register">Register</Link></MenuItems>
                    <MenuItems><Link to="/login">Sing in</Link></MenuItems>
                    <MenuItems><Link to="/route/cart">
                        <Badge badgeContent={cart.quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                        </Link>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height: 60px;
    background-color: yellow;
    ${mobile({height: "50px", width: "100vw"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const SearchComponent = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`


const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft:"10px"})}
`