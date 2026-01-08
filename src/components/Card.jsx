import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = '', 
  hoverable = true,
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverable ? { y: -10, boxShadow: '0 20px 25px rgba(44, 90, 160, 0.15)' } : {}}
      className={`bg-white rounded-2xl shadow-card transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
