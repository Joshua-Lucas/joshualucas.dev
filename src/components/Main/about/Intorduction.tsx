import React from 'react'
import styled from 'styled-components'
// import DetailsContainer from './Details/DetailsContainer'
// import TextContainer from './Text/TextContainer'

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
  //   const [skillsCategorey, setSkillsCategorey] = useState('Intro')

  //   const toggleSkillsCategorey = (
  //     Event: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     Event.preventDefault()
  //     setSkillsCategorey(Event.currentTarget.id)
  //   }

  return (
    <IntroWrapper id="about">
      {/* <DetailsContainer toggleFunc={toggleSkillsCategorey} />
      <TextContainer section={skillsCategorey} /> */}
    </IntroWrapper>
  )
}
export default Introduction
