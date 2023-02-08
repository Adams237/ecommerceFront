import React from 'react'
import styled from 'styled-components'

import imRegister  from '../assets/images/register.jpg'

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREER VOTRE COMPTE</Title>
            <Form>
                <Input placeholder= "votre nom"/>
                <Input placeholder= "votre prenom"/>
                <Input placeholder= "votre pseudo"/>
                <Input placeholder= "votre email"/>
                <Input placeholder= "votre mot de passe"/>
                <Input placeholder= "confirmer votre mot de passe"/>
                <Agreement>
                    par la création de ce compte, j'ateste que les inforation que j'ai fournie
                    sont correct et en accord avec <b>MES DONNEES</b>
                </Agreement>
                <Button>CREER</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register

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
    width: 40%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1``

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
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