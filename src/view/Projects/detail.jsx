import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import { 
  ProjectDetail, 
  BackButton, 
  DetailContent, 
  DetailHeader,
  DetailSection,
  TechStack,
  Links,
  ImageSlider,
  SliderButton,
  ImageModal,
  ModalContent,
  CloseButton,
  ImageTitle,
  ImageNavigation
} from './style'
import { projects } from '../../data/projects'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!project) {
    return (
      <ProjectDetail>
        <BackButton onClick={() => navigate('/projects')}>
          <FaArrowLeft /> 返回项目列表
        </BackButton>
        <h1>项目不存在</h1>
      </ProjectDetail>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false)
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      prevImage()
    }
  }

  return (
    <ProjectDetail>
      <BackButton onClick={() => navigate('/projects')}>
        <FaArrowLeft /> 返回项目列表
      </BackButton>

      <DetailHeader>
        <div className="category">项目展示</div>
        <h1>{project.title}</h1>
        <div className="meta">
          <div className="tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </DetailHeader>

      <DetailContent>
        <ImageSlider>
          <motion.img 
            src={project.images[currentImageIndex].url} 
            alt={project.images[currentImageIndex].title}
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          {project.images.length > 1 && (
            <>
              <SliderButton className="prev" onClick={prevImage}>
                <FaChevronLeft />
              </SliderButton>
              <SliderButton className="next" onClick={nextImage}>
                <FaChevronRight />
              </SliderButton>
            </>
          )}
          <ImageTitle>
            {project.images[currentImageIndex].title}
          </ImageTitle>
        </ImageSlider>

        <DetailSection>
          <h2>项目描述</h2>
          <p>{project.description}</p>
        </DetailSection>

        <DetailSection>
          <h2>主要功能</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection>
          <h2>技术难点</h2>
          <ul>
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection>
          <h2>解决方案</h2>
          <ul>
            {project.solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection>
          <h2>技术栈</h2>
          <TechStack>
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech">{tech}</span>
            ))}
          </TechStack>
        </DetailSection>

        <Links>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> 查看源码
          </a>
          {project.isDeployed && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> 在线演示
            </a>
          )}
        </Links>
      </DetailContent>

      <AnimatePresence>
        {isModalOpen && (
          <ImageModal
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <ModalContent onClick={e => e.stopPropagation()}>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </CloseButton>
              <motion.img 
                src={project.images[currentImageIndex].url} 
                alt={project.images[currentImageIndex].title}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
              <ImageNavigation>
                <SliderButton onClick={prevImage}>
                  <FaChevronLeft />
                </SliderButton>
                <ImageTitle>
                  {project.images[currentImageIndex].title}
                </ImageTitle>
                <SliderButton onClick={nextImage}>
                  <FaChevronRight />
                </SliderButton>
              </ImageNavigation>
            </ModalContent>
          </ImageModal>
        )}
      </AnimatePresence>
    </ProjectDetail>
  )
}

export default ProjectDetailPage 