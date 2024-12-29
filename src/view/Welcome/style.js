import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
`

export const WelcomeContent = styled.div`
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(120deg, #1890ff, #722ed1);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    text-shadow: 0px 2px 8px rgba(24, 144, 255, 0.1);
    font-family: 'Comic Sans MS', 'Pacifico', sans-serif;
    font-weight: bold;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  }
  
  p {
    font-size: 1.8rem;
    color: ${props => props.theme.text.secondary};
    font-weight: 300;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .typed-cursor {
    font-size: 2rem;
    color: ${props => props.theme.primary};
    opacity: 1;
    animation: blink 1s infinite;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
` 