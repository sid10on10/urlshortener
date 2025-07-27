import '../styles/globals.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// Define your custom dark theme
const lightTheme = createTheme({
  palette: {
    mode: 'light', // Enable light mode
    background: {
      default: '#F5F5F5', // Light gray for general background
      paper: '#FFFFFF',   // Pure white for Paper components
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#555555', // Darker gray for secondary text
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // Ensure Paper components are white
          color: '#000000', // Ensure text on Paper is black
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#EEEEEE', // Slightly darker white for header
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#000000', // All table cells should have black text
          borderColor: '#DDDDDD', // Lighter borders for cells
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#FAFAFA', // Slightly different background for odd rows
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#FFFFFF', // Pure white for even rows
          },
        },
      },
    },
    // --- Autocomplete & TextField related overrides for LIGHT theme ---
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          '& .MuiPaper-root': {
            backgroundColor: '#FFFFFF',
            color: '#000000',
          },
        },
        option: {
          color: '#000000',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
          },
          '&[aria-selected="true"]': {
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
          },
        },
        inputRoot: {
          color: '#000000', // Input text color
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#BBBBBB', // Default border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#999999', // Hover border color
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#666666', // Focused border color
          },
        },
        clearIndicator: { color: '#555555' },
        popupIndicator: { color: '#555555' },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: { color: '#000000' },
        root: {
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#BBBBBB' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#999999' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#666666' },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#555555', // Default label color (unfocused)
          '&.Mui-focused': { color: '#000000' }, // Focused label color
          '&.Mui-disabled': { color: '#AAAAAA' }, // Disabled label color
        },
      },
    },
    // --- DatePicker specific overrides for LIGHT theme (MUI X components) ---
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: '#000000',
          '&.Mui-selected': { backgroundColor: '#1976D2', color: '#FFFFFF' }, // Default primary blue for selected
          '&.Mui-selected:hover': { backgroundColor: '#1976D2' },
          '&.Mui-selected:focus': { backgroundColor: '#1976D2' },
          '&.MuiPickersDay-today': {
            borderColor: '#1976D2',
          },
          '&.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.3)', // Visible but disabled text
          },
        },
      },
    },
    MuiPickersToolbar: {
      styleOverrides: {
        root: { backgroundColor: '#EEEEEE', color: '#000000' },
      },
    },
    MuiDateCalendar: {
        styleOverrides: {
            root: { backgroundColor: '#FFFFFF', color: '#000000' }
        }
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: { color: '#000000' },
        button: { color: '#000000' },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
    return <ThemeProvider theme={lightTheme}>
            <Component {...pageProps} />
        </ThemeProvider>;
}