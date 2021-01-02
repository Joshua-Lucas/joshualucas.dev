import React, { useState } from 'react'
import styled from 'styled-components'
import SkillsContainer from './skillsButtons/SkillsContainer'
import SkillsTextContainer from './skillsText/SkillsTextContainer'

//Styled Components
const IntroWrapper = styled.div`
  height: 100vh;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20% 80%;
  grid-column-gap: 6.5rem;
`

//React Component
const Introduction: React.FC = () => {
  const [skillsCategorey, setSkillsCategorey] = useState('Intro')

  const toggleSkillsCategorey = (
    Event: React.MouseEvent<HTMLButtonElement>
  ) => {
    Event.preventDefault()
    setSkillsCategorey(Event.currentTarget.id)
  }

  return (
    <IntroWrapper id="01 Introduction">
      <SkillsContainer toggleFunc={toggleSkillsCategorey} />
      <SkillsTextContainer section={skillsCategorey} />
    </IntroWrapper>
  )
}
export default Introduction
