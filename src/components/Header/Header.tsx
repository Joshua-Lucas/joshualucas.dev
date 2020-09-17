import styled from 'styled-components'
import Banner from './banner/Banner'
import Navigation from './navigation/navigation'

const HeaderContiner = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`

const Header: React.FC = () => {
  return (
    <>
      <HeaderContiner>
        <Navigation />
        <Banner />
      </HeaderContiner>
    </>
  )
}

export default Header
