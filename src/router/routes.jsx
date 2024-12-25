import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import About from '../view/About'
import Projects from '../view/Projects'
import ProjectDetail from '../view/Projects/detail'
import Knowledge from '../view/Knowledge'
import KnowledgeDetail from '../view/Knowledge/detail'

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/knowledge" element={<Knowledge />} />
      <Route path="/knowledge/:id" element={<KnowledgeDetail />} />
    </Routes>
  )
}

export default RouterConfig 