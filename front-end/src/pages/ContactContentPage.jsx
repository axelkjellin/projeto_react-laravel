import React from "react";
import styled from "styled-components";

const Content = styled.div`
    margin-top: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Contact = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 39px;
    text-align: center;
    margin-bottom: 80px;
`
const Label = styled.label`
    width: 607px;
    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 17px;
    @media(max-width: 1700px) {
        width: 90%;
    }
`
const Input = styled.input`
    width: 607px;
    height: 46px;
    opacity: 40%;
    margin-bottom: 24px;
    @media(max-width: 1700px) {
        width: 90%;
    }
`
const Textarea = styled.textarea`
    width: 607px;
    height: 146px;
    opacity: 40%;
    margin-bottom: 24px;
    @media(max-width: 1700px) {
        width: 90%;
    }
`
const Button = styled.button`
    padding: 16px;
    width: 607px;
    height: 49px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    margin-bottom: 180px;
    @media(max-width: 1700px) {
        width: 90%;
    }
`
const ContactContentPage = () => {
    return (
        <Content>
            <Contact>Contato</Contact>
            <Label>Nome</Label>
            <Input></Input>
            <Label>Telefone</Label>
            <Input></Input>
            <Label>E-mail</Label>
            <Input></Input>
            <Label>Mensagem</Label>
            <Textarea></Textarea>
            <Button>Enviar</Button>
        </Content>
    )
}

export default ContactContentPage