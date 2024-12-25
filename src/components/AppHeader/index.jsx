import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppHeaderWrapper, HeaderContent, Logo, RightSection, Nav, NavItem } from './style'
import ThemeToggle from '../ThemeToggle'

const AppHeader = memo(() => {
  // 导航项目的动画配置
  const navItemVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      y: 0
    }
  }

  // Logo的动画配置
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  // 导航栏的动画配置
  const navVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <AppHeaderWrapper>
      <HeaderContent>
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <Logo>
            <NavLink to="/home">魔芋小狗前端日记</NavLink>
          </Logo>
        </motion.div>

        <RightSection>
          <Nav
            as={motion.nav}
            variants={navVariants}
            initial="initial"
            animate="animate"
          >
            {[
              { to: "/home", text: "首页" },
              { to: "/about", text: "关于我" },
              { to: "/projects", text: "项目" },
              { to: "/knowledge", text: "知识库" }
            ].map((item) => (
              <NavItem
                key={item.to}
                as={motion.div}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <NavLink to={item.to}>
                  {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <ThemeToggle />
        </RightSection>
      </HeaderContent>
    </AppHeaderWrapper>
  )
})

export default AppHeader
