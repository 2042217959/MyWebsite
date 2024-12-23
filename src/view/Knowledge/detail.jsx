import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { KnowledgeDetail, BackButton, DetailContent, DetailHeader, DetailSection, ContentSection } from './style'
import { FaArrowLeft, FaClock, FaTag } from 'react-icons/fa'

const KnowledgeDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // 模拟知识点详情数据
  const knowledgeDetail = {
    title: "React 基础知识",
    category: "前端开发",
    description: "React 的核心概念和基本用法详解",
    content: `
      ## React 简介
      React 是一个用于构建用户界面的 JavaScript 库。它由 Facebook 开发和维护，主要用于构建单页应用程序。

      ## 核心特性
      1. 组件化开发
      2. 虚拟 DOM
      3. 单向数据流
      4. JSX 语法

      ## 使用场景
      - Web 应用开发
      - 移动应用开发
      - 服务器渲染
    `,
    updateTime: "2024-03-15",
    readTime: "10 分钟",
    tags: ["React", "前端", "JavaScript"]
  }

  return (
    <KnowledgeDetail>
      <BackButton onClick={() => navigate('/knowledge')}>
        <FaArrowLeft /> 返回知识库
      </BackButton>
      
      <DetailContent>
        <DetailHeader>
          <div className="category">{knowledgeDetail.category}</div>
          <h1>{knowledgeDetail.title}</h1>
          <div className="meta">
            <span><FaClock /> 更新时间: {knowledgeDetail.updateTime}</span>
            <span><FaClock /> 阅读时间: {knowledgeDetail.readTime}</span>
          </div>
          <div className="tags">
            {knowledgeDetail.tags.map((tag, index) => (
              <span key={index} className="tag">
                <FaTag /> {tag}
              </span>
            ))}
          </div>
        </DetailHeader>

        <DetailSection>
          <h2>概述</h2>
          <p>{knowledgeDetail.description}</p>
        </DetailSection>

        <ContentSection>
          {knowledgeDetail.content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
              return <h2 key={index}>{line.replace('## ', '')}</h2>
            } else if (line.startsWith('- ')) {
              return <li key={index}>{line.replace('- ', '')}</li>
            } else if (line.trim()) {
              return <p key={index}>{line}</p>
            }
            return null
          })}
        </ContentSection>
      </DetailContent>
    </KnowledgeDetail>
  )
}

export default KnowledgeDetailPage 