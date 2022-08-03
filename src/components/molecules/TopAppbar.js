import * as React from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../../contexts/appContext";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DialogColorSetting from "./DialogColorSetting";
import { appRoutes, topMenu } from "../../routes";
import AtomRouterLink from "../atoms/AtomRouterLink";
import { useLocation } from "react-router-dom";
import SwitchDarkmode from "./SwitchDarkmode";

function TopMenu() {
  return (
    <Grid container spacing={1}>
      {topMenu.map((item, index) => (
        <Grid item key={index}>
          <Button color="inherit" component={AtomRouterLink} to={item.path}>
            {item.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default function TopAppbar() {
  // sử dụng hook useContext để lấy các giá trị của 1 context, bao gồm biến và hàm
  const { handleDialogSettingColor } = React.useContext(AppContext);

  const location = useLocation();
  const currentLocation = appRoutes.filter(
    (route) => route.path === location.pathname
  )[0];

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {currentLocation?.label || "My App"}
                </Typography>
              </Grid>

              <Grid item>
                <TopMenu />
              </Grid>

              <Grid item>
                <SwitchDarkmode />
              </Grid>
              <Grid item>
                <IconButton
                  color="inherit"
                  onClick={() => handleDialogSettingColor(true)}
                >
                  <SettingsOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />

      <DialogColorSetting />
    </>
  );
}
