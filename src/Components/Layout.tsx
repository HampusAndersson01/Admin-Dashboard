import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Style.css";

// Icons
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import TimelineSharpIcon from "@mui/icons-material/TimelineSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";

// Styles
import { Logo, Button, StyledNavLink, AsideLink } from "../Styles";

// Components
import Profile from "./Profile";
import ThemeSwitch from "./ThemeSwitch";

// Context
import { useUser } from "../context/UserContext";

type layoutProps = {
  toggleTheme: () => void;
  theme: any;
};

const Layout: React.FC<layoutProps> = ({ toggleTheme, theme }) => {
  const { currentUser, setCurrentUser } = useUser();
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <header>
        <Logo id="headerLogo" src="logo.png" alt="Home" />
        <div className="headerRight">
          <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
          {currentUser ? <Profile></Profile> : <></>}
        </div>
      </header>
      <aside>
        <AsideLink className="asideLink" id="dashboardLink">
          <StyledNavLink to="">
            <DashboardSharpIcon />
            <h2>Dashboard</h2>
          </StyledNavLink>
        </AsideLink>

        {currentUser ? ( // If a user is logged in
          <>
            <AsideLink className="asideLink" id="historyLink">
              <StyledNavLink to="history">
                <TimelineSharpIcon />
                <h2>History</h2>
              </StyledNavLink>
            </AsideLink>

            <AsideLink className="asideLink" id="inventoryLink">
              <StyledNavLink to="inventory">
                <InventorySharpIcon />
                <h2>Inventory</h2>
              </StyledNavLink>
            </AsideLink>

            <AsideLink className="asideLink" id="usersLink">
              <StyledNavLink to="users">
                <PersonSharpIcon />
                <h2>Users</h2>
              </StyledNavLink>
            </AsideLink>
          </>
        ) : (
          // Replace with empty AsideLink when no user is logged in
          <>
            <AsideLink className="asideLink" id="historyLink">
              <AsideLink></AsideLink>
            </AsideLink>

            <AsideLink className="asideLink" id="inventoryLink">
              <AsideLink></AsideLink>
            </AsideLink>

            <AsideLink className="asideLink" id="usersLink">
              <AsideLink></AsideLink>
            </AsideLink>
          </>
        )}

        <AsideLink className="asideLink" id="settingsLink">
          <StyledNavLink to="settings">
            <SettingsSharpIcon />
            <h2>Settings</h2>
          </StyledNavLink>
        </AsideLink>

        {currentUser ? ( // If a user is logged in
          <AsideLink
            onClick={handleLogout}
            className="asideLink"
            id="logoutLink"
          >
            <Link to={""}>
              <LogoutSharpIcon />
              <h2>Logout</h2>
            </Link>
          </AsideLink>
        ) : (
          <AsideLink className="asideLink" id="loginLink">
            <StyledNavLink to="login">
              <LoginSharpIcon />
              <h2>Login</h2>
            </StyledNavLink>
          </AsideLink>
        )}
      </aside>
    </>
  );
};

export default Layout;
