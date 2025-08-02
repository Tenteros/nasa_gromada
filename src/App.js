import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Dniprelstan from "./pages/villages/Dniprelstan";
import Sonyachne from "./pages/villages/Dniprelstan";
import Volodymyrivske from "./pages/villages/Volodymyrivske";
import HomePage from "./pages/HomePage"; // если есть главная
import NotFound from "./pages/NotFound/NotFound";
import Test from "./pages/test";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test" element={<Test />} />
                <Route path="/dniprelstan" element={<Dniprelstan />} />
                <Route path="/sonyachne" element={<Sonyachne />} />
                <Route path="/volodymyrivske" element={<Volodymyrivske />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
