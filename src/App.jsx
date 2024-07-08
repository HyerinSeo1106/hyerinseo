import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  TeachingPage,
  DataSoftwarePage,
  ResearchPage,
} from "./pages";
import MainLayout from "./MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route path="/data-software" element={<DataSoftwarePage />} />
      </Route>
    </Routes>
  );
}

export default App;
