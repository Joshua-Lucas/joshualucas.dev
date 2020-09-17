import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link'

//Styled Components
const TextContiner = styled.div`
  width: 100%;
  margin-top: ${rem('-125px')};
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: 786px) {
    margin-top: 0;
  }
`

const PreTitle = styled.h4`
  margin: 0.15rem 0;
  font-weight: 300;
`

const Title = styled.h1`
  margin: 0;
  font-family: Prompt;
`

const SubTitle = styled.p`
  margin-top: 0.5rem;
  font-weight: 300;
`

const LinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.accent};
`

const NavLink = styled.a`
  padding-right: 0.25rem;
`

//React Component
const BannerText: React.FC = () => {
  return (
    <>
      <TextContiner>
        <PreTitle>A Louisville Based</PreTitle>
        <Title>Full-Stack Developer</Title>
        <SubTitle>
          Creating intuitive and responsive software with people in mind
        </SubTitle>
        <LinkContainer>
          <Link href="/#">
            <NavLink>Connect with me</NavLink>
          </Link>
          <span> {'->'} </span>
        </LinkContainer>
      </TextContiner>
    </>
  )
}
export default BannerText
