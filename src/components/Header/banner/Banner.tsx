import React from 'react'
import Image from 'next/image'
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
  align-items: flex-end;

  @media (min-width: 786px) {
    height: 100%;
    max-width: 75%;
    margin: auto;
    flex-direction: row-reverse;
    justify-content: space-between;
    position: static;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  max-width: ${rem('400px')};
  height: 425px;
  @media (min-width: 786px) {
    position: relative;
    max-width: ${rem('525px')};
    height: 100%;
  }
`

const Banner: React.FC = () => {
  const image =
    'https://res.cloudinary.com/jlucompany/image/upload/v1600372226/Portfolio/Porfolio-2.0/me2_kwilna.png'
  return (
    <>
      <BannerWrapper>
        <BannerContainer>
          <ImageContainer>
            <Image
              src={image}
              alt="me"
              layout="fill"
              objectfit="contain"
              priority
            />
          </ImageContainer>
          <BannerText />
        </BannerContainer>
      </BannerWrapper>
    </>
  )
}
export default Banner
