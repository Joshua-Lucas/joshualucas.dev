import React from 'react'
import styled from 'styled-components'
import { setLightness } from 'polished'

//Styled Components
const TextDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const SectionHeader = styled.h1`
  color: ${(props) => props.theme.lightTextColor};
  font-size: 18px;
  font-weight: 300;
`

const Title = styled.h1`
  padding: 0.5rem 0;
  font-size: 3.75rem;
  text-transform: capitalize;
`

const IntroText = styled.h2`
  padding-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
  font-weight: 300;
`
const ListSectionTitle = styled.h4`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.lightTextColor};
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 0;
`
const ListItem = styled.p`
  margin: 0.5rem;
  padding: 0.5rem 0.75rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${setLightness(0.9, '#141414')};
  font-size: 12px;
`

//Interfaces
interface ITextDetails {
  title: string
  intro: string
  categoryTitle: string
  categoryData: string[]
  subCategoryTitle: string
  subCategoryData: string[]
}

//React Component
function TextDetails({
  title,
  intro,
  categoryTitle,
  categoryData,
  subCategoryTitle,
  subCategoryData,
}: ITextDetails) {
  //   let sectionText = useRef<HTMLDivElement>(null)

  return (
    <TextDetailsWrapper>
      <SectionHeader>Introduction</SectionHeader>
      <Title>{title}</Title>
      <IntroText>{intro}</IntroText>
      <ListSectionTitle>{categoryTitle}</ListSectionTitle>
      <ListContainer role="list">
        {categoryData.map((item: string) => (
          <ListItem key={item} role="listitem">
            {item}
          </ListItem>
        ))}
      </ListContainer>

      <ListSectionTitle>{subCategoryTitle}</ListSectionTitle>
      <ListContainer>
        {subCategoryData.map((item: string) => (
          <ListItem key={item} role="listitem">
            {item}
          </ListItem>
        ))}
      </ListContainer>
    </TextDetailsWrapper>
  )
}
export default TextDetails
