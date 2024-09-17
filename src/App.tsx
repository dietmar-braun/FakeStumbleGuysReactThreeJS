import { useState, Suspense } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Router>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
