import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen scanline-overlay text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
