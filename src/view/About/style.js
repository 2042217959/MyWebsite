import styled from 'styled-components'

export const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

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
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    
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
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }

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
      
      @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
        padding-left: 0;
        
        &:before {
          display: none;
        }
      }
      
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

    .info-list {
      margin-bottom: 1.5rem;
    }

    p {
      color: ${props => props.theme.text.secondary};
      line-height: 1.8;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      padding: 0 1rem;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 1rem;
        padding: 0;
      }
    }
  }
`

export const SkillsSection = styled.div`
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.4s;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  h2 {
    color: ${props => props.theme.text.primary};
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    position: relative;
    padding-left: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
      padding-left: 0;
      
      &:before {
        display: none;
      }
    }
    
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
    justify-content: flex-start;
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

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    color: ${props => props.theme.primary};
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

export const ContactInfo = styled.div`
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.6s;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  h2 {
    color: ${props => props.theme.text.primary};
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    position: relative;
    padding-left: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
      padding-left: 0;
      
      &:before {
        display: none;
      }
    }
    
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
    flex-wrap: wrap;
    justify-content: flex-start;
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
    
    @media (max-width: 768px) {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
      flex: 1;
      min-width: 250px;
      justify-content: center;
    }
    
    &:hover {
      background: ${props => props.theme.primary}20;
      color: ${props => props.theme.primary};
      transform: translateY(-3px);
    }

    svg {
      font-size: 1.2rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`

export const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  margin-left: 8px;
  color: ${props => props.theme.text.secondary};
  transition: all 0.3s ease;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 3px 6px;
  }

  &:hover {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}15;
  }

  svg {
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme.background.secondary};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    margin-bottom: 0.8rem;
  }

  &:hover {
    transform: translateX(10px);
    background: ${props => props.theme.primary}10;
  }

  .icon {
    color: ${props => props.theme.primary};
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  span {
    color: ${props => props.theme.text.primary};
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

