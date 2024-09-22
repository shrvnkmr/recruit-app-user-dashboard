import { Box } from "@mui/material";
import "./CustomTabPanel.css";

interface TabPanelProps {
  children?: React.ReactNode;
  padding?: string;
  index: number;
  value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, padding = "24px 14px", value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="tabPanelWrapper textNormal"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: padding,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
