import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactTyped } from 'react-typed'
import { motion, AnimatePresence } from 'framer-motion'
import { WelcomeWrapper, WelcomeContent } from './style'

const Welcome = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 4500)

    return () => clearTimeout(timer)
  }, [navigate])

  const containerVariants = {
    initial: { opacity: 1 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren"
      }
    }
  }

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      <WelcomeWrapper
        as={motion.div}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <WelcomeContent
          as={motion.div}
          variants={contentVariants}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1>
              <ReactTyped
                strings={['欢迎来到我的前端日记~']}
                typeSpeed={100}
                startDelay={800}
                showCursor
                cursorChar="|"
              />
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            <p>
              <ReactTyped
                strings={['共同学习，一起进步']}
                typeSpeed={80}
                startDelay={2500}
                showCursor
                cursorChar="|"
              />
            </p>
          </motion.div>
        </WelcomeContent>
      </WelcomeWrapper>
    </AnimatePresence>
  )
}

export default Welcome
