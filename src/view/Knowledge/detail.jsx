import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Layout, Menu, Typography, Tag, Space, Card } from 'antd'
import { FaArrowLeft, FaClock, FaTag, FaBook } from 'react-icons/fa'
import { knowledgeData } from '../../data/knowledge'
import ReactMarkdown from 'react-markdown'
import { KnowledgeDetail, BackButton, DetailHeader } from './style'

const { Content, Sider } = Layout
const { Title, Text } = Typography

const KnowledgeDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('introduction')

  // 获取对应ID的知识点数据
  const knowledgeDetail = knowledgeData[id]

  // 如果找不到对应的知识点，显示错误信息
  if (!knowledgeDetail) {
    return (
      <KnowledgeDetail>
        <BackButton onClick={() => navigate('/knowledge')}>
          <FaArrowLeft /> 返回知识库
        </BackButton>
        <Card>
          <Title level={1}>未找到知识点</Title>
          <Text>抱歉，未找到ID为 {id} 的知识点内容</Text>
        </Card>
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

  return (
    <KnowledgeDetail>
      <BackButton onClick={() => navigate('/knowledge')}>
        <FaArrowLeft /> 返回知识库
      </BackButton>
      
      <Card>
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
                  style={{ padding: '4px 12px', borderRadius: '16px' }}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </Space>
        </DetailHeader>
      </Card>

      <Layout 
        style={{ 
          background: 'transparent',
          marginTop: '24px',
          height: 'calc(100vh - 300px)'
        }}
      >
        {knowledgeDetail.menuItems ? (
          <Sider
            width={280}
            style={{
              background: '#fff',
              borderRadius: '8px',
              marginRight: '24px',
              overflow: 'auto'
            }}
          >
            <div style={{ padding: '16px 0' }}>
              <Title level={4} style={{ padding: '0 24px', margin: '0 0 16px 0' }}>
                目录
              </Title>
              <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                style={{ 
                  height: '100%',
                  border: 'none'
                }}
                items={knowledgeDetail.menuItems.map(item => ({
                  key: item.key,
                  label: item.label,
                  onClick: () => handleMenuClick(item.key)
                }))}
              />
            </div>
          </Sider>
        ) : null}
        <Content
          style={{
            background: '#fff',
            padding: '32px 40px',
            borderRadius: '8px',
            overflow: 'auto'
          }}
        >
          <div className="markdown-content">
            <ReactMarkdown>{currentContent}</ReactMarkdown>
          </div>
        </Content>
      </Layout>
    </KnowledgeDetail>
  )
}

export default KnowledgeDetailPage 