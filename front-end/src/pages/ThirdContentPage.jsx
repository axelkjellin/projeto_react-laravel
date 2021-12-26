import React from 'react';
import styled from 'styled-components';
import pratoContemporaneo from'../images/prato-2.jpg';

const Content = styled.div`
    margin-top: 65px;
    img {
        max-width:100%;
        margin-top: 15px;
    }
`
const ThirdContentPage = () => {
    return (
        <Content>
            <img src={pratoContemporaneo} alt="pratoContemporaneo" />
        </Content>
    )
}

export default ThirdContentPage