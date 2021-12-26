import React from "react";
import styled from "styled-components";
import { FaChargingStation, FaElementor, FaPersonBooth } from "react-icons/fa";
import { IconContext } from "react-icons";

const Content = styled.div`
    margin: 0 27rem 0 27rem;
    height: 25rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 106.25rem) {
        margin: 0;
    }
    @media(max-width: 40.625rem) {
        margin: 0;
        flex-direction: column;
        height: auto;
    }
`
const Item = styled.div`
    width: 18.25rem;
    height: 12.188rem;
    justify-content: center;
    align-items: center;
    display: inherit;
    flex-direction: column;
`

const Icon = styled.div`
    height: 65%;
    display: inherit;
    justify-content: center;
    align-items: center;
`

const Description = styled.div`
    height: auto;
    display: inherit;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
`

const iconDefinition = (size, left = "0rem", top = "0rem") => {
    return { 
        color: 'white',
        style:
        {
            position:"relative",
            width: size,
            height: size,
            left: left,
            top: top
        }
    }
}

const FirstContentPage = () => {
    return (
        <Content>
            <Item>
                <Icon>
                    <IconContext.Provider 
                        value={
                            iconDefinition('104px')
                        }>
                        <FaChargingStation />
                    </IconContext.Provider>
                </Icon>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem nec, augue vel mollis</Description>
            </Item>
            <Item>
                <Icon>
                    <IconContext.Provider 
                        value={
                            iconDefinition('104px')
                        }>
                        <FaElementor />
                    </IconContext.Provider>
                </Icon>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem nec, augue vel mollis</Description>
            </Item>
            <Item>
                <Icon>
                    <IconContext.Provider 
                        value={
                            iconDefinition('104px')
                        }>
                        <FaPersonBooth />
                    </IconContext.Provider>
                </Icon>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem nec, augue vel mollis</Description>
            </Item>
        </Content>
    )

}

export default FirstContentPage;

