import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

// SYLED COMPONENTS
const SVG = styled.svg`
  width: 100%;
  height: ${rem('100px')};
  stroke: #000;
  @media (min-width: 768px) {
    width: 15%;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
  }
`

// INTERFACES
interface ISvgContianer {
  Paths: React.SVGAttributes<SVGPathElement>
}

// COMPONENT
function SvgContianer({ Paths }: ISvgContianer) {
  return (
    <React.Fragment>
      <SVG viewBox="0 0 1200 1200">{Paths}</SVG>
    </React.Fragment>
  )
}
export default SvgContianer
