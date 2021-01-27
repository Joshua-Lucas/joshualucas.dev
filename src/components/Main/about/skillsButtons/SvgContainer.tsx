import React from 'react'
import styled from 'styled-components'

// SYLED COMPONENTS
const SVG = styled.svg`
  width: 15%;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  stroke: #000;
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
