import { useMediaQuery, useTheme } from "@mui/material";
import Icon from "../Icon/Icon";
import "./SearchBar.css";

export default function SearchBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return isMobile ? (
    <Icon name="bx-search" color="var(--color-accent-300)" />
  ) : (
    <div className="searchBar">
      <Icon name="bx-search" color="var(--color-accent-300)" />
      <input
        aria-label="search"
        type="text"
        placeholder="Search Pipedrive"
        className="searchInput"
      />
    </div>
  );
}
