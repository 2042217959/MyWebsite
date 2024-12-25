import React from 'react'
import { HomeWrapper, Hero, About, Skills } from './style'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa'
import { SiWebpack } from 'react-icons/si'

const Home = () => {
  const navigate = useNavigate()
  const { theme } = useTheme()
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
        <motion.h2
          initial={{ color: theme.text.primary }}
          animate={{ color: theme.text.primary }}
          whileHover={{ 
            color: theme.primary,
            transition: { duration: 0.2 }
          }}
          onClick={() => navigate('/about')}
          style={{ 
            cursor: 'pointer',
            display: 'inline-block'
          }}
          title="点击查看更多关于我的信息哦~"
        >
          关于我
        </motion.h2>
        <p>这里是魔芋小狗，我是一名前端工程师</p>
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