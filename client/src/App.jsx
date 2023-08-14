import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import EditorPage from './components/EditorPage/EditorPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/editor' element={<EditorPage />} />
      </Routes>
    </>
  )
}

export default App
