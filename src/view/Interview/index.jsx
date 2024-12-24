import React from 'react'
import { InterviewWrapper, CategorySection, InterviewList, InterviewItem } from './style'
import { useNavigate } from 'react-router-dom'

const Interview = () => {
  const navigate = useNavigate()

  const interviewTopics = [
    {
      id: 1,
      category: "JavaScript基础",
      items: [
        { id: 1, title: "作用域和闭包", status: "completed" },
        { id: 2, title: "原型和继承", status: "in-progress" },
        { id: 3, title: "异步编程", status: "planned" }
      ]
    },
    {
      id: 2,
      category: "React相关",
      items: [
        { id: 4, title: "生命周期", status: "completed" },
        { id: 5, title: "Hooks使用", status: "in-progress" },
        { id: 6, title: "状态管理", status: "planned" }
      ]
    },
    {
      id: 3,
      category: "计算机网络",
      items: [
        { id: 7, title: "HTTP协议", status: "in-progress" },
        { id: 8, title: "浏览器缓存", status: "planned" },
        { id: 9, title: "跨域解决方案", status: "planned" }
      ]
    }
  ]

  const handleItemClick = (id) => {
    navigate(`/interview/${id}`)
  }

  return (
    <InterviewWrapper>
      <h1>面试准备清单</h1>
      {interviewTopics.map((topic, topicIndex) => (
        <CategorySection key={topic.id} index={topicIndex}>
          <h2>{topic.category}</h2>
          <InterviewList>
            {topic.items.map((item, itemIndex) => (
              <InterviewItem 
                key={item.id} 
                status={item.status}
                onClick={() => handleItemClick(item.id)}
                index={itemIndex + (topicIndex * topic.items.length)}
              >
                <span className="status-dot"></span>
                <span className="title">{item.title}</span>
                <span className="status-text">
                  {item.status === 'completed' && '已掌握'}
                  {item.status === 'in-progress' && '学习中'}
                  {item.status === 'planned' && '待学习'}
                </span>
              </InterviewItem>
            ))}
          </InterviewList>
        </CategorySection>
      ))}
    </InterviewWrapper>
  )
}

export default Interview 