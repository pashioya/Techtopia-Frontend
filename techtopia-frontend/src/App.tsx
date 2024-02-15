import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Attractions } from "./pages/Attractions.tsx";
import { PointOfInterests } from "./pages/PointOfInterests.tsx";
import { RefreshmentStands } from "./pages/RefreshmentStands.tsx";
import { lightTheme } from "./utils/themes.ts";
import SecurityContextProvider from "./context/SecurityContextProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AttractionsContextProvider from "./context/attractions/AttractionsContextProvider.tsx";
import RefreshmentStandContextProvider from "./context/refreshmentStands/RefreshmentStandContextProvider.tsx";
import PointOfInterestContextProvider from "./context/pointOfInterests/PointOfInterestContextProvider.tsx";

const queryClient = new QueryClient();

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <QueryClientProvider client={queryClient}>
                <SecurityContextProvider>
                    <AttractionsContextProvider>
                        <RefreshmentStandContextProvider>
                            <PointOfInterestContextProvider>
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
                            </PointOfInterestContextProvider>
                        </RefreshmentStandContextProvider>
                    </AttractionsContextProvider>
                </SecurityContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
