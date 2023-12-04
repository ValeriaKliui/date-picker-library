import { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../constants/styles/global";
import { baseTheme } from "../../constants/styles/theme";

export const ThemeWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
  </>
);
