import { Facebook, GitHub, LinkedIn, Mail, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Adams</Logo>
                <Description>We are a developper web and mobile apps. I do the e.commerce site to help any personne to sale her products</Description>

                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='040404'>
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Utiliser ces liens</Title>
                <List>
                    <ListItems>Accueil</ListItems>
                    <ListItems>Carte</ListItems>
                    <ListItems>Man Fashon</ListItems>
                    <ListItems>Women Fashion</ListItems>
                    <ListItems>Accessoires</ListItems>
                    <ListItems>Mon Compte</ListItems>
                    <ListItems>Order Trackings</ListItems>
                    <ListItems>WishList</ListItems>
                    <ListItems>WishList</ListItems>
                    <ListItems>Teams</ListItems>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItems><Room style={{ marginRight:"10px" }}/> Yaounde Cameroun</ContactItems>
                <ContactItems><Phone style={{ marginRight:"10px" }}/> +237 690 26 47 75</ContactItems>
                <ContactItems><Mail style={{ marginRight:"10px" }}/> nsangouadamsdev@gmail.com</ContactItems>
                <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display: flex;
    background-color: black;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    color: white;
`

const Description = styled.p`
    margin: 20px 0px;
    color: white;
`

const SocialContainer = styled.div`
    display: flex;
    // align-items: center;
    // justify-content: space-between;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color : #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
    color: white
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; 
    display: flex;
    flex-wrap: wrap;
    color: white

`

const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
    color: white
`

const Right = styled.div`
    flex: 1;
    padding:20px;
`

const ContactItems = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: white
`

const Payment = styled.img`
    width: 50%;
`