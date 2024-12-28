import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Layout, Menu, Typography, Tag, Space, Card, theme } from 'antd'
import { FaArrowLeft, FaClock, FaTag, FaBook, FaBars, FaTimes } from 'react-icons/fa'
import { knowledgeData } from '../../data/knowledge'
import ReactMarkdown from 'react-markdown'
import { KnowledgeDetail, BackButton, DetailHeader, StyledCard, MenuButton, CloseButton } from './style'

const { Title, Text } = Typography

const KnowledgeDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('introduction')
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const { token } = theme.useToken()

  // 获取对应ID的知识点数据
  const knowledgeDetail = knowledgeData[id]

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
  }

  // 获取内容：支持新旧两种格式
  const getContent = () => {
    if (knowledgeDetail.menuItems) {
      return knowledgeDetail.menuItems.find(item => item.key === selectedKey)?.content || ''
    }
    return knowledgeDetail.content || ''
  }

  const currentContent = getContent()

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <KnowledgeDetail>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <BackButton onClick={() => navigate('/knowledge')}>
          <FaArrowLeft /> 返回知识库
        </BackButton>
        {knowledgeDetail.menuItems && (
          <MenuButton onClick={toggleSidebar}>
            <FaBars />
          </MenuButton>
        )}
      </div>
      
      <StyledCard>
        <DetailHeader>
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <div className="category">
              <FaBook style={{ marginRight: '8px' }} />
              {knowledgeDetail.category}
            </div>
            <Title level={1} style={{ margin: 0 }}>{knowledgeDetail.title}</Title>
            <Space size={32} wrap>
              <Space>
                <FaClock style={{ opacity: 0.6 }} /> 
                <Text type="secondary">更新时间: {knowledgeDetail.updateTime}</Text>
              </Space>
              <Space>
                <FaClock style={{ opacity: 0.6 }} /> 
                <Text type="secondary">阅读时间: {knowledgeDetail.readTime}</Text>
              </Space>
            </Space>
            <div className="tags">
              {knowledgeDetail.tags.map((tag, index) => (
                <Tag 
                  key={index} 
                  icon={<FaTag />}
                  color="processing"
                  style={{ 
                    padding: '4px 12px', 
                    borderRadius: '16px',
                    background: token.colorPrimaryBg,
                    border: `1px solid ${token.colorPrimaryBorder}`,
                    color: token.colorPrimary
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </Space>
        </DetailHeader>
      </StyledCard>

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
              position: 'fixed',
              top: '100px',
              left: '24px',
              zIndex: 1000
            }}
          >
            <CloseButton onClick={toggleSidebar}>
              <FaTimes />
            </CloseButton>
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
                onClick: () => {
                  handleMenuClick(item.key)
                  if (window.innerWidth <= 768) {
                    setIsSidebarVisible(false)
                  }
                }
              }))}
            />
          </StyledCard>
        )}
        <StyledCard
          style={{
            flex: 1,
            marginLeft: window.innerWidth > 768 && knowledgeDetail.menuItems ? '304px' : '0'
          }}
        >
          <div className="markdown-content">
            <ReactMarkdown>{currentContent}</ReactMarkdown>
          </div>
        </StyledCard>
      </div>
    </KnowledgeDetail>
  )
}

export default KnowledgeDetailPage 