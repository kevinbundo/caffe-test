import React from 'react'
import styled from 'styled-components'
import { Logo, Nav } from '../../components'
import Button from '../../components/base/Button'

const UIHeader = styled.header`
  height: ${({ theme }) => theme.sizes.headerHeight};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
`

const UIHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1136px;
  margin: 0 auto;
  height: ${({ theme }) => theme.sizes.headerHeight};
`

const UINavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  return (
    <UIHeader>
      <UIHeaderWrapper>
        <Logo />

        <UINavWrapper>
          <Nav />
          <Button>Affilia la tua attività</Button>
        </UINavWrapper>
      </UIHeaderWrapper>
    </UIHeader>
  )
}

export default Header
