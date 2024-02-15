import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#121212",
            paper: "#424242",
        },
        primary: {
            main: "#bb0d92",
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fff",
            paper: "#fff",
        },
        primary: {
            main: "#bb0d92",
        },
    },
});