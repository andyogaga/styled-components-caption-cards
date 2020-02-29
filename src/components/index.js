import styled from "styled-components";
import { PRI_COLOR, breakpoints, PRI_COLOR_FADED } from "../utils/constants";
import Design from "../assets/img/design.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  overflow-x: hidden;
  overflow-y: auto;
  overflow: scroll;
  background-image: url(${Design});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;

  @media screen and ${breakpoints.sm} {
    background-size: 100% 100%;
  }
  @media screen and ${breakpoints.md} {
    background-size: 100% 100%;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 3rem;
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
  width: 3rem;
  height: 100%;
  background-color: ${PRI_COLOR};
`;

export const MenuContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: green;
`;
export const SearchSection = styled.div`
  padding-top: 24vh;
  padding-bottom: 25vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and ${breakpoints.sm} {
    justify-content: center;
  }
  @media screen and ${breakpoints.md} {
    justify-content: center;
  }
`;

export const SearchWrapper = styled.div`
width: 75%;
height: 3rem;
display: flex;
justify-content: space-around;
margin-left: 6rem;
align-items: center;

@media screen and ${breakpoints.sm} {
  width: 100%;
  align-self: center;
  margin-left: 0rem;
  margin: 2rem;
  flex-direction: column;
}
@media screen and ${breakpoints.md} {
  width: 100%;
  align-self: center;
  margin-left: 0rem;
  margin: 2rem;
  flex-direction: column;
}
`;

export const SearchInput = styled.input`
  width: 75%;
  height: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border: 1px solid ${PRI_COLOR};
  font-color: ${PRI_COLOR};
  
  font-size: 1.5rem;
  padding: 0.5rem;
  padding-left: 2rem;
  background-color: #fff;

  @media screen and ${breakpoints.sm} {
    width: 100%;
    align-self: center;
    margin-left: 0rem;
    border-radius: 2rem;
  }
  @media screen and ${breakpoints.md} {
    width: 100%;
    align-self: center;
    margin-left: 0rem;
    border-radius: 2rem;
  }
`;

export const SearchButton = styled.button`
  width: 25%;
  height: 4rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border: 1px solid ${PRI_COLOR};
  color: #fff;
  font-weight: bold;
  margin-left: 0rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  padding-left: 0rem;
  background-color: ${PRI_COLOR};

  @media screen and ${breakpoints.sm} {
    width: 60%;
    align-self: center;
    margin-top: 0.5rem;
    border-radius: 2rem;
  }
  @media screen and ${breakpoints.md} {
    width: 60%;
    align-self: center;
    margin-top: 0.5rem;
    border-radius: 2rem;
  }
`;


export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (min-width: 724px){
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const TagCard = styled.div`
  background-color: ${PRI_COLOR};
  border-radius: 1rem;
  height: 1.8rem;
  min-width: 5rem;
  max-width: 12rem;
`;

export const CaptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 724px){
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const CaptionCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2rem;
  height: 18rem;
  width: 18%;
  margin: 0.8rem;
  min-width: 12rem;
  box-shadow: 0 0 0.8rem 0.15rem ${PRI_COLOR_FADED};
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &:hover {
    box-shadow: 0 0 0.5rem 0.4rem ${PRI_COLOR_FADED};
  }

  @media screen and ${breakpoints.sm} {
    width: 100%;
    align-self: center;
  }
`;

export const CaptionText = styled.p`
  text-align: center;
  color: ${PRI_COLOR};
  font-size: 1.3rem;
  margin-block-start: 0rem;

  &:first-letter {
    color: #000;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const CaptionCardHeader = styled(CaptionText)`
  margin-block-end: 0rem;
  &:first-letter {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${PRI_COLOR};
  }
`;
