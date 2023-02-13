import { Route, Routes } from "react-router-dom";
import AllNews from "./Components/AllNews/AllNews";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/politics"
          element={<CategoryPage category="politics" />}
        ></Route>
        <Route
          path="/business"
          element={<CategoryPage category="business" />}
        ></Route>
        <Route
          path="/health"
          element={<CategoryPage category="health" />}
        ></Route>
        <Route
          path="/science"
          element={<CategoryPage category="science" />}
        ></Route>
        <Route
          path="/sports"
          element={<CategoryPage category="sports" />}
        ></Route>
        <Route
          path="/technology"
          element={<CategoryPage category="technology" />}
        ></Route>
        <Route
          path="/allNews"
          element={<AllNews category="entertainment" />}
        ></Route>
        <Route path="/contact" element={<Contact category="contact" />}></Route>
      </Routes>
    </>
  );
}

export default App;
