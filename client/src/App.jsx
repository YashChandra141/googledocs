import TextEditor from './TextEditor'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={() => <Navigate to={`/documents/${uuid()}`} />} />

        <Route path='/documents/:id' element={<TextEditor />} />


      </Routes>

    </Router>
  )
}

export default App
