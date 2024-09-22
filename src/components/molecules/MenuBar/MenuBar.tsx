import { useMediaQuery, useTheme } from "@mui/material";
import MainLogo from "../../../Icons/MainLogo";
import Icon from "../../atoms/Icon/Icon";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import UserProfile from "../UserProfile/UserProfile";
import "./MenuBar.css";

export default function MenuBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <menu className="menuBar">
      <SearchBar />
      <MainLogo />
      {isMobile ? (
        <Icon
          name="bxs-user"
          color="var(--color-green-300)"
          bgColor="var(--color-green-100)"
        />
      ) : (
        <span className="menuOption">
          <span className="menuIconWrapper">
            <Icon
              color="var(--color-white)"
              name="bx-plus"
              bgColor="var(--color-blue-600)"
            />
            <div className="verticalIconSeperator" />
            <Icon color="var(--color-accent-300)" name="bx-gift" />
            <Icon color="var(--color-accent-300)" name="bx-envelope" />
            <Icon color="var(--color-accent-300)" name="bx-bell" />
          </span>
          <UserProfile />
        </span>
      )}
    </menu>
  );
}
