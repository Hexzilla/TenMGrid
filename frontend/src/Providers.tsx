import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { light, dark } from './theme'
import { useThemeManager } from "./state/user/hooks";
import store from "./state";

const ThemeProviderWrapper = (props) => {
  const [isDark] = useThemeManager();
  return <ThemeProvider theme={isDark ? dark : light} {...props} />;
};

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </StyledEngineProvider>
      </HelmetProvider>
    </Provider>
  );
};

export default Providers;
