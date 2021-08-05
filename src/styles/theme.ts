import { extendTheme } from '@chakra-ui/react';

const colors = {
  highlight: {
    full: 'FFBA08',
    50: 'FFBA08'
  }
}

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        cursor: 'pointer',
      },
    },
  },
});