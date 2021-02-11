import React from 'react'
import styled from 'styled-components'
import SvgContainer from './SvgContainer'
import { Icons } from './Icons'

//Styled Components
const SkillButton = styled.button`
  width: 33%;
  cursor: pointer;
  color: ${(props) => props.theme.primaryTextColor};
  background-color: ${(props) => props.theme.secondaryColor};
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    box-shadow: 0 100px 100px 2px rgba(10, 10, 10, 0.5);
    z-index: 10;
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.lightTextColor};
  }
`

const DetailsTitleContiner = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 2rem 0 2rem 4rem;
    width: 100%;
  }
`
const DetailTitle = styled.h1`
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.secondarydTextColor};
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`
const DetailSubtitle = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: ${(props) => props.theme.lightTextColor};
    font-size: 0.85rem;
    font-weight: 200;
  }
`

const DetailFootnote = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    padding-top: 0.5rem;
    font-size: 0.75rem;
  }
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
