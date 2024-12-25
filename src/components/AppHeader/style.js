import styled from "styled-components"

export const AppHeaderWrapper = styled.header`
  background: ${props => props.theme.background.primary};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Logo = styled.div`
  a {
    color: ${props => props.theme.text.primary};
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(120deg, #1890ff, #722ed1);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
    flex: 1;
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
    white-space: nowrap;
    
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
      font-size: 0.9rem;
      padding: 0.4rem 0.6rem;
    }
  }
`