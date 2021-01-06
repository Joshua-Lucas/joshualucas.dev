import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link'

//Styled Components
const TextContiner = styled.div`
  width: 100%;
  margin-top: ${rem('-125px')};
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 10;
  @media (min-width: 786px) {
    margin-top: 0;
    padding: 0 5rem 0 0;
    align-self: center;
  }
`

const PreTitle = styled.h4`
  margin: 0.15rem 0;
  font-weight: 300;
  @media (min-width: 786px) {
    font-size: 2rem;
  }
`

const Title = styled.h1`
  margin: 0;
  font-family: Prompt;
  @media (min-width: 786px) {
    font-size: 4rem;
  }
`

const SubTitle = styled.p`
  margin-top: 0.5rem;
  font-weight: 300;
  @media (min-width: 786px) {
    font-size: 1.25rem;
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 0.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`

const NavLink = styled.a`
  padding-right: 0.25rem;
  &:hover {
    border-bottom: ${rem('2px')} solid ${({ theme }) => theme.colors.accent};
  }
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
            <NavLink>
              Connect with me <span> {'->'} </span>
            </NavLink>
          </Link>
        </LinkContainer>
      </TextContiner>
    </>
  )
}
export default BannerText
