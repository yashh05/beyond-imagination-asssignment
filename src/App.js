import "./App.css";
import Layout from "./Layout";
import Login from './component/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./component/notFound/NotFound";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
