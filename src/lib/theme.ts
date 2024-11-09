"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-nunito)",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  palette: {
    primary: {
      main: "#e57373",
      light: "#ffa4a2",
      dark: "#af4448",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffb74d",
      light: "#ffe97d",
      dark: "#c88719",
      contrastText: "#000000",
    },
    info: {
      main: "#2e3f50",
      light: "#4f6e91",
      dark: "#10161c",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

const themeComposition = createTheme(theme, {
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: theme.palette.action.hover,
          },
          "&:last-child td": { border: 0 },
          "&.MuiTableRow-head": {
            backgroundColor: theme.palette.grey[300],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          "&.MuiTableCell-head": {
            fontWeight: 700,
            borderBottom: `1px solid ${theme.palette.grey[400]}`,
          },
        },
      },
    },
  },
});

export default themeComposition;
