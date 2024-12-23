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
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.text.secondary}20;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
    margin-top: auto;
    
    .date {
      color: ${props => props.theme.text.secondary};
      font-size: 0.9rem;
    }

    .read-more {
      background: none;
      border: none;
      color: ${props => props.theme.primary};
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      
      &:hover {
        background: ${props => props.theme.primary}20;
      }
    }
  }
`

export const KnowledgeDetail = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const DetailContent = styled.div`
  margin-top: 2rem;
  background: ${props => props.theme.background.secondary};
  border-radius: 12px;
  padding: 2rem;
`

export const DetailHeader = styled.div`
  margin-bottom: 3rem;

  .category {
    color: ${props => props.theme.primary};
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.text.primary};
    margin-bottom: 1.5rem;
  }

  .meta {
    display: flex;
    gap: 2rem;
    color: ${props => props.theme.text.secondary};
    font-size: 0.9rem;
    margin-bottom: 1rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .tags {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .tag {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: ${props => props.theme.background.primary};
      color: ${props => props.theme.text.secondary};
      border-radius: 20px;
      font-size: 0.9rem;

      svg {
        color: ${props => props.theme.primary};
      }
    }
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