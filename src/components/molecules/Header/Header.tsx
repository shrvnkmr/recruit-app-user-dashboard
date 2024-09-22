import {
  Breadcrumbs,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Icon from "../../atoms/Icon/Icon";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Chip from "../../atoms/Chip/Chip";
import "./Header.css";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const breadcrumbs = [
    <Typography key="0" color="var(--color-blue-300)">
      Candidates
    </Typography>,
    <span key="1" className="breadCrumbNameWrapper">
      <Typography>John Doe</Typography>
      <Chip label="ID - 231" />
    </span>,
  ];
  return (
    <div className="header">
      <Stack spacing={2}>
        <Breadcrumbs
          className="breadcrumbs"
          separator={
            <Icon
              color="var(--color-blue-300)"
              name="bx-chevron-right"
              size="24px"
            />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <div className="btnGroupWrapper">
        <CustomButton
          label={isMobile ? "Request Update" : "Request Profile Update"}
        />
        <CustomButton label="Previous" />
        <CustomButton label="Next" />
      </div>
    </div>
  );
}
