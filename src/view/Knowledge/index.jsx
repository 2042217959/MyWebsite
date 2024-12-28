import React from 'react'
import { KnowledgeWrapper, CategorySection, KnowledgeGrid, KnowledgeCard } from './style'
import { useNavigate } from 'react-router-dom'
import { knowledgeData } from '../../data/knowledge'

const Knowledge = () => {
  const navigate = useNavigate()
  
  // 将知识点数据按类别分组
  const groupedKnowledge = Object.entries(knowledgeData).reduce((acc, [id, item]) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ id, ...item });
    return acc;
  }, {});

  const handleCardClick = (id) => {
    navigate(`/knowledge/${id}`)
  }

  return (
    <KnowledgeWrapper>
      <h1>知识库</h1>
      {Object.entries(groupedKnowledge).map(([category, items], categoryIndex) => (
        <CategorySection key={category} index={categoryIndex}>
          <h2>{category}</h2>
          <KnowledgeGrid>
            {items.map((item, itemIndex) => (
              <KnowledgeCard 
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                index={itemIndex}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-footer">
                  <span className="date">更新时间: {item.updateTime}</span>
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