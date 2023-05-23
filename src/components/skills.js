import React from 'react'
import './css/skillscss.css'

export const Skills = () => {
  return (
    <section className="skills">

      <h3>
    Skills
      </h3>
      <dl className="code">
        <dt>Code</dt>
        <dd>HTML5</dd>
        <dd>CSS3</dd>
        <dd> <span className="tech js">JavaScript ES6</span></dd>
        <dd>React.js</dd>
        <dd>Redux</dd>
        <dd>MongoDB</dd>
        <dd>Node.js</dd>
        <dd>REST API</dd>
      </dl>

      <dl className="toolbox">
        <dt>Toolbox</dt>
        <dd>VSCode</dd>
        <dd>Github</dd>
        <dd><span className="tech Cloud">Google Cloud</span></dd>
        <dd>Postman</dd>
        <dd>Figma</dd>
        <dd>Canva</dd>
        <dd>Slack</dd>

      </dl>

      <dl className="morelist">
        <dt className="more">More</dt>
        <dd>Project management</dd>
        <dd>Agile Methodology</dd>
        <dd> <span className="tech acces">Web Accessibly</span> </dd>
        <dd>mob-programming</dd>
        <dd>pair-programming</dd>

      </dl>

    </section>

  )
}
