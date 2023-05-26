import React from 'react'
import blackGithub from '../images/blackgithubicon.svg'
import blackglobe from '../images/blackglobe.svg'
import quiz from '../images/quiz.png'
import maze from '../images/maze.png'
import guess from '../images/guess.png'
import music from '../images/music.png'
import todos from '../images/todos.png'
import weather from '../images/weather.png'
import happy from '../images/happy.png'
import movies from '../images/movie.png'
import survey from '../images/survey.png'
import './css/projects.css';

export const Projects = () => {
  return (

    <section className="projects">
      {/* happy Thoughts */}
      <div className="featuredContainers">
        <img src={happy} alt="where it says" />

        <article className="featured-text">
          <h3>Happy Thoughts</h3>
          <p>Like Twitter, but less negativity.
            A site where users can post thoughts,
            see other users posts and send likes.
            What makes you happy? Head in and share with us!
          </p>

          <div className="tags">
            <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-happy-thoughts">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>

            <div className="livebtn">
              <a href="https://happy-thoughts-movimiento.netlify.app/">
                <img src={blackglobe} alt="button to view the live page" />
                <span>Live demo</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Movies */}
      <div className="featuredContainers">
        <img src={movies} alt="background" />
        <article className="featured-text">

          <h3>Movie Releases in React</h3>
          <p>A multi-page web application using React Router and an API from IMDB.
            It allows users to view a list of the
            latest movie releases and select a movie to read more about.
          </p>

          <div className="tags">
            <p>JavaScript</p> <p>React</p> <p>React Router</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-movies">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>

            <div className="livebtn">
              <a href="https://cozy-sunburst-a5adfd.netlify.app/">
                <img src={blackglobe} alt="button to view the live page" />
                <span>Live demo</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* To do */}
      <div className="featuredContainers">
        <img src={todos} alt=" pict" />
        <article className="featured-text">
          <h3>To Do- To do application using Redux</h3>
          <p>A classic todo-app built in React using Redux.
            The user can add, delete and check their todos.
            It also has tabs which allows the user to filter
            between their different todos.
          </p>

          <div className="tags">
            <p>JavaScript</p> <p>React</p> <p>Redux</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-todos">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>
          </div>

          <div className="livebtn">
            <a href="https://irupes-to-do-app.netlify.app/">
              <img src={blackglobe} alt="button to view the live page" />
              <span>Live demo</span>
            </a>

          </div>
        </article>
      </div>

      {/* Maze */}
      <main className="featuredContainers">
        <img src={maze} alt=" pict" />
        <article className="featured-text">
          <h3>The Great Space Maze- Labyrinth Game using Redux</h3>
          <p>A game where the user navigates through a maze, trying to find their way out of it.
            It`&apos;` s built with React and Redux and connects
            to an API that provides the locations.
          </p>

          <div className="tags">
            <p>JavaScript</p> <p>React</p> <p>Redux</p>
            <p>pair programming</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-labyrinth">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>
          </div>

          <div className="livebtn">
            <a href="https://the-great-space-maze.netlify.app/">
              <img src={blackglobe} alt="button to view the live page" />
              <span>Live demo</span>
            </a>

          </div>
        </article>
      </main>

      {/* Quiz */}
      <div className="featuredContainers">
        <img src={quiz} alt=" pict" />
        <article className="featured-text">
          <h3>Como se llama el animal</h3>
          <p>Test your spanish skills in this fun project made for
            children built in React using Redux.
            If you get a high enough score you get a nice surprise!
          </p>

          <div className="tags">
            <p>JavaScript</p> <p>React</p> <p>Redux</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-redux-quiz">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>
          </div>

          <div className="livebtn">
            <a href="https://vad-heter-djuret.netlify.app/">
              <img src={blackglobe} alt="button to view the live page" />
              <span>Live demo</span>
            </a>

          </div>
        </article>
      </div>

      {/* Survey */}
      <div className="featuredContainers">
        <img src={survey} alt=" pict" />
        <article className="featured-text">
          <h3>What&apos; s your favourite animal- Survey in react</h3>
          <p>A survey where the user answers questions and gets to know their favourite animnal.
            Try it out and see what your favourite animal is!
          </p>

          <div className="tags">
            <p>HTML</p> <p>CSS</p> <p>React</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-survey">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>
          </div>

          <div className="livebtn">
            <a href="https://transcendent-heliotrope-0d805c.netlify.app">
              <img src={blackglobe} alt="button to view the live page" />
              <span>Live demo</span>
            </a>

          </div>
        </article>
      </div>

      {/* MusicProject */}
      <div className="featuredContainers">
        <img src={music} alt=" pict" />
        <article className="featured-text">
          <h3>Music Releases in React</h3>
          <p>An site built in a pair-programming project,
            where the user can browse current music releases.
            It is based on an API from Spotify.
          </p>

          <div className="tags">
            <p>JavaScript</p> <p>React</p> <p>API</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-music-releases">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>
          </div>

          <div className="livebtn">
            <a href="https://musicreleases-spotify.netlify.app/">
              <img src={blackglobe} alt="button to view the live page" />
              <span>Live demo</span>
            </a>

          </div>
        </article>
      </div>

      {/* Weather app */}
      <div className="featuredContainers">
        <img src={weather} alt=" pict" />
        <article className="featured-text">
          <h3>Weather app built in Javascript</h3>
          <p>An app built in a pair-programming project to check the
            weather forecast in whatever city the user searches for,
            while having the styling change according to the weather and time of day.
            It fetches and presents weather data using API from Openweathermap.
          </p>

          <div className="tags">
            <p>JavaScript</p> <p>API</p> <p>Pair-programming</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://cheery-pasca-c07ee4.netlify.app/">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>
          </div>

          <div className="livebtn">
            <a href="https://github.com/IrupePozoGraviz/project-weather-app">
              <img src={blackglobe} alt="button to view the live page" />
              <span>Live demo</span>
            </a>

          </div>
        </article>
      </div>

      {/* Guess who */}
      <div className="featuredContainers">
        <img src={guess} alt=" pict" />
        <article className="featured-text">
          <h3>Guess who game built in Javascript
          </h3>
          <p>An app built in a pair-programming project to check the
            weather forecast in whatever city the user searches for,
            while having the styling change according to the weather and time of day.
            It fetches and presents weather data using API from Openweathermap.
          </p>

          <div className="tags">
            <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
          </div>

          <div className="linksproject">
            <div className="gitbtn">
              <a href="https://github.com/IrupePozoGraviz/project-guess-who">

                <img src={blackGithub} alt="button to view the code on Git hub" />
                <span>View the code</span>
              </a>
            </div>
          </div>

          <div className="livebtn">
            <a href="https://guess-who-irupe.netlify.app/">
              <img src={blackglobe} alt="button to view the live page" />
              <span>Live demo</span>
            </a>

          </div>
        </article>
      </div>
    </section>
  );
}