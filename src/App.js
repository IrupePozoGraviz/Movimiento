import React from 'react'
import { Contact } from 'components/contact'
import { Main } from './components/main'
import { Skills } from './components/skills'
import { Projects } from './components/projects'

export const App = () => {
  return (
    <div>
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
