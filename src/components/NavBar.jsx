import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Logo} from '../assets/icons/caption-logo.svg'


export const Navbar = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 1rem;
  padding-right: 0.3rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  width: 4rem;
  height: 100%;
`;

export const MenuContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: green;
`;



const NavBar = props => {
  return (
    <Navbar >
      <LogoContainer >
        <Logo 
          style={{width: '4rem', height: '4rem'}}
        />
      </LogoContainer>
      <MenuContainer />
    </Navbar>
  )
}

export default NavBar
