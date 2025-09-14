import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/Navbar'
import './components/VideoPage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SaveDateInfo from './components/SaveDateInfo';
import VideoPage from './components/VideoPage';
import TheInvite from './components/TheInvite';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/SaveTheDate" element={
          <>
            <VideoPage />
            <SaveDateInfo />
          </>
        } />
        <Route path="/theInvite" element={<TheInvite />} />
      </Routes>
    </Router>
  );
}

export default App
