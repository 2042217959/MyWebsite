import React, { useState } from 'react'
import { 
  AboutWrapper, 
  ProfileSection, 
  SkillsSection, 
  SkillTag, 
  ContactInfo,
  CopyButton,
  InfoItem
} from './style'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3, 
  FaNodeJs, 
  FaGit,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaCopy,
  FaCheck,
  FaUser,
  FaGraduationCap,
  FaCode
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiWebpack, 
  SiRedux, 
  SiStyledcomponents,
  SiJuejin
} from 'react-icons/si'
import photo from '../../assets/photo.jpg'

const About = () => {
  const [copiedItems, setCopiedItems] = useState({
    phone: false,
    email: false
  })
  const phoneNumber = "19868729624"
  const email = "2042217959@qq.com"

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => ({ ...prev, [type]: true }))
      setTimeout(() => {
        setCopiedItems(prev => ({ ...prev, [type]: false }))
      }, 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

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
          <div className="info-list">
            <InfoItem>
              <FaUser className="icon" />
              <span>姓名：王梓绵</span>
            </InfoItem>
            <InfoItem>
              <FaGraduationCap className="icon" />
              <span>学校：广东工业大学</span>
            </InfoItem>
            <InfoItem>
              <FaGraduationCap className="icon" />
              <span>专业：软件工程 2023级</span>
            </InfoItem>
            <InfoItem>
              <FaCode className="icon" />
              <span>方向：前端开发</span>
            </InfoItem>
          </div>
          <p>
            技术不仅仅是工具，
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
          <a href="https://juejin.cn/user/1660740376482971" className="social-link" target="_blank" rel="noopener noreferrer">
            <SiJuejin /> 掘金
          </a>
          <div className="social-link">
            <FaEnvelope /> {email}
            <CopyButton 
              onClick={() => handleCopy(email, 'email')}
              title={copiedItems.email ? "已复制!" : "点击复制"}
            >
              {copiedItems.email ? <FaCheck /> : <FaCopy />}
            </CopyButton>
          </div>
          <div className="social-link">
            <FaPhone /> {phoneNumber}
            <CopyButton 
              onClick={() => handleCopy(phoneNumber, 'phone')}
              title={copiedItems.phone ? "已复制!" : "点击复制"}
            >
              {copiedItems.phone ? <FaCheck /> : <FaCopy />}
            </CopyButton>
          </div>
        </div>
      </ContactInfo>
    </AboutWrapper>
  )
}

export default About 