import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Quiz from "./quiz";
import Wastegame from "./waste";
import Dash from "./dashboard";
import Login from "./login";

function App() {
  return (
    <div>
      {/* <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/waste" element={<Wastegame/>}/>
        <Route path="/dashboard" element={<Dash/>}/>
      </Routes>
    </div>
  );
}

export default App;
