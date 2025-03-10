import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
);

export default App;
