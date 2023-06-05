import './App.css';
import Navbar from './Componenet/Navbar';
import NewsList from './Componenet/NewsList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className='md:flex md:gap-1'>
          <div className="navbar sticky w-full top-0 left-0 z-10 md:w-48 lg:w-56">
            <Navbar />
          </div>
          <div className="main flex-1">
            <Routes>
              <Route path="/" element={<NewsList category="general" />} />
              <Route path="/business" element={<NewsList category="business" />} />
              <Route path="/entertainment" element={<NewsList category="entertainment" />} />
              <Route path="/general" element={<NewsList category="general" />} />
              <Route path="/health" element={<NewsList category="health" />} />
              <Route path="/science" element={<NewsList category="science" />} />
              <Route path="/sports" element={<NewsList category="sports" />} />
              <Route path="/technology" element={<NewsList category="technology" />} />
            </Routes>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
