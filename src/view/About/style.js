import styled from 'styled-components'

export const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    color: #333;
    font-size: 2.5rem;
  }

  .profile-section {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .profile-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .profile-content {
    flex: 1;
  }

  .section-title {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #3498db;
    padding-bottom: 5px;
    display: inline-block;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .skills-section {
    margin-top: 30px;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
  }

  .skill-tag {
    background-color: #3498db;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  .contact-info {
    margin-top: 30px;
    text-align: center;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;
  }

  .social-link {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

