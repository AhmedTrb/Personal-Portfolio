import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectManagement from "./ProjectManagement/page";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project-management" element={<ProjectManagement />} />
      </Routes>
    </>
  )
}

export default App
