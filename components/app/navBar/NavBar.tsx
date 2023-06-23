import React, { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";

import { navbarStyles } from "./navbar.styles";
import { dictionary } from "@/dictionary";
import { paths } from "@/paths";
import { Route } from "@/interfaces/route";

interface INavBarProps {
  route: Route;
}

export const NavBar = ({ route }: INavBarProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={navbarStyles.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={paths.home}
            sx={navbarStyles.logo}
          >
            <SatelliteAltIcon sx={{ mr: 1 }} />
            {dictionary.photos.appBarTitle}
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link href={route.path}>
              <Typography noWrap>{route.label}</Typography>
            </Link>
          </Box>

          <Box sx={navbarStyles.hamburgerMenu}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link href={paths.favorites}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {dictionary.photos.appBarLink}
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={navbarStyles.logoResponsive}
          >
            <SatelliteAltIcon sx={{ mr: 1 }} />
            {dictionary.photos.appBarTitle}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
