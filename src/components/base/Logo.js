import React from 'react'
import LogoSrc from '../../assets/logo.svg'
import styled from 'styled-components'

const UILogo = styled.img`
  max-width: 177px;
  height: 100%;
`

const Logo = () => {
  return <UILogo src={LogoSrc} />
}

export default Logo
