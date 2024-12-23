import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { ToggleButton } from './style'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ToggleButton onClick={toggleTheme}>
      <motion.div
        animate={{
          rotate: isDark ? 0 : 360,
        }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </ToggleButton>
  )
}

export default ThemeToggle 