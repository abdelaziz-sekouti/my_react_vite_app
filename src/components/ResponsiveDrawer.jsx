import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Heroe from "./Heroe";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              ABDELAZIZ BLOG
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={[open && { display: "none" }]}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={open}>
          <DrawerHeader />
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          
          <Divider />
          <List>
            <ListItem sx={{ }}>
              <ListItemButton>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                       fontSize: ".7rem",
                    }}
                    color="inherit"
                  >
                    Home
                  </Button>
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{ }}>
              <ListItemButton>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                       fontSize: ".7rem",
                    }}
                    color="inherit"
                  >
                    About
                  </Button>
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{ }}>
              <ListItemButton>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                       fontSize: ".7rem",
                    }}
                    color="inherit"
                  >
                    Contact
                  </Button>
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                       fontSize: ".7rem",
                    }}
                    color="inherit"
                  >
                    Blogs
                  </Button>
                </Link>
              </ListItemButton>
            </ListItem>
             
            <ListItem sx={{ }}>
              <ListItemButton>
                <Link
                  to="/add-blog"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                       fontSize: ".7rem",
                    }}
                    color="inherit"
                  >
                    Add Blog
                  </Button>
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{ }}>
              <ListItemButton>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                       fontSize: ".7rem",
                      background: "#d2cc19ff",
                      marginLeft: 1,
                      transition: "all .3s",
                      color: "#fa0808ff",
                      "&:hover": { background: "#c1b", color: "#fa0" },
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ }}>
              <ListItemButton>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                       fontSize: ".7rem",
                      background: "#bdd219ff",
                      marginLeft: 1,
                      transition: "all .3s",
                      color: "#fa0808ff",
                      "&:hover": { background: "#c1b", color: "#fa0" },
                    }}
                  >
                    Signup
                  </Button>
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Heroe />
    </>
  );
}
