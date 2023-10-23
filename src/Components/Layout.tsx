import { Link } from "react-router-dom";
import { AsideLink } from "../Styles";

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

type layoutProps = {
  toggleTheme: () => void;
  loggedIn?: boolean;
};

const Layout: React.FC<layoutProps> = ({ toggleTheme, loggedIn = true }) => {
  return (
    <>
      <header>
        <Logo className="" src="logo.png" alt="Home" />

        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </header>
      <aside>
        <AsideLink>
          <Link to="">
            <DashboardSharpIcon />
            <h2>Dashboard</h2>
          </Link>
        </AsideLink>

        <AsideLink>
          <Link to="history">
            <TimelineSharpIcon />
            <h2>History</h2>
          </Link>
        </AsideLink>

        <AsideLink>
          <InventorySharpIcon />
          <h2>Inventory</h2>
        </AsideLink>

        <AsideLink>
          <PersonSharpIcon />
          <h2>Users</h2>
        </AsideLink>

        <AsideLink>
          <SettingsSharpIcon />
          <h2>Settings</h2>
        </AsideLink>

        {
          // If logged in, show logout, else show login
          loggedIn ? (
            <AsideLink>
              <a href="#">
                <LogoutSharpIcon />
                <h2>Logout</h2>
              </a>
            </AsideLink>
          ) : (
            <AsideLink>
              <a href="#">
                <LoginSharpIcon />
                <h2>Login</h2>
              </a>
            </AsideLink>
          )
        }
      </aside>
    </>
  );
};

export default Layout;
