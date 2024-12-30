import React from 'react'
import { ArticlesWrapper, ArticleGrid, ArticleCard } from './style'
import { useNavigate } from 'react-router-dom'
import { articles } from '../../data/articles'

const Articles = () => {
  const navigate = useNavigate()

  const handleArticleClick = (id) => {
    navigate(`/articles/${id}`)
  }

  return (
    <ArticlesWrapper>
      <h1>文章列表</h1>
      <ArticleGrid>
        {articles.map((article) => (
          <ArticleCard 
            key={article.id}
            onClick={() => handleArticleClick(article.id)}
          >
            <h3>{article.title}</h3>
            <div className="tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="date">发布时间: {article.date}</div>
            <button className="read-more">阅读更多</button>
          </ArticleCard>
        ))}
      </ArticleGrid>
    </ArticlesWrapper>
  )
}

export default Articles 