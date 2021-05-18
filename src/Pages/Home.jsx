import React from 'react'
import styled from 'styled-components'
import { Particles } from '../Components/Particles'

const Home = () => {
    return (
        <HomeStyled>
            <div className="p-particles">
                <Particles />
            </div>
        </HomeStyled>
    )
}

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
`;

export default Home
