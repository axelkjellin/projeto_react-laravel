import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { ImSpinner10 } from "react-icons/im";

const Content = styled.div`
    margin-top: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 1400px) {
        margin-top: 20px;
    }
    #spinner{
        display: none;
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

const ErrorSpan = styled.span`
    display: none;
    color: red;
    font-style: italic;
`

const ContactSending = styled.div`
    display: none;
    border: solid 2px green;
    background-color: #767676;
    width: 32%;
    border-radius: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 22px;
    padding: 25px;
    margin-bottom: 25px;
    @media(max-width: 1400px) {
        width: 70%;
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

    sendContact() {
        const contact = this.state.contact
        const contactName = document.getElementById('contactName')
        const contactEmail = document.getElementById('contactEmail')
        const spinner = document.getElementById('spinner')
        const success = document.getElementById('success')
        spinner.style.display = 'inline'

        axios.post(baseUrl, {
            contact
        }).then(function (response) {
            spinner.style.display = 'none'
            contactName.style.display = 'none'
            contactEmail.style.display = 'none'
            success.style.display = 'inline'
        }).catch(function (error) {
            success.style.display = 'none'
            const nameError = error.response.data.errors['contact.name']
            const emailError = error.response.data.errors['contact.email']

            if(nameError) {
                contactName.style.display = 'inline'
                contactName.innerHTML = nameError
            }

            if(emailError) {
                contactEmail.style.display = 'inline'
                contactEmail.innerHTML = emailError
            }
            spinner.style.display = 'none'
        })
    }

    render() {
        return (
            <Content>
                <Contact>Contato</Contact>
                <ImSpinner10 id="spinner"/>
                <ContactSending id="success">Contato enviado com sucesso! Em breve entraremos em contato!</ContactSending>
                <Label>Nome</Label>
                <Input type="text" name="name" value={this.state.contact.name} onChange={e => this.handleChange(e)} ></Input>
                <ErrorSpan id="contactName"></ErrorSpan>
                <Label>Telefone</Label>
                <Input type="text" name="phone" value={this.state.contact.phone} onChange={e => this.handleChange(e)}></Input>
                <Label>E-mail</Label>
                <Input type="text" name="email" value={this.state.contact.email} onChange={e => this.handleChange(e)}></Input>
                <ErrorSpan id="contactEmail"></ErrorSpan>
                <Label>Mensagem</Label>
                <Textarea type="text" name="message" value={this.state.contact.message} onChange={e => this.handleChange(e)}></Textarea>
                <Button type="submit" onClick={e => this.sendContact(e)}>Enviar</Button>
            </Content>
        )
    }
}