import {
  alpha,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from "@mui/material";
import * as React from "react";

import { AppContext } from "../../contexts/appContext";
import { getCustomColors } from "../../services/colors";
import SwitchDarkmode from "./SwitchDarkmode";

export default function DialogColorSetting() {
  const {
    customColor,
    changeCustomColor,
    dialogSettingColor,
    handleDialogSettingColor
  } = React.useContext(AppContext);

  const customColors = getCustomColors();

  const handleClose = () => {
    handleDialogSettingColor(false);
  };

  return (
    <Dialog open={dialogSettingColor} maxWidth="md" onClose={handleClose}>
      <DialogTitle>Select theme color</DialogTitle>
      <DialogContent
        dividers
        sx={(theme) => ({
          backgroundColor: alpha(theme.palette.primary.main, 0.1)
        })}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={(theme) => ({
                backgroundColor: customColor || theme.palette.primary.main
              })}
            >
              Preview color
            </Button>
          </Grid>
          {customColors.map((color) => {
            const colorCode = color[500];

            return (
              <Grid item xs={6} md={3} key={colorCode}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: colorCode }}
                  onClick={() => {
                    changeCustomColor(colorCode);
                  }}
                >
                  {colorCode}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <SwitchDarkmode />
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeCustomColor(null)}
        >
          Reset color
        </Button>
      </DialogActions>
    </Dialog>
  );
}
