import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Typography,
  IconButton,
  Menu,
  Box,
  Button,
  MenuItem,
  MenuList,
} from "@mui/material";
import { useState } from "react";

function Links() {
  const [anchor,setAnchor]=useState(null)
  const handleMenu = (e)=>{
    setAnchor(e.currentTarget)
  }
  const closeMenu = ()=>{
    setAnchor(null)
  }
  return (
    <>
      <div 
      style={{
        display: "flex",
        alignItems: "center",
        width: "100vw",
        justifyContent: "space-between",
      }}
      >
      
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontFamily: "Roboto",
            fontSize: "38px",
            paddingLeft:'20px',
            // textShadow: "2px 2px 4px rgba(237, 8, 8, 0.51)",
            textShadow: "0 4px 18px rgba(0,0,0,0.45)",
            transition: "all .3s",
            "&:hover": { color: "rgba(109, 195, 249, 1)" },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Blog
          </Link>
        </Typography>
          {/*  desktop menu */}
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
            flexDirection: { md: "row", xs: "column" },
            display: { md: "flex", xs: "none" },
          }}
        >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              sx={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "17px" }}
              color="inherit"
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              sx={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "17px" }}
              color="inherit"
            >
              About
            </Button>
          </Link>

          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              sx={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "17px" }}
              color="inherit"
            >
              Contact
            </Button>
          </Link>
          <Link
            to="/add-blog"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              sx={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "17px" }}
              color="inherit"
            >
              Add Blog
            </Button>
          </Link>
          <Link to="/blogs" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              sx={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "17px" }}
              color="inherit"
              >
              Blogs
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: "17px",
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
          <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              sx={{
                fontWeight: "bold",
                marginTop: "5px",
                fontFamily: "Roboto",
                fontSize: "17px",
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
        </Box>
          {/* mobile menu */}
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100vh",
            flexDirection: { xs: "column" },
            display: { md: "none", xs: anchor ? "none" : "flex" },
          }}
        >
          {/* hamburger button trigging mobile menu */}
          <IconButton size="large" sx={{position:'absolute',right:'20px',top:'50%',transform:'translateY(-50%)',fontSize:'30px',fontWeight:'bolder'}} edge="end" color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu open={Boolean(anchor)} onClose={closeMenu} keepMounted anchorEl={anchor} sx={{
            marginTop:'50px', textAlign:'center',display:{md:'none',xs:'block'}
          }} id='menu'>
            <MenuList sx={{
            marginTop:'0px',
            width:'100vw',
            color:'#333232ff',
            textAlign:'center',
          }}>
              <MenuItem>
                <Link to="/" style={{ textDecoration: "none", color: "inherit", }}>
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      fontSize: "17px",
                    }}
                    color="inherit"
                  >
                    Home
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      fontSize: "17px",
                    }}
                    color="inherit"
                  >
                    About
                  </Button>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      fontSize: "17px",
                    }}
                    color="inherit"
                  >
                    Contact
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/add-blog"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      fontSize: "17px",
                    }}
                    color="inherit"
                  >
                    Add Blog
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      fontSize: "17px",
                    }}
                    color="inherit"
                    >
                    Blogs
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                  >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      fontSize: "17px",
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
              </MenuItem>
              <MenuItem>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      marginTop: "5px",
                      fontFamily: "Roboto",
                      fontSize: "17px",
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
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </div>

  </>
  );
}

export default Links;
