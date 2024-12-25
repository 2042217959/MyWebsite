import React from 'react'
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
        <h1>魔芋小狗的前端日记</h1>
        <p>记录学习历程，分享开发经验</p>
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