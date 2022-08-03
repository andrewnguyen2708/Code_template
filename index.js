import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import { AppContextProvider } from "./src/contexts/appContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        {/* bọc AppContextProvider để các component bên trong App
      đều nhận sự thay đổi khi giá trị bên trong context thay đổi, 
      cách bọc tương tự nếu xài Redux */}
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
