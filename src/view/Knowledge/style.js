import styled from 'styled-components'
import { Card } from 'antd'

export const KnowledgeWrapper = styled.div`
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
`

export const CategorySection = styled.section`
  margin-bottom: 3rem;
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
`

export const KnowledgeGrid = styled.div`
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

export const KnowledgeCard = styled.div`
  background: ${props => props.theme.background.secondary};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

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

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .date {
      color: ${props => props.theme.text.secondary};
      font-size: 0.9rem;
    }

    .read-more {
      color: ${props => props.theme.primary};
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.primary}20;
      }
    }
  }
`

export const KnowledgeDetail = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  padding: 2rem 3rem;
  background: ${props => props.theme.background.primary};

  .markdown-content {
    font-size: 16px;
    line-height: 1.8;
    color: ${props => props.theme.text.secondary};
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden;

    .sidebar {
      background: ${props => props.theme.background.secondary};
      border: 1px solid ${props => props.theme.border}40;
      box-shadow: 0 2px 8px ${props => props.theme.shadow}10;
    }

    pre {
      max-width: 100%;
      overflow-x: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    table {
      display: block;
      max-width: 100%;
      overflow-x: auto;
      white-space: nowrap;
    }

    * {
      max-width: 100%;
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .markdown-content {
      padding: 0 1rem;
      
      pre, code {
        font-size: 14px;
      }
    }

    .sidebar {
      width: 100% !important;
      max-width: 280px;
      left: 0 !important;
      top: 0 !important;
      height: 100vh !important;
      border-radius: 0;
      position: fixed;
      z-index: 1000;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.text.primary};
    margin: 1.5em 0 0.8em;
    font-weight: 500;
    line-height: 1.4;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.8em; }
  h3 { 
    font-size: 1.5em;
    margin-top: 2em;
  }

  p {
    margin: 1em 0;
    color: ${props => props.theme.text.secondary};
    letter-spacing: 0.2px;
  }

  ul, ol {
    padding-left: 1.5em;
    margin: 1em 0;
    
    li {
      margin: 0.5em 0;
      color: ${props => props.theme.text.secondary};
      position: relative;
      
      &::marker {
        color: ${props => props.theme.primary}cc;
      }
    }
  }

  code {
    background: ${props => props.theme.background.primary}cc;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Fira Code', monospace;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.border}20;
  }

  pre {
    background: ${props => props.theme.background.primary}cc;
    padding: 1.2em;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1em 0;
    border: 1px solid ${props => props.theme.border}20;

    code {
      background: none;
      padding: 0;
      border: none;
      color: ${props => props.theme.text.secondary};
    }
  }

  blockquote {
    border-left: 4px solid ${props => props.theme.primary}80;
    margin: 1em 0;
    padding: 0.8em 1.2em;
    background: ${props => props.theme.background.primary}80;
    color: ${props => props.theme.text.secondary};
    border-radius: 4px;
    font-style: italic;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1em 0;
    border: 1px solid ${props => props.theme.border}20;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 1em 0;
    border: 1px solid ${props => props.theme.border}30;
    border-radius: 8px;
    overflow: hidden;

    th, td {
      border: none;
      border-bottom: 1px solid ${props => props.theme.border}30;
      border-right: 1px solid ${props => props.theme.border}30;
      padding: 0.8em 1em;
    }

    th {
      background: ${props => props.theme.background.primary}80;
      font-weight: 500;
      color: ${props => props.theme.text.primary};
    }

    tr:last-child td {
      border-bottom: none;
    }

    td:last-child, th:last-child {
      border-right: none;
    }

    tr:nth-child(even) {
      background: ${props => props.theme.background.primary}40;
    }

    tr:hover {
      background: ${props => props.theme.background.primary}60;
    }
  }
}

@media (max-width: 768px) {
  padding: 1rem;
}
`

export const DetailContent = styled.div`
  margin-top: 2rem;
  background: ${props => props.theme.background.secondary};
  border-radius: 12px;
  padding: 2rem;
`

export const DetailHeader = styled.div`
  position: relative;
  padding-left: ${props => props.theme.isMobile ? '48px' : '0'};
`

export const DetailSection = styled.section`
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.text.secondary}20;

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
`

export const ContentSection = styled.div`
  color: ${props => props.theme.text.secondary};
  line-height: 1.8;

  h2 {
    color: ${props => props.theme.text.primary};
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  li {
    margin-left: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;

    &:before {
      content: '•';
      color: ${props => props.theme.primary};
      position: absolute;
      left: -1.5rem;
    }
  }
`

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid ${props => props.theme.border}30;
  background: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text.secondary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${props => props.theme.primary}15;
    color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary}30;
    transform: translateX(-5px);
  }
`

export const StyledCard = styled(Card)`
  background: ${props => props.theme.background.secondary};
  border: 1px solid ${props => props.theme.border}40;
  box-shadow: 0 2px 8px ${props => props.theme.shadow}10;
  backdrop-filter: blur(8px);

  .ant-card-body {
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: ${props => props.theme.border}80;
    box-shadow: 0 4px 12px ${props => props.theme.shadow}20;
  }

  .ant-menu {
    color: ${props => props.theme.text.secondary};

    .ant-menu-item {
      border-radius: 6px;
      margin: 4px 0;
      transition: all 0.3s ease;

      &:hover {
        color: ${props => props.theme.primary};
        background: ${props => props.theme.primary}15;
      }

      &.ant-menu-item-selected {
        background: ${props => props.theme.primary}25;
        color: ${props => props.theme.primary};
        font-weight: 500;
      }

      &:active {
        background: ${props => props.theme.primary}35;
      }
    }
  }

  .ant-typography {
    color: ${props => props.theme.text.primary};
  }
`

export const MenuButton = styled.button`
  display: none;
  position: relative;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  z-index: 1000;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-left: 12px;

  &:hover {
    background: ${props => props.theme.background.secondary};
  }

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.background.secondary};
  }
`