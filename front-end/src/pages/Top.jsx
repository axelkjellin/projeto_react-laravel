import React from 'react';
import styled from 'styled-components';
import StarIcon from '../components/icons/StarIcon';

const Space = styled.div`
    width: 100%;
    height: 6.25rem;
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    width: 7.375rem;
    display: relative;
`
const FirstRow = styled.div`
    width: 100%;
`
const SecondRow = styled.div`
    display: relative;
    width: 100%;
`

const Top = () => {
    return (
        <Space>
            <Content>
                <FirstRow>
                    <StarIcon size='2.125rem' left="2.625rem" top= "1.563rem" />
                </FirstRow>
                <SecondRow>
                    <StarIcon size="3.688rem" />
                    <StarIcon size="3.688rem" />
                </SecondRow>
            </Content>
        </Space>
    )
}

export default Top;