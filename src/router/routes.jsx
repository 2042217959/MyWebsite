import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import About from '../view/About'
import Projects from '../view/Projects'
import ProjectDetail from '../view/Projects/detail'
import Article from '../view/Projects/article'
import Knowledge from '../view/Knowledge'
import KnowledgeDetail from '../view/Knowledge/detail'
import Welcome from '../view/Welcome'
import Articles from '../view/Articles'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      <Route path="/knowledge" element={<Knowledge />} />
      <Route path="/knowledge/:id" element={<KnowledgeDetail />} />
    </Routes>
  )
}

export default AppRoutes 