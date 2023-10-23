import { Link } from "react-router-dom";
import { AsideLink } from "../Styles";
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
import { Logo, Button } from "../Styles";

//Components
import Profile from "./Profile";

// Context
import { useUser } from "../context/UserContext";

type layoutProps = {
  toggleTheme: () => void;
};

const Layout: React.FC<layoutProps> = ({ toggleTheme }) => {
  const { currentUser, setCurrentUser } = useUser();
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <header>
        <Logo id="headerLogo" src="logo.png" alt="Home" />
        <div className="headerRight">
          <Button onClick={toggleTheme}>Toggle Theme</Button>
          <Profile></Profile>
        </div>
      </header>
      <aside>
        <AsideLink className="asideLink" id="dashboardLink">
          <Link to="">
            <DashboardSharpIcon />
            <h2>Dashboard</h2>
          </Link>
        </AsideLink>

        <AsideLink className="asideLink" id="historyLink">
          <Link to="history">
            <TimelineSharpIcon />
            <h2>History</h2>
          </Link>
        </AsideLink>

        <AsideLink className="asideLink" id="inventoryLink">
          <Link to="inventory">
            <InventorySharpIcon />
            <h2>Inventory</h2>
          </Link>
        </AsideLink>

        <AsideLink className="asideLink" id="usersLink">
          <Link to="users">
            <PersonSharpIcon />
            <h2>Users</h2>
          </Link>
        </AsideLink>

        <AsideLink className="asideLink" id="settingsLink">
          <Link to="settings">
            <SettingsSharpIcon />
            <h2>Settings</h2>
          </Link>
        </AsideLink>

        {
          // If logged in, show logout, else show login
          currentUser !== null ? (
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
              <Link to="login">
                <LoginSharpIcon />
                <h2>Login</h2>
              </Link>
            </AsideLink>
          )
        }
      </aside>
    </>
  );
};

export default Layout;
