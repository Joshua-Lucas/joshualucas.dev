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
function TextContainer({ section, skills }: ITextContainer) {
  const setSection = () => {
    // Searches through skills array and retrieves obj based on selected section.
    const frontend = skills.find(function getFrontendObj(obj) {
      return obj.title == 'frontend'
    })
    const backend = skills.find(function getBackendObj(obj) {
      return obj.title == 'backend'
    })
    const essentailSkills = skills.find(function getEssentailSkillsObj(obj) {
      return obj.title == 'essential skills'
    })

    //renders proper obj from above based on selected section
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
