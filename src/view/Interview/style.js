import styled from 'styled-components'

export const InterviewWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: ${props => props.theme.text.primary};
    font-size: 2.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: ${props => props.theme.primary};
      border-radius: 2px;
    }
  }
`

export const CategorySection = styled.section`
  margin-bottom: 2.5rem;
  background: ${props => props.theme.background.secondary};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

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

export const InterviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InterviewItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.background.primary};
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
  }

  .status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 1rem;
    background: ${props => {
      switch (props.status) {
        case 'completed':
          return '#52c41a';
        case 'in-progress':
          return '#1890ff';
        case 'planned':
          return '#faad14';
        default:
          return '#d9d9d9';
      }
    }};
  }

  .title {
    flex: 1;
    color: ${props => props.theme.text.primary};
    font-weight: 500;
  }

  .status-text {
    color: ${props => props.theme.text.secondary};
    font-size: 0.9rem;
  }
`

export const InterviewDetail = styled.div`
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

  .category-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .category {
    color: ${props => props.theme.primary};
    font-weight: 500;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;

    &.completed {
      background: rgba(82, 196, 26, 0.1);
      color: #52c41a;
    }
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

    .difficulty {
      color: #faad14;
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

  .related-topics {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;

    .topic-button {
      padding: 0.8rem 1.5rem;
      background: ${props => props.theme.background.primary};
      border: none;
      border-radius: 8px;
      color: ${props => props.theme.text.primary};
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.primary}20;
        color: ${props => props.theme.primary};
        transform: translateY(-2px);
      }
    }
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

    &.numbered {
      margin-left: 2rem;
      
      &:before {
        display: none;
      }
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