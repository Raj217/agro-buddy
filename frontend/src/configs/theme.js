import { createTheme } from "@mui/material/styles";
import * as Pallete from "./pallete";

export const theme = createTheme({
  palette: {
    primary: {
      light: Pallete.accentLight,
      main: Pallete.accent,
      dark: Pallete.accentDark,
      contrastText: Pallete.primary,
    },
    secondary: {
      light: '#ff7961',
      main: Pallete.dark,
      dark: '#ba000d',
      contrastText: '#000',
    },
    action: {
      light: '#ff7961',
      main: Pallete.complementary,
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "regular" && {
            backgroundColor: Pallete.primary,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100vw',
            height: '13vh',
          }),
        })
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          height: '13vh',
        })
      },
    }
  },
});
