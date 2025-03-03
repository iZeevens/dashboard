import { BrowserRouter, Routes, Route } from "react-router";
import Dashborard from "./pages/Dashboard/Dashboard";
import Finalize from "./pages/Finalize/Finalize";
import Results from "./pages/Results/Results";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Dashborard />} />
          <Route path="/finalize/:testId" element={<Finalize />} />
          <Route path="/results/:testId" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
