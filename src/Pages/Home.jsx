import React from 'react'
import styled from 'styled-components'
import { Particles } from '../Components/Particles'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'

const Home = () => {
    return (
        <HomeStyled>
            <div className="p-particles">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Lorem Ipsum</span></h1>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur. Rem, tenetur molestias suscipit sapiente unde possimus incidunt esse iusto?
                   Lorem ipsum dolor sit amet.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/kelemen.beaa" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/kelemenbeu" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/kelemen-bea-6b55b9163" className="icon i-linkedin">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </HomeStyled>
    )
}

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--font-light-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .5s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
        }
    }
`;

export default Home
