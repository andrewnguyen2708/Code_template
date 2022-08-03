import React from "react";

// khởi tạo giá trị ban đầu cho appContext
const initAppContext = {
  darkmode: false, // chế độ tối
  customColor: null, // màu chủ đạo
  dialogSettingColor: false // control dialog setting
};

// tạo context
export const AppContext = React.createContext(initAppContext);

export const AppContextProvider = (props) => {
  // viết các biến, hàm dùng chung ở dây và truyền vào value của provider bên dưới
  // để các component được bọc bởi nó đều nhận được các value giống nhau
  const [darkmode, setDarkmode] = React.useState(initAppContext.darkmode);
  const [customColor, setCustomColor] = React.useState(
    initAppContext.customColor
  );
  const [dialogSettingColor, setDialogSettingColor] = React.useState(
    initAppContext.dialogSettingColor
  );

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  const changeCustomColor = (colorString) => {
    setCustomColor(colorString);
  };

  const handleDialogSettingColor = (bool) => {
    setDialogSettingColor(bool);
  };

  return (
    <AppContext.Provider
      value={{
        darkmode,
        toggleDarkmode,
        customColor,
        changeCustomColor,
        dialogSettingColor,
        handleDialogSettingColor
      }}
      {...props}
    />
  );
};
