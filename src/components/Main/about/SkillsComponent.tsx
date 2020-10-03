import React from 'react'
import styled from 'styled-components'

//Styled Components
const Title = styled.h1``

const SubTitle = styled.h2``
//Interfaces
interface ISkillComponent {
  title: string
  subtitle: string
}
//React Component
const SkillsComponent: React.FC<ISkillComponent> = ({ title, subtitle }) => {
  return (
    <>
      <div>
        {/* PUT SVG*/}
        <div>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>

          {/* add filp or dropdown section of what skills i have. (i.e. Languages/frame works ) */}
        </div>
      </div>
    </>
  )
}
export default SkillsComponent
