import { IconName } from "boxicons";
import "./Icon.css"

interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  bgColor?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "1.2rem",
  color = "var(--color-white)",
  bgColor,
}) => {
  return (
    <span className="iconWrapper" style={{ backgroundColor: bgColor }}  >
      <i className={`bx ${name}`} style={{ fontSize: size, color }} />
    </span>
  );
};

export default Icon;
