import React from 'react'
import styled from 'styled-components'

//Styled Components
const SkillsWrapper = styled.div``
//Interfaces
interface ISkillsContinerProps {
  title: string
}

//React Component
const SkillsContiner: React.FC<ISkillsContinerProps> = () => {
  return (
    <>
      <SkillsWrapper></SkillsWrapper>
    </>
  )
}
export default SkillsContiner
