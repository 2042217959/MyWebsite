import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const ProjectHeader = styled.div`
  margin-bottom: 3rem;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.text.primary};
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${props => props.theme.primary};
      border-radius: 2px;
    }
  }

  p {
    color: ${props => props.theme.text.secondary};
    font-size: 1.2rem;
  }
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  background: ${props => props.theme.background.secondary};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${props => props.index * 0.2}s;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .project-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  &:hover .project-image img {
    transform: scale(1.1);
  }

  .project-content {
    padding: 1.5rem;

    h3 {
      color: ${props => props.theme.text.primary};
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    p {
      color: ${props => props.theme.text.secondary};
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }
`

export const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.8rem;
  background: ${props => props.theme.background.primary};
  border-radius: 4px;
  font-size: 0.9rem;
  color: ${props => props.theme.text.secondary};

  svg {
    font-size: 1rem;
    color: ${props => props.theme.primary};
  }
`

export const ProjectDetail = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  background: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text.primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  align-self: flex-start;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${props => props.theme.primary}20;
    color: ${props => props.theme.primary};
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`

export const DetailHeader = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  max-width: 800px;

  .category {
    color: ${props => props.theme.primary};
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.text.primary};
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .meta {
    display: flex;
    gap: 2rem;
    color: ${props => props.theme.text.secondary};
    font-size: 0.9rem;
    margin-bottom: 1rem;

    .tags {
      display: flex;
      gap: 0.8rem;
      flex-wrap: wrap;

      .tag {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: ${props => props.theme.background.secondary};
        color: ${props => props.theme.text.primary};
        border-radius: 20px;
        font-size: 0.9rem;
        transition: all 0.3s ease;

        &:hover {
          background: ${props => props.theme.primary}20;
          color: ${props => props.theme.primary};
        }

        svg {
          color: ${props => props.theme.primary};
        }
      }
    }
  }
`

export const DetailContent = styled.div`
  background: ${props => props.theme.background.secondary};
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  .project-image {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }

    @media (max-width: 768px) {
      height: 250px;
      margin-bottom: 1.5rem;
    }
  }
`

export const DetailSection = styled.section`
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.8rem;
    color: ${props => props.theme.text.primary};
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1rem;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: ${props => props.theme.primary};
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: ${props => props.theme.text.secondary};
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: ${props => props.theme.text.secondary};
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;
      line-height: 1.6;
      
      &:before {
        content: '•';
        color: ${props => props.theme.primary};
        position: absolute;
        left: 0;
        font-size: 1.5rem;
        line-height: 1;
      }
    }
  }
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .tech {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.background.secondary};
    color: ${props => props.theme.text.primary};
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.primary}20;
      color: ${props => props.theme.primary};
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
    }
  }
`

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: ${props => props.theme.background.secondary};
    color: ${props => props.theme.text.primary};
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
    
    &:hover {
      background: ${props => props.theme.primary}20;
      color: ${props => props.theme.primary};
      transform: translateY(-2px);
    }

    svg {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
      flex: 1;
      justify-content: center;
    }
  }
`

export const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 1.5rem;
  }
`

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.theme.background.secondary}CC;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.theme.text.primary};
  z-index: 2;

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }

  &:hover {
    background: ${props => props.theme.primary}CC;
    color: white;
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    
    svg {
      font-size: 1rem;
    }
  }
`

export const ImageTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: ${props => props.theme.background.secondary}CC;
  color: ${props => props.theme.text.primary};
  text-align: center;
  backdrop-filter: blur(5px);
`

export const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: calc(90vh - 100px);
    object-fit: contain;
    border-radius: 8px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: -2rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const ImageNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  width: 100%;

  ${SliderButton} {
    position: static;
    transform: none;
    background: ${props => props.theme.background.secondary};
  }

  ${ImageTitle} {
    position: static;
    background: none;
    padding: 0;
    color: white;
    flex: 1;
    max-width: 300px;
  }
`

export const MarkdownWrapper = styled.div`
  color: ${props => props.theme.text.primary};
  line-height: 1.8;
  font-size: 1.1rem;

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.text.primary};
    margin: 2rem 0 1rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.2rem;
    border-bottom: 2px solid ${props => props.theme.primary}40;
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 0;
    color: ${props => props.theme.text.secondary};
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    padding-left: 2rem;
    margin: 1rem 0;
    
    li {
      margin: 0.5rem 0;
      color: ${props => props.theme.text.secondary};
    }
  }

  blockquote {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-left: 4px solid ${props => props.theme.primary};
    background: ${props => props.theme.background.primary};
    color: ${props => props.theme.text.secondary};
    
    p {
      margin: 0;
    }
  }

  code {
    background: ${props => props.theme.background.primary};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 0.9em;
  }

  pre {
    background: ${props => props.theme.background.primary};
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1rem 0;
    
    code {
      background: none;
      padding: 0;
      font-size: 0.9rem;
      color: ${props => props.theme.text.primary};
    }
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    
    th, td {
      border: 1px solid ${props => props.theme.text.secondary}30;
      padding: 0.5rem;
      text-align: left;
    }
    
    th {
      background: ${props => props.theme.background.primary};
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${props => props.theme.text.secondary}30;
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }
` 