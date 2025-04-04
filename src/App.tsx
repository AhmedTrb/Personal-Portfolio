import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectManagement from "./ProjectManagement/page";
import HighlightExtractor from "./HighlightExtractor/page";
import OilSpillDetection from "./OilSpillDetection/page";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/highlight-extractor" element={<HighlightExtractor />} />
        <Route path="/med-guard" element={<OilSpillDetection />} />
      </Routes>
    </>
  )
}

export default App
