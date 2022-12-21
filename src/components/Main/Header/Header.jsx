import React from "react";
import Image from "next/image";

// import MUI
import { Avatar, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import images
import Down from "../../../assets/down.svg";
import Sonjoy from "../../../assets/sonjoy.png";

// import styles
import styles from "./Header.module.scss";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems="center"
      className={styles._wrapper}
    >
      <Typography variant="h5" color="inherit" className={styles._title}>
        Main
      </Typography>

      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="center"
            spacing={1}
          >
            <Avatar sx={{ width: 40, height: 40 }}>
              <Image src={Sonjoy} alt="logo" width={35} height={35} />
            </Avatar>

            <Typography
              variant="h5"
              color="inherit"
              className={styles._subtitle}
            >
              Sonjoy barman
            </Typography>
            <Image src={Down} alt="logo" width={20} height={20} />
          </Stack>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            sx={{ width: "200px", maxWidth: "200px" }}
            onClick={handleClose}
          >
            Profile
          </MenuItem>
          <MenuItem
            sx={{ width: "200px", maxWidth: "200px" }}
            onClick={handleClose}
          >
            My account
          </MenuItem>
          <MenuItem
            sx={{ width: "200px", maxWidth: "200px" }}
            onClick={handleClose}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </Stack>
  );
};

export default Header;
