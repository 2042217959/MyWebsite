import styled from 'styled-components'

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
    color: ${props => props.theme.text.primary};
    max-width: 900px;
    margin: 0 auto;

    h1, h2, h3, h4, h5, h6 {
      color: ${props => props.theme.text.primary};
      margin: 1.5em 0 0.8em;
      font-weight: 600;
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
    }

    ul, ol {
      padding-left: 1.5em;
      margin: 1em 0;
      
      li {
        margin: 0.5em 0;
        color: ${props => props.theme.text.secondary};
        position: relative;
        
        &::marker {
          color: ${props => props.theme.primary};
        }
      }
    }

    code {
      background: ${props => props.theme.background.secondary};
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 0.9em;
      font-family: 'Fira Code', monospace;
    }

    pre {
      background: ${props => props.theme.background.secondary};
      padding: 1em;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1em 0;

      code {
        background: none;
        padding: 0;
      }
    }

    blockquote {
      border-left: 4px solid ${props => props.theme.primary};
      margin: 1em 0;
      padding: 0.5em 1em;
      background: ${props => props.theme.background.secondary};
      color: ${props => props.theme.text.secondary};
      border-radius: 4px;
    }

    img {
      max-width: 100%;
      border-radius: 8px;
      margin: 1em 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1em 0;

      th, td {
        border: 1px solid ${props => props.theme.border};
        padding: 0.5em 1em;
      }

      th {
        background: ${props => props.theme.background.secondary};
        font-weight: 600;
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
  max-width: 1200px;
  margin: 0 auto;

  .category {
    color: ${props => props.theme.primary};
    font-weight: 500;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
  }

  .tags {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }
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
  border: none;
  background: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text.primary};
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
    background: ${props => props.theme.primary}20;
    color: ${props => props.theme.primary};
    transform: translateX(-5px);
  }
` 