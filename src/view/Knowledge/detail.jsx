import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Menu, Typography } from 'antd'
import { FaArrowLeft, FaBars, FaTimes } from 'react-icons/fa'
import { knowledgeData } from '../../data/knowledge'
import ReactMarkdown from 'react-markdown'
import { KnowledgeDetail, BackButton, StyledCard, MenuButton, CloseButton } from './style'

const { Title, Text } = Typography

const KnowledgeDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState(() => {
    const detail = knowledgeData[id]
    return detail?.menuItems?.[0]?.key || 'introduction'
  })
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth > 768)
  const [markdownContent, setMarkdownContent] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // 获取对应ID的知识点数据
  const knowledgeDetail = knowledgeData[id]

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsSidebarVisible(true)
      } else {
        setIsSidebarVisible(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 加载markdown文件内容
  const loadMarkdownContent = async (filePath) => {
    try {
      // 使用相对路径加载markdown文件
      const response = await fetch(process.env.PUBLIC_URL + filePath)
      if (!response.ok) {
        throw new Error('Failed to load markdown file')
      }
      const text = await response.text()
      setMarkdownContent(text)
    } catch (error) {
      console.error('Error loading markdown file:', error)
      setMarkdownContent('Error loading content')
    }
  }

  useEffect(() => {
    if (knowledgeDetail) {
      if (knowledgeDetail.menuItems) {
        const currentItem = knowledgeDetail.menuItems.find(item => item.key === selectedKey)
        if (currentItem?.markdownPath) {
          loadMarkdownContent(currentItem.markdownPath)
        } else {
          setMarkdownContent(currentItem?.content || '')
        }
      } else if (knowledgeDetail.markdownPath) {
        loadMarkdownContent(knowledgeDetail.markdownPath)
      } else {
        setMarkdownContent(knowledgeDetail.content || '')
      }
    }
  }, [knowledgeDetail, selectedKey])

  // 如果找不到对应的知识点，显示错误信息
  if (!knowledgeDetail) {
    return (
      <KnowledgeDetail>
        <BackButton onClick={() => navigate('/knowledge')}>
          <FaArrowLeft /> 返回知识库
        </BackButton>
        <StyledCard>
          <Title level={1}>未找到知识点</Title>
          <Text>抱歉，未找到ID为 {id} 的知识点内容</Text>
        </StyledCard>
      </KnowledgeDetail>
    )
  }

  const handleMenuClick = (key) => {
    setSelectedKey(key)
    if (isMobile) {
      setIsSidebarVisible(false)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <KnowledgeDetail>
      <div className="KnowledgeDetailBtns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <BackButton onClick={() => navigate('/knowledge')}>
          <FaArrowLeft /> 返回知识库
        </BackButton>
        {knowledgeDetail.menuItems && isMobile && (
          <MenuButton onClick={toggleSidebar}>
            <FaBars />
          </MenuButton>
        )}
      </div>

      <div style={{
        display: 'flex',
        gap: '24px',
        marginTop: '24px',
        position: 'relative'
      }}>
        {knowledgeDetail.menuItems && (
          <StyledCard
            className="sidebar"
            style={{
              width: '280px',
              height: 'fit-content',
              flexShrink: 0,
              visibility: isSidebarVisible ? 'visible' : 'hidden',
              opacity: isSidebarVisible ? 1 : 0,
              transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'all 0.3s ease',
              position: isMobile ? 'fixed' : 'sticky',
              top: isMobile ? '100px' : '100px',
              left: isMobile ? '24px' : 'auto',
              zIndex: isMobile ? 1000 : 1
            }}
          >
            {isMobile && (
              <CloseButton onClick={toggleSidebar}>
                <FaTimes />
              </CloseButton>
            )}
            <Title level={4} style={{ margin: '0 0 16px 0' }}>
              目录
            </Title>
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              style={{
                border: 'none',
                background: 'transparent'
              }}
              items={knowledgeDetail.menuItems.map(item => ({
                key: item.key,
                label: item.label,
                onClick: () => handleMenuClick(item.key)
              }))}
            />
          </StyledCard>
        )}
        <StyledCard
          style={{
            flex: 1,
            marginLeft: !isMobile && knowledgeDetail.menuItems && isSidebarVisible ? '0px' : '0'
          }}
        >
          <div className="markdown-content">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
        </StyledCard>
      </div>
    </KnowledgeDetail>
  )
}

export default KnowledgeDetailPage 