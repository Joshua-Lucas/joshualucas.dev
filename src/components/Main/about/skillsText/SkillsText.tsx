import React from 'react'
import styled from 'styled-components'

//Styled Components
const TextDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const SectionHeader = styled.h1`
  padding-bottom: 2.3rem;
  color: ${(props) => props.theme.lightTextColor};
  font-size: 18px;
  font-weight: 300;
`

const Title = styled.h1`
  padding-top: 0.75rem;
  padding-bottom: 2.3rem;
  font-size: 3.75rem;
`

const IntroText = styled.h2`
  padding-bottom: 2rem;
  /* color: ${(props) => props.theme.lightTextColor}; */
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
  font-weight: 300;
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0 2rem;
`
const ListSectionTitle = styled.h4`
  font-size: 0.8rem;
  color: ${(props) => props.theme.lightTextColor};
`
const ListItem = styled.p`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.secondaryColor};
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
