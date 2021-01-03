import React from 'react'
import styled from 'styled-components'
import { ISkillsData } from '../../Main'
import SkillsButton from './SkillsButton'

//Styled Components
const DetailsWrapper = styled.div`
  padding-left: 12rem;
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
`
//Interface
interface IDetailsContainer extends ISkillsData {
  toggleFunc: React.MouseEventHandler<HTMLButtonElement>
}

//React Component
function DetailsContainer({ toggleFunc, skills }: IDetailsContainer) {
  const Buttons: any = skills.map((object) => (
    <SkillsButton
      key={object.title}
      title={object.title}
      subtitle={object.subTitle}
      accomplishments={object.accomplished}
      toggle={toggleFunc}
    />
  ))
  return <DetailsWrapper>{Buttons}</DetailsWrapper>
}
export default DetailsContainer
