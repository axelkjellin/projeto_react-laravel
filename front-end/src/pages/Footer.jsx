import React from "react";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImFacebook2, ImYoutube2 } from "react-icons/im";

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15rem;
    @media(max-width: 1250px) {
        padding:10px;
        flex-direction: column;
    }
`
const AdressContent = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    text-align: start;
    color: #FFFFFF;
    div{
        margin-bottom: 33px;
        span {
            margin-left: 15px;
        }
    }
    @media(max-width: 1250px) {
        margin: 0;
    }
`
const SocialMediaContent = styled.div`
    display: inherit;
`
const Icons = styled.div`
    margin-right: 15px;
`
const Footer = () => {
    return(
        <Content>
           <div></div>
           <AdressContent>
                <div>
                    <MdLocationOn /> 
                    <span>
                        R. Tailândia, 72, Bairro das Nações, Balneário Camboriú - SC
                    </span>
                </div>
                <div>
                    <BsTelephoneFill />  
                    <span>
                        (47) 2233-3500
                    </span>
                </div>
           </AdressContent>
           <SocialMediaContent>
               <Icons>
                    <FaInstagram />
               </Icons>
               <Icons>
                    <ImFacebook2 />
               </Icons>
               <Icons>
                    <FaLinkedin />
               </Icons>
               <Icons>
                    <ImYoutube2 />
               </Icons>
           </SocialMediaContent>
        </Content>
    )
}

export default Footer;