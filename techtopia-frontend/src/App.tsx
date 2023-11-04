import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// const darkTheme = createTheme({
//     palette: {
//         mode: "dark",
//         background: {
//             default: "#121212",
//             paper: "#424242",
//         },
//         primary: {
//             main: "#bb0d92",
//         },
//     },
// });

const lightTheme = createTheme({
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

function App() {
    return (
        <>
            <div className="App">
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/attractions" element={<Home />} />
                            <Route
                                path="/refreshmentStands"
                                element={<Home />}
                            />
                            <Route
                                path="/pointOfInterests"
                                element={<Home />}
                            />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
        </>
    );
}

export default App;
