import React, { useState } from 'react'
import styled from 'styled-components'
import SkillsContainer from './skillsButtons/SkillsContainer'
import SkillsTextContainer from './skillsText/SkillsTextContainer'

// INTERFACE
import { ISkillsData } from '../Main'

//Styled Components
const IntroWrapper = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    height: 100vh;
    width: 75%;
    margin: 10rem auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

//React Component
function Introduction({ skills }: ISkillsData) {
  const [skillsCategorey, setSkillsCategorey] = useState('Intro')

  const toggleSkillsCategorey = (
    Event: React.MouseEvent<HTMLButtonElement>
  ) => {
    Event.preventDefault()
    setSkillsCategorey(Event.currentTarget.id)
  }

  return (
    <IntroWrapper id="#about">
      <SkillsContainer toggleFunc={toggleSkillsCategorey} skills={skills} />
      <SkillsTextContainer section={skillsCategorey} skills={skills} />
    </IntroWrapper>
  )
}
export default Introduction
