import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import BannerText from './BannerText'

const BannerWrapper = styled.div`
  width: 100%;
  height: 70vh;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;

  @media (min-width: 786px) {
    position: static;
  }
`

const BannerContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;

  @media (min-width: 786px) {
    height: 100%;
    max-width: 75%;
    margin: auto;
    flex-direction: row-reverse;
    justify-content: space-between;
    position: static;
  }
`

const BannerImage = styled.img`
  width: 100%;
  max-width: ${rem('420px')};
  position: absolute;
  bottom: 0;
  @media (min-width: 786px) {
    height: 100%;
    position: static;
  }
  @media (min-width: 1250px) {
    max-width: ${rem('590px')};
    margin-right: -3.5rem;
    /* margin-left: 4rem; */
  }
`

const Banner: React.FC = () => {
  const image =
    'https://res.cloudinary.com/jlucompany/image/upload/v1600372226/Portfolio/Porfolio-2.0/me2_kwilna.png'
  return (
    <>
      <BannerWrapper>
        <BannerContainer>
          <BannerImage src={image} alt="me" />
          <BannerText />
        </BannerContainer>
      </BannerWrapper>
    </>
  )
}
export default Banner
