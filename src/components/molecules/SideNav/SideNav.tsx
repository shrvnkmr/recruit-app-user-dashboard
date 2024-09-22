import MenuIcon from "../../../Icons/MenuIcon";
import Icon from "../../atoms/Icon/Icon";
import "./SideNav.css";

export default function SideNav() {
  return (
    <nav className="sideNav">
      <MenuIcon />
      <Icon name="bx-user" bgColor="var(--color-blue-800)" />
      <Icon name="bx-buildings" />
      <Icon name="bx-user-pin" />
      <Icon name="bx-briefcase" />
      <Icon name="bx-envelope" />
      <Icon name="bx-calendar-event" />
      <hr className="iconSeperator"/>
      <Icon name="bx-dollar-circle" />
      <Icon name="bx-time" />
      <Icon name="bx-credit-card" />
      <Icon name="bx-cog" />
      <Icon name="bx-dots-horizontal-rounded" />
    </nav>
  );
}
