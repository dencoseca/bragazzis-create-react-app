import React from 'react'
import { motion } from 'framer-motion'

// Animations
import ease from '../styles/animations/ease'

// =========================
// Motion component configs
// =========================
const titleVariants = {
  initial: {
    opacity: 0,
    y: 48
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: ease.smooth
    }
  },
  exit: {
    opacity: 0,
    y: -48,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: ease.smooth
    }
  }
}

const contentVariants = {
  initial: {
    opacity: 0,
    y: 48
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: ease.smooth
    }
  },
  exit: {
    opacity: 0,
    y: -48,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: ease.smooth
    }
  },
  transition: {
    duration: 0.4,
    delay: 0.2,
    ease: ease.smooth
  }
}

function Page({ title, children }) {
  return (
    <>
      <div className="page">
        <div className="container">
          <motion.div
            className="page__title-wrapper"
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="page__title">{title}</h1>
            <div className="page__title-underline"></div>
          </motion.div>
        </div>
        <motion.div
          className="page__content"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}

export default Page
