import React from 'react'
import styled from 'styled-components'
import SvgContainer from './SvgContainer'
import { Icons } from './Icons'

//Styled Components
const SkillButton = styled.button`
  margin-bottom: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.primaryTextColor};
  background-color: ${(props) => props.theme.secondaryColor};
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  display: flex;
  &:hover {
    box-shadow: 0 100px 100px 2px rgba(10, 10, 10, 0.5);
    z-index: 10;
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.lightTextColor};
  }
`

const DetailsTitleContiner = styled.div`
  width: 85%;
  padding: 2rem 0 2rem 4rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
  }
`
const DetailTitle = styled.h1`
  color: ${(props) => props.theme.secondarydTextColor};
  font-size: 1.2rem;
`
const DetailSubtitle = styled.p`
  color: ${(props) => props.theme.lightTextColor};
  font-size: 0.85rem;
  font-weight: 200;
`

const DetailFootnote = styled.p`
  padding-top: 0.5rem;
  font-size: 0.75rem;
`

// Interface
interface IDetailsButton {
  title: string
  subtitle: string
  accomplishments: string
  toggle: React.MouseEventHandler<HTMLButtonElement>
}

//React Component
function SkillsButton({
  title,
  subtitle,
  accomplishments,
  toggle,
}: IDetailsButton) {
  //Methods
  const SvgIcons = {
    frontend: Icons.Frontend,
    backend: Icons.Server,
    essentialskills: Icons.NetworkHex,
  }

  const setSvgIcon = (IconsObject: any, IconTitle: string) => {
    return IconsObject[IconTitle]
  }

  const id = title.replace(' ', '')

  return (
    <SkillButton id={id} role="button" onClick={toggle}>
      <DetailsTitleContiner>
        <DetailTitle>{title}</DetailTitle>
        <DetailSubtitle>{subtitle}</DetailSubtitle>
        <DetailFootnote>{accomplishments}</DetailFootnote>
      </DetailsTitleContiner>
      <SvgContainer Paths={setSvgIcon(SvgIcons, title.replace(' ', ''))} />
    </SkillButton>
  )
}
export default SkillsButton
