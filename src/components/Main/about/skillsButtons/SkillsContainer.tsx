import React from 'react'
import styled from 'styled-components'
import SkillsButton from './SkillsButton'

import { Frontend, Backend, EssentailSkills } from './StaticData'

//Styled Components
const DetailsWrapper = styled.div`
  padding-left: 12rem;
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
`
interface IDetailsContainer {
  toggleFunc: React.MouseEventHandler<HTMLButtonElement>
}

//React Component
function DetailsContainer({ toggleFunc }: IDetailsContainer) {
  const data = [Frontend, Backend, EssentailSkills]

  const Buttons: any = data.map((object) => (
    <SkillsButton
      key={object.title}
      title={object.title}
      subtitle={object.definition}
      accomplishments={object.accomplished}
      toggle={toggleFunc}
    />
  ))
  return <DetailsWrapper>{Buttons}</DetailsWrapper>
}
export default DetailsContainer
