import './App.css';
import {Home} from "./pages/Home";
import Categories from './pages/Categories';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
