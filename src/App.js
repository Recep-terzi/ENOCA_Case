import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
