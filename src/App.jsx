import { useState } from 'react'
import './components/Navbar'
import './components/VideoPage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SaveDateInfo from './components/SaveDateInfo';
import VideoPage from './components/VideoPage';


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <VideoPage />
      <SaveDateInfo />
    </>
  )
}

export default App
