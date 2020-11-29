import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import BannerText from './BannerText'

const BannerWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background: ${({ theme }) => theme.colors.secondary};
`

const BannerContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 786px) {
    height: 100%;
    max-width: 75%;
    margin: auto;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

const BannerImage = styled.img`
  width: 100%;
  @media (min-width: 786px) {
    height: 100%;
  }
  @media (min-width: 1250px) {
    max-width: ${rem('690px')};
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
