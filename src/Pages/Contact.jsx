import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <ContactStyled>

        </ContactStyled>
    )
}

const ContactStyled = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    p{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        width: 80%;
    }
    `;

export default Contact
