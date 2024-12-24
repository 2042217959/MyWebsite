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

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.text.primary};
    margin: 2rem 0;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${props => props.theme.primary};
      border-radius: 2px;
    }
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

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${props => props.theme.primary}20;
    color: ${props => props.theme.primary};
    transform: translateX(-5px);
  }
`

export const DetailContent = styled.div`
  margin-top: 2rem;

  .project-image {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    margin: 2rem 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const DetailHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.text.primary};
    margin-bottom: 1rem;
  }

  .meta {
    display: flex;
    gap: 2rem;
    color: ${props => props.theme.text.secondary};
    font-size: 0.9rem;
  }
`

export const DetailSection = styled.section`
  margin: 2rem 0;

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
  }

  p {
    color: ${props => props.theme.text.secondary};
    line-height: 1.8;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: ${props => props.theme.text.secondary};
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;
      
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
`

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;

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
    
    &:hover {
      background: ${props => props.theme.primary}20;
      color: ${props => props.theme.primary};
      transform: translateY(-2px);
    }

    svg {
      font-size: 1.2rem;
    }
  }
` 