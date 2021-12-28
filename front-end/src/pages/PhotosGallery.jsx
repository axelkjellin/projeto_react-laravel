import React, { useState } from "react";
import styled from "styled-components";
import foto1 from "../images/fotos-options/foto1.jpg"
import foto2 from '../images/fotos-options/foto2.png';
import foto3 from '../images/fotos-options/foto3.png';
import foto4 from '../images/fotos-options/foto4.png';
import foto5 from '../images/fotos-options/foto5.png';
import foto6 from '../images/fotos-options/foto6.png';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const photos = {
    'photo1':  foto1,
    'photo2':  foto2,
    'photo3':  foto3,
    'photo4':  foto4,
    'photo5':  foto5,
    'photo6':  foto6,
}

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:  center;
    margin-top: 140px;
    @media(max-width: 1280px){
        flex-direction: column;
        margin-top: 0;
    }
`
const Title = styled.div`
    font-weight: bold;
    font-size: 64px;
    line-height: 70px;
    text-align: start;
    @media(max-width: 1280px){
        font-size: 36px;
        line-height: 39px;
        text-align: center;
        margin-top: 25px;
    }
`
const ImageContent = styled.div`
    img {
        width: 1240px;
        height: 700px;
    }
    @media(max-width: 1280px){
        img {
            margin-top: 15px;
            width: 100%;
            height: 100%;
        }
    }
`
const Container = styled.div`
    display: flex;
    width: 77.5em;
    flex-direction: column;
    &.options {
        margin-top: 21px;
        justify-content: space-between;
        flex-direction: row;
    }
    @media(max-width: 1280px){
        max-width: 100%;
        max-height: 100%;
    }
`
const ImageOptions = styled.div`
    img{
        width: 224px;
        height: 126.47px;
    }
`
const ImageOptionsFirstImage = styled.div`
    display: none;
    img{
        width: 224px;
        height: 126.47px;
    }
    @media(max-width: 1280px){
        display: none;
    }
`

const Button = styled.button`
    margin: 0;
    padding: 0;
    @media(max-width: 1280px){
        display: none;
    }
`

const PreviusButton = styled.button`
    width: 88px;
    height: 88px;
    background: #090909;
    opacity: 0.5;
    border-radius: 0px 10px 10px 0px;
    position: relative;
    bottom: 390px;
    .previousButton{
        color: #ffffff;
        transform: scale(3);
    }
    @media(max-width: 1280px){
        width: 50%;
        position: static;
        height: 55px;
    }
`

const NextButton = styled.button`
    width: 88px;
    height: 88px;
    background: #090909;
    opacity: 0.5;
    border-radius: 10px 0px 0px 10px;
    position: relative;
    bottom: 390px;
    left: 86%;
    color: #ffffff;
    .nextButton {
        color: #ffffff;
        transform: scale(3);
    }
    @media(max-width: 1280px){
        position: static;
        width: 50%;
        height: 55px;
    }
`

const PhotosGallery = () => {
    const [mainPhoto, setMainPhoto] = useState(foto1);
    const [displayNone, setDisplayNone] = useState();

    function changePhoto(photo, id) {
        if(photo.length === 6) {
            setMainPhoto(photos[photo])
        } else {
            setMainPhoto(photo)
        }
        changeVisibility(id)
    }

    function nextPhoto() {
        if(!displayNone) {
            changePhoto(foto2, 2)
        } else {
            if(displayNone.id === '6') {
                changePhoto(foto1, 1)
            } else {
                changePhoto(`photo${parseInt(displayNone.id) + parseInt(1)}`, parseInt(displayNone.id) + parseInt(1))
            }
        }
    }

    function changeVisibility(id) {
        let element = null
        if (id === 0) {
            id = 6
        }
        if(id === '1'){
            element = document.getElementsByClassName('firstImage').style.display = 'none'
        } else {
            element = document.getElementById(id);
            element.style.display = 'none'
        }

        if(!displayNone) {
            document.getElementById(1).style.display = 'inline'
            setDisplayNone(element)
        } else {
            document.getElementById(displayNone.id).style.display = 'inline'
            setDisplayNone(element)
        }
    }

    function previousPhoto() {
        if(!displayNone) {
            changePhoto(foto6, 6)
        } else {
            if(displayNone.id === '1') {
                changePhoto(foto6, 6)
            } else {
                changePhoto(`photo${displayNone.id-1}`, displayNone.id-1)
            }
        }
    }

    return (
        <Content>
            <Container>
                <Title>
                    Galeria de fotos
                </Title>
                <ImageContent>
                    <img src={mainPhoto} alt="foto" />
                    <PreviusButton onClick={() => previousPhoto()} >
                        <MdNavigateBefore className="previousButton"/>
                    </PreviusButton>
                    <NextButton onClick={() => nextPhoto()}>
                        <MdNavigateNext className="nextButton"/>
                    </NextButton>
                </ImageContent>
            </Container>
            <Container className="options">
                <ImageOptionsFirstImage className="firstImage" id="1">
                    <Button onClick={() => changePhoto(foto1, 1)}>
                        <img src={foto1} alt="foto"/>
                    </Button>
                </ImageOptionsFirstImage>
                <ImageOptions id="2">
                    <Button onClick={() => changePhoto(foto2, 2)}>
                        <img src={foto2} alt="foto" />
                    </Button>
                </ImageOptions>
                <ImageOptions id="3">
                    <Button onClick={() => changePhoto(foto3, 3)}>
                        <img src={foto3} alt="foto" />
                    </Button>
                </ImageOptions>
                <ImageOptions id="4">
                    <Button onClick={() => changePhoto(foto4, 4)}>
                        <img src={foto4} alt="foto" />
                    </Button>
                </ImageOptions>
                <ImageOptions id="5" >
                    <Button onClick={() => changePhoto(foto5, 5)}>
                        <img src={foto5} alt="foto"/>
                    </Button>
                </ImageOptions>
                <ImageOptions id="6" >
                    <Button onClick={() => changePhoto(foto6, 6)}>
                        <img src={foto6} alt="foto" />
                    </Button>
                </ImageOptions>
            </Container>
        </Content>
    
    )
}

export default PhotosGallery;