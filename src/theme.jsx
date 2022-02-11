import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "#ffffff",
    background: "#e1e4e8",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
    score: 24,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },

  paddings: {
    verySmallPadding: 5,
    smallPadding: 20,
    divider: 10,
  },

  icon: {
    size: 50,
  },
};

export default theme;
