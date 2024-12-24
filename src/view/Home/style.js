import styled from 'styled-components'

export const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  
h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  text-shadow: 0px 2px 8px rgba(24, 144, 255, 0.1);
  font-family: 'Comic Sans MS', 'Pacifico', sans-serif; /* 使用卡通字体 */
  font-weight: bold; 
}
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.text.secondary};
  }
`

export const About = styled.section`
  padding: 2rem 0;
  
  h2 {
    margin-bottom: 1rem;
  }
`

export const Skills = styled.section`
  padding: 2rem 0;
  
  h2 {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.text.primary};
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