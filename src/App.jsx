
import { useState } from "react"
import Nav from "./components/navigation/Nav"
import Home from "./pages/homepage/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./pages/videopage/Video";




const App = () => {

  const [navbar, setnavbar] = useState(true)

  return (
    <Router>
      <div>
        <Nav setnavbar={setnavbar} />
        <Routes>
          <Route path="/" element={<Home navbar={navbar} />}></Route>
          <Route path="/video/:channelid/:categoryid/:videoid" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
