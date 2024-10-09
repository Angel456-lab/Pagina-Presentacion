import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
      </main>
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Angel Tapia. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App