import React from 'react'
import { ReactTyped } from 'react-typed'
import { HomeWrapper, Hero, About, Skills } from './style'
import { 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa'
import { SiWebpack } from 'react-icons/si'

const Home = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML/CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiWebpack />, name: 'webpack' },
    { icon: <FaNodeJs />, name: 'node.js' }
  ]

  return (
    <HomeWrapper>
      <Hero>
        <h1>
          <ReactTyped
            strings={['欢迎来到我的前端流水账日记~']}
            typeSpeed={100}
            startDelay={600}
            showCursor
            cursorChar="|"
            style={{ display: 'inline-block' }}
          />
        </h1>
        <p>
          <ReactTyped
            strings={['共同学习，一起进步']}
            typeSpeed={80}
            startDelay={2000}
            showCursor
            cursorChar="|"
            style={{ display: 'inline-block' }}
          />
        </p>
      </Hero>

      <About>
        <h2>关于我</h2>
        <p>这里是一段简短的自我介绍...</p>
      </About>

      <Skills>
        <h2>技能专长</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <span className="icon">{skill.icon}</span>
              <span className="text">{skill.name}</span>
            </li>
          ))}
        </ul>
      </Skills>
    </HomeWrapper>
  )
}

export default Home 