import React from 'react'
import styled from 'styled-components'
import { Topbar, Header } from '../index'

const UILyout = styled.div``

const Layout = ({ children }) => {
  return (
    <UILyout>
      <Topbar />
      <Header />
      <main>{children}</main>
    </UILyout>
  )
}

export default Layout
