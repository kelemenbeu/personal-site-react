import React from 'react'
import styled from 'styled-components'

const Title = ({title, span}) => {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        &::before{
            content: "";
            bottom: 0;
            position: absolute;
            width: 7.4rem;
            height: .31rem;
            background-color: var(--background-light-color);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            bottom: 0;
            position: absolute;
            width: 3.5rem;
            height: .31rem;
            background-color: var(--border-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            color: var(--font-light-color);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }
`;

export default Title
