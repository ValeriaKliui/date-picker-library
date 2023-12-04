export interface UsedColors {
  gray: string;
  darkGray: string;
  red: string;
  lightGray: string;
  dark: string;
  blue: string;
  lightBlue: string;
  transparentBlue: string;
  white: string;
}
export interface Theme {
  colors: UsedColors;
  valueInPx: {
    px0: string;
    px1: string;
    px2: string;
    px5: string;
    px8: string;
    px10: string;
    px16: string;
    px20: string;
    px22: string;
    px25: string;
    px30: string;
    px34: string;
    px40: string;
    px45: string;
    px50: string;
    px60: string;
    px70: string;
    px100: string;
    px125: string;
    px150: string;
    px175: string;
    px200: string;
    px250: string;
    px300: string;
    px320: string;
    px370: string;
    px400: string;
    px480: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}
