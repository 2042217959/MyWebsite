import styled from 'styled-components'

export const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    text-align: left;
    margin-bottom: 3rem;
    color: ${props => props.theme.text.primary};
    font-size: 2.5rem;
    position: relative;
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
    
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
`

export const ProfileSection = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .profile-content {
    flex: 1;

    h2 {
      color: ${props => props.theme.text.primary};
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
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
      margin-bottom: 1.5rem;
    }
  }
`

export const SkillsSection = styled.div`
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.4s;

  h2 {
    color: ${props => props.theme.text.primary};
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
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

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`

export const SkillTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text.primary};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    color: ${props => props.theme.primary};
    font-size: 1.2rem;
  }
`

export const ContactInfo = styled.div`
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.6s;

  h2 {
    color: ${props => props.theme.text.primary};
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
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

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    display: inline-flex;
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
      transform: translateY(-3px);
    }

    svg {
      font-size: 1.2rem;
    }
  }
`

