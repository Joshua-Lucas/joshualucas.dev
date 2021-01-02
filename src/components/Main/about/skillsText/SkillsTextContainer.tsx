import React from 'react'
import styled from 'styled-components'
import About from './About'
import SkillsText from './SkillsText'

// Static Data
import {
  Frontend,
  Backend,
  EssentailSkills,
} from '../skillsButtons/StaticData'

//Styled Components
const TextWrapper = styled.div`
  padding-right: 14rem;
  grid-column: 2/3;
  grid-row: 2/3;
`
interface ITextContainer {
  section: string
}

//React Component
const TextContainer: React.FC<ITextContainer> = ({ section }) => {
  const setSection = () => {
    if (section == 'Frontend') {
      return Frontend
    } else if (section == 'Backend') {
      return Backend
    } else {
      return EssentailSkills
    }
  }

  return (
    <TextWrapper>
      {section == 'Intro' ? (
        <About />
      ) : (
        <SkillsText
          title={setSection().title}
          subtitle={setSection().subtitle}
          sectionTitleOne={setSection().sectionTitleOne}
          sectionItemsOne={setSection().sectionItemsOne}
          sectionTitleTwo={setSection().sectionTitleTwo}
          sectionItemsTwo={setSection().sectionItemsTwo}
        />
      )}
    </TextWrapper>
  )
}
export default TextContainer