import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import { DataBasetable } from "./Components/DataBasetable";
import Login from "./Components/Login";
import Home from "./Components/Home";
import {PropertyCard} from "./Components/PropertyCard";
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
          <Route path="/Login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/PC" element={<PropertyCard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
