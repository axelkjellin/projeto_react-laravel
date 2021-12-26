import React from 'react'
import styled from 'styled-components';
import Carousel from 'react-images'
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';

const Content = styled.div`
    width: 100%;
    /* height: 15px; */
    /* background-color: red; */
`
const images = [{source: first}, {source: second}, {source: third}]

const HeaderCarousel = () => {
    return(
        <Content>
            <Carousel views={images} />
        </Content>
    )
}

export default HeaderCarousel;