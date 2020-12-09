// example theme.js
import {blue} from "color-name";

export const theme =  {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    blue: '#424F99',
    green: '#009900',
    lightgray: '#f6f6ff',
    primary: 'rgb(0, 157, 224)'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    body: 'Assistant, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {
  },
  text: {
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    }
  }
}

export type  ThemeType = typeof theme