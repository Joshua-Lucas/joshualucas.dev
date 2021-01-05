import React, { useState } from 'react'
import styled from 'styled-components'
import LogoContainer from './LogosContainer'
import Nav from './nav'

//Styled Components
const ComponentContainer = styled.header`
  @media (min-width: 786px) {
    max-width: 75%;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
  }
`

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <ComponentContainer>
      <LogoContainer activateNav={setToggleNav} toggle={toggleNav} />
      <Nav
        toggleNav={toggleNav}
        navLinks={['About', 'Works', 'Testimonials', 'Contact']}
      />
    </ComponentContainer>
  )
}

export default Navigation
