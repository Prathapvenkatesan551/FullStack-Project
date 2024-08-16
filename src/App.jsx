import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import { DataBasetable } from "./Components/DataBasetable";
// or if you prefer using default import:
// import DataBasetable from "./Components/DataBasetable";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/DB" element={<DataBasetable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
