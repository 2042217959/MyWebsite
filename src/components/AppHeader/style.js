import styled from "styled-components"

export const AppHeaderWrapper = styled.div`
  background-color: ${props => props.theme.background.primary};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 1.2rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.text.secondary}20;
  transition: all 0.3s ease;
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  min-width: 200px;
  
  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
    transition: all 0.3s ease;
    text-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
    
    &:hover {
      color: ${props => props.theme.hover};
      text-shadow: 0 0 25px rgba(108, 99, 255, 0.4);
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
`

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
`

export const NavItem = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.text.secondary};
    font-weight: 500;
    padding: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    
    &:hover {
      color: ${props => props.theme.text.primary};
    }
    
    &.active {
      color: ${props => props.theme.primary};
      
      &:after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${props => props.theme.primary};
        box-shadow: 0 0 10px ${props => props.theme.primary};
        animation: slideIn 0.3s ease forwards;
      }
    }
  }

  @keyframes slideIn {
    from {
      transform: scaleX(0);
      opacity: 0;
    }
    to {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`