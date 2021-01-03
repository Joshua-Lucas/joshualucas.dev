import React from 'react'
import styled from 'styled-components'
import About from './About'
import SkillsText from './SkillsText'

// Static Data
// import { Frontend, Backend, EssentailSkills } from '../skillsButtons/StaticData'
import { ISkillsData } from '../../Main'

//Styled Components
const TextWrapper = styled.div`
  padding-right: 14rem;
  grid-column: 2/3;
  grid-row: 2/3;
`
interface ITextContainer extends ISkillsData {
  section?: string
}

//React Component
const TextContainer: React.FC<ITextContainer> = ({ section, skills }) => {
  const setSection = () => {
    const frontend = skills.find((obj) => obj.title == 'frontend')
    const backend = skills.find((obj) => obj.title == 'backend')
    const essentailSkills = skills.find(
      (obj) => obj.title == 'essential skills'
    )

    if (section == 'frontend') {
      return frontend
    } else if (section == 'backend') {
      return backend
    } else {
      return essentailSkills
    }
  }

  return (
    <TextWrapper>
      {section == 'Intro' ? (
        <About />
      ) : (
        <SkillsText
          title={setSection().title}
          intro={setSection().intro}
          categoryTitle={setSection().categoryTitle}
          categoryData={setSection().categoryData}
          subCategoryTitle={setSection().subCategoryTitle}
          subCategoryData={setSection().subCategoryData}
        />
      )}
    </TextWrapper>
  )
}
export default TextContainer
