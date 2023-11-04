import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from "./pages/Home";
import "./App.css";
function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/attractions" element={<Home />} />
                        <Route path="/refreshmentStands" element={<Home />} />
                        <Route path="/pointOfInterests" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
