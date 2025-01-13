import React, { memo, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { articles } from '../../data/articles'
import { BackButton } from './style'

const ArticleDetailWrapper = styled.div`
  max-width: 100%;
  padding: 2rem;
  min-height: calc(100vh - 60px);
  background: ${props => props.theme.background};

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .markdown-content {
    color: ${props => props.theme.textColor};
    line-height: 1.8;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${props => props.theme.textColor};
      margin: 2rem 0 1rem;
      font-weight: 600;
    }

    h1 { 
      font-size: 2.2rem; 
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    h2 { 
      font-size: 1.8rem; 
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    h3 { 
      font-size: 1.5rem; 
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }

    p {
      margin-bottom: 1.5rem;
    }

    code {
      background: ${props => props.theme.codeBackground || '#2d2d2d'};
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 0.9em;
      font-family: 'Fira Code', monospace;
      word-break: break-word;
      white-space: pre-wrap;
    }

    pre {
      margin: 1.5rem 0;
      border-radius: 8px;
      overflow-x: auto;
      
      code {
        white-space: pre;
        word-break: normal;
        overflow-wrap: normal;
      }
    }

    ul, ol {
      margin: 1rem 0;
      padding-left: 2rem;
      
      @media (max-width: 768px) {
        padding-left: 1.5rem;
      }
    }

    li {
      margin: 0.5rem 0;
    }

    blockquote {
      border-left: 4px solid ${props => props.theme.accentColor};
      padding-left: 1rem;
      margin: 1.5rem 0;
      color: ${props => props.theme.secondaryText};
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 1.5rem 0;
    }

    a {
      color: ${props => props.theme.accentColor};
      text-decoration: none;
      word-break: break-word;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const ArticleTitle = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const ArticleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.secondaryText};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.span`
  background: ${props => props.theme.tagBackground || props.theme.accentColor + '20'};
  color: ${props => props.theme.accentColor};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`

const ArticleDetail = memo(() => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    const foundArticle = articles.find(a => a.id === parseInt(id))
    if (foundArticle) {
      setArticle(foundArticle)
      // 加载 Markdown 文件
      fetch(foundArticle.markdownFile)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load article content');
          }
          return response.text();
        })
        .then(text => setMarkdown(text))
        .catch(error => {
          console.error('Error loading markdown:', error);
          setMarkdown('# 文章加载失败\n\n很抱歉，文章内容加载失败。请稍后再试。');
        });
    } else {
      navigate('/articles');
    }
  }, [id, navigate]);

  if (!article) return null

  return (
    <ArticleDetailWrapper>
      <BackButton onClick={() => navigate('/articles')}>
        返回文章列表
      </BackButton>
      <div>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleInfo>
          <span>发布时间：{article.date}</span>
          <TagsContainer>
            {article.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </ArticleInfo>
        <div className="markdown-content">
          <ReactMarkdown
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </ArticleDetailWrapper>
  )
})

export default ArticleDetail 