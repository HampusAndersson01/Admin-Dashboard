import { ThemeProvider } from "styled-components";
import { useState } from "react";

// Themes
import { lightTheme, darkTheme } from "./Styles";

// Styles
import { GlobalStyle, Logo, AsideLink, HeaderLink, Button } from "./Styles";

// Components
import Layout from "./Components/Layout";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const [loggedIn, setLoggedIn] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout toggleTheme={() => toggleTheme()} loggedIn={loggedIn} />
    </ThemeProvider>
  );
}

export default App;
