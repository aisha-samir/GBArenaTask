import { Platform } from 'react-native';

/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */

const AppStyles = {
  Color: {
    WHITE: "#fff",
    TEXT_GRAY: "#858585",
    LIGHT_GRAY: '#9DC7DB',
    DarkWhite: "#F7F6F7",
    DARK_THEM: "#004067",
    LIGHT_THEM: "#155079",
    G1: "#3A1352",
    G2: "#734A90",
    rgba: (r, g, b, a) => 'rgba(' + r + "," + g + "," + b + "," + a + ")",
  },
  Fonts:
  {
    Regular: "Roboto-Regular",
    Bold: "Roboto-Bold",
    BoldItalic: "Roboto-BoldItalic",
    Thin: "Roboto-Thin",
    ThinItalic: "Roboto-ThinItalic",
    Light: "Roboto-Light",
    Medium: "Roboto-Medium"
  }
};
export default AppStyles;
