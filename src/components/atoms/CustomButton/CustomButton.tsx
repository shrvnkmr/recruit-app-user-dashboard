import {
  Button,
  ButtonProps,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  label?: string;
  isIconBtn?: boolean;
  variant?: "text" | "contained" | "outlined";
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverColor?: string;
  children?: React.ReactNode;
}

const ButtonWrapper = ({
  isIconBtn,
  children,
  ...props
}: {
  isIconBtn: boolean;
  children: React.ReactNode;
} & ButtonProps) => {
  return isIconBtn ? (
    <IconButton {...props}>{children}</IconButton>
  ) : (
    <Button {...props}>{children}</Button>
  );
};

export default function CustomButton({
  label,
  isIconBtn = false,
  variant = "contained",
  bgColor = "var(--color-white)",
  textColor = "var(--color-text-300)",
  borderColor = "var(--color-background-600)",
  hoverColor = "var(--color-background-700)",
  children,
  ...rest
}: CustomButtonProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <ButtonWrapper
      isIconBtn={isIconBtn}
      sx={{
        padding: isMobile ? "8px" : "8px 12px",
        borderRadius: "6px",
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        boxShadow: "none",
        textTransform: "capitalize",
        fontWeight: 600,
        fontSize: "12px",
        "&:hover": {
          backgroundColor: hoverColor,
          boxShadow: "none",
        },
      }}
      variant={variant}
      {...rest}
    >
      {label}
      {isIconBtn && children}
    </ButtonWrapper>
  );
}
