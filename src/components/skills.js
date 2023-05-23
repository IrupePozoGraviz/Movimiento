import React from 'react'
import './css/skillscss.css'

export const Skills = () => {
  return (

    <div className="techskills">

      <div className=" techtitle">
        <h2>Skills</h2>
      </div>

      <div className="techchild">

        <p>HTML, CSS, Flexbox,
          <span className="tech js">JavaScript</span>,
         ES6, JSX,<span className="tech react">React</span>
         Hooks, Redux, Node.js,
         Mongo DB, Web Accessibly,
          API:s, <span className="tech mob">mob-programming</span>,
          pair-programming, Github.
        </p>

      </div>

    </div>
  )
}
