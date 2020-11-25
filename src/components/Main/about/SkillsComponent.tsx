import React from 'react'
import styled from 'styled-components'

//Styled Components
const Title = styled.h1``

const SubTitle = styled.h2``
//Interfaces
export interface ISkillComponent {
  title: string
  description: string
  lang: string[]
  tools: string[]
}
//React Component
const SkillsComponent: React.FC<ISkillComponent> = ({
  title,
  description,
  lang,
  tools,
}) => {
  return (
    <>
      <div>
        {/* PUT SVG*/}
        <div>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>

          {/* add filp or dropdown section of what skills i have. (i.e. Languages/frame works ) */}
        </div>
        <div>
          <h4>{lang}</h4>
          <h4>{tools}</h4>
        </div>
      </div>
    </>
  )
}
export default SkillsComponent
