import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeWrapper } from "../src/providers/ThemeWrapper";
import DateProvider from "../src/providers/DateProvider/DateProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <DateProvider>
        <ThemeWrapper>
          <Story />
        </ThemeWrapper>
      </DateProvider>
    ),
  ],
};

export default preview;
