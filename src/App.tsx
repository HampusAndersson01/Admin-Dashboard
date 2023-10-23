import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

// Themes
import { lightTheme, darkTheme } from "./Styles";

// Styles
import { GlobalStyle, Logo, AsideLink, HeaderLink, Button } from "./Styles";

// Components
import Layout from "./components/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Users from "./pages/Users";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

// Context
import { UserProvider } from "./context/UserContext";

// Mock Data
import { users } from "./data/mockData";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <Layout toggleTheme={toggleTheme} />
          <div id="main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/users" element={<Users />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login users={users} />} />
              <Route
                path="*"
                element={
                  <>
                    <h1>Not Found</h1>
                    <h2>
                      <Link to={""}>Return</Link>
                    </h2>
                  </>
                }
              />
            </Routes>
          </div>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
