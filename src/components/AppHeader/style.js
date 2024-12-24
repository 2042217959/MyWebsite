import styled from "styled-components"

export const AppHeaderWrapper = styled.div`
  background-color: ${props => props.theme.background.primary};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid ${props => props.theme.primary}20;
  transition: all 0.3s ease;
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Comic Sans MS', 'Pacifico', sans-serif;
  
  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
    transition: all 0.3s ease;
    text-shadow: 2px 2px 4px ${props => props.theme.primary}40;
    
    &:hover {
      color: ${props => props.theme.hover};
      transform: scale(1.05);
      display: inline-block;
    }

    .typed-cursor {
      color: ${props => props.theme.primary};
      opacity: 1;
      animation: blink 1s infinite;
    }
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const NavItem = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.text.secondary};
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    position: relative;
    font-size: 1.1rem;
    border-radius: 20px;
    
    &:hover {
      color: ${props => props.theme.primary};
      background: ${props => props.theme.primary}10;
    }
    
    &.active {
      color: ${props => props.theme.primary};
      background: ${props => props.theme.primary}15;
      
      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 3px;
        background: ${props => props.theme.primary};
        border-radius: 10px;
        box-shadow: 0 0 10px ${props => props.theme.primary}40;
        animation: slideIn 0.3s ease forwards;
      }
    }
  }

  @keyframes slideIn {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 30px;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`