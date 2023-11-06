import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Attractions } from "./pages/Attractions.tsx";
import { PointOfInterests } from "./pages/PointOfInterests.tsx";
import { RefreshmentStands } from "./pages/RefreshmentStands.tsx";

// const defaultTheme = createTheme({
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

const defaultTheme = createTheme({
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
                <ThemeProvider theme={defaultTheme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/attractions"
                                element={<Attractions />}
                            />
                            <Route
                                path="/refreshmentStands"
                                element={<RefreshmentStands />}
                            />
                            <Route
                                path="/pointOfInterests"
                                element={<PointOfInterests />}
                            />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
        </>
    );
}

export default App;
