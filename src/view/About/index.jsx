import React from 'react'
import { 
  AboutWrapper, 
  ProfileSection, 
  SkillsSection, 
  SkillTag, 
  ContactInfo 
} from './style'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3, 
  FaNodeJs, 
  FaGit,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiWebpack, 
  SiRedux, 
  SiStyledcomponents 
} from 'react-icons/si'
import photo from '../../assets/photo.jpg'

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'Webpack', icon: <SiWebpack /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Styled Components', icon: <SiStyledcomponents /> }
  ]

  return (
    <AboutWrapper>
      <h1>关于我</h1>
      
      <ProfileSection>
        <img src={photo} alt="个人照片" className="profile-image" />
        <div className="profile-content">
          <h2>个人简介</h2>
          <p>
            你好！我是一名充满热情的前端开发工程师，专注于创建用户友好的web应用程序。
            我热爱编程，享受将创意转化为代码的过程，并且一直在追求技术创新和最佳实践。
          </p>
          <p>
            在我的职业生涯中，我致力于不断学习和提升自己。我相信技术不仅仅是工具，
            更是实现梦想和解决问题的钥匙。
          </p>
        </div>
      </ProfileSection>

      <SkillsSection>
        <h2>技术栈</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <SkillTag key={index}>
              {skill.icon}
              <span>{skill.name}</span>
            </SkillTag>
          ))}
        </div>
      </SkillsSection>

      <ContactInfo>
        <h2>联系方式</h2>
        <div className="social-links">
          <a href="https://github.com/2042217959" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:2042217959@qq.com" className="social-link">
            <FaEnvelope /> Email
          </a>
        </div>
      </ContactInfo>
    </AboutWrapper>
  )
}

export default About 