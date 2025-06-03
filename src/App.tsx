import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectManagement from "./ProjectManagement/page";
import HighlightExtractor from "./HighlightExtractor/page";
import OilSpillDetection from "./OilSpillDetection/page";
import Ecommerce from "./Ecommerce/page";
import MarketResearch from "./MarketResearch/page";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/highlight-extractor" element={<HighlightExtractor />} />
        <Route path="/med-guard" element={<OilSpillDetection />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/market-research" element={<MarketResearch />} />
      </Routes>
    </>
  )
}

export default App
