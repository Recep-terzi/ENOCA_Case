import { Route, Routes } from "react-router-dom";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
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
          path="/entertainment"
          element={<CategoryPage category="entertainment" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
