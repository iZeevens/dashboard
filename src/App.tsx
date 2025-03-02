import { BrowserRouter, Routes, Route } from "react-router";
import Dashborard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashborard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
