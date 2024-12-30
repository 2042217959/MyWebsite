import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArticlesWrapper, 
  ArticleList, 
  ArticleItem, 
  ArticleTitle, 
  ArticleDescription, 
  ArticleDate,
  TagsContainer,
  Tag,
  ArticleFooter,
  ReadMoreButton
} from './style'
import { articles } from '../../data/articles'

const Articles = memo(() => {
  const navigate = useNavigate()

  return (
    <ArticlesWrapper>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        我的文章
      </motion.h1>
      <ArticleList>
        {articles.map((article, index) => (
          <ArticleItem
            key={article.id}
            index={index}
            onClick={() => navigate(`/articles/${article.id}`)}
          >
            <ArticleTitle>{article.title}</ArticleTitle>
            <TagsContainer>
              {article.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsContainer>
            <ArticleDescription>{article.description}</ArticleDescription>
            <ArticleFooter>
              <ArticleDate>{article.date}</ArticleDate>
              <ReadMoreButton>阅读更多</ReadMoreButton>
            </ArticleFooter>
          </ArticleItem>
        ))}
      </ArticleList>
    </ArticlesWrapper>
  )
})

export default Articles 