"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import StorageIcon from "@mui/icons-material/Storage";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    color: theme.palette.info.contrastText,
    backgroundColor: theme.palette.info.main,
  },
  "& .MuiListItemIcon-root": {
    color: theme.palette.info.contrastText,
  },
  "& .Mui-selected .MuiListItemIcon-root": {
    color: theme.palette.secondary.main,
  },
  "& .MuiDivider-root": {
    borderColor: theme.palette.info.light,
  },
  "& .MuiIconButton-root": {
    color: theme.palette.info.contrastText,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
    {
      props: ({ variant }) => variant === "temporary",
      style: {
        "& .MuiDrawer-paper": {
          visibility: "visible !important",
          transform: "translateX(0) !important",
        },
        "& .MuiModal-backdrop": {
          opacity: "80% !important",
          visibility: "visible !important",
        },
      },
    },
    {
      props: ({ variant, open }) => variant === "temporary" && !open,
      style: {
        "& .MuiDrawer-paper": {
          visibility: "visible !important",
          transform: "translateX(0) !important",
        },
        "& .MuiModal-backdrop": {
          opacity: "0 !important",
          visibility: "hidden !important",
        },
      },
    },
  ],
}));

const menuItems = [
  { text: "Give Consent", icon: <PersonAddAlt1Icon />, path: "/give-consent" },
  { text: "Collected Consents", icon: <StorageIcon />, path: "/consents" },
];

function SideBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  function toggleOpen() {
    setOpen(!open);
  }

  function closeIfMobile() {
    if (!isMd && open) {
      setOpen(false);
    }
  }

  function forceClose() {
    setOpen(false);
  }

  return (
    <Box component="nav">
      {!isMd && (
        <IconButton onClick={toggleOpen}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      )}
      <Drawer
        variant={isMd ? "permanent" : "temporary"}
        open={open}
        onClose={forceClose}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerHeader>
          <IconButton
            onClick={toggleOpen}
            sx={{
              px: {
                md: 1.5,
              },
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem disablePadding key={item.path} sx={{ display: "block" }}>
              <ListItemButton
                LinkComponent={Link}
                href={item.path}
                selected={pathname === item.path}
                onClick={closeIfMobile}
                sx={{
                  px: {
                    md: 2.5,
                  },
                }}
              >
                <Tooltip title={item.text}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </Tooltip>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default SideBar;
