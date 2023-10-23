import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";
import {
    Link,
  } from "react-router-dom";


export const darkTheme = {
  colors: {
    primary: "#368295",
    secondary: "#c86d3c",
    hover: "#2e9ccd",
    text: "#ffffff",
    bg: "#3f4860",
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.5rem",
  },
};

export const lightTheme = {
  colors: {
    primary: "#1d6dab",
    secondary: "",
    hover: "#2e9ccd",
    text: "#000000",
    bg: "#748baa",
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.5rem",
  },
};

export const GlobalStyle = createGlobalStyle`
   * {
      transition: color .3s, background-color .3s;
    }
    body {
      background-color: ${(props) => props.theme.colors.bg};
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
  `;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const HeaderLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const AsideLink = styled.div`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const Logo = styled.img`
  width: 10vw;
  height: 10vw;
  margin: 0.5rem;
`;
