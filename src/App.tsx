import { BrowserRouter, Routes, Route } from "react-router";
import Dashborard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashborard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
