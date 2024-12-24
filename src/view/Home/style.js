import styled from 'styled-components'

export const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

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

export const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, #1890ff, #722ed1);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    text-shadow: 0px 2px 8px rgba(24, 144, 255, 0.1);
    font-family: 'Comic Sans MS', 'Pacifico', sans-serif;
    font-weight: bold;
  }
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.text.secondary};
  }
`

export const About = styled.section`
  padding: 2rem 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.2s;
  
  h2 {
    margin-bottom: 1rem;
    color: ${props => props.theme.text.primary};
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
  }
`

export const Skills = styled.section`
  padding: 2rem 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.4s;
  
  h2 {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.text.primary};
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
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    
    li {
      background: ${props => props.theme.background.secondary};
      padding: 1rem 1.5rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      border: 1px solid ${props => props.theme.text.secondary}20;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.6s ease forwards;
      animation-delay: ${props => props.index * 0.1}s;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .icon {
        font-size: 1.5rem;
        color: ${props => props.theme.primary};
      }

      .text {
        color: ${props => props.theme.text.primary};
        font-weight: 500;
      }
    }
  }
` 