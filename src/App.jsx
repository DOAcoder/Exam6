import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login";
import KursTahrirlash from "./pages/KursTahrirlash";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kurs" element={<KursTahrirlash/>}/>
        
        
      </Routes>
    </div>
  );
};

export default App;
