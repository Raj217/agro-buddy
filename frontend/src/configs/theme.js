import { createTheme } from "@mui/material/styles";
import * as Pallete from "./pallete";

export const theme = createTheme({
  typography: {
    allVariants: {
      color: Pallete.dark,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" && {
            backgroundColor: Pallete.accent,
            color: Pallete.primary,
            padding: "15px 25px",
            outline: "none",
            borderRadius: "25px",
            "&:hover": {
              backgroundColor: Pallete.accentDark,
              color: Pallete.primary,
              outline: "none",
            },
            "&:focus": {
              backgroundColor: Pallete.accentDark,
              color: Pallete.primary,
              outline: "none",
            },
          }),
          ...(ownerState.variant === "text" && {
            backgroundColor: "none",
            color: Pallete.accent,
            padding: "10px 25px",
            outline: "none",
            borderRadius: "25px",
            "&:hover": {
              outline: "none",
            },
            "&:focus": {
              outline: "none",
            },
          }),
          ...(ownerState.variant === "outline" && {
            backgroundColor: "none",
            color: Pallete.accent,
            padding: "10px 25px",
            borderRadius: "25px",
            outline: `2px solid ${Pallete.accent}`,
            "&:hover": {
              outline: `2px solid ${Pallete.accent}`,
            },
            "&:focus": {
              outline: `2px solid ${Pallete.accent}`,
            },
          }),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" && {
            outline: "none",
            border: "none",
            color: Pallete.accent,
            borderRadius: '100px',
            "&:hover": {
              outline: "none",
            },
            "&:focus": {
              border: 'none',
              outline: "none",
            },
          }),
        }),
      },
    }
  },
});
