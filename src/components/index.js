import styled from "styled-components";
import { PRI_COLOR } from "../utils/constants";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column
`;

export const Navbar = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 1rem;
  padding-right: 0.3rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row
`;

export const LogoContainer = styled.div`
  width: 3rem;
  height: 100%;
  background-color: ${PRI_COLOR};
`

export const MenuContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: green;
  
`
