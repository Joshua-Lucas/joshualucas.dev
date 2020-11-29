import React from 'react'
import styled from 'styled-components'

//Styled Components
const Title = styled.h1``

const SubTitle = styled.h2``
//Interfaces
interface ISkill {
  title: string
  description: string
}

interface ILang {
  frontend: string[]
  backend: string[]
  essential: string[]
}

interface ITool {
  frontend: string[]
  backend: string[]
  essential: string[]
}

export interface ISkillComponent {
  skills: ISkill
  langs: ILang
  tools: ITool
}
//React Component
const SkillsComponent: React.FC<ISkillComponent> = ({
  skills,
  tools,
  langs,
}) => {
  return (
    <>
      <div>
        {/* PUT SVG*/}
        <div>
          <Title>Title</Title>
          <SubTitle>description</SubTitle>

          {/* add filp or dropdown section of what skills i have. (i.e. Languages/frame works ) */}
        </div>
        <div>
          <h4>{skills}</h4>
          <h4>{langs}</h4>
          <h4>{tools}</h4>
        </div>
      </div>
    </>
  )
}
export default SkillsComponent
