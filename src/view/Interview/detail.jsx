import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { InterviewDetail, BackButton, DetailContent, DetailHeader, DetailSection, ContentSection } from './style'
import { FaArrowLeft, FaClock, FaTag, FaCheckCircle } from 'react-icons/fa'

const InterviewDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // 模拟面试题详情数据
  const interviewDetail = {
    title: "作用域和闭包",
    category: "JavaScript基础",
    status: "completed",
    description: "JavaScript 中作用域和闭包的深入理解",
    content: `
      ## 作用域
      作用域是指程序中定义变量的区域，它决定了变量的可访问性。JavaScript 中主要有以下几种作用域：
      - 全局作用域
      - 函数作用域
      - 块级作用域（ES6引入）

      ## 闭包
      闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的常见方式是在一个函数内部创建另一个函数。

      ## 实际应用
      1. 数据私有化
      2. 函数工厂
      3. 模块化开发

      ## 注意事项
      - 内存泄漏问题
      - 性能考虑
      - 适用场景
    `,
    updateTime: "2024-03-15",
    studyTime: "45 分钟",
    difficulty: "中等",
    tags: ["JavaScript", "作用域", "闭包"],
    relatedTopics: ["原型链", "this指向", "变量提升"]
  }

  return (
    <InterviewDetail>
      <BackButton onClick={() => navigate('/interview')}>
        <FaArrowLeft /> 返回面试题列表
      </BackButton>
      
      <DetailContent>
        <DetailHeader>
          <div className="category-row">
            <div className="category">{interviewDetail.category}</div>
            <div className={`status ${interviewDetail.status}`}>
              <FaCheckCircle /> 已掌握
            </div>
          </div>
          <h1>{interviewDetail.title}</h1>
          <div className="meta">
            <span><FaClock /> 更新时间: {interviewDetail.updateTime}</span>
            <span><FaClock /> 学习时长: {interviewDetail.studyTime}</span>
            <span className="difficulty">难度: {interviewDetail.difficulty}</span>
          </div>
          <div className="tags">
            {interviewDetail.tags.map((tag, index) => (
              <span key={index} className="tag">
                <FaTag /> {tag}
              </span>
            ))}
          </div>
        </DetailHeader>

        <DetailSection>
          <h2>知识点概述</h2>
          <p>{interviewDetail.description}</p>
        </DetailSection>

        <ContentSection>
          {interviewDetail.content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
              return <h2 key={index}>{line.replace('## ', '')}</h2>
            } else if (line.startsWith('- ')) {
              return <li key={index}>{line.replace('- ', '')}</li>
            } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
              return <li key={index} className="numbered">{line.replace(/^\d+\. /, '')}</li>
            } else if (line.trim()) {
              return <p key={index}>{line}</p>
            }
            return null
          })}
        </ContentSection>

        <DetailSection>
          <h2>相关知识点</h2>
          <div className="related-topics">
            {interviewDetail.relatedTopics.map((topic, index) => (
              <button key={index} className="topic-button" onClick={() => navigate(`/interview/${index + 1}`)}>
                {topic}
              </button>
            ))}
          </div>
        </DetailSection>
      </DetailContent>
    </InterviewDetail>
  )
}

export default InterviewDetailPage 