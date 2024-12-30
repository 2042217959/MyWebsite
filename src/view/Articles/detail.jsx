import React, { memo, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { articles } from '../../data/articles'
import { BackButton } from './style'

const ArticleDetailWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 60px);
  background: ${props => props.theme.background};

  .markdown-content {
    color: ${props => props.theme.textColor};
    line-height: 1.8;
    font-size: 1.1rem;

    h1, h2, h3, h4, h5, h6 {
      color: ${props => props.theme.textColor};
      margin: 2rem 0 1rem;
      font-weight: 600;
    }

    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.5rem; }

    p {
      margin-bottom: 1.5rem;
    }

    code {
      background: ${props => props.theme.codeBackground || '#2d2d2d'};
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 0.9em;
      font-family: 'Fira Code', monospace;
    }

    pre {
      margin: 1.5rem 0;
      border-radius: 8px;
      overflow: hidden;
    }

    ul, ol {
      margin: 1rem 0;
      padding-left: 2rem;
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
      border-radius: 8px;
      margin: 1.5rem 0;
    }

    a {
      color: ${props => props.theme.accentColor};
      text-decoration: none;
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
`

const ArticleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.secondaryText};
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
        .then(response => response.text())
        .then(text => setMarkdown(text))
        .catch(error => console.error('Error loading markdown:', error))
    } else {
      navigate('/articles')
    }
  }, [id, navigate])

  if (!article) return null

  return (
    <ArticleDetailWrapper>
      <BackButton
        onClick={() => navigate('/articles')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        返回文章列表
      </BackButton>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </ArticleDetailWrapper>
  )
})

export default ArticleDetail 