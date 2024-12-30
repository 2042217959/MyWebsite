import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ArticlesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  padding: 2rem 2rem;
  background: ${props => props.theme.background};

  h1 {
    color: ${props => props.theme.textColor};
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    position: relative;
    display: inline-block;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background: #74B9FF;
      border-radius: 2px;
    }
  }
`

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`

export const ArticleItem = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`

export const ArticleTitle = styled.h3`
  color: ${props => props.theme.textColor};
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4;
`

export const ArticleDescription = styled.p`
  color: ${props => props.theme.secondaryText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

export const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

export const ArticleDate = styled.span`
  color: ${props => props.theme.accentColor};
  font-size: 0.9rem;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const Tag = styled.span`
  background: ${props => props.theme.tagBackground || props.theme.accentColor + '20'};
  color: ${props => props.theme.accentColor};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.accentColor + '30'};
  }
`

const buttonStyles = `
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.theme.buttonBackground || props.theme.accentColor + '20'};
  color: ${props => props.theme.buttonText || props.theme.accentColor};

  &:hover {
    background: ${props => props.theme.buttonHoverBackground || props.theme.accentColor + '30'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const ReadMoreButton = styled.button`
  ${buttonStyles}
`

export const BackButton = styled(motion.button)`
  ${buttonStyles}
  margin-bottom: 2rem;
  font-size: 1rem;
` 