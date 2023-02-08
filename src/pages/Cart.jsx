import React from 'react'
import styled from 'styled-components'
import {  Delete } from '@material-ui/icons'
import {Link} from 'react-router-dom'

import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, removeProducts } from '../redux/cartRedux'
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
   const dispatch = useDispatch()
   const handleClick = (product)=>{
    dispatch(removeProduct(product))
   }
   const handleRemoveAll = ()=>{
    dispatch(removeProducts())
   }
    return (
        <Container>
            <Wrapper>
                <Title>Ton sac</Title>
                <Top>

                <Link to='/'><TopButton> CONTINUER</TopButton></Link>
                    <TopTexts>
                        <TopText> Mon sac({cart.quantity})</TopText>
                        <TopText>Vos Souhaits(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled' onClick={()=>handleRemoveAll()}>Vider</TopButton>
                </Top>
                <Bottom>

                    <Info>
                        {
                            cart.products.map((product) => (
                                <>
                                <Product key={product.id}>
                                    <ProductDetail>

                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName>{product.title}</ProductName>
                                            <ProductId> <b>ID:</b> {product.id}</ProductId>
                                            <ProductColor color={product?.bg} />
                                            <ProductSize> <b>Size: </b> {product?.size}</ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Delete onClick={()=>handleClick(product)}/>
                                        </ProductAmountContainer>
                                        <ProductPrice>{product.price * product.quantity}</ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr/>
                                </>

                            ))
                        }
                    </Info>
                    <Summary>
                        <SummaryTitle>Détail pagnier</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>prix Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>1000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-300</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Acheter</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart

const Container = styled.div``

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}

`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    paddin: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && "none"};
    background-color: ${(props) => props.type === 'filled' ? "black" : "transparent"};
    color: ${(props) => props.type === 'filled' && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`

const Info = styled.div`
    flex:3;
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === 'total' && "500"};
    font-size: ${(props) => props.type === 'total' && "20px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`

const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color}
`

const ProductSize = styled.div``

const PriceDetail = styled.span`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}

`

const ProductPrice = styled.div`
    font-size:30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}

`