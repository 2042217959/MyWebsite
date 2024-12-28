import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FaArrowLeft, FaCalendar } from 'react-icons/fa'
import { 
  ProjectDetail, 
  BackButton, 
  DetailContent, 
  DetailHeader,
  MarkdownWrapper
} from './style'
import { articles } from '../../data/articles'

const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <ProjectDetail>
        <BackButton onClick={() => navigate('/projects')}>
          <FaArrowLeft /> 返回项目列表
        </BackButton>
        <h1>文章不存在</h1>
      </ProjectDetail>
    )
  }

  return (
    <ProjectDetail>
      <BackButton onClick={() => navigate('/projects')}>
        <FaArrowLeft /> 返回项目列表
      </BackButton>

      <DetailHeader>
        <div className="category">开发笔记</div>
        <h1>{article.title}</h1>
        <div className="meta">
          <div className="date">
            <FaCalendar />
            {article.date}
          </div>
          <div className="tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </DetailHeader>

      <DetailContent>
        <MarkdownWrapper>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <pre className={className} {...props}>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {article.content}
          </ReactMarkdown>
        </MarkdownWrapper>
      </DetailContent>
    </ProjectDetail>
  )
}

export default ArticlePage 