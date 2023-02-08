import React from 'react'
import styled from 'styled-components'

import imRegister  from '../assets/images/register.jpg'

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CONNEXION</Title>
                <Form>
                    <Input placeholder="votre pseudo" />
                    <Input placeholder="votre mot de passe" />
                    <Button>CONNEXION</Button>
                    <Link>Mot de passe oublié</Link>
                    <Link>Créer un compte</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login

const Container =styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${imRegister});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
   
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`



const Button = styled.button`
    width: 90%;
    border: 2px solid green;
    padding: 15px 20px;
    background-color: white;
    color: green;
    cursor: pointer; 
    &:hover{
        background-color: green;
        color: white;
        transition: all 0.5s ease;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
