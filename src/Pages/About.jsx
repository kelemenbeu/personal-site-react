import React from 'react'
import styled from 'styled-components'
import ImageSection from '../Components/ImageSection'
import Title from '../Components/Title'
import {MainLayout} from '../styles/Layouts'

const About = () => {
    return (
        <MainLayout> 
            <AboutStyled>
                <Title title={'About me'} span={'About me'} />
                <ImageSection />
            </AboutStyled>
        </MainLayout>

    )
}

const AboutStyled = styled.section`

`;

export default About
