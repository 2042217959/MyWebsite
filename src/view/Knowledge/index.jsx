import React from 'react'
import { KnowledgeWrapper, CategorySection, KnowledgeGrid, KnowledgeCard } from './style'
import { useNavigate } from 'react-router-dom'

const Knowledge = () => {
  const navigate = useNavigate()
  
  // 示例数据
  const categories = [
    {
      id: 1,
      title: "前端开发",
      items: [
        { id: 1, title: "React 基础知识", desc: "React 核心概念和基本用法" },
        { id: 2, title: "Vue 开发技巧", desc: "Vue 项目开发中的最佳实践" }
      ]
    },
    {
      id: 2,
      title: "后端开发",
      items: [
        { id: 3, title: "Node.js 实践", desc: "Node.js 服务端开发经验" },
        { id: 4, title: "数据库优化", desc: "数据库性能调优技巧" }
      ]
    }
  ]

  const handleCardClick = (id) => {
    navigate(`/knowledge/${id}`)
  }

  return (
    <KnowledgeWrapper>
      <h1>知识库</h1>
      {categories.map(category => (
        <CategorySection key={category.id}>
          <h2>{category.title}</h2>
          <KnowledgeGrid>
            {category.items.map(item => (
              <KnowledgeCard 
                key={item.id}
                onClick={() => handleCardClick(item.id)}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-footer">
                  <span className="date">更新时间: 2024-01-01</span>
                  <button className="read-more">阅读更多</button>
                </div>
              </KnowledgeCard>
            ))}
          </KnowledgeGrid>
        </CategorySection>
      ))}
    </KnowledgeWrapper>
  )
}

export default Knowledge 