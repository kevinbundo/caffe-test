import React from 'react'
import styled from 'styled-components'

const UINav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    padding: 0 10px;
    text-transform: uppercase;
     &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Nav = () => {
  const menuItems = [
    { name: 'Azienda', active: false },
    { name: 'Servizi', active: false },
    { name: 'Area Reservata', active: false },
    { name: 'Contatti', active: false },
    { name: 'Area Servizi', active: true },
  ]

  return (
    <UINav>
      {menuItems.map((item, i) => {
        return (
          <li key={i} className={item.active ? 'active' : null}>
            {item.name}
          </li>
        )
      })}
    </UINav>
  )
}

export default Nav
