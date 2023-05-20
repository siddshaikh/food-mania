import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/HeaderStyle.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //menu click handler function
  const menuHandler = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const menuDrawer = (
    <Box onClick={menuHandler} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <Typography
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1, color: "goldenrod" }}
            >
              <FastfoodIcon />
              Food Mania
            </Typography>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton>
              <MenuIcon
                color="inherit"
                edge="start"
                aria-label="open drawer"
                sx={{ mr: 2, display: { sm: "none" } }}
                style={{ color: "goldenrod", width: "50px" }}
                onClick={menuHandler}
              />
            </IconButton>

            <Typography
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1, color: "goldenrod" }}
            >
              <FastfoodIcon />
              Food Mania
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={menuHandler}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {menuDrawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
