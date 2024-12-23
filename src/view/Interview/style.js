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