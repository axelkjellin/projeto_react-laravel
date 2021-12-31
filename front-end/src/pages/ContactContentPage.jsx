import React, { Component} from "react";
import styled from "styled-components";
import httpClient from 'react-http-client';

const Content = styled.div`
    margin-top: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 1400px) {
        margin-top: 20px;
    }
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
    width: 32%;
    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 17px;
    @media(max-width: 1400px) {
        width: 90%;
    }
`
const Input = styled.input`
    width: 32%;
    height: 46px;
    opacity: 40%;
    margin-bottom: 24px;
    @media(max-width: 1400px) {
        width: 90%;
    }
`
const Textarea = styled.textarea`
    width: 32%;
    height: 146px;
    opacity: 40%;
    margin-bottom: 24px;
    @media(max-width: 1400px) {
        width: 90%;
    }
`
const Button = styled.button`
    padding: 16px;
    width: 32%;
    height: 49px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    margin-bottom: 180px;
    @media(max-width: 1400px) {
        width: 90%;
        margin-bottom: 25px;

    }
`

const baseUrl = 'http://localhost:80/api/contact'

const initialState = {
    contact: {
        name: '',
        phone: '',
        email: '',
        message: ''
    }
}

export default class ContactContentPage extends Component {
    state = {...initialState}

    handleChange(event) {
        const contact = { ...this.state.contact}
        contact[event.target.name] = event.target.value
        this.setState({contact})
    }

    async sendContact() {
        const contact = this.state.contact
        await httpClient.post(
            baseUrl,
            contact
            // headers if any
        ).then(resp => {
            // console.log(resp.data)
        })
    }

    render() {
        return (
            <Content>
                <Contact>Contato</Contact>
                <Label>Nome</Label>
                <Input type="text" name="name" value={this.state.contact.name} onChange={e => this.handleChange(e)} ></Input>
                <Label>Telefone</Label>
                <Input type="text" name="phone" value={this.state.contact.phone} onChange={e => this.handleChange(e)}></Input>
                <Label>E-mail</Label>
                <Input type="text" name="email" value={this.state.contact.email} onChange={e => this.handleChange(e)}></Input>
                <Label>Mensagem</Label>
                <Textarea type="text" name="message" value={this.state.contact.message} onChange={e => this.handleChange(e)}></Textarea>
                <Button type="submit" onClick={e => this.sendContact(e)}>Enviar</Button>
            </Content>
        )
    }
}