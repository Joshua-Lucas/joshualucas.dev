import React from 'react'
import styled from 'styled-components'

//Styled Components
const AboutContainer = styled.div``
//Interfaces

//React Component
const About: React.FC = () => {
  return (
    <>
      <AboutContainer>
        <h2>Hi, I am Joshua Lucas. Pleasure to meet you.</h2>
        <p>
          I am a self-taught fullstack developer who is passionate about
          developing intuitive, responsive software with the user in mind. I am
          driven, hardworking, honest, and a loyal team player. I am a quick
          learner, perpetually seeking to sharpen my skills and grow in my
          knowledge of software development.
        </p>
        <p>
          When I am not at my computer, you can find me enjoying the outdoors
          with my wife, trying a new restaurant, or conversing with a friend
          over a cup of coffee.
        </p>
      </AboutContainer>
    </>
  )
}
export default About
