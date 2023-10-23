import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    bg: "#ffffff",
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.5rem",
  },
};

export const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.colors.bg};
      color: ${(props) => props.theme.colors.text};
      
    }
  `;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const HeaderLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const AsideLink = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const Logo = styled.img`
  filter: ${(props) => (props.theme === darkTheme ? "invert(75%)" : "none")};
`;

export const StyledGreeting = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const LoginButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;