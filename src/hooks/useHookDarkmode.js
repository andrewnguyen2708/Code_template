import { createTheme } from "@mui/material/styles";

const useHookDarkmode = (darkmode, customColor) => {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            minHeight: "100vh",
            overflowX: "hidden"
          }
        }
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(4px)"
          }
        }
      }
    },
    palette: {
      mode: darkmode ? "dark" : "light",
      primary: {
        main: customColor ? customColor : "#009688"
      },
      secondary: {
        main: "#ffff00"
      },
      success: {
        main: "#ff00ff"
      },
      // https://mui.com/material-ui/customization/palette/#adding-new-colors
      newColor: {
        main: "#555555",
        contrastText: "#ffffff"
      },
      // chỉ demo, thường sẽ để background mặc định,
      // vì đổi sẽ phải căn chỉnh ở các component khác để có sự hợp lý
      background: {
        default: darkmode ? "#333" : "#eaeaea"
      }
    },
    shape: {
      borderRadius: 16
    }
  });
  return theme;
};

export default useHookDarkmode;
