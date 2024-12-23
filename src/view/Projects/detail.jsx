import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ProjectDetail, BackButton, DetailContent, DetailHeader, DetailSection, TechStack, TechTag, Links } from './style'
import { FaArrowLeft, FaGithub, FaLink } from 'react-icons/fa'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // 模拟项目详情数据
  const projectDetail = {
    title: "个人网站",
    description: "基于 React 开发的个人网站，包含博客、项目展示等功能。使用了现代化的前端技术栈，实现了响应式设计和主题切换等功能。",
    image: "https://via.placeholder.com/1200x600",
    techs: ["React", "TypeScript", "Node.js", "Styled Components"],
    features: [
      "响应式设计，适配多种设备",
      "深色/浅色主题切换",
      "项目展示与详情页面",
      "知识库管理系统"
    ],
    github: "https://github.com/yourusername/project1",
    preview: "https://your-project-url.com",
    createTime: "2024-01-01",
    updateTime: "2024-03-15"
  }

  return (
    <ProjectDetail>
      <BackButton onClick={() => navigate('/projects')}>
        <FaArrowLeft /> 返回项目列表
      </BackButton>
      
      <DetailContent>
        <DetailHeader>
          <h1>{projectDetail.title}</h1>
          <div className="meta">
            <span>创建时间: {projectDetail.createTime}</span>
            <span>最后更新: {projectDetail.updateTime}</span>
          </div>
        </DetailHeader>

        <div className="project-image">
          <img src={projectDetail.image} alt={projectDetail.title} />
        </div>

        <DetailSection>
          <h2>项目描述</h2>
          <p>{projectDetail.description}</p>
        </DetailSection>

        <DetailSection>
          <h2>技术栈</h2>
          <TechStack>
            {projectDetail.techs.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechStack>
        </DetailSection>

        <DetailSection>
          <h2>主要功能</h2>
          <ul>
            {projectDetail.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </DetailSection>

        <Links>
          <a href={projectDetail.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub 仓库
          </a>
          <a href={projectDetail.preview} target="_blank" rel="noopener noreferrer">
            <FaLink /> 在线预览
          </a>
        </Links>
      </DetailContent>
    </ProjectDetail>
  )
}

export default ProjectDetailPage 