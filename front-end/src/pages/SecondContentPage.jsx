import React from "react";
import styled from "styled-components";
import pratoContemporaneo from '../images/pratos-de-cozinha-contemporanea.png';

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 42.25rem;
    @media(max-width: 106.25rem) {
        flex-direction: column;
    }
    /* @media(max-width: 40.625rem) {
        margin: 0;
        flex-direction: column;
        height: auto;
    } */
`


const DescriptionItens = styled.div`
    width: 50%;
    display: inherit;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 106.25rem) {
        width: 100%;
    }
`

const MainDescription = styled.div`
    width: 47.875rem;
    height: 6.5rem;
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 52px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07), 0px 4px 4px rgba(0, 0, 0, 0.07);
    @media(max-width: 106.25rem) {
        width: 100%;
        height: 100%;
        text-align: center;
    }
`
const Description = styled.div`
    margin-top: 86px;
    width: 47.875rem;
    height: 6.5rem;
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 26px;
    text-align: justify;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07), 0px 4px 4px rgba(0, 0, 0, 0.07);
    @media(max-width: 106.25rem) {
        margin-top: 20px;
        width: 100%;
        height: 100%;
        text-align: center;
    }
`
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;    
    img {
        max-width:100%;
        margin-top: 15px;
    }
`

const SecondContentPage = () => {
    return (
        <Content>
            <DescriptionItens>
                <MainDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </MainDescription>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sem nec, augue vel mollis purus mauris, posuere volutpat. 
                    Cras vel nunc commodo nulla pharetra, lectus.
                    Sit sed in sed nunc arcu eu. 
                    Netus ligula duis quis sed dui in tortor dolor ultrices.
                </Description>
            </DescriptionItens>
            <Item>
                <img src={pratoContemporaneo} alt="prato-contemporaneo" />
            </Item>
        </Content>
    )
}

export default SecondContentPage;