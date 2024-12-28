import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ProjectsWrapper, ProjectHeader, ProjectGrid, ProjectCard } from './style'
import { projects } from '../../data/projects'

const Projects = () => {
  const navigate = useNavigate()

  return (
    <ProjectsWrapper>
      <ProjectHeader>
        <h1>项目展示</h1>
        <p>这里展示了我的一些个人项目作品</p>
      </ProjectHeader>

      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            index={index}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <div className="project-image">
              <img src={project.images[0].url} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  )
}

export default Projects 