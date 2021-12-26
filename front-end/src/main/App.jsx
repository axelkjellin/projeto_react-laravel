import React from "react";
import styled from "styled-components";
import Top from "../pages/Top"
import HeaderCarousel from "../pages/HeaderCarousel"
import FirstContentPage from "../pages/FirstContentPage";
import SecondContentPage from "../pages/SecondContentPage";
import ThirdContentPage from '../pages/ThirdContentPage';
import PhotosGallery from '../pages/PhotosGallery';
import ContactContentPage from '../pages/ContactContentPage'
import Footer from '../pages/Footer'

const Main = styled.div`
    display: flex;
    flex-direction: column;
`
const App = () => {
    return (
        <Main>
            <Top />
            <HeaderCarousel />
            <FirstContentPage />
            <SecondContentPage />
            <ThirdContentPage />
            <PhotosGallery />
            <ContactContentPage />
            <Footer />
        </Main>
    )
}

export default App