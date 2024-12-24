import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ProjectsWrapper, 
  ProjectGrid, 
  ProjectCard, 
  ProjectHeader,
  TechTag 
} from './style'
import { 
  FaGithub, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa'
import { SiTypescript, SiWebpack } from 'react-icons/si'

const Projects = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: "个人网站",
      description: "基于 React 开发的个人网站，包含博客、项目展示等功能",
      image: "https://via.placeholder.com/300x200",
      techs: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/yourusername/project1",
      preview: "https://your-project-url.com"
    },
    {
      id: 2,
      title: "在线音乐播放器",
      description: "一个支持在线播放、歌单管理的音乐播放器",
      image: "https://via.placeholder.com/300x200",
      techs: ["React", "Node.js", "Webpack"],
      github: "https://github.com/yourusername/project2",
      preview: "https://your-project-url.com"
    },
    // 可以��加更多项目...
  ]

  const getTechIcon = (tech) => {
    switch (tech) {
      case 'React':
        return <FaReact />
      case 'Node.js':
        return <FaNodeJs />
      case 'TypeScript':
        return <SiTypescript />
      case 'Webpack':
        return <SiWebpack />
      default:
        return null
    }
  }

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`)
  }

  return (
    <ProjectsWrapper>
      <ProjectHeader>
        <h1>项目展示</h1>
        <p>这里展示了我的一些个人项目</p>
      </ProjectHeader>
      
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            index={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techs.map((tech, index) => (
                  <TechTag key={index}>
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </TechTag>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  )
}

export default Projects 