import * as React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { AppContext } from "../../contexts/appContext";

export default function SwitchDarkmode() {
  const { darkmode, toggleDarkmode } = React.useContext(AppContext);

  return (
    // gọi hàm bằng sử dụng callback như bên dưới
    <FormControlLabel
      control={
        <Switch
          checked={darkmode}
          onChange={() => toggleDarkmode()}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Dark mode"
    />
  );
}
