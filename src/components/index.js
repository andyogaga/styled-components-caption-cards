import styled, { keyframes } from "styled-components";
import { PRI_COLOR, breakpoints, PRI_COLOR_FADED } from "../utils/constants";
import Design from "../assets/img/design.jpg";


export const slideFadeInUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const slideInUp = keyframes`
from {
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
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

export const SearchSection = styled.div`
  padding-top: 16vh;
  width: 100%;
  padding-bottom: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and ${breakpoints.sm} {
    justify-content: center;
    width: 100%;
  }
  @media screen and ${breakpoints.md} {
    justify-content: center;
    width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideInUp} 1.2s ease-in;

  @media screen and ${breakpoints.sm} {
    align-self: center;
    margin-left: 0rem;
    margin: 2rem;
    flex-direction: column;
  }
  @media screen and ${breakpoints.md} {
    align-self: center;
    margin-left: 0rem;
    margin: 2rem;
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 50%;
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
    width: 80%;
    align-self: center;
    border-radius: 2rem;
  }
  @media screen and ${breakpoints.md} {
    width: 80%;
    align-self: center;
    border-radius: 2rem;
  }

  &:hover {
    box-shadow: 0 0 0.8rem 0.1rem ${PRI_COLOR_FADED};
  }
`;

export const SearchButton = styled.button`
  width: 15%;
  height: 4rem;
  cursor: pointer;
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
    width: 40%;
    height: 3rem;
    align-self: center;
    margin-top: 0.5rem;
    border-radius: 2rem;
  }
  @media screen and ${breakpoints.md} {
    width: 40%;
    height: 3rem;
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
  margin-top: 1.5rem;
  align-self: left;
  align-items: center;

  @media screen and (min-width: 1030px) {
    margin-top: 1.5rem;
    align-self: flex-start;
    margin-left: 6rem;
  }

  @media screen and ${breakpoints.sm} {
    align-self: center;
    margin-top: 0.5rem;
  }
  @media screen and ${breakpoints.md} {
    align-self: center;
    margin-top: 0.5rem;
  }
`;

export const TagCard = styled.div`
  display: flex;
  background-color: ${PRI_COLOR};
  border-radius: 1rem;
  height: 1.5rem;
  min-width: 5rem;
  max-width: 12rem;
  padding: 0.3rem;
  margin: 0.5rem;
  align-self: center;
`;

export const TagText = styled.p`
  color: #fff;
  margin: auto;
  margin-left: 0rem;
`;

export const CaptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 724px) {
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
  animation: ${slideFadeInUp} 1.2s linear;

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
  color: rgba(0,0,0,0.9);
  &:first-letter {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: normal;
  }
`;

export const EmptyContentText = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  color: ${PRI_COLOR_FADED};
  text-align: center;
`;
