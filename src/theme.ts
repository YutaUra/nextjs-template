import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: "'Menlo', monospace" }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    lime: {
      50: '#f2ffde',
      100: '#defcb2',
      200: '#caf884',
      300: '#b5f554',
      400: '#a1f226',
      500: '#88d90d',
      600: '#69a905',
      700: '#4a7801',
      800: '#2b4800',
      900: '#0b1900',
    },
  },
  fonts,
  breakpoints,
})

export default theme
