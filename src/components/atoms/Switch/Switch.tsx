import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    inputProps={{ "aria-label": "assigned" }}
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 42,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: "2px 2px 2px 4px",
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        border: 0,
        opacity: 1,
        backgroundColor: "var(--color-blue-300)",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 1,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "var(--color-white)",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "var(--color-accent-300)",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 1,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "var(--color-background-500)",
    opacity: 1,
    transition: theme.transitions.create(["var(--color-white)"], {
      duration: 500,
    }),
  },
}));
export default CustomSwitch;
